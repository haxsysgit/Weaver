(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const gT="modulepreload",vT=function(a){return"/"+a},mx={},GS=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");o=m(n.map(p=>{if(p=vT(p),p in mx)return;mx[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":gT,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,T)=>{g.addEventListener("load",S),g.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function _T(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ih={exports:{}},bl={};var gx;function xT(){if(gx)return bl;gx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return bl.Fragment=e,bl.jsx=n,bl.jsxs=n,bl}var vx;function yT(){return vx||(vx=1,Ih.exports=xT()),Ih.exports}var M=yT(),Fh={exports:{}},pt={};var _x;function ST(){if(_x)return pt;_x=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,b={};function x(O,Z,ne){this.props=O,this.context=Z,this.refs=b,this.updater=ne||T}x.prototype.isReactComponent={},x.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=x.prototype;function F(O,Z,ne){this.props=O,this.context=Z,this.refs=b,this.updater=ne||T}var A=F.prototype=new I;A.constructor=F,D(A,x.prototype),A.isPureReactComponent=!0;var U=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function z(O,Z,ne){var be=ne.ref;return{$$typeof:a,type:O,key:Z,ref:be!==void 0?be:null,props:ne}}function k(O,Z){return z(O.type,Z,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function K(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ne){return Z[ne]})}var he=/\/+/g;function me(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):Z.toString(36)}function ee(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(L,L):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,Z,ne,be,J){var X=typeof O;(X==="undefined"||X==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(X){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case a:case e:ce=!0;break;case _:return ce=O._init,N(ce(O._payload),Z,ne,be,J)}}if(ce)return J=J(O),ce=be===""?"."+me(O,0):be,U(J)?(ne="",ce!=null&&(ne=ce.replace(he,"$&/")+"/"),N(J,Z,ne,"",function(ot){return ot})):J!=null&&(G(J)&&(J=k(J,ne+(J.key==null||O&&O.key===J.key?"":(""+J.key).replace(he,"$&/")+"/")+ce)),Z.push(J)),1;ce=0;var ye=be===""?".":be+":";if(U(O))for(var Pe=0;Pe<O.length;Pe++)be=O[Pe],X=ye+me(be,Pe),ce+=N(be,Z,ne,X,J);else if(Pe=S(O),typeof Pe=="function")for(O=Pe.call(O),Pe=0;!(be=O.next()).done;)be=be.value,X=ye+me(be,Pe++),ce+=N(be,Z,ne,X,J);else if(X==="object"){if(typeof O.then=="function")return N(ee(O),Z,ne,be,J);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(O,Z,ne){if(O==null)return O;var be=[],J=0;return N(O,be,"","",function(X){return Z.call(ne,X,J++)}),be}function te(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=ne)},function(ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=ne)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Te={map:H,forEach:function(O,Z,ne){H(O,function(){Z.apply(this,arguments)},ne)},count:function(O){var Z=0;return H(O,function(){Z++}),Z},toArray:function(O){return H(O,function(Z){return Z})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return pt.Activity=v,pt.Children=Te,pt.Component=x,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=F,pt.StrictMode=r,pt.Suspense=m,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,pt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},pt.cache=function(O){return function(){return O.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(O,Z,ne){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var be=D({},O.props),J=O.key;if(Z!=null)for(X in Z.key!==void 0&&(J=""+Z.key),Z)!w.call(Z,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&Z.ref===void 0||(be[X]=Z[X]);var X=arguments.length-2;if(X===1)be.children=ne;else if(1<X){for(var ce=Array(X),ye=0;ye<X;ye++)ce[ye]=arguments[ye+2];be.children=ce}return z(O.type,J,be)},pt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},pt.createElement=function(O,Z,ne){var be,J={},X=null;if(Z!=null)for(be in Z.key!==void 0&&(X=""+Z.key),Z)w.call(Z,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(J[be]=Z[be]);var ce=arguments.length-2;if(ce===1)J.children=ne;else if(1<ce){for(var ye=Array(ce),Pe=0;Pe<ce;Pe++)ye[Pe]=arguments[Pe+2];J.children=ye}if(O&&O.defaultProps)for(be in ce=O.defaultProps,ce)J[be]===void 0&&(J[be]=ce[be]);return z(O,X,J)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:h,render:O}},pt.isValidElement=G,pt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:te}},pt.memo=function(O,Z){return{$$typeof:p,type:O,compare:Z===void 0?null:Z}},pt.startTransition=function(O){var Z=B.T,ne={};B.T=ne;try{var be=O(),J=B.S;J!==null&&J(ne,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(L,_e)}catch(X){_e(X)}finally{Z!==null&&ne.types!==null&&(Z.types=ne.types),B.T=Z}},pt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},pt.use=function(O){return B.H.use(O)},pt.useActionState=function(O,Z,ne){return B.H.useActionState(O,Z,ne)},pt.useCallback=function(O,Z){return B.H.useCallback(O,Z)},pt.useContext=function(O){return B.H.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O,Z){return B.H.useDeferredValue(O,Z)},pt.useEffect=function(O,Z){return B.H.useEffect(O,Z)},pt.useEffectEvent=function(O){return B.H.useEffectEvent(O)},pt.useId=function(){return B.H.useId()},pt.useImperativeHandle=function(O,Z,ne){return B.H.useImperativeHandle(O,Z,ne)},pt.useInsertionEffect=function(O,Z){return B.H.useInsertionEffect(O,Z)},pt.useLayoutEffect=function(O,Z){return B.H.useLayoutEffect(O,Z)},pt.useMemo=function(O,Z){return B.H.useMemo(O,Z)},pt.useOptimistic=function(O,Z){return B.H.useOptimistic(O,Z)},pt.useReducer=function(O,Z,ne){return B.H.useReducer(O,Z,ne)},pt.useRef=function(O){return B.H.useRef(O)},pt.useState=function(O){return B.H.useState(O)},pt.useSyncExternalStore=function(O,Z,ne){return B.H.useSyncExternalStore(O,Z,ne)},pt.useTransition=function(){return B.H.useTransition()},pt.version="19.2.8",pt}var xx;function ig(){return xx||(xx=1,Fh.exports=ST()),Fh.exports}var Re=ig();const ag=_T(Re);function Pp(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=Array(e);n<e;n++)r[n]=a[n];return r}function bT(a){if(Array.isArray(a))return a}function MT(a){if(Array.isArray(a))return Pp(a)}function ET(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function TT(a,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,kS(r.key),r)}}function AT(a,e,n){return e&&TT(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function Qu(a,e){var n=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!n){if(Array.isArray(a)||(n=rg(a))||e){n&&(a=n);var r=0,o=function(){};return{s:o,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(m){throw m},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,u=!0,h=!1;return{s:function(){n=n.call(a)},n:function(){var m=n.next();return u=m.done,m},e:function(m){h=!0,c=m},f:function(){try{u||n.return==null||n.return()}finally{if(h)throw c}}}}function lt(a,e,n){return(e=kS(e))in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function wT(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function RT(a,e){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var r,o,c,u,h=[],m=!0,p=!1;try{if(c=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(r=c.call(n)).done)&&(h.push(r.value),h.length!==e);m=!0);}catch(_){p=!0,o=_}finally{try{if(!m&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(p)throw o}}return h}}function CT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yx(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function De(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yx(Object(n),!0).forEach(function(r){lt(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):yx(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function Ef(a,e){return bT(a)||RT(a,e)||rg(a,e)||CT()}function ji(a){return MT(a)||wT(a)||rg(a)||DT()}function NT(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function kS(a){var e=NT(a,"string");return typeof e=="symbol"?e:e+""}function lf(a){"@babel/helpers - typeof";return lf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lf(a)}function rg(a,e){if(a){if(typeof a=="string")return Pp(a,e);var n={}.toString.call(a).slice(8,-1);return n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set"?Array.from(a):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pp(a,e):void 0}}var Sx=function(){},sg={},XS={},WS=null,jS={mark:Sx,measure:Sx};try{typeof window<"u"&&(sg=window),typeof document<"u"&&(XS=document),typeof MutationObserver<"u"&&(WS=MutationObserver),typeof performance<"u"&&(jS=performance)}catch{}var LT=sg.navigator||{},bx=LT.userAgent,Mx=bx===void 0?"":bx,Tr=sg,an=XS,Ex=WS,hu=jS;Tr.document;var ka=!!an.documentElement&&!!an.head&&typeof an.addEventListener=="function"&&typeof an.createElement=="function",qS=~Mx.indexOf("MSIE")||~Mx.indexOf("Trident/"),pu,UT=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,OT=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,YS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},PT={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},KS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],zn="classic",Yl="duotone",ZS="sharp",QS="sharp-duotone",$S="chisel",JS="etch",eb="graphite",tb="jelly",nb="jelly-duo",ib="jelly-fill",ab="mosaic",rb="notdog",sb="notdog-duo",ob="pixel",lb="slab",cb="slab-duo",ub="slab-press",fb="slab-press-duo",db="thumbprint",hb="utility",pb="utility-duo",mb="utility-fill",gb="vellum",vb="whiteboard",IT="Classic",FT="Duotone",zT="Sharp",BT="Sharp Duotone",VT="Chisel",HT="Etch",GT="Graphite",kT="Jelly",XT="Jelly Duo",WT="Jelly Fill",jT="Mosaic",qT="Notdog",YT="Notdog Duo",KT="Pixel",ZT="Slab",QT="Slab Duo",$T="Slab Press",JT="Slab Press Duo",eA="Thumbprint",tA="Utility",nA="Utility Duo",iA="Utility Fill",aA="Vellum",rA="Whiteboard",_b=[zn,Yl,ZS,QS,$S,JS,eb,tb,nb,ib,ab,rb,sb,ob,lb,cb,ub,fb,db,hb,pb,mb,gb,vb];pu={},lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(pu,zn,IT),Yl,FT),ZS,zT),QS,BT),$S,VT),JS,HT),eb,GT),tb,kT),nb,XT),ib,WT),lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(pu,ab,jT),rb,qT),sb,YT),ob,KT),lb,ZT),cb,QT),ub,$T),fb,JT),db,eA),hb,tA),lt(lt(lt(lt(pu,pb,nA),mb,iA),gb,aA),vb,rA);var sA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},oA={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},lA=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),cA={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},xb=["fak","fa-kit","fakd","fa-kit-duotone"],Tx={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},uA=["kit"],fA="kit",dA="kit-duotone",hA="Kit",pA="Kit Duotone";lt(lt({},fA,hA),dA,pA);var mA={kit:{"fa-kit":"fak"}},gA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},vA={kit:{fak:"fa-kit"}},Ax={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},mu,gu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_A=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],xA="classic",yA="duotone",SA="sharp",bA="sharp-duotone",MA="chisel",EA="etch",TA="graphite",AA="jelly",wA="jelly-duo",RA="jelly-fill",CA="mosaic",DA="notdog",NA="notdog-duo",LA="pixel",UA="slab",OA="slab-duo",PA="slab-press",IA="slab-press-duo",FA="thumbprint",zA="utility",BA="utility-duo",VA="utility-fill",HA="vellum",GA="whiteboard",kA="Classic",XA="Duotone",WA="Sharp",jA="Sharp Duotone",qA="Chisel",YA="Etch",KA="Graphite",ZA="Jelly",QA="Jelly Duo",$A="Jelly Fill",JA="Mosaic",e2="Notdog",t2="Notdog Duo",n2="Pixel",i2="Slab",a2="Slab Duo",r2="Slab Press",s2="Slab Press Duo",o2="Thumbprint",l2="Utility",c2="Utility Duo",u2="Utility Fill",f2="Vellum",d2="Whiteboard";mu={},lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(mu,xA,kA),yA,XA),SA,WA),bA,jA),MA,qA),EA,YA),TA,KA),AA,ZA),wA,QA),RA,$A),lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(mu,CA,JA),DA,e2),NA,t2),LA,n2),UA,i2),OA,a2),PA,r2),IA,s2),FA,o2),zA,l2),lt(lt(lt(lt(mu,BA,c2),VA,u2),HA,f2),GA,d2);var h2="kit",p2="kit-duotone",m2="Kit",g2="Kit Duotone";lt(lt({},h2,m2),p2,g2);var v2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},_2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ip={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},x2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],yb=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(_A,x2),y2=["solid","regular","light","thin","duotone","brands","semibold"],Sb=[1,2,3,4,5,6,7,8,9,10],S2=Sb.concat([11,12,13,14,15,16,17,18,19,20]),b2=["aw","fw","pull-left","pull-right"],M2=[].concat(ji(Object.keys(_2)),y2,b2,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",gu.GROUP,gu.SWAP_OPACITY,gu.PRIMARY,gu.SECONDARY]).concat(Sb.map(function(a){return"".concat(a,"x")})).concat(S2.map(function(a){return"w-".concat(a)})),E2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},za="___FONT_AWESOME___",Fp=16,bb="fa",Mb="svg-inline--fa",ds="data-fa-i2svg",zp="data-fa-pseudo-element",T2="data-fa-pseudo-element-pending",og="data-prefix",lg="data-icon",wx="fontawesome-i2svg",A2="async",w2=["HTML","HEAD","STYLE","SCRIPT"],Eb=["::before","::after",":before",":after"],Tb=(function(){try{return!0}catch{return!1}})();function Kl(a){return new Proxy(a,{get:function(n,r){return r in n?n[r]:n[zn]}})}var Ab=De({},YS);Ab[zn]=De(De(De(De({},{"fa-duotone":"duotone"}),YS[zn]),Tx.kit),Tx["kit-duotone"]);var R2=Kl(Ab),Bp=De({},cA);Bp[zn]=De(De(De(De({},{duotone:"fad"}),Bp[zn]),Ax.kit),Ax["kit-duotone"]);var Rx=Kl(Bp),Vp=De({},Ip);Vp[zn]=De(De({},Vp[zn]),vA.kit);var cg=Kl(Vp),Hp=De({},v2);Hp[zn]=De(De({},Hp[zn]),mA.kit);Kl(Hp);var C2=UT,wb="fa-layers-text",D2=OT,N2=De({},sA);Kl(N2);var L2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zh=PT,U2=[].concat(ji(uA),ji(M2)),zl=Tr.FontAwesomeConfig||{};function O2(a){var e=an.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function P2(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(an&&typeof an.querySelector=="function"){var I2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];I2.forEach(function(a){var e=Ef(a,2),n=e[0],r=e[1],o=P2(O2(n));o!=null&&(zl[r]=o)})}var Rb={styleDefault:"solid",familyDefault:zn,cssPrefix:bb,replacementClass:Mb,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zl.familyPrefix&&(zl.cssPrefix=zl.familyPrefix);var bo=De(De({},Rb),zl);bo.autoReplaceSvg||(bo.observeMutations=!1);var st={};Object.keys(Rb).forEach(function(a){Object.defineProperty(st,a,{enumerable:!0,set:function(n){bo[a]=n,Bl.forEach(function(r){return r(st)})},get:function(){return bo[a]}})});Object.defineProperty(st,"familyPrefix",{enumerable:!0,set:function(e){bo.cssPrefix=e,Bl.forEach(function(n){return n(st)})},get:function(){return bo.cssPrefix}});Tr.FontAwesomeConfig=st;var Bl=[];function F2(a){return Bl.push(a),function(){Bl.splice(Bl.indexOf(a),1)}}var Qs=Fp,ia={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function z2(a){if(!(!a||!ka)){var e=an.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var n=an.head.childNodes,r=null,o=n.length-1;o>-1;o--){var c=n[o],u=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(r=c)}return an.head.insertBefore(e,r),a}}var B2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cx(){for(var a=12,e="";a-- >0;)e+=B2[Math.random()*62|0];return e}function wo(a){for(var e=[],n=(a||[]).length>>>0;n--;)e[n]=a[n];return e}function ug(a){return a.classList?wo(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Cb(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V2(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Cb(a[n]),'" ')},"").trim()}function Tf(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(a[n].trim(),";")},"")}function fg(a){return a.size!==ia.size||a.x!==ia.x||a.y!==ia.y||a.rotate!==ia.rotate||a.flipX||a.flipY}function H2(a){var e=a.transform,n=a.containerWidth,r=a.iconWidth,o={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(u," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:m,path:p}}function G2(a){var e=a.transform,n=a.width,r=n===void 0?Fp:n,o=a.height,c=o===void 0?Fp:o,u="";return qS?u+="translate(".concat(e.x/Qs-r/2,"em, ").concat(e.y/Qs-c/2,"em) "):u+="translate(calc(-50% + ".concat(e.x/Qs,"em), calc(-50% + ").concat(e.y/Qs,"em)) "),u+="scale(".concat(e.size/Qs*(e.flipX?-1:1),", ").concat(e.size/Qs*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var k2=`:root, :host {
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
}`;function Db(){var a=bb,e=Mb,n=st.cssPrefix,r=st.replacementClass,o=k2;if(n!==a||r!==e){var c=new RegExp("\\.".concat(a,"\\-"),"g"),u=new RegExp("\\--".concat(a,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");o=o.replace(c,".".concat(n,"-")).replace(u,"--".concat(n,"-")).replace(h,".".concat(r))}return o}var Dx=!1;function Bh(){st.autoAddCss&&!Dx&&(z2(Db()),Dx=!0)}var X2={mixout:function(){return{dom:{css:Db,insertCss:Bh}}},hooks:function(){return{beforeDOMElementCreation:function(){Bh()},beforeI2svg:function(){Bh()}}}},Ba=Tr||{};Ba[za]||(Ba[za]={});Ba[za].styles||(Ba[za].styles={});Ba[za].hooks||(Ba[za].hooks={});Ba[za].shims||(Ba[za].shims=[]);var ki=Ba[za],Nb=[],Lb=function(){an.removeEventListener("DOMContentLoaded",Lb),cf=1,Nb.map(function(e){return e()})},cf=!1;ka&&(cf=(an.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(an.readyState),cf||an.addEventListener("DOMContentLoaded",Lb));function W2(a){ka&&(cf?setTimeout(a,0):Nb.push(a))}function Zl(a){var e=a.tag,n=a.attributes,r=n===void 0?{}:n,o=a.children,c=o===void 0?[]:o;return typeof a=="string"?Cb(a):"<".concat(e," ").concat(V2(r),">").concat(c.map(Zl).join(""),"</").concat(e,">")}function Nx(a,e,n){if(a&&a[e]&&a[e][n])return{prefix:e,iconName:n,icon:a[e][n]}}var Vh=function(e,n,r,o){var c=Object.keys(e),u=c.length,h=n,m,p,_;for(r===void 0?(m=1,_=e[c[0]]):(m=0,_=r);m<u;m++)p=c[m],_=h(_,e[p],p,e);return _};function Ub(a){return ji(a).length!==1?null:a.codePointAt(0).toString(16)}function Lx(a){return Object.keys(a).reduce(function(e,n){var r=a[n],o=!!r.icon;return o?e[r.iconName]=r.icon:e[n]=r,e},{})}function Gp(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,c=Lx(e);typeof ki.hooks.addPack=="function"&&!o?ki.hooks.addPack(a,Lx(e)):ki.styles[a]=De(De({},ki.styles[a]||{}),c),a==="fas"&&Gp("fa",e)}var kl=ki.styles,j2=ki.shims,Ob=Object.keys(cg),q2=Ob.reduce(function(a,e){return a[e]=Object.keys(cg[e]),a},{}),dg=null,Pb={},Ib={},Fb={},zb={},Bb={};function Y2(a){return~U2.indexOf(a)}function K2(a,e){var n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===a&&o!==""&&!Y2(o)?o:null}var Vb=function(){var e=function(c){return Vh(kl,function(u,h,m){return u[m]=Vh(h,c,{}),u},{})};Pb=e(function(o,c,u){if(c[3]&&(o[c[3]]=u),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){o[m.toString(16)]=u})}return o}),Ib=e(function(o,c,u){if(o[u]=u,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){o[m]=u})}return o}),Bb=e(function(o,c,u){var h=c[2];return o[u]=u,h.forEach(function(m){o[m]=u}),o});var n="far"in kl||st.autoFetchSvg,r=Vh(j2,function(o,c){var u=c[0],h=c[1],m=c[2];return h==="far"&&!n&&(h="fas"),typeof u=="string"&&(o.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(o.unicodes[u.toString(16)]={prefix:h,iconName:m}),o},{names:{},unicodes:{}});Fb=r.names,zb=r.unicodes,dg=Af(st.styleDefault,{family:st.familyDefault})};F2(function(a){dg=Af(a.styleDefault,{family:st.familyDefault})});Vb();function hg(a,e){return(Pb[a]||{})[e]}function Z2(a,e){return(Ib[a]||{})[e]}function ss(a,e){return(Bb[a]||{})[e]}function Hb(a){return Fb[a]||{prefix:null,iconName:null}}function Q2(a){var e=zb[a],n=hg("fas",a);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ar(){return dg}var Gb=function(){return{prefix:null,iconName:null,rest:[]}};function $2(a){var e=zn,n=Ob.reduce(function(r,o){return r[o]="".concat(st.cssPrefix,"-").concat(o),r},{});return _b.forEach(function(r){(a.includes(n[r])||a.some(function(o){return q2[r].includes(o)}))&&(e=r)}),e}function Af(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?zn:n,o=R2[r][a];if(r===Yl&&!a)return"fad";var c=Rx[r][a]||Rx[r][o],u=a in ki.styles?a:null,h=c||u||null;return h}function J2(a){var e=[],n=null;return a.forEach(function(r){var o=K2(st.cssPrefix,r);o?n=o:r&&e.push(r)}),{iconName:n,rest:e}}function Ux(a){return a.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var Ox=yb.concat(xb);function wf(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,o=null,c=Ux(a.filter(function(S){return Ox.includes(S)})),u=Ux(a.filter(function(S){return!Ox.includes(S)})),h=c.filter(function(S){return o=S,!KS.includes(S)}),m=Ef(h,1),p=m[0],_=p===void 0?null:p,v=$2(c),g=De(De({},J2(u)),{},{prefix:Af(_,{family:v})});return De(De(De({},g),i3({values:a,family:v,styles:kl,config:st,canonical:g,givenPrefix:o})),e3(r,o,g))}function e3(a,e,n){var r=n.prefix,o=n.iconName;if(a||!r||!o)return{prefix:r,iconName:o};var c=e==="fa"?Hb(o):{},u=ss(r,o);return o=c.iconName||u||o,r=c.prefix||r,r==="far"&&!kl.far&&kl.fas&&!st.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}var t3=_b.filter(function(a){return a!==zn||a!==Yl}),n3=Object.keys(Ip).filter(function(a){return a!==zn}).map(function(a){return Object.keys(Ip[a])}).flat();function i3(a){var e=a.values,n=a.family,r=a.canonical,o=a.givenPrefix,c=o===void 0?"":o,u=a.styles,h=u===void 0?{}:u,m=a.config,p=m===void 0?{}:m,_=n===Yl,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=r.prefix==="fad"||r.prefix==="fa-duotone";if(!_&&(v||g||S)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&t3.includes(n)){var T=Object.keys(h).find(function(b){return n3.includes(b)});if(T||p.autoFetchSvg){var D=lA.get(n).defaultShortPrefixId;r.prefix=D,r.iconName=ss(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||c==="fa")&&(r.prefix=Ar()||"fas"),r}var a3=(function(){function a(){ET(this,a),this.definitions={}}return AT(a,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var u=o.reduce(this._pullDefinitions,{});Object.keys(u).forEach(function(h){n.definitions[h]=De(De({},n.definitions[h]||{}),u[h]),Gp(h,u[h]);var m=cg[zn][h];m&&Gp(m,u[h]),Vb()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(c){var u=o[c],h=u.prefix,m=u.iconName,p=u.icon,_=p[2];n[h]||(n[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(n[h][v]=p)}),n[h][m]=p}),n}}])})(),Px=[],po={},vo={},r3=Object.keys(vo);function s3(a,e){var n=e.mixoutsTo;return Px=a,po={},Object.keys(vo).forEach(function(r){r3.indexOf(r)===-1&&delete vo[r]}),Px.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(u){typeof o[u]=="function"&&(n[u]=o[u]),lf(o[u])==="object"&&Object.keys(o[u]).forEach(function(h){n[u]||(n[u]={}),n[u][h]=o[u][h]})}),r.hooks){var c=r.hooks();Object.keys(c).forEach(function(u){po[u]||(po[u]=[]),po[u].push(c[u])})}r.provides&&r.provides(vo)}),n}function kp(a,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var c=po[a]||[];return c.forEach(function(u){e=u.apply(null,[e].concat(r))}),e}function hs(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=po[a]||[];o.forEach(function(c){c.apply(null,n)})}function wr(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return vo[a]?vo[a].apply(null,e):void 0}function Xp(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,n=a.prefix||Ar();if(e)return e=ss(n,e)||e,Nx(kb.definitions,n,e)||Nx(ki.styles,n,e)}var kb=new a3,o3=function(){st.autoReplaceSvg=!1,st.observeMutations=!1,hs("noAuto")},l3={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ka?(hs("beforeI2svg",e),wr("pseudoElements2svg",e),wr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;st.autoReplaceSvg===!1&&(st.autoReplaceSvg=!0),st.observeMutations=!0,W2(function(){u3({autoReplaceSvgRoot:n}),hs("watch",e)})}},c3={icon:function(e){if(e===null)return null;if(lf(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ss(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Af(e[0]);return{prefix:r,iconName:ss(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(st.cssPrefix,"-"))>-1||e.match(C2))){var o=wf(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Ar(),iconName:ss(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var c=Ar();return{prefix:c,iconName:ss(c,e)||e}}}},xi={noAuto:o3,config:st,dom:l3,parse:c3,library:kb,findIconDefinition:Xp,toHtml:Zl},u3=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?an:n;(Object.keys(ki.styles).length>0||st.autoFetchSvg)&&ka&&st.autoReplaceSvg&&xi.dom.i2svg({node:r})};function Rf(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return Zl(r)})}}),Object.defineProperty(a,"node",{get:function(){if(ka){var r=an.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function f3(a){var e=a.children,n=a.main,r=a.mask,o=a.attributes,c=a.styles,u=a.transform;if(fg(u)&&n.found&&!r.found){var h=n.width,m=n.height,p={x:h/m/2,y:.5};o.style=Tf(De(De({},c),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function d3(a){var e=a.prefix,n=a.iconName,r=a.children,o=a.attributes,c=a.symbol,u=c===!0?"".concat(e,"-").concat(st.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:De(De({},o),{},{id:u}),children:r}]}]}function h3(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in a})}function pg(a){var e=a.icons,n=e.main,r=e.mask,o=a.prefix,c=a.iconName,u=a.transform,h=a.symbol,m=a.maskId,p=a.extra,_=a.watchable,v=_===void 0?!1:_,g=r.found?r:n,S=g.width,T=g.height,D=[st.replacementClass,c?"".concat(st.cssPrefix,"-").concat(c):""].filter(function(U){return p.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(p.classes).join(" "),b={children:[],attributes:De(De({},p.attributes),{},{"data-prefix":o,"data-icon":c,class:D,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(T)})};!h3(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ds]="");var x=De(De({},b),{},{prefix:o,iconName:c,main:n,mask:r,maskId:m,transform:u,symbol:h,styles:De({},p.styles)}),I=r.found&&n.found?wr("generateAbstractMask",x)||{children:[],attributes:{}}:wr("generateAbstractIcon",x)||{children:[],attributes:{}},F=I.children,A=I.attributes;return x.children=F,x.attributes=A,h?d3(x):f3(x)}function Ix(a){var e=a.content,n=a.width,r=a.height,o=a.transform,c=a.extra,u=a.watchable,h=u===void 0?!1:u,m=De(De({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ds]="");var p=De({},c.styles);fg(o)&&(p.transform=G2({transform:o,width:n,height:r}),p["-webkit-transform"]=p.transform);var _=Tf(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function p3(a){var e=a.content,n=a.extra,r=De(De({},n.attributes),{},{class:n.classes.join(" ")}),o=Tf(n.styles);o.length>0&&(r.style=o);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),c}var Hh=ki.styles;function Wp(a){var e=a[0],n=a[1],r=a.slice(4),o=Ef(r,1),c=o[0],u=null;return Array.isArray(c)?u={tag:"g",attributes:{class:"".concat(st.cssPrefix,"-").concat(zh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(zh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(zh.PRIMARY),fill:"currentColor",d:c[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:n,icon:u}}var m3={found:!1,width:512,height:512};function g3(a,e){!Tb&&!st.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function jp(a,e){var n=e;return e==="fa"&&st.styleDefault!==null&&(e=Ar()),new Promise(function(r,o){if(n==="fa"){var c=Hb(a)||{};a=c.iconName||a,e=c.prefix||e}if(a&&e&&Hh[e]&&Hh[e][a]){var u=Hh[e][a];return r(Wp(u))}g3(a,e),r(De(De({},m3),{},{icon:st.showMissingIcons&&a?wr("missingIconAbstract")||{}:{}}))})}var Fx=function(){},qp=st.measurePerformance&&hu&&hu.mark&&hu.measure?hu:{mark:Fx,measure:Fx},Ul='FA "7.3.1"',v3=function(e){return qp.mark("".concat(Ul," ").concat(e," begins")),function(){return Xb(e)}},Xb=function(e){qp.mark("".concat(Ul," ").concat(e," ends")),qp.measure("".concat(Ul," ").concat(e),"".concat(Ul," ").concat(e," begins"),"".concat(Ul," ").concat(e," ends"))},mg={begin:v3,end:Xb},$u=function(){};function zx(a){var e=a.getAttribute?a.getAttribute(ds):null;return typeof e=="string"}function _3(a){var e=a.getAttribute?a.getAttribute(og):null,n=a.getAttribute?a.getAttribute(lg):null;return e&&n}function x3(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(st.replacementClass)}function y3(){if(st.autoReplaceSvg===!0)return Ju.replace;var a=Ju[st.autoReplaceSvg];return a||Ju.replace}function S3(a){return an.createElementNS("http://www.w3.org/2000/svg",a)}function b3(a){return an.createElement(a)}function Wb(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?a.tag==="svg"?S3:b3:n;if(typeof a=="string")return an.createTextNode(a);var o=r(a.tag);Object.keys(a.attributes||[]).forEach(function(u){o.setAttribute(u,a.attributes[u])});var c=a.children||[];return c.forEach(function(u){o.appendChild(Wb(u,{ceFn:r}))}),o}function M3(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ju={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(o){n.parentNode.insertBefore(Wb(o),n)}),n.getAttribute(ds)===null&&st.keepOriginalSource){var r=an.createComment(M3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ug(n).indexOf(st.replacementClass))return Ju.replace(e);var o=new RegExp("".concat(st.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var c=r[0].attributes.class.split(" ").reduce(function(h,m){return m===st.replacementClass||m.match(o)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var u=r.map(function(h){return Zl(h)}).join(`
`);n.setAttribute(ds,""),n.innerHTML=u}};function Bx(a){a()}function jb(a,e){var n=typeof e=="function"?e:$u;if(a.length===0)n();else{var r=Bx;st.mutateApproach===A2&&(r=Tr.requestAnimationFrame||Bx),r(function(){var o=y3(),c=mg.begin("mutate");a.map(o),c(),n()})}}var gg=!1;function qb(){gg=!0}function Yp(){gg=!1}var uf=null;function Vx(a){if(Ex&&st.observeMutations){var e=a.treeCallback,n=e===void 0?$u:e,r=a.nodeCallback,o=r===void 0?$u:r,c=a.pseudoElementsCallback,u=c===void 0?$u:c,h=a.observeMutationsRoot,m=h===void 0?an:h;uf=new Ex(function(p){if(!gg){var _=Ar();wo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!zx(v.addedNodes[0])&&(st.searchPseudoElements&&u(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&st.searchPseudoElements&&u([v.target],!0),v.type==="attributes"&&zx(v.target)&&~L2.indexOf(v.attributeName))if(v.attributeName==="class"&&_3(v.target)){var g=wf(ug(v.target)),S=g.prefix,T=g.iconName;v.target.setAttribute(og,S||_),T&&v.target.setAttribute(lg,T)}else x3(v.target)&&o(v.target)})}}),ka&&uf.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function E3(){uf&&uf.disconnect()}function T3(a){var e=a.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,o){var c=o.split(":"),u=c[0],h=c.slice(1);return u&&h.length>0&&(r[u]=h.join(":").trim()),r},{})),n}function A3(a){var e=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",o=wf(ug(a));return o.prefix||(o.prefix=Ar()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=Z2(o.prefix,a.innerText)||hg(o.prefix,Ub(a.innerText))),!o.iconName&&st.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=a.firstChild.data)),o}function w3(a){var e=wo(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function R3(){return{iconName:null,prefix:null,transform:ia,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=A3(a),r=n.iconName,o=n.prefix,c=n.rest,u=w3(a),h=kp("parseNodeAttributes",{},a),m=e.styleParser?T3(a):[];return De({iconName:r,prefix:o,transform:ia,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:u}},h)}var C3=ki.styles;function Yb(a){var e=st.autoReplaceSvg==="nest"?Hx(a,{styleParser:!1}):Hx(a);return~e.extra.classes.indexOf(wb)?wr("generateLayersText",a,e):wr("generateSvgReplacementMutation",a,e)}function D3(){return[].concat(ji(xb),ji(yb))}function Gx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ka)return Promise.resolve();var n=an.documentElement.classList,r=function(v){return n.add("".concat(wx,"-").concat(v))},o=function(v){return n.remove("".concat(wx,"-").concat(v))},c=st.autoFetchSvg?D3():KS.concat(Object.keys(C3));c.includes("fa")||c.push("fa");var u=[".".concat(wb,":not([").concat(ds,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ds,"])")})).join(", ");if(u.length===0)return Promise.resolve();var h=[];try{h=wo(a.querySelectorAll(u))}catch{}if(h.length>0)r("pending"),o("complete");else return Promise.resolve();var m=mg.begin("onTree"),p=h.reduce(function(_,v){try{var g=Yb(v);g&&_.push(g)}catch(S){Tb||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){jb(g,function(){r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function N3(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yb(a).then(function(n){n&&jb([n],e)})}function L3(a){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Xp(e||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Xp(o||{})),a(r,De(De({},n),{},{mask:o}))}}var U3=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?ia:r,c=n.symbol,u=c===void 0?!1:c,h=n.mask,m=h===void 0?null:h,p=n.maskId,_=p===void 0?null:p,v=n.classes,g=v===void 0?[]:v,S=n.attributes,T=S===void 0?{}:S,D=n.styles,b=D===void 0?{}:D;if(e){var x=e.prefix,I=e.iconName,F=e.icon;return Rf(De({type:"icon"},e),function(){return hs("beforeDOMElementCreation",{iconDefinition:e,params:n}),pg({icons:{main:Wp(F),mask:m?Wp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:I,transform:De(De({},ia),o),symbol:u,maskId:_,extra:{attributes:T,styles:b,classes:g}})})}},O3={mixout:function(){return{icon:L3(U3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gx,n.nodeCallback=N3,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,o=r===void 0?an:r,c=n.callback,u=c===void 0?function(){}:c;return Gx(o,u)},e.generateSvgReplacementMutation=function(n,r){var o=r.iconName,c=r.prefix,u=r.transform,h=r.symbol,m=r.mask,p=r.maskId,_=r.extra;return new Promise(function(v,g){Promise.all([jp(o,c),m.iconName?jp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=Ef(S,2),D=T[0],b=T[1];v([n,pg({icons:{main:D,mask:b},prefix:c,iconName:o,transform:u,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.transform,h=n.styles,m=Tf(h);m.length>0&&(o.style=m);var p;return fg(u)&&(p=wr("generateAbstractTransformGrouping",{main:c,transform:u,containerWidth:c.width,iconWidth:c.width})),r.push(p||c.icon),{children:r,attributes:o}}}},P3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,c=o===void 0?[]:o;return Rf({type:"layer"},function(){hs("beforeDOMElementCreation",{assembler:n,params:r});var u=[];return n(function(h){Array.isArray(h)?h.map(function(m){u=u.concat(m.abstract)}):u=u.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(st.cssPrefix,"-layers")].concat(ji(c)).join(" ")},children:u}]})}}}},I3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var o=r.classes,c=o===void 0?[]:o,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return Rf({type:"counter",content:n},function(){return hs("beforeDOMElementCreation",{content:n,params:r}),p3({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(st.cssPrefix,"-layers-counter")].concat(ji(c))}})})}}}},F3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,c=o===void 0?ia:o,u=r.classes,h=u===void 0?[]:u,m=r.attributes,p=m===void 0?{}:m,_=r.styles,v=_===void 0?{}:_;return Rf({type:"text",content:n},function(){return hs("beforeDOMElementCreation",{content:n,params:r}),Ix({content:n,transform:De(De({},ia),c),extra:{attributes:p,styles:v,classes:["".concat(st.cssPrefix,"-layers-text")].concat(ji(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var o=r.transform,c=r.extra,u=null,h=null;if(qS){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();u=p.width/m,h=p.height/m}return Promise.resolve([n,Ix({content:n.innerHTML,width:u,height:h,transform:o,extra:c,watchable:!0})])}}},Kb=new RegExp('"',"ug"),kx=[1105920,1112319],Xx=De(De(De(De({},{FontAwesome:{normal:"fas",400:"fas"}}),oA),E2),gA),Kp=Object.keys(Xx).reduce(function(a,e){return a[e.toLowerCase()]=Xx[e],a},{}),z3=Object.keys(Kp).reduce(function(a,e){var n=Kp[e];return a[e]=n[900]||ji(Object.entries(n))[0][1],a},{});function B3(a){var e=a.replace(Kb,"");return Ub(ji(e)[0]||"")}function V3(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),n=a.getPropertyValue("content"),r=n.replace(Kb,""),o=r.codePointAt(0),c=o>=kx[0]&&o<=kx[1],u=r.length===2?r[0]===r[1]:!1;return c||u||e}function H3(a,e){var n=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return(Kp[n]||{})[o]||z3[n]}function Wx(a,e){var n="".concat(T2).concat(e.replace(":","-"));return new Promise(function(r,o){if(a.getAttribute(n)!==null)return r();var c=wo(a.children),u=c.filter(function(L){return L.getAttribute(zp)===e})[0],h=Tr.getComputedStyle(a,e),m=h.getPropertyValue("font-family"),p=m.match(D2),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(u&&!p)return a.removeChild(u),r();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=H3(m,_),T=B3(g),D=p[0].startsWith("FontAwesome"),b=V3(h),x=hg(S,T),I=x;if(D){var F=Q2(T);F.iconName&&F.prefix&&(x=F.iconName,S=F.prefix)}if(x&&!b&&(!u||u.getAttribute(og)!==S||u.getAttribute(lg)!==I)){a.setAttribute(n,I),u&&a.removeChild(u);var A=R3(),U=A.extra;U.attributes[zp]=e,jp(x,S).then(function(L){var B=pg(De(De({},A),{},{icons:{main:L,mask:Gb()},prefix:S,iconName:I,extra:U,watchable:!0})),w=an.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(w,a.firstChild):a.appendChild(w),w.outerHTML=B.map(function(z){return Zl(z)}).join(`
`),a.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function G3(a){return Promise.all([Wx(a,"::before"),Wx(a,"::after")])}function k3(a){return a.parentNode!==document.head&&!~w2.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(zp)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var X3=function(e){return!!e&&Eb.some(function(n){return e.includes(n)})},W3=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var o=Qu(r),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;if(X3(u)){var h=Eb.reduce(function(m,p){return m.replace(p,"")},u);h!==""&&h!=="*"&&n.add(h)}}}catch(m){o.e(m)}finally{o.f()}return n};function jx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ka){var n;if(e)n=a;else if(st.searchPseudoElementsFullScan)n=a.querySelectorAll("*");else{var r=new Set,o=Qu(document.styleSheets),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;try{var h=Qu(u.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=W3(p.selectorText),v=Qu(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;r.add(S)}}catch(D){v.e(D)}finally{v.f()}}}catch(D){h.e(D)}finally{h.f()}}catch(D){st.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(u.href," (").concat(D.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(D){o.e(D)}finally{o.f()}if(!r.size)return;var T=Array.from(r).join(", ");try{n=a.querySelectorAll(T)}catch{}}return new Promise(function(D,b){var x=wo(n).filter(k3).map(G3),I=mg.begin("searchPseudoElements");qb(),Promise.all(x).then(function(){I(),Yp(),D()}).catch(function(){I(),Yp(),b()})})}}var j3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=jx,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?an:r;st.searchPseudoElements&&jx(o)}}},qx=!1,q3={mixout:function(){return{dom:{unwatch:function(){qb(),qx=!0}}}},hooks:function(){return{bootstrap:function(){Vx(kp("mutationObserverCallbacks",{}))},noAuto:function(){E3()},watch:function(n){var r=n.observeMutationsRoot;qx?Yp():Vx(kp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Yx=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,o){var c=o.toLowerCase().split("-"),u=c[0],h=c.slice(1).join("-");if(u&&h==="h")return r.flipX=!0,r;if(u&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(u){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},n)},Y3={mixout:function(){return{parse:{transform:function(n){return Yx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=Yx(o)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,c=n.containerWidth,u=n.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),p="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),_="rotate(".concat(o.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(u/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:De({},S.outer),children:[{tag:"g",attributes:De({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:De(De({},r.icon.attributes),S.path)}]}]}}}},Gh={x:0,y:0,width:"100%",height:"100%"};function Kx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function K3(a){return a.tag==="g"?a.children:[a]}var Z3={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),c=o?wf(o.split(" ").map(function(u){return u.trim()})):Gb();return c.prefix||(c.prefix=Ar()),n.mask=c,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.mask,h=n.maskId,m=n.transform,p=c.width,_=c.icon,v=u.width,g=u.icon,S=H2({transform:m,containerWidth:v,iconWidth:p}),T={tag:"rect",attributes:De(De({},Gh),{},{fill:"white"})},D=_.children?{children:_.children.map(Kx)}:{},b={tag:"g",attributes:De({},S.inner),children:[Kx(De({tag:_.tag,attributes:De(De({},_.attributes),S.path)},D))]},x={tag:"g",attributes:De({},S.outer),children:[b]},I="mask-".concat(h||Cx()),F="clip-".concat(h||Cx()),A={tag:"mask",attributes:De(De({},Gh),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,x]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:K3(g)},A]};return r.push(U,{tag:"rect",attributes:De({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(I,")")},Gh)}),{children:r,attributes:o}}}},Q3={provides:function(e){var n=!1;Tr.matchMedia&&(n=Tr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:De(De({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var u=De(De({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:De(De({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:De(De({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:De(De({},u),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:De(De({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:De(De({},u),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:De(De({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:De(De({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$3={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),c=o===null?!1:o===""?!0:o;return n.symbol=c,n}}}},J3=[X2,O3,P3,I3,F3,j3,q3,Y3,Z3,Q3,$3];s3(J3,{mixoutsTo:xi});xi.noAuto;var ps=xi.config;xi.library;xi.dom;var Zb=xi.parse;xi.findIconDefinition;xi.toHtml;var ew=xi.icon;xi.layer;xi.text;xi.counter;var kh={exports:{}},Ml={},Xh={exports:{}},Wh={};var Zx;function tw(){return Zx||(Zx=1,(function(a){function e(N,H){var te=N.length;N.push(H);e:for(;0<te;){var _e=te-1>>>1,Te=N[_e];if(0<o(Te,H))N[_e]=H,N[te]=Te,te=_e;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var H=N[0],te=N.pop();if(te!==H){N[0]=te;e:for(var _e=0,Te=N.length,O=Te>>>1;_e<O;){var Z=2*(_e+1)-1,ne=N[Z],be=Z+1,J=N[be];if(0>o(ne,te))be<Te&&0>o(J,ne)?(N[_e]=J,N[be]=te,_e=be):(N[_e]=ne,N[Z]=te,_e=Z);else if(be<Te&&0>o(J,te))N[_e]=J,N[be]=te,_e=be;else break e}}return H}function o(N,H){var te=N.sortIndex-H.sortIndex;return te!==0?te:N.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,T=!1,D=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function A(N){for(var H=n(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=N)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=n(p)}}function U(N){if(D=!1,A(N),!T)if(n(m)!==null)T=!0,L||(L=!0,K());else{var H=n(p);H!==null&&ee(U,H.startTime-N)}}var L=!1,B=-1,w=5,z=-1;function k(){return b?!0:!(a.unstable_now()-z<w)}function G(){if(b=!1,L){var N=a.unstable_now();z=N;var H=!0;try{e:{T=!1,D&&(D=!1,I(B),B=-1),S=!0;var te=g;try{t:{for(A(N),v=n(m);v!==null&&!(v.expirationTime>N&&k());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,g=v.priorityLevel;var Te=_e(v.expirationTime<=N);if(N=a.unstable_now(),typeof Te=="function"){v.callback=Te,A(N),H=!0;break t}v===n(m)&&r(m),A(N)}else r(m);v=n(m)}if(v!==null)H=!0;else{var O=n(p);O!==null&&ee(U,O.startTime-N),H=!1}}break e}finally{v=null,g=te,S=!1}H=void 0}}finally{H?K():L=!1}}}var K;if(typeof F=="function")K=function(){F(G)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,me=he.port2;he.port1.onmessage=G,K=function(){me.postMessage(null)}}else K=function(){x(G,0)};function ee(N,H){B=x(function(){N(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(N){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var te=g;g=H;try{return N()}finally{g=te}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var te=g;g=N;try{return H()}finally{g=te}},a.unstable_scheduleCallback=function(N,H,te){var _e=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?_e+te:_e):te=_e,N){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=te+Te,N={id:_++,callback:H,priorityLevel:N,startTime:te,expirationTime:Te,sortIndex:-1},te>_e?(N.sortIndex=te,e(p,N),n(m)===null&&N===n(p)&&(D?(I(B),B=-1):D=!0,ee(U,te-_e))):(N.sortIndex=Te,e(m,N),T||S||(T=!0,L||(L=!0,K()))),N},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(N){var H=g;return function(){var te=g;g=H;try{return N.apply(this,arguments)}finally{g=te}}}})(Wh)),Wh}var Qx;function nw(){return Qx||(Qx=1,Xh.exports=tw()),Xh.exports}var jh={exports:{}},Hn={};var $x;function iw(){if($x)return Hn;$x=1;var a=ig();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Hn.flushSync=function(m){var p=u.T,_=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=_,r.d.f()}},Hn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Hn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Hn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Hn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Hn.requestFormReset=function(m){r.d.r(m)},Hn.unstable_batchedUpdates=function(m,p){return m(p)},Hn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.8",Hn}var Jx;function aw(){if(Jx)return jh.exports;Jx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),jh.exports=iw(),jh.exports}var ey;function rw(){if(ey)return Ml;ey=1;var a=nw(),e=ig(),n=aw();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var y=!1,C=f.child;C;){if(C===s){y=!0,s=f,l=d;break}if(C===l){y=!0,l=f,s=d;break}C=C.sibling}if(!y){for(C=d.child;C;){if(C===s){y=!0,s=d,l=f;break}if(C===l){y=!0,l=d,s=f;break}C=C.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),F=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case F:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case A:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case w:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var ee=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},_e=[],Te=-1;function O(t){return{current:t}}function Z(t){0>Te||(t.current=_e[Te],_e[Te]=null,Te--)}function ne(t,i){Te++,_e[Te]=t.current,t.current=i}var be=O(null),J=O(null),X=O(null),ce=O(null);function ye(t,i){switch(ne(X,i),ne(J,t),ne(be,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?z_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=z_(i),t=B_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(be),ne(be,t)}function Pe(){Z(be),Z(J),Z(X)}function ot(t){t.memoizedState!==null&&ne(ce,t);var i=be.current,s=B_(i,t.type);i!==s&&(ne(J,t),ne(be,s))}function Ke(t){J.current===t&&(Z(be),Z(J)),ce.current===t&&(Z(ce),_l._currentValue=te)}var Ut,ht;function yt(t){if(Ut===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ut=i&&i[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+t+ht}var Ce=!1;function Ze(t,i){if(!t||Ce)return"";Ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(pe){var fe=pe}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(pe){fe=pe}t.call(Ee.prototype)}}else{try{throw Error()}catch(pe){fe=pe}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(pe){if(pe&&fe&&typeof pe.stack=="string")return[pe.stack,fe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],C=d[1];if(y&&C){var V=y.split(`
`),re=C.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===re.length)for(l=V.length-1,f=re.length-1;1<=l&&0<=f&&V[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==re[f]){var xe=`
`+V[l].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=l&&0<=f);break}}}finally{Ce=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?yt(s):""}function Bt(t,i){switch(t.tag){case 26:case 27:case 5:return yt(t.type);case 16:return yt("Lazy");case 13:return t.child!==i&&i!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return Ze(t.type,!1);case 11:return Ze(t.type.render,!1);case 1:return Ze(t.type,!0);case 31:return yt("Activity");default:return""}}function Ht(t){try{var i="",s=null;do i+=Bt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var en=Object.prototype.hasOwnProperty,cn=a.unstable_scheduleCallback,Je=a.unstable_cancelCallback,St=a.unstable_shouldYield,W=a.unstable_requestPaint,bt=a.unstable_now,ft=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,Q=a.unstable_NormalPriority,ie=a.unstable_LowPriority,de=a.unstable_IdlePriority,we=a.log,Ue=a.unstable_setDisableYieldValue,ge=null,ve=null;function Le(t){if(typeof we=="function"&&Ue(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ge,t)}catch{}}var Ge=Math.clz32?Math.clz32:nt,ze=Math.log,Ie=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(ze(t)/Ie|0)|0}var it=256,dt=262144,q=4194304;function Ne(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=Ne(l):(y&=C,y!==0?f=Ne(y):s||(s=C&~t,s!==0&&(f=Ne(s))))):(C=l&~d,C!==0?f=Ne(C):y!==0?f=Ne(y):s||(s=l&~t,s!==0&&(f=Ne(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Oe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function Qe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function We(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rn(t,i,s,l,f,d){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(s=y&~s;0<s;){var xe=31-Ge(s),Ee=1<<xe;C[xe]=0,V[xe]=-1;var fe=re[xe];if(fe!==null)for(re[xe]=null,xe=0;xe<fe.length;xe++){var pe=fe[xe];pe!==null&&(pe.lane&=-536870913)}s&=~Ee}l!==0&&Gt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~i))}function Gt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ge(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ri(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function si(t,i){var s=i&-i;return s=(s&42)!==0?1:Lo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Lo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Uo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Oo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:lx(t.type))}function xs(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var qi=Math.random().toString(36).slice(2),gn="__reactFiber$"+qi,Ln="__reactProps$"+qi,Kn="__reactContainer$"+qi,Cr="__reactEvents$"+qi,nc="__reactListeners$"+qi,ic="__reactHandles$"+qi,Dr="__reactResources$"+qi,Xa="__reactMarker$"+qi;function Wa(t){delete t[gn],delete t[Ln],delete t[Cr],delete t[nc],delete t[ic]}function ca(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Kn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=j_(t);t!==null;){if(s=t[gn])return s;t=j_(t)}return i}t=s,s=t.parentNode}return null}function ua(t){if(t=t[gn]||t[Kn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Nr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ja(t){var i=t[Dr];return i||(i=t[Dr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vn(t){t[Xa]=!0}var ac=new Set,R={};function Y(t,i){ue(t,i),ue(t+"Capture",i)}function ue(t,i){for(R[t]=i,t=0;t<i.length;t++)ac.add(i[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},Be={};function Xe(t){return en.call(Be,t)?!0:en.call(le,t)?!1:oe.test(t)?Be[t]=!0:(le[t]=!0,!1)}function Fe(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function qe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function je(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ot(t){if(!t._valueTracker){var i=gt(t)?"checked":"value";t._valueTracker=tt(t,i,""+t[i])}}function sn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=gt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function $t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kt=/[\n"\\]/g;function Xt(t){return t.replace(kt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ke(t,i,s,l,f,d,y,C){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+at(i)):t.value!==""+at(i)&&(t.value=""+at(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Mt(t,y,at(i)):s!=null?Mt(t,y,at(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+at(C):t.removeAttribute("name")}function Vn(t,i,s,l,f,d,y,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ot(t);return}s=s!=null?""+at(s):"",i=i!=null?""+at(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Ot(t)}function Mt(t,i,s){i==="number"&&$t(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function En(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+at(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function oi(t,i,s){if(i!=null&&(i=""+at(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+at(s):""}function Ui(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ee(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=at(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ot(t)}function li(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Wt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Wt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Oi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&on(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&on(t,d,i[d])}function Vt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(t){return qa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fa(){}var Uf=null;function Of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ys=null,Ss=null;function Fg(t){var i=ua(t);if(i&&(t=i.stateNode)){var s=t[Ln]||null;e:switch(t=i.stateNode,i.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Xt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Ln]||null;if(!f)throw Error(r(90));ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&sn(l)}break e;case"textarea":oi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&En(t,!!s.multiple,i,!1)}}}var Pf=!1;function zg(t,i,s){if(Pf)return t(i,s);Pf=!0;try{var l=t(i);return l}finally{if(Pf=!1,(ys!==null||Ss!==null)&&(Wc(),ys&&(i=ys,t=Ss,Ss=ys=null,Fg(i),t)))for(i=0;i<t.length;i++)Fg(t[i])}}function Po(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Ln]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),If=!1;if(da)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){If=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{If=!1}var Ya=null,Ff=null,rc=null;function Bg(){if(rc)return rc;var t,i=Ff,s=i.length,l,f="value"in Ya?Ya.value:Ya.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===f[d-l];l++);return rc=f.slice(t,1<l?1-l:void 0)}function sc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oc(){return!0}function Vg(){return!1}function Zn(t){function i(s,l,f,d,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?oc:Vg,this.isPropagationStopped=Vg,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Zn(Ur),Fo=v({},Ur,{view:0,detail:0}),pM=Zn(Fo),zf,Bf,zo,cc=v({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(zf=t.screenX-zo.screenX,Bf=t.screenY-zo.screenY):Bf=zf=0,zo=t),zf)},movementY:function(t){return"movementY"in t?t.movementY:Bf}}),Hg=Zn(cc),mM=v({},cc,{dataTransfer:0}),gM=Zn(mM),vM=v({},Fo,{relatedTarget:0}),Vf=Zn(vM),_M=v({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),xM=Zn(_M),yM=v({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),SM=Zn(yM),bM=v({},Ur,{data:0}),Gg=Zn(bM),MM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=TM[t])?!!i[t]:!1}function Hf(){return AM}var wM=v({},Fo,{key:function(t){if(t.key){var i=MM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RM=Zn(wM),CM=v({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kg=Zn(CM),DM=v({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),NM=Zn(DM),LM=v({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),UM=Zn(LM),OM=v({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Zn(OM),IM=v({},Ur,{newState:0,oldState:0}),FM=Zn(IM),zM=[9,13,27,32],Gf=da&&"CompositionEvent"in window,Bo=null;da&&"documentMode"in document&&(Bo=document.documentMode);var BM=da&&"TextEvent"in window&&!Bo,Xg=da&&(!Gf||Bo&&8<Bo&&11>=Bo),Wg=" ",jg=!1;function qg(t,i){switch(t){case"keyup":return zM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function VM(t,i){switch(t){case"compositionend":return Yg(i);case"keypress":return i.which!==32?null:(jg=!0,Wg);case"textInput":return t=i.data,t===Wg&&jg?null:t;default:return null}}function HM(t,i){if(bs)return t==="compositionend"||!Gf&&qg(t,i)?(t=Bg(),rc=Ff=Ya=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xg&&i.locale!=="ko"?null:i.data;default:return null}}var GM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!GM[t.type]:i==="textarea"}function Zg(t,i,s,l){ys?Ss?Ss.push(l):Ss=[l]:ys=l,i=$c(i,"onChange"),0<i.length&&(s=new lc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Vo=null,Ho=null;function kM(t){L_(t,0)}function uc(t){var i=Nr(t);if(sn(i))return t}function Qg(t,i){if(t==="change")return i}var $g=!1;if(da){var kf;if(da){var Xf="oninput"in document;if(!Xf){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),Xf=typeof Jg.oninput=="function"}kf=Xf}else kf=!1;$g=kf&&(!document.documentMode||9<document.documentMode)}function e0(){Vo&&(Vo.detachEvent("onpropertychange",t0),Ho=Vo=null)}function t0(t){if(t.propertyName==="value"&&uc(Ho)){var i=[];Zg(i,Ho,t,Of(t)),zg(kM,i)}}function XM(t,i,s){t==="focusin"?(e0(),Vo=i,Ho=s,Vo.attachEvent("onpropertychange",t0)):t==="focusout"&&e0()}function WM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Ho)}function jM(t,i){if(t==="click")return uc(i)}function qM(t,i){if(t==="input"||t==="change")return uc(i)}function YM(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ci=typeof Object.is=="function"?Object.is:YM;function Go(t,i){if(ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!en.call(i,f)||!ci(t[f],i[f]))return!1}return!0}function n0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i0(t,i){var s=n0(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=n0(s)}}function a0(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?a0(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function r0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=$t(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=$t(t.document)}return i}function Wf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var KM=da&&"documentMode"in document&&11>=document.documentMode,Ms=null,jf=null,ko=null,qf=!1;function s0(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;qf||Ms==null||Ms!==$t(l)||(l=Ms,"selectionStart"in l&&Wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ko&&Go(ko,l)||(ko=l,l=$c(jf,"onSelect"),0<l.length&&(i=new lc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Ms)))}function Or(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Es={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionrun:Or("Transition","TransitionRun"),transitionstart:Or("Transition","TransitionStart"),transitioncancel:Or("Transition","TransitionCancel"),transitionend:Or("Transition","TransitionEnd")},Yf={},o0={};da&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Pr(t){if(Yf[t])return Yf[t];if(!Es[t])return t;var i=Es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in o0)return Yf[t]=i[s];return t}var l0=Pr("animationend"),c0=Pr("animationiteration"),u0=Pr("animationstart"),ZM=Pr("transitionrun"),QM=Pr("transitionstart"),$M=Pr("transitioncancel"),f0=Pr("transitionend"),d0=new Map,Kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kf.push("scrollEnd");function Pi(t,i){d0.set(t,i),Y(i,[t])}var fc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],Ts=0,Zf=0;function dc(){for(var t=Ts,i=Zf=Ts=0;i<t;){var s=yi[i];yi[i++]=null;var l=yi[i];yi[i++]=null;var f=yi[i];yi[i++]=null;var d=yi[i];if(yi[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}d!==0&&h0(s,f,d)}}function hc(t,i,s,l){yi[Ts++]=t,yi[Ts++]=i,yi[Ts++]=s,yi[Ts++]=l,Zf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Qf(t,i,s,l){return hc(t,i,s,l),pc(t)}function Ir(t,i){return hc(t,null,null,i),pc(t)}function h0(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Ge(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function pc(t){if(50<fl)throw fl=0,sh=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var As={};function JM(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,i,s,l){return new JM(t,i,s,l)}function $f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,i){var s=t.alternate;return s===null?(s=ui(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function p0(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function mc(t,i,s,l,f,d){var y=0;if(l=t,typeof t=="function")$f(t)&&(y=1);else if(typeof t=="string")y=aT(t,s,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=ui(31,s,i,f),t.elementType=z,t.lanes=d,t;case D:return Fr(s.children,f,d,i);case b:y=8,f|=24;break;case x:return t=ui(12,s,i,f|2),t.elementType=x,t.lanes=d,t;case U:return t=ui(13,s,i,f),t.elementType=U,t.lanes=d,t;case L:return t=ui(19,s,i,f),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:y=10;break e;case I:y=9;break e;case A:y=11;break e;case B:y=14;break e;case w:y=16,l=null;break e}y=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ui(y,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Fr(t,i,s,l){return t=ui(7,t,l,i),t.lanes=s,t}function Jf(t,i,s){return t=ui(6,t,null,i),t.lanes=s,t}function m0(t){var i=ui(18,null,null,0);return i.stateNode=t,i}function ed(t,i,s){return i=ui(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var g0=new WeakMap;function Si(t,i){if(typeof t=="object"&&t!==null){var s=g0.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ht(i)},g0.set(t,i),i)}return{value:t,source:i,stack:Ht(i)}}var ws=[],Rs=0,gc=null,Xo=0,bi=[],Mi=0,Ka=null,Ki=1,Zi="";function pa(t,i){ws[Rs++]=Xo,ws[Rs++]=gc,gc=t,Xo=i}function v0(t,i,s){bi[Mi++]=Ki,bi[Mi++]=Zi,bi[Mi++]=Ka,Ka=t;var l=Ki;t=Zi;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var d=32-Ge(i)+f;if(30<d){var y=f-f%5;d=(l&(1<<y)-1).toString(32),l>>=y,f-=y,Ki=1<<32-Ge(i)+f|s<<f|l,Zi=d+t}else Ki=1<<d|s<<f|l,Zi=t}function td(t){t.return!==null&&(pa(t,1),v0(t,1,0))}function nd(t){for(;t===gc;)gc=ws[--Rs],ws[Rs]=null,Xo=ws[--Rs],ws[Rs]=null;for(;t===Ka;)Ka=bi[--Mi],bi[Mi]=null,Zi=bi[--Mi],bi[Mi]=null,Ki=bi[--Mi],bi[Mi]=null}function _0(t,i){bi[Mi++]=Ki,bi[Mi++]=Zi,bi[Mi++]=Ka,Ki=i.id,Zi=i.overflow,Ka=t}var Un=null,tn=null,Ct=!1,Za=null,Ei=!1,id=Error(r(519));function Qa(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(Si(i,t)),id}function x0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[Ln]=l,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<hl.length;s++)Tt(hl[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),Vn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),Ui(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||I_(i.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),l.onScroll!=null&&Tt("scroll",i),l.onScrollEnd!=null&&Tt("scrollend",i),l.onClick!=null&&(i.onclick=fa),i=!0):i=!1,i||Qa(t,!0)}function y0(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Un=Un.return}}function Cs(t){if(t!==Un)return!1;if(!Ct)return y0(t),Ct=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Sh(t.type,t.memoizedProps)),s=!s),s&&tn&&Qa(t),y0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=W_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=W_(t)}else i===27?(i=tn,fr(t.type)?(t=Ah,Ah=null,tn=t):tn=i):tn=Un?Ai(t.stateNode.nextSibling):null;return!0}function zr(){tn=Un=null,Ct=!1}function ad(){var t=Za;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Za=null),t}function Wo(t){Za===null?Za=[t]:Za.push(t)}var rd=O(null),Br=null,ma=null;function $a(t,i,s){ne(rd,i._currentValue),i._currentValue=s}function ga(t){t._currentValue=rd.current,Z(rd)}function sd(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function od(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var y=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var V=0;V<i.length;V++)if(C.context===i[V]){d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),sd(d.return,s,t),l||(y=null);break e}d=C.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(r(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),sd(y,s,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function Ds(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var C=f.type;ci(f.pendingProps.value,y.value)||(t!==null?t.push(C):t=[C])}}else if(f===ce.current){if(y=f.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}f=f.return}t!==null&&od(i,t,s,l),i.flags|=262144}function vc(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vr(t){Br=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function On(t){return S0(Br,t)}function _c(t,i){return Br===null&&Vr(t),S0(t,i)}function S0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ma===null){if(t===null)throw Error(r(308));ma=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ma=ma.next=i;return s}var eE=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},tE=a.unstable_scheduleCallback,nE=a.unstable_NormalPriority,_n={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ld(){return{controller:new eE,data:new Map,refCount:0}}function jo(t){t.refCount--,t.refCount===0&&tE(nE,function(){t.controller.abort()})}var qo=null,cd=0,Ns=0,Ls=null;function iE(t,i){if(qo===null){var s=qo=[];cd=0,Ns=dh(),Ls={status:"pending",value:void 0,then:function(l){s.push(l)}}}return cd++,i.then(b0,b0),i}function b0(){if(--cd===0&&qo!==null){Ls!==null&&(Ls.status="fulfilled");var t=qo;qo=null,Ns=0,Ls=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function aE(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var M0=N.S;N.S=function(t,i){s_=bt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&iE(t,i),M0!==null&&M0(t,i)};var Hr=O(null);function ud(){var t=Hr.current;return t!==null?t:Jt.pooledCache}function xc(t,i){i===null?ne(Hr,Hr.current):ne(Hr,i.pool)}function E0(){var t=ud();return t===null?null:{parent:_n._currentValue,pool:t}}var Us=Error(r(460)),fd=Error(r(474)),yc=Error(r(542)),Sc={then:function(){}};function T0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function A0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(fa,fa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,R0(t),t;default:if(typeof i.status=="string")i.then(fa,fa);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,R0(t),t}throw kr=i,Us}}function Gr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(kr=s,Us):s}}var kr=null;function w0(){if(kr===null)throw Error(r(459));var t=kr;return kr=null,t}function R0(t){if(t===Us||t===yc)throw Error(r(483))}var Os=null,Yo=0;function bc(t){var i=Yo;return Yo+=1,Os===null&&(Os=[]),A0(Os,t,i)}function Ko(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Mc(t,i){throw i.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function C0(t){function i($,j){if(t){var ae=$.deletions;ae===null?($.deletions=[j],$.flags|=16):ae.push(j)}}function s($,j){if(!t)return null;for(;j!==null;)i($,j),j=j.sibling;return null}function l($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function f($,j){return $=ha($,j),$.index=0,$.sibling=null,$}function d($,j,ae){return $.index=ae,t?(ae=$.alternate,ae!==null?(ae=ae.index,ae<j?($.flags|=67108866,j):ae):($.flags|=67108866,j)):($.flags|=1048576,j)}function y($){return t&&$.alternate===null&&($.flags|=67108866),$}function C($,j,ae,Me){return j===null||j.tag!==6?(j=Jf(ae,$.mode,Me),j.return=$,j):(j=f(j,ae),j.return=$,j)}function V($,j,ae,Me){var rt=ae.type;return rt===D?xe($,j,ae.props.children,Me,ae.key):j!==null&&(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===w&&Gr(rt)===j.type)?(j=f(j,ae.props),Ko(j,ae),j.return=$,j):(j=mc(ae.type,ae.key,ae.props,null,$.mode,Me),Ko(j,ae),j.return=$,j)}function re($,j,ae,Me){return j===null||j.tag!==4||j.stateNode.containerInfo!==ae.containerInfo||j.stateNode.implementation!==ae.implementation?(j=ed(ae,$.mode,Me),j.return=$,j):(j=f(j,ae.children||[]),j.return=$,j)}function xe($,j,ae,Me,rt){return j===null||j.tag!==7?(j=Fr(ae,$.mode,Me,rt),j.return=$,j):(j=f(j,ae),j.return=$,j)}function Ee($,j,ae){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Jf(""+j,$.mode,ae),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return ae=mc(j.type,j.key,j.props,null,$.mode,ae),Ko(ae,j),ae.return=$,ae;case T:return j=ed(j,$.mode,ae),j.return=$,j;case w:return j=Gr(j),Ee($,j,ae)}if(ee(j)||K(j))return j=Fr(j,$.mode,ae,null),j.return=$,j;if(typeof j.then=="function")return Ee($,bc(j),ae);if(j.$$typeof===F)return Ee($,_c($,j),ae);Mc($,j)}return null}function fe($,j,ae,Me){var rt=j!==null?j.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return rt!==null?null:C($,j,""+ae,Me);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:return ae.key===rt?V($,j,ae,Me):null;case T:return ae.key===rt?re($,j,ae,Me):null;case w:return ae=Gr(ae),fe($,j,ae,Me)}if(ee(ae)||K(ae))return rt!==null?null:xe($,j,ae,Me,null);if(typeof ae.then=="function")return fe($,j,bc(ae),Me);if(ae.$$typeof===F)return fe($,j,_c($,ae),Me);Mc($,ae)}return null}function pe($,j,ae,Me,rt){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return $=$.get(ae)||null,C(j,$,""+Me,rt);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case S:return $=$.get(Me.key===null?ae:Me.key)||null,V(j,$,Me,rt);case T:return $=$.get(Me.key===null?ae:Me.key)||null,re(j,$,Me,rt);case w:return Me=Gr(Me),pe($,j,ae,Me,rt)}if(ee(Me)||K(Me))return $=$.get(ae)||null,xe(j,$,Me,rt,null);if(typeof Me.then=="function")return pe($,j,ae,bc(Me),rt);if(Me.$$typeof===F)return pe($,j,ae,_c(j,Me),rt);Mc(j,Me)}return null}function Ye($,j,ae,Me){for(var rt=null,Pt=null,et=j,_t=j=0,wt=null;et!==null&&_t<ae.length;_t++){et.index>_t?(wt=et,et=null):wt=et.sibling;var It=fe($,et,ae[_t],Me);if(It===null){et===null&&(et=wt);break}t&&et&&It.alternate===null&&i($,et),j=d(It,j,_t),Pt===null?rt=It:Pt.sibling=It,Pt=It,et=wt}if(_t===ae.length)return s($,et),Ct&&pa($,_t),rt;if(et===null){for(;_t<ae.length;_t++)et=Ee($,ae[_t],Me),et!==null&&(j=d(et,j,_t),Pt===null?rt=et:Pt.sibling=et,Pt=et);return Ct&&pa($,_t),rt}for(et=l(et);_t<ae.length;_t++)wt=pe(et,$,_t,ae[_t],Me),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?_t:wt.key),j=d(wt,j,_t),Pt===null?rt=wt:Pt.sibling=wt,Pt=wt);return t&&et.forEach(function(gr){return i($,gr)}),Ct&&pa($,_t),rt}function ct($,j,ae,Me){if(ae==null)throw Error(r(151));for(var rt=null,Pt=null,et=j,_t=j=0,wt=null,It=ae.next();et!==null&&!It.done;_t++,It=ae.next()){et.index>_t?(wt=et,et=null):wt=et.sibling;var gr=fe($,et,It.value,Me);if(gr===null){et===null&&(et=wt);break}t&&et&&gr.alternate===null&&i($,et),j=d(gr,j,_t),Pt===null?rt=gr:Pt.sibling=gr,Pt=gr,et=wt}if(It.done)return s($,et),Ct&&pa($,_t),rt;if(et===null){for(;!It.done;_t++,It=ae.next())It=Ee($,It.value,Me),It!==null&&(j=d(It,j,_t),Pt===null?rt=It:Pt.sibling=It,Pt=It);return Ct&&pa($,_t),rt}for(et=l(et);!It.done;_t++,It=ae.next())It=pe(et,$,_t,It.value,Me),It!==null&&(t&&It.alternate!==null&&et.delete(It.key===null?_t:It.key),j=d(It,j,_t),Pt===null?rt=It:Pt.sibling=It,Pt=It);return t&&et.forEach(function(mT){return i($,mT)}),Ct&&pa($,_t),rt}function Qt($,j,ae,Me){if(typeof ae=="object"&&ae!==null&&ae.type===D&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:e:{for(var rt=ae.key;j!==null;){if(j.key===rt){if(rt=ae.type,rt===D){if(j.tag===7){s($,j.sibling),Me=f(j,ae.props.children),Me.return=$,$=Me;break e}}else if(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===w&&Gr(rt)===j.type){s($,j.sibling),Me=f(j,ae.props),Ko(Me,ae),Me.return=$,$=Me;break e}s($,j);break}else i($,j);j=j.sibling}ae.type===D?(Me=Fr(ae.props.children,$.mode,Me,ae.key),Me.return=$,$=Me):(Me=mc(ae.type,ae.key,ae.props,null,$.mode,Me),Ko(Me,ae),Me.return=$,$=Me)}return y($);case T:e:{for(rt=ae.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===ae.containerInfo&&j.stateNode.implementation===ae.implementation){s($,j.sibling),Me=f(j,ae.children||[]),Me.return=$,$=Me;break e}else{s($,j);break}else i($,j);j=j.sibling}Me=ed(ae,$.mode,Me),Me.return=$,$=Me}return y($);case w:return ae=Gr(ae),Qt($,j,ae,Me)}if(ee(ae))return Ye($,j,ae,Me);if(K(ae)){if(rt=K(ae),typeof rt!="function")throw Error(r(150));return ae=rt.call(ae),ct($,j,ae,Me)}if(typeof ae.then=="function")return Qt($,j,bc(ae),Me);if(ae.$$typeof===F)return Qt($,j,_c($,ae),Me);Mc($,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,j!==null&&j.tag===6?(s($,j.sibling),Me=f(j,ae),Me.return=$,$=Me):(s($,j),Me=Jf(ae,$.mode,Me),Me.return=$,$=Me),y($)):s($,j)}return function($,j,ae,Me){try{Yo=0;var rt=Qt($,j,ae,Me);return Os=null,rt}catch(et){if(et===Us||et===yc)throw et;var Pt=ui(29,et,null,$.mode);return Pt.lanes=Me,Pt.return=$,Pt}}}var Xr=C0(!0),D0=C0(!1),Ja=!1;function dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function er(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=pc(t),h0(t,null,s),i}return hc(t,l,i,s),pc(t)}function Zo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ri(t,s)}}function pd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var md=!1;function Qo(){if(md){var t=Ls;if(t!==null)throw t}}function $o(t,i,s,l){md=!1;var f=t.updateQueue;Ja=!1;var d=f.firstBaseUpdate,y=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var V=C,re=V.next;V.next=null,y===null?d=re:y.next=re,y=V;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,C=xe.lastBaseUpdate,C!==y&&(C===null?xe.firstBaseUpdate=re:C.next=re,xe.lastBaseUpdate=V))}if(d!==null){var Ee=f.baseState;y=0,xe=re=V=null,C=d;do{var fe=C.lane&-536870913,pe=fe!==C.lane;if(pe?(At&fe)===fe:(l&fe)===fe){fe!==0&&fe===Ns&&(md=!0),xe!==null&&(xe=xe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ye=t,ct=C;fe=i;var Qt=s;switch(ct.tag){case 1:if(Ye=ct.payload,typeof Ye=="function"){Ee=Ye.call(Qt,Ee,fe);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=ct.payload,fe=typeof Ye=="function"?Ye.call(Qt,Ee,fe):Ye,fe==null)break e;Ee=v({},Ee,fe);break e;case 2:Ja=!0}}fe=C.callback,fe!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[fe]:pe.push(fe))}else pe={lane:fe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},xe===null?(re=xe=pe,V=Ee):xe=xe.next=pe,y|=fe;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;pe=C,C=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);xe===null&&(V=Ee),f.baseState=V,f.firstBaseUpdate=re,f.lastBaseUpdate=xe,d===null&&(f.shared.lanes=0),sr|=y,t.lanes=y,t.memoizedState=Ee}}function N0(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function L0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)N0(s[t],i)}var Ps=O(null),Ec=O(0);function U0(t,i){t=Ta,ne(Ec,t),ne(Ps,i),Ta=t|i.baseLanes}function gd(){ne(Ec,Ta),ne(Ps,Ps.current)}function vd(){Ta=Ec.current,Z(Ps),Z(Ec)}var fi=O(null),Ti=null;function nr(t){var i=t.alternate;ne(pn,pn.current&1),ne(fi,t),Ti===null&&(i===null||Ps.current!==null||i.memoizedState!==null)&&(Ti=t)}function _d(t){ne(pn,pn.current),ne(fi,t),Ti===null&&(Ti=t)}function O0(t){t.tag===22?(ne(pn,pn.current),ne(fi,t),Ti===null&&(Ti=t)):ir()}function ir(){ne(pn,pn.current),ne(fi,fi.current)}function di(t){Z(fi),Ti===t&&(Ti=null),Z(pn)}var pn=O(0);function Tc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Eh(s)||Th(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var va=0,vt=null,Kt=null,xn=null,Ac=!1,Is=!1,Wr=!1,wc=0,Jo=0,Fs=null,rE=0;function un(){throw Error(r(321))}function xd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ci(t[s],i[s]))return!1;return!0}function yd(t,i,s,l,f,d){return va=d,vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=t===null||t.memoizedState===null?vv:Pd,Wr=!1,d=s(l,f),Wr=!1,Is&&(d=I0(i,s,l,f)),P0(t),d}function P0(t){N.H=nl;var i=Kt!==null&&Kt.next!==null;if(va=0,xn=Kt=vt=null,Ac=!1,Jo=0,Fs=null,i)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&vc(t)&&(yn=!0))}function I0(t,i,s,l){vt=t;var f=0;do{if(Is&&(Fs=null),Jo=0,Is=!1,25<=f)throw Error(r(301));if(f+=1,xn=Kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=_v,d=i(s,l)}while(Is);return d}function sE(){var t=N.H,i=t.useState()[0];return i=typeof i.then=="function"?el(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(vt.flags|=1024),i}function Sd(){var t=wc!==0;return wc=0,t}function bd(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Md(t){if(Ac){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ac=!1}va=0,xn=Kt=vt=null,Is=!1,Jo=wc=0,Fs=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?vt.memoizedState=xn=t:xn=xn.next=t,xn}function mn(){if(Kt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=xn===null?vt.memoizedState:xn.next;if(i!==null)xn=i,Kt=t;else{if(t===null)throw vt.alternate===null?Error(r(467)):Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},xn===null?vt.memoizedState=xn=t:xn=xn.next=t}return xn}function Rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(t){var i=Jo;return Jo+=1,Fs===null&&(Fs=[]),t=A0(Fs,t,i),i=vt,(xn===null?i.memoizedState:xn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?vv:Pd),t}function Cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return el(t);if(t.$$typeof===F)return On(t)}throw Error(r(438,String(t)))}function Ed(t){var i=null,s=vt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=vt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Rc(),vt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=k;return i.index++,s}function _a(t,i){return typeof i=="function"?i(t):i}function Dc(t){var i=mn();return Td(i,Kt,t)}function Td(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var y=f.next;f.next=d.next,d.next=y}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var C=y=null,V=null,re=i,xe=!1;do{var Ee=re.lane&-536870913;if(Ee!==re.lane?(At&Ee)===Ee:(va&Ee)===Ee){var fe=re.revertLane;if(fe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ee===Ns&&(xe=!0);else if((va&fe)===fe){re=re.next,fe===Ns&&(xe=!0);continue}else Ee={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(C=V=Ee,y=d):V=V.next=Ee,vt.lanes|=fe,sr|=fe;Ee=re.action,Wr&&s(d,Ee),d=re.hasEagerState?re.eagerState:s(d,Ee)}else fe={lane:Ee,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(C=V=fe,y=d):V=V.next=fe,vt.lanes|=Ee,sr|=Ee;re=re.next}while(re!==null&&re!==i);if(V===null?y=d:V.next=C,!ci(d,t.memoizedState)&&(yn=!0,xe&&(s=Ls,s!==null)))throw s;t.memoizedState=d,t.baseState=y,t.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ad(t){var i=mn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do d=t(d,y.action),y=y.next;while(y!==f);ci(d,i.memoizedState)||(yn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function F0(t,i,s){var l=vt,f=mn(),d=Ct;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var y=!ci((Kt||f).memoizedState,s);if(y&&(f.memoizedState=s,yn=!0),f=f.queue,Cd(V0.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,zs(9,{destroy:void 0},B0.bind(null,l,f,s,i),null),Jt===null)throw Error(r(349));d||(va&127)!==0||z0(l,i,s)}return s}function z0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=vt.updateQueue,i===null?(i=Rc(),vt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function B0(t,i,s,l){i.value=s,i.getSnapshot=l,H0(i)&&G0(t)}function V0(t,i,s){return s(function(){H0(i)&&G0(t)})}function H0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ci(t,s)}catch{return!0}}function G0(t){var i=Ir(t,2);i!==null&&ti(i,t,2)}function wd(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),Wr){Le(!0);try{s()}finally{Le(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},i}function k0(t,i,s,l){return t.baseState=s,Td(t,Kt,typeof l=="function"?l:_a)}function oE(t,i,s,l,f){if(Uc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};N.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,X0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function X0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=N.T,y={};N.T=y;try{var C=s(f,l),V=N.S;V!==null&&V(y,C),W0(t,i,C)}catch(re){Rd(t,i,re)}finally{d!==null&&y.types!==null&&(d.types=y.types),N.T=d}}else try{d=s(f,l),W0(t,i,d)}catch(re){Rd(t,i,re)}}function W0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){j0(t,i,l)},function(l){return Rd(t,i,l)}):j0(t,i,s)}function j0(t,i,s){i.status="fulfilled",i.value=s,q0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,X0(t,s)))}function Rd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,q0(i),i=i.next;while(i!==l)}t.action=null}function q0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Y0(t,i){return i}function K0(t,i){if(Ct){var s=Jt.formState;if(s!==null){e:{var l=vt;if(Ct){if(tn){t:{for(var f=tn,d=Ei;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ai(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){tn=Ai(f.nextSibling),l=f.data==="F!";break e}}Qa(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y0,lastRenderedState:i},s.queue=l,s=pv.bind(null,vt,l),l.dispatch=s,l=wd(!1),d=Od.bind(null,vt,!1,l.queue),l=Wn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=oE.bind(null,vt,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Z0(t){var i=mn();return Q0(i,Kt,t)}function Q0(t,i,s){if(i=Td(t,i,Y0)[0],t=Dc(_a)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=el(i)}catch(y){throw y===Us?yc:y}else l=i;i=mn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(vt.flags|=2048,zs(9,{destroy:void 0},lE.bind(null,f,s),null)),[l,d,t]}function lE(t,i){t.action=i}function $0(t){var i=mn(),s=Kt;if(s!==null)return Q0(i,s,t);mn(),i=i.memoizedState,s=mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function zs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=vt.updateQueue,i===null&&(i=Rc(),vt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function J0(){return mn().memoizedState}function Nc(t,i,s,l){var f=Wn();vt.flags|=t,f.memoizedState=zs(1|i,{destroy:void 0},s,l===void 0?null:l)}function Lc(t,i,s,l){var f=mn();l=l===void 0?null:l;var d=f.memoizedState.inst;Kt!==null&&l!==null&&xd(l,Kt.memoizedState.deps)?f.memoizedState=zs(i,d,s,l):(vt.flags|=t,f.memoizedState=zs(1|i,d,s,l))}function ev(t,i){Nc(8390656,8,t,i)}function Cd(t,i){Lc(2048,8,t,i)}function cE(t){vt.flags|=4;var i=vt.updateQueue;if(i===null)i=Rc(),vt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function tv(t){var i=mn().memoizedState;return cE({ref:i,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function nv(t,i){return Lc(4,2,t,i)}function iv(t,i){return Lc(4,4,t,i)}function av(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function rv(t,i,s){s=s!=null?s.concat([t]):null,Lc(4,4,av.bind(null,i,t),s)}function Dd(){}function sv(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&xd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function ov(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&xd(i,l[1]))return l[0];if(l=t(),Wr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[l,i],l}function Nd(t,i,s){return s===void 0||(va&1073741824)!==0&&(At&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=l_(),vt.lanes|=t,sr|=t,s)}function lv(t,i,s,l){return ci(s,i)?s:Ps.current!==null?(t=Nd(t,s,l),ci(t,i)||(yn=!0),t):(va&42)===0||(va&1073741824)!==0&&(At&261930)===0?(yn=!0,t.memoizedState=s):(t=l_(),vt.lanes|=t,sr|=t,i)}function cv(t,i,s,l,f){var d=H.p;H.p=d!==0&&8>d?d:8;var y=N.T,C={};N.T=C,Od(t,!1,i,s);try{var V=f(),re=N.S;if(re!==null&&re(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var xe=aE(V,l);tl(t,i,xe,mi(t))}else tl(t,i,l,mi(t))}catch(Ee){tl(t,i,{then:function(){},status:"rejected",reason:Ee},mi())}finally{H.p=d,y!==null&&C.types!==null&&(y.types=C.types),N.T=y}}function uE(){}function Ld(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=uv(t).queue;cv(t,f,i,te,s===null?uE:function(){return fv(t),s(l)})}function uv(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:te},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function fv(t){var i=uv(t);i.next===null&&(i=t.alternate.memoizedState),tl(t,i.next.queue,{},mi())}function Ud(){return On(_l)}function dv(){return mn().memoizedState}function hv(){return mn().memoizedState}function fE(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=mi();t=er(s);var l=tr(i,t,s);l!==null&&(ti(l,i,s),Zo(l,i,s)),i={cache:ld()},t.payload=i;return}i=i.return}}function dE(t,i,s){var l=mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Uc(t)?mv(i,s):(s=Qf(t,i,s,l),s!==null&&(ti(s,t,l),gv(s,i,l)))}function pv(t,i,s){var l=mi();tl(t,i,s,l)}function tl(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Uc(t))mv(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,C=d(y,s);if(f.hasEagerState=!0,f.eagerState=C,ci(C,y))return hc(t,i,f,0),Jt===null&&dc(),!1}catch{}if(s=Qf(t,i,f,l),s!==null)return ti(s,t,l),gv(s,i,l),!0}return!1}function Od(t,i,s,l){if(l={lane:2,revertLane:dh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Uc(t)){if(i)throw Error(r(479))}else i=Qf(t,s,l,2),i!==null&&ti(i,t,2)}function Uc(t){var i=t.alternate;return t===vt||i!==null&&i===vt}function mv(t,i){Is=Ac=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function gv(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ri(t,s)}}var nl={readContext:On,use:Cc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};nl.useEffectEvent=un;var vv={readContext:On,use:Cc,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:On,useEffect:ev,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Nc(4194308,4,av.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Nc(4194308,4,t,i)},useInsertionEffect:function(t,i){Nc(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(Wr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var f=s(i);if(Wr){Le(!0);try{s(i)}finally{Le(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=dE.bind(null,vt,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=wd(t);var i=t.queue,s=pv.bind(null,vt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Dd,useDeferredValue:function(t,i){var s=Wn();return Nd(s,t,i)},useTransition:function(){var t=wd(!1);return t=cv.bind(null,vt,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=vt,f=Wn();if(Ct){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Jt===null)throw Error(r(349));(At&127)!==0||z0(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,ev(V0.bind(null,l,d,t),[t]),l.flags|=2048,zs(9,{destroy:void 0},B0.bind(null,l,d,s,i),null),s},useId:function(){var t=Wn(),i=Jt.identifierPrefix;if(Ct){var s=Zi,l=Ki;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=wc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=rE++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Ud,useFormState:K0,useActionState:K0,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Od.bind(null,vt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Ed,useCacheRefresh:function(){return Wn().memoizedState=fE.bind(null,vt)},useEffectEvent:function(t){var i=Wn(),s={impl:t};return i.memoizedState=s,function(){if((Ft&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Pd={readContext:On,use:Cc,useCallback:sv,useContext:On,useEffect:Cd,useImperativeHandle:rv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:Dc,useRef:J0,useState:function(){return Dc(_a)},useDebugValue:Dd,useDeferredValue:function(t,i){var s=mn();return lv(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Dc(_a)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:F0,useId:dv,useHostTransitionStatus:Ud,useFormState:Z0,useActionState:Z0,useOptimistic:function(t,i){var s=mn();return k0(s,Kt,t,i)},useMemoCache:Ed,useCacheRefresh:hv};Pd.useEffectEvent=tv;var _v={readContext:On,use:Cc,useCallback:sv,useContext:On,useEffect:Cd,useImperativeHandle:rv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:Ad,useRef:J0,useState:function(){return Ad(_a)},useDebugValue:Dd,useDeferredValue:function(t,i){var s=mn();return Kt===null?Nd(s,t,i):lv(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Ad(_a)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:F0,useId:dv,useHostTransitionStatus:Ud,useFormState:$0,useActionState:$0,useOptimistic:function(t,i){var s=mn();return Kt!==null?k0(s,Kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Ed,useCacheRefresh:hv};_v.useEffectEvent=tv;function Id(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Fd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=mi(),f=er(l);f.payload=i,s!=null&&(f.callback=s),i=tr(t,f,l),i!==null&&(ti(i,t,l),Zo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=mi(),f=er(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=tr(t,f,l),i!==null&&(ti(i,t,l),Zo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=mi(),l=er(s);l.tag=2,i!=null&&(l.callback=i),i=tr(t,l,s),i!==null&&(ti(i,t,s),Zo(i,t,s))}};function xv(t,i,s,l,f,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!Go(s,l)||!Go(f,d):!0}function yv(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Fd.enqueueReplaceState(i,i.state,null)}function jr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Sv(t){fc(t)}function bv(t){console.error(t)}function Mv(t){fc(t)}function Oc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ev(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function zd(t,i,s){return s=er(s),s.tag=3,s.payload={element:null},s.callback=function(){Oc(t,i)},s}function Tv(t){return t=er(t),t.tag=3,t}function Av(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){Ev(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Ev(i,s,l),typeof f!="function"&&(or===null?or=new Set([this]):or.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function hE(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ds(i,s,f,!0),s=fi.current,s!==null){switch(s.tag){case 31:case 13:return Ti===null?jc():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),ch(t,l,f)),!1;case 22:return s.flags|=65536,l===Sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),ch(t,l,f)),!1}throw Error(r(435,s.tag))}return ch(t,l,f),jc(),!1}if(Ct)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==id&&(t=Error(r(422),{cause:l}),Wo(Si(t,s)))):(l!==id&&(i=Error(r(423),{cause:l}),Wo(Si(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Si(l,s),f=zd(t.stateNode,l,f),pd(t,f),fn!==4&&(fn=2)),!1;var d=Error(r(520),{cause:l});if(d=Si(d,s),ul===null?ul=[d]:ul.push(d),fn!==4&&(fn=2),i===null)return!0;l=Si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=zd(s.stateNode,l,t),pd(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(or===null||!or.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Tv(f),Av(f,t,s,l),pd(s,f),!1}s=s.return}while(s!==null);return!1}var Bd=Error(r(461)),yn=!1;function Pn(t,i,s,l){i.child=t===null?D0(i,null,s,l):Xr(i,t.child,s,l)}function wv(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var y={};for(var C in l)C!=="ref"&&(y[C]=l[C])}else y=l;return Vr(i),l=yd(t,i,s,y,d,f),C=Sd(),t!==null&&!yn?(bd(t,i,f),xa(t,i,f)):(Ct&&C&&td(i),i.flags|=1,Pn(t,i,l,f),i.child)}function Rv(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!$f(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Cv(t,i,d,l,f)):(t=mc(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!qd(t,f)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:Go,s(y,l)&&t.ref===i.ref)return xa(t,i,f)}return i.flags|=1,t=ha(d,l),t.ref=i.ref,t.return=i,i.child=t}function Cv(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(Go(d,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=d,qd(t,f))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,xa(t,i,f)}return Vd(t,i,s,l,f)}function Dv(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Nv(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&xc(i,d!==null?d.cachePool:null),d!==null?U0(i,d):gd(),O0(i);else return l=i.lanes=536870912,Nv(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(xc(i,d.cachePool),U0(i,d),ir(),i.memoizedState=null):(t!==null&&xc(i,null),gd(),ir());return Pn(t,i,f,s),i.child}function il(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Nv(t,i,s,l,f){var d=ud();return d=d===null?null:{parent:_n._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&xc(i,null),gd(),O0(i),t!==null&&Ds(t,i,l,!0),i.childLanes=f,null}function Pc(t,i){return i=Fc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Lv(t,i,s){return Xr(i,t.child,null,s),t=Pc(i,i.pendingProps),t.flags|=2,di(i),i.memoizedState=null,t}function pE(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ct){if(l.mode==="hidden")return t=Pc(i,l),i.lanes=536870912,il(null,t);if(_d(i),(t=tn)?(t=X_(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=m0(t),s.return=i,i.child=s,Un=i,tn=null)):t=null,t===null)throw Qa(i);return i.lanes=536870912,null}return Pc(i,l)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(_d(i),f)if(i.flags&256)i.flags&=-257,i=Lv(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(yn||Ds(t,i,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=Jt,l!==null&&(y=si(l,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,Ir(t,y),ti(l,t,y),Bd;jc(),i=Lv(t,i,s)}else t=d.treeContext,tn=Ai(y.nextSibling),Un=i,Ct=!0,Za=null,Ei=!1,t!==null&&_0(i,t),i=Pc(i,l),i.flags|=4096;return i}return t=ha(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Ic(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Vd(t,i,s,l,f){return Vr(i),s=yd(t,i,s,l,void 0,f),l=Sd(),t!==null&&!yn?(bd(t,i,f),xa(t,i,f)):(Ct&&l&&td(i),i.flags|=1,Pn(t,i,s,f),i.child)}function Uv(t,i,s,l,f,d){return Vr(i),i.updateQueue=null,s=I0(i,l,s,f),P0(t),l=Sd(),t!==null&&!yn?(bd(t,i,d),xa(t,i,d)):(Ct&&l&&td(i),i.flags|=1,Pn(t,i,s,d),i.child)}function Ov(t,i,s,l,f){if(Vr(i),i.stateNode===null){var d=As,y=s.contextType;typeof y=="object"&&y!==null&&(d=On(y)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Fd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},dd(i),y=s.contextType,d.context=typeof y=="object"&&y!==null?On(y):As,d.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Id(i,s,y,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Fd.enqueueReplaceState(d,d.state,null),$o(i,l,d,f),Qo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,V=jr(s,C);d.props=V;var re=d.context,xe=s.contextType;y=As,typeof xe=="object"&&xe!==null&&(y=On(xe));var Ee=s.getDerivedStateFromProps;xe=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||re!==y)&&yv(i,d,l,y),Ja=!1;var fe=i.memoizedState;d.state=fe,$o(i,l,d,f),Qo(),re=i.memoizedState,C||fe!==re||Ja?(typeof Ee=="function"&&(Id(i,s,Ee,l),re=i.memoizedState),(V=Ja||xv(i,s,V,l,fe,re,y))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=re),d.props=l,d.state=re,d.context=y,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,hd(t,i),y=i.memoizedProps,xe=jr(s,y),d.props=xe,Ee=i.pendingProps,fe=d.context,re=s.contextType,V=As,typeof re=="object"&&re!==null&&(V=On(re)),C=s.getDerivedStateFromProps,(re=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Ee||fe!==V)&&yv(i,d,l,V),Ja=!1,fe=i.memoizedState,d.state=fe,$o(i,l,d,f),Qo();var pe=i.memoizedState;y!==Ee||fe!==pe||Ja||t!==null&&t.dependencies!==null&&vc(t.dependencies)?(typeof C=="function"&&(Id(i,s,C,l),pe=i.memoizedState),(xe=Ja||xv(i,s,xe,l,fe,pe,V)||t!==null&&t.dependencies!==null&&vc(t.dependencies))?(re||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,pe,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,pe,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=pe),d.props=l,d.state=pe,d.context=V,l=xe):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ic(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Xr(i,t.child,null,f),i.child=Xr(i,null,s,f)):Pn(t,i,s,f),i.memoizedState=d.state,t=i.child):t=xa(t,i,f),t}function Pv(t,i,s,l){return zr(),i.flags|=256,Pn(t,i,s,l),i.child}var Hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gd(t){return{baseLanes:t,cachePool:E0()}}function kd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=pi),t}function Iv(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ct){if(f?nr(i):ir(),(t=tn)?(t=X_(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=m0(t),s.return=i,i.child=s,Un=i,tn=null)):t=null,t===null)throw Qa(i);return Th(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(ir(),f=i.mode,C=Fc({mode:"hidden",children:C},f),l=Fr(l,f,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=Gd(s),l.childLanes=kd(t,y,s),i.memoizedState=Hd,il(null,l)):(nr(i),Xd(i,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(d)i.flags&256?(nr(i),i.flags&=-257,i=Wd(t,i,s)):i.memoizedState!==null?(ir(),i.child=t.child,i.flags|=128,i=null):(ir(),C=l.fallback,f=i.mode,l=Fc({mode:"visible",children:l.children},f),C=Fr(C,f,s,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Xr(i,t.child,null,s),l=i.child,l.memoizedState=Gd(s),l.childLanes=kd(t,y,s),i.memoizedState=Hd,i=il(null,l));else if(nr(i),Th(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var re=y.dgst;y=re,l=Error(r(419)),l.stack="",l.digest=y,Wo({value:l,source:null,stack:null}),i=Wd(t,i,s)}else if(yn||Ds(t,i,s,!1),y=(s&t.childLanes)!==0,yn||y){if(y=Jt,y!==null&&(l=si(y,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Ir(t,l),ti(y,t,l),Bd;Eh(C)||jc(),i=Wd(t,i,s)}else Eh(C)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,tn=Ai(C.nextSibling),Un=i,Ct=!0,Za=null,Ei=!1,t!==null&&_0(i,t),i=Xd(i,l.children),i.flags|=4096);return i}return f?(ir(),C=l.fallback,f=i.mode,V=t.child,re=V.sibling,l=ha(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,re!==null?C=ha(re,C):(C=Fr(C,f,s,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,il(null,l),l=i.child,C=t.child.memoizedState,C===null?C=Gd(s):(f=C.cachePool,f!==null?(V=_n._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=E0(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=kd(t,y,s),i.memoizedState=Hd,il(t.child,l)):(nr(i),s=t.child,t=s.sibling,s=ha(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function Xd(t,i){return i=Fc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Fc(t,i){return t=ui(22,t,null,i),t.lanes=0,t}function Wd(t,i,s){return Xr(i,t.child,null,s),t=Xd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Fv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),sd(t.return,i,s)}function jd(t,i,s,l,f,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=d)}function zv(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var y=pn.current,C=(y&2)!==0;if(C?(y=y&1|2,i.flags|=128):y&=1,ne(pn,y),Pn(t,i,l,s),l=Ct?Xo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fv(t,s,i);else if(t.tag===19)Fv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Tc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),jd(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Tc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}jd(i,!0,s,null,d,l);break;case"together":jd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function xa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),sr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Ds(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ha(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ha(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function qd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&vc(t)))}function mE(t,i,s){switch(i.tag){case 3:ye(i,i.stateNode.containerInfo),$a(i,_n,t.memoizedState.cache),zr();break;case 27:case 5:ot(i);break;case 4:ye(i,i.stateNode.containerInfo);break;case 10:$a(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,_d(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(nr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Iv(t,i,s):(nr(i),t=xa(t,i,s),t!==null?t.sibling:null);nr(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ds(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return zv(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne(pn,pn.current),l)break;return null;case 22:return i.lanes=0,Dv(t,i,s,i.pendingProps);case 24:$a(i,_n,t.memoizedState.cache)}return xa(t,i,s)}function Bv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!qd(t,s)&&(i.flags&128)===0)return yn=!1,mE(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Ct&&(i.flags&1048576)!==0&&v0(i,Xo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Gr(i.elementType),i.type=t,typeof t=="function")$f(t)?(l=jr(t,l),i.tag=1,i=Ov(null,i,t,l,s)):(i.tag=0,i=Vd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===A){i.tag=11,i=wv(null,i,t,l,s);break e}else if(f===B){i.tag=14,i=Rv(null,i,t,l,s);break e}}throw i=me(t)||t,Error(r(306,i,""))}}return i;case 0:return Vd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=jr(l,i.pendingProps),Ov(t,i,l,f,s);case 3:e:{if(ye(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,hd(t,i),$o(i,l,null,s);var y=i.memoizedState;if(l=y.cache,$a(i,_n,l),l!==d.cache&&od(i,[_n],s,!0),Qo(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Pv(t,i,l,s);break e}else if(l!==f){f=Si(Error(r(424)),i),Wo(f),i=Pv(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,tn=Ai(t.firstChild),Un=i,Ct=!0,Za=null,Ei=!0,s=D0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(zr(),l===f){i=xa(t,i,s);break e}Pn(t,i,l,s)}i=i.child}return i;case 26:return Ic(t,i),t===null?(s=Z_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ct||(s=i.type,t=i.pendingProps,l=Jc(X.current).createElement(s),l[gn]=i,l[Ln]=t,In(l,s,t),vn(l),i.stateNode=l):i.memoizedState=Z_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ot(i),t===null&&Ct&&(l=i.stateNode=q_(i.type,i.pendingProps,X.current),Un=i,Ei=!0,f=tn,fr(i.type)?(Ah=f,tn=Ai(l.firstChild)):tn=f),Pn(t,i,i.pendingProps.children,s),Ic(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ct&&((f=l=tn)&&(l=WE(l,i.type,i.pendingProps,Ei),l!==null?(i.stateNode=l,Un=i,tn=Ai(l.firstChild),Ei=!1,f=!0):f=!1),f||Qa(i)),ot(i),f=i.type,d=i.pendingProps,y=t!==null?t.memoizedProps:null,l=d.children,Sh(f,d)?l=null:y!==null&&Sh(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=yd(t,i,sE,null,null,s),_l._currentValue=f),Ic(t,i),Pn(t,i,l,s),i.child;case 6:return t===null&&Ct&&((t=s=tn)&&(s=jE(s,i.pendingProps,Ei),s!==null?(i.stateNode=s,Un=i,tn=null,t=!0):t=!1),t||Qa(i)),null;case 13:return Iv(t,i,s);case 4:return ye(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Xr(i,null,l,s):Pn(t,i,l,s),i.child;case 11:return wv(t,i,i.type,i.pendingProps,s);case 7:return Pn(t,i,i.pendingProps,s),i.child;case 8:return Pn(t,i,i.pendingProps.children,s),i.child;case 12:return Pn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,$a(i,i.type,l.value),Pn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Vr(i),f=On(f),l=l(f),i.flags|=1,Pn(t,i,l,s),i.child;case 14:return Rv(t,i,i.type,i.pendingProps,s);case 15:return Cv(t,i,i.type,i.pendingProps,s);case 19:return zv(t,i,s);case 31:return pE(t,i,s);case 22:return Dv(t,i,s,i.pendingProps);case 24:return Vr(i),l=On(_n),t===null?(f=ud(),f===null&&(f=Jt,d=ld(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},dd(i),$a(i,_n,f)):((t.lanes&s)!==0&&(hd(t,i),$o(i,null,null,s),Qo()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),$a(i,_n,l)):(l=d.cache,$a(i,_n,l),l!==f.cache&&od(i,[_n],s,!0))),Pn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ya(t){t.flags|=4}function Yd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(d_())t.flags|=8192;else throw kr=Sc,fd}else t.flags&=-16777217}function Vv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tx(i))if(d_())t.flags|=8192;else throw kr=Sc,fd}function zc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ae():536870912,t.lanes|=i,Gs|=i)}function al(t,i){if(!Ct)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function gE(t,i,s){var l=i.pendingProps;switch(nd(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(i),null;case 1:return nn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ga(_n),Pe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Cs(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ad())),nn(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(ya(i),d!==null?(nn(i),Vv(i,d)):(nn(i),Yd(i,f,null,l,s))):d?d!==t.memoizedState?(ya(i),nn(i),Vv(i,d)):(nn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),nn(i),Yd(i,f,t,l,s)),null;case 27:if(Ke(i),s=X.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return nn(i),null}t=be.current,Cs(i)?x0(i):(t=q_(f,l,s),i.stateNode=t,ya(i))}return nn(i),null;case 5:if(Ke(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return nn(i),null}if(d=be.current,Cs(i))x0(i);else{var y=Jc(X.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}d[gn]=i,d[Ln]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;e:switch(In(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return nn(i),Yd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=X.current,Cs(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Un,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||I_(t.nodeValue,s)),t||Qa(i,!0)}else t=Jc(t).createTextNode(l),t[gn]=i,i.stateNode=t}return nn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Cs(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[gn]=i}else zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),t=!1}else s=ad(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(di(i),i):(di(i),null);if((i.flags&128)!==0)throw Error(r(558))}return nn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Cs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gn]=i}else zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),f=!1}else f=ad(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(di(i),i):(di(i),null)}return di(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),zc(i,i.updateQueue),nn(i),null);case 4:return Pe(),t===null&&gh(i.stateNode.containerInfo),nn(i),null;case 10:return ga(i.type),nn(i),null;case 19:if(Z(pn),l=i.memoizedState,l===null)return nn(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)al(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Tc(t),d!==null){for(i.flags|=128,al(l,!1),t=d.updateQueue,i.updateQueue=t,zc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)p0(s,t),s=s.sibling;return ne(pn,pn.current&1|2),Ct&&pa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&bt()>kc&&(i.flags|=128,f=!0,al(l,!1),i.lanes=4194304)}else{if(!f)if(t=Tc(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,zc(i,t),al(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ct)return nn(i),null}else 2*bt()-l.renderingStartTime>kc&&s!==536870912&&(i.flags|=128,f=!0,al(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=bt(),t.sibling=null,s=pn.current,ne(pn,f?s&1|2:s&1),Ct&&pa(i,l.treeForkCount),t):(nn(i),null);case 22:case 23:return di(i),vd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(nn(i),i.subtreeFlags&6&&(i.flags|=8192)):nn(i),s=i.updateQueue,s!==null&&zc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Z(Hr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ga(_n),nn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function vE(t,i){switch(nd(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ga(_n),Pe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ke(i),null;case 31:if(i.memoizedState!==null){if(di(i),i.alternate===null)throw Error(r(340));zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(di(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Z(pn),null;case 4:return Pe(),null;case 10:return ga(i.type),null;case 22:case 23:return di(i),vd(),t!==null&&Z(Hr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ga(_n),null;case 25:return null;default:return null}}function Hv(t,i){switch(nd(i),i.tag){case 3:ga(_n),Pe();break;case 26:case 27:case 5:Ke(i);break;case 4:Pe();break;case 31:i.memoizedState!==null&&di(i);break;case 13:di(i);break;case 19:Z(pn);break;case 10:ga(i.type);break;case 22:case 23:di(i),vd(),t!==null&&Z(Hr);break;case 24:ga(_n)}}function rl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,y=s.inst;l=d(),y.destroy=l}s=s.next}while(s!==f)}}catch(C){qt(i,i.return,C)}}function ar(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var y=l.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,f=i;var V=s,re=C;try{re()}catch(xe){qt(f,V,xe)}}}l=l.next}while(l!==d)}}catch(xe){qt(i,i.return,xe)}}function Gv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{L0(i,s)}catch(l){qt(t,t.return,l)}}}function kv(t,i,s){s.props=jr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function sl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,i,f)}}function Qi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,i,f)}else s.current=null}function Xv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function Kd(t,i,s){try{var l=t.stateNode;BE(l,t.type,s,i),l[Ln]=i}catch(f){qt(t,t.return,f)}}function Wv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fr(t.type)||t.tag===4}function Zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(l===27&&fr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Qd(t,i,s),t=t.sibling;t!==null;)Qd(t,i,s),t=t.sibling}function Bc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&fr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Bc(t,i,s),t=t.sibling;t!==null;)Bc(t,i,s),t=t.sibling}function jv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);In(i,l,s),i[gn]=t,i[Ln]=s}catch(d){qt(t,t.return,d)}}var Sa=!1,Sn=!1,$d=!1,qv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function _E(t,i){if(t=t.containerInfo,xh=su,t=r0(t),Wf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var y=0,C=-1,V=-1,re=0,xe=0,Ee=t,fe=null;t:for(;;){for(var pe;Ee!==s||f!==0&&Ee.nodeType!==3||(C=y+f),Ee!==d||l!==0&&Ee.nodeType!==3||(V=y+l),Ee.nodeType===3&&(y+=Ee.nodeValue.length),(pe=Ee.firstChild)!==null;)fe=Ee,Ee=pe;for(;;){if(Ee===t)break t;if(fe===s&&++re===f&&(C=y),fe===d&&++xe===l&&(V=y),(pe=Ee.nextSibling)!==null)break;Ee=fe,fe=Ee.parentNode}Ee=pe}s=C===-1||V===-1?null:{start:C,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(yh={focusedElem:t,selectionRange:s},su=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Ye=jr(s.type,f);t=l.getSnapshotBeforeUpdate(Ye,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ct){qt(s,s.return,ct)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Mh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function Yv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(t,s),l&4&&rl(5,s);break;case 1:if(Ma(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){qt(s,s.return,y)}else{var f=jr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){qt(s,s.return,y)}}l&64&&Gv(s),l&512&&sl(s,s.return);break;case 3:if(Ma(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{L0(t,i)}catch(y){qt(s,s.return,y)}}break;case 27:i===null&&l&4&&jv(s);case 26:case 5:Ma(t,s),i===null&&l&4&&Xv(s),l&512&&sl(s,s.return);break;case 12:Ma(t,s);break;case 31:Ma(t,s),l&4&&Qv(t,s);break;case 13:Ma(t,s),l&4&&$v(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=wE.bind(null,s),qE(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||Sn,f=Sa;var d=Sn;Sa=l,(Sn=i)&&!d?Ea(t,s,(s.subtreeFlags&8772)!==0):Ma(t,s),Sa=f,Sn=d}break;case 30:break;default:Ma(t,s)}}function Kv(t){var i=t.alternate;i!==null&&(t.alternate=null,Kv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Wa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,Qn=!1;function ba(t,i,s){for(s=s.child;s!==null;)Zv(t,i,s),s=s.sibling}function Zv(t,i,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:Sn||Qi(s,i),ba(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Sn||Qi(s,i);var l=ln,f=Qn;fr(s.type)&&(ln=s.stateNode,Qn=!1),ba(t,i,s),ml(s.stateNode),ln=l,Qn=f;break;case 5:Sn||Qi(s,i);case 6:if(l=ln,f=Qn,ln=null,ba(t,i,s),ln=l,Qn=f,ln!==null)if(Qn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(d){qt(s,i,d)}else try{ln.removeChild(s.stateNode)}catch(d){qt(s,i,d)}break;case 18:ln!==null&&(Qn?(t=ln,G_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Zs(t)):G_(ln,s.stateNode));break;case 4:l=ln,f=Qn,ln=s.stateNode.containerInfo,Qn=!0,ba(t,i,s),ln=l,Qn=f;break;case 0:case 11:case 14:case 15:ar(2,s,i),Sn||ar(4,s,i),ba(t,i,s);break;case 1:Sn||(Qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&kv(s,i,l)),ba(t,i,s);break;case 21:ba(t,i,s);break;case 22:Sn=(l=Sn)||s.memoizedState!==null,ba(t,i,s),Sn=l;break;default:ba(t,i,s)}}function Qv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Zs(t)}catch(s){qt(i,i.return,s)}}}function $v(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zs(t)}catch(s){qt(i,i.return,s)}}function xE(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new qv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new qv),i;default:throw Error(r(435,t.tag))}}function Vc(t,i){var s=xE(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=RE.bind(null,t,l);l.then(f,f)}})}function $n(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,y=i,C=y;e:for(;C!==null;){switch(C.tag){case 27:if(fr(C.type)){ln=C.stateNode,Qn=!1;break e}break;case 5:ln=C.stateNode,Qn=!1;break e;case 3:case 4:ln=C.stateNode.containerInfo,Qn=!0;break e}C=C.return}if(ln===null)throw Error(r(160));Zv(d,y,f),ln=null,Qn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Jv(i,t),i=i.sibling}var Ii=null;function Jv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(i,t),Jn(t),l&4&&(ar(3,t,t.return),rl(3,t),ar(5,t,t.return));break;case 1:$n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if($n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Xa]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),In(d,l,s),d[gn]=t,vn(d),l=d;break e;case"link":var y=J_("link","href",f).get(l+(s.href||""));if(y){for(var C=0;C<y.length;C++)if(d=y[C],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(C,1);break t}}d=f.createElement(l),In(d,l,s),f.head.appendChild(d);break;case"meta":if(y=J_("meta","content",f).get(l+(s.content||""))){for(C=0;C<y.length;C++)if(d=y[C],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(C,1);break t}}d=f.createElement(l),In(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[gn]=t,vn(d),l=d}t.stateNode=l}else ex(f,t.type,t.stateNode);else t.stateNode=$_(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?ex(f,t.type,t.stateNode):$_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Kd(t,t.memoizedProps,s.memoizedProps)}break;case 27:$n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),s!==null&&l&4&&Kd(t,t.memoizedProps,s.memoizedProps);break;case 5:if($n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),t.flags&32){f=t.stateNode;try{li(f,"")}catch(Ye){qt(t,t.return,Ye)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Kd(t,f,s!==null?s.memoizedProps:f)),l&1024&&($d=!0);break;case 6:if($n(i,t),Jn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ye){qt(t,t.return,Ye)}}break;case 3:if(nu=null,f=Ii,Ii=eu(i.containerInfo),$n(i,t),Ii=f,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(Ye){qt(t,t.return,Ye)}$d&&($d=!1,e_(t));break;case 4:l=Ii,Ii=eu(t.stateNode.containerInfo),$n(i,t),Jn(t),Ii=l;break;case 12:$n(i,t),Jn(t);break;case 31:$n(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 13:$n(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Gc=bt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,re=Sa,xe=Sn;if(Sa=re||f,Sn=xe||V,$n(i,t),Sn=xe,Sa=re,Jn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||Sa||Sn||qr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,f)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=V.stateNode;var Ee=V.memoizedProps.style,fe=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;C.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Ye){qt(V,V.return,Ye)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Ye){qt(V,V.return,Ye)}}}else if(i.tag===18){if(s===null){V=i;try{var pe=V.stateNode;f?k_(pe,!0):k_(V.stateNode,!1)}catch(Ye){qt(V,V.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Vc(t,s))));break;case 19:$n(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 30:break;case 21:break;default:$n(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Wv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=Zd(t);Bc(t,d,f);break;case 5:var y=s.stateNode;s.flags&32&&(li(y,""),s.flags&=-33);var C=Zd(t);Bc(t,C,y);break;case 3:case 4:var V=s.stateNode.containerInfo,re=Zd(t);Qd(t,re,V);break;default:throw Error(r(161))}}catch(xe){qt(t,t.return,xe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function e_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;e_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ma(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Yv(t,i.alternate,i),i=i.sibling}function qr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ar(4,i,i.return),qr(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&kv(i,i.return,s),qr(i);break;case 27:ml(i.stateNode);case 26:case 5:Qi(i,i.return),qr(i);break;case 22:i.memoizedState===null&&qr(i);break;case 30:qr(i);break;default:qr(i)}t=t.sibling}}function Ea(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ea(f,d,s),rl(4,d);break;case 1:if(Ea(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){qt(l,l.return,re)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)N0(V[f],C)}catch(re){qt(l,l.return,re)}}s&&y&64&&Gv(d),sl(d,d.return);break;case 27:jv(d);case 26:case 5:Ea(f,d,s),s&&l===null&&y&4&&Xv(d),sl(d,d.return);break;case 12:Ea(f,d,s);break;case 31:Ea(f,d,s),s&&y&4&&Qv(f,d);break;case 13:Ea(f,d,s),s&&y&4&&$v(f,d);break;case 22:d.memoizedState===null&&Ea(f,d,s),sl(d,d.return);break;case 30:break;default:Ea(f,d,s)}i=i.sibling}}function Jd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&jo(s))}function eh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&jo(t))}function Fi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)t_(t,i,s,l),i=i.sibling}function t_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i,s,l),f&2048&&rl(9,i);break;case 1:Fi(t,i,s,l);break;case 3:Fi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&jo(t)));break;case 12:if(f&2048){Fi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,y=d.id,C=d.onPostCommit;typeof C=="function"&&C(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){qt(i,i.return,V)}}else Fi(t,i,s,l);break;case 31:Fi(t,i,s,l);break;case 13:Fi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Fi(t,i,s,l):ol(t,i):d._visibility&2?Fi(t,i,s,l):(d._visibility|=2,Bs(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Jd(y,i);break;case 24:Fi(t,i,s,l),f&2048&&eh(i.alternate,i);break;default:Fi(t,i,s,l)}}function Bs(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,y=i,C=s,V=l,re=y.flags;switch(y.tag){case 0:case 11:case 15:Bs(d,y,C,V,f),rl(8,y);break;case 23:break;case 22:var xe=y.stateNode;y.memoizedState!==null?xe._visibility&2?Bs(d,y,C,V,f):ol(d,y):(xe._visibility|=2,Bs(d,y,C,V,f)),f&&re&2048&&Jd(y.alternate,y);break;case 24:Bs(d,y,C,V,f),f&&re&2048&&eh(y.alternate,y);break;default:Bs(d,y,C,V,f)}i=i.sibling}}function ol(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:ol(s,l),f&2048&&Jd(l.alternate,l);break;case 24:ol(s,l),f&2048&&eh(l.alternate,l);break;default:ol(s,l)}i=i.sibling}}var ll=8192;function Vs(t,i,s){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)n_(t,i,s),t=t.sibling}function n_(t,i,s){switch(t.tag){case 26:Vs(t,i,s),t.flags&ll&&t.memoizedState!==null&&rT(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:Vs(t,i,s);break;case 3:case 4:var l=Ii;Ii=eu(t.stateNode.containerInfo),Vs(t,i,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ll,ll=16777216,Vs(t,i,s),ll=l):Vs(t,i,s));break;default:Vs(t,i,s)}}function i_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function cl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,r_(l,t)}i_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a_(t),t=t.sibling}function a_(t){switch(t.tag){case 0:case 11:case 15:cl(t),t.flags&2048&&ar(9,t,t.return);break;case 3:cl(t);break;case 12:cl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Hc(t)):cl(t);break;default:cl(t)}}function Hc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,r_(l,t)}i_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ar(8,i,i.return),Hc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Hc(i));break;default:Hc(i)}t=t.sibling}}function r_(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:ar(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Rn=l;else e:for(s=t;Rn!==null;){l=Rn;var f=l.sibling,d=l.return;if(Kv(l),l===s){Rn=null;break e}if(f!==null){f.return=d,Rn=f;break e}Rn=d}}}var yE={getCacheForType:function(t){var i=On(_n),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return On(_n).controller.signal}},SE=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Jt=null,Et=null,At=0,jt=0,hi=null,rr=!1,Hs=!1,th=!1,Ta=0,fn=0,sr=0,Yr=0,nh=0,pi=0,Gs=0,ul=null,ei=null,ih=!1,Gc=0,s_=0,kc=1/0,Xc=null,or=null,Tn=0,lr=null,ks=null,Aa=0,ah=0,rh=null,o_=null,fl=0,sh=null;function mi(){return(Ft&2)!==0&&At!==0?At&-At:N.T!==null?dh():Oo()}function l_(){if(pi===0)if((At&536870912)===0||Ct){var t=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function ti(t,i,s){(t===Jt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(Xs(t,0),cr(t,At,pi,!1)),We(t,s),((Ft&2)===0||t!==Jt)&&(t===Jt&&((Ft&2)===0&&(Yr|=s),fn===4&&cr(t,At,pi,!1)),$i(t))}function c_(t,i,s){if((Ft&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Oe(t,i),f=l?EE(t,i):lh(t,i,!0),d=l;do{if(f===0){Hs&&!l&&cr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!bE(s)){f=lh(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var C=t;f=ul;var V=C.current.memoizedState.isDehydrated;if(V&&(Xs(C,y).flags|=256),y=lh(C,y,!1),y!==2){if(th&&!V){C.errorRecoveryDisabledLanes|=d,Yr|=d,f=4;break e}d=ei,ei=f,d!==null&&(ei===null?ei=d:ei.push.apply(ei,d))}f=y}if(d=!1,f!==2)continue}}if(f===1){Xs(t,0),cr(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:cr(l,i,pi,!rr);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Gc+300-bt(),10<f)){if(cr(l,i,pi,!rr),Se(l,0,!0)!==0)break e;Aa=i,l.timeoutHandle=V_(u_.bind(null,l,s,ei,Xc,ih,i,pi,Yr,Gs,rr,d,"Throttled",-0,0),f);break e}u_(l,s,ei,Xc,ih,i,pi,Yr,Gs,rr,d,null,-0,0)}}break}while(!0);$i(t)}function u_(t,i,s,l,f,d,y,C,V,re,xe,Ee,fe,pe){if(t.timeoutHandle=-1,Ee=i.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},n_(i,d,Ee);var Ye=(d&62914560)===d?Gc-bt():(d&4194048)===d?s_-bt():0;if(Ye=sT(Ee,Ye),Ye!==null){Aa=d,t.cancelPendingCommit=Ye(__.bind(null,t,i,d,s,l,f,y,C,V,xe,Ee,null,fe,pe)),cr(t,d,y,!re);return}}__(t,i,d,s,l,f,y,C,V)}function bE(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ci(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i,s,l){i&=~nh,i&=~Yr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Ge(f),y=1<<d;l[d]=-1,f&=~y}s!==0&&Gt(t,s,i)}function Wc(){return(Ft&6)===0?(dl(0),!1):!0}function oh(){if(Et!==null){if(jt===0)var t=Et.return;else t=Et,ma=Br=null,Md(t),Os=null,Yo=0,t=Et;for(;t!==null;)Hv(t.alternate,t),t=t.return;Et=null}}function Xs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,GE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Aa=0,oh(),Jt=t,Et=s=ha(t.current,null),At=i,jt=0,hi=null,rr=!1,Hs=Oe(t,i),th=!1,Gs=pi=nh=Yr=sr=fn=0,ei=ul=null,ih=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ge(l),d=1<<f;i|=t[f],l&=~d}return Ta=i,dc(),s}function f_(t,i){vt=null,N.H=nl,i===Us||i===yc?(i=w0(),jt=3):i===fd?(i=w0(),jt=4):jt=i===Bd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hi=i,Et===null&&(fn=1,Oc(t,Si(i,t.current)))}function d_(){var t=fi.current;return t===null?!0:(At&4194048)===At?Ti===null:(At&62914560)===At||(At&536870912)!==0?t===Ti:!1}function h_(){var t=N.H;return N.H=nl,t===null?nl:t}function p_(){var t=N.A;return N.A=yE,t}function jc(){fn=4,rr||(At&4194048)!==At&&fi.current!==null||(Hs=!0),(sr&134217727)===0&&(Yr&134217727)===0||Jt===null||cr(Jt,At,pi,!1)}function lh(t,i,s){var l=Ft;Ft|=2;var f=h_(),d=p_();(Jt!==t||At!==i)&&(Xc=null,Xs(t,i)),i=!1;var y=fn;e:do try{if(jt!==0&&Et!==null){var C=Et,V=hi;switch(jt){case 8:oh(),y=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var re=jt;if(jt=0,hi=null,Ws(t,C,V,re),s&&Hs){y=0;break e}break;default:re=jt,jt=0,hi=null,Ws(t,C,V,re)}}ME(),y=fn;break}catch(xe){f_(t,xe)}while(!0);return i&&t.shellSuspendCounter++,ma=Br=null,Ft=l,N.H=f,N.A=d,Et===null&&(Jt=null,At=0,dc()),y}function ME(){for(;Et!==null;)m_(Et)}function EE(t,i){var s=Ft;Ft|=2;var l=h_(),f=p_();Jt!==t||At!==i?(Xc=null,kc=bt()+500,Xs(t,i)):Hs=Oe(t,i);e:do try{if(jt!==0&&Et!==null){i=Et;var d=hi;t:switch(jt){case 1:jt=0,hi=null,Ws(t,i,d,1);break;case 2:case 9:if(T0(d)){jt=0,hi=null,g_(i);break}i=function(){jt!==2&&jt!==9||Jt!==t||(jt=7),$i(t)},d.then(i,i);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:T0(d)?(jt=0,hi=null,g_(i)):(jt=0,hi=null,Ws(t,i,d,7));break;case 5:var y=null;switch(Et.tag){case 26:y=Et.memoizedState;case 5:case 27:var C=Et;if(y?tx(y):C.stateNode.complete){jt=0,hi=null;var V=C.sibling;if(V!==null)Et=V;else{var re=C.return;re!==null?(Et=re,qc(re)):Et=null}break t}}jt=0,hi=null,Ws(t,i,d,5);break;case 6:jt=0,hi=null,Ws(t,i,d,6);break;case 8:oh(),fn=6;break e;default:throw Error(r(462))}}TE();break}catch(xe){f_(t,xe)}while(!0);return ma=Br=null,N.H=l,N.A=f,Ft=s,Et!==null?0:(Jt=null,At=0,dc(),fn)}function TE(){for(;Et!==null&&!St();)m_(Et)}function m_(t){var i=Bv(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,i===null?qc(t):Et=i}function g_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Uv(s,i,i.pendingProps,i.type,void 0,At);break;case 11:i=Uv(s,i,i.pendingProps,i.type.render,i.ref,At);break;case 5:Md(i);default:Hv(s,i),i=Et=p0(i,Ta),i=Bv(s,i,Ta)}t.memoizedProps=t.pendingProps,i===null?qc(t):Et=i}function Ws(t,i,s,l){ma=Br=null,Md(i),Os=null,Yo=0;var f=i.return;try{if(hE(t,f,i,s,At)){fn=1,Oc(t,Si(s,t.current)),Et=null;return}}catch(d){if(f!==null)throw Et=f,d;fn=1,Oc(t,Si(s,t.current)),Et=null;return}i.flags&32768?(Ct||l===1?t=!0:Hs||(At&536870912)!==0?t=!1:(rr=t=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),v_(i,t)):qc(i)}function qc(t){var i=t;do{if((i.flags&32768)!==0){v_(i,rr);return}t=i.return;var s=gE(i.alternate,i,Ta);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);fn===0&&(fn=5)}function v_(t,i){do{var s=vE(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);fn=6,Et=null}function __(t,i,s,l,f,d,y,C,V){t.cancelPendingCommit=null;do Yc();while(Tn!==0);if((Ft&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Zf,rn(t,s,d,y,C,V),t===Jt&&(Et=Jt=null,At=0),ks=i,lr=t,Aa=s,ah=d,rh=f,o_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,CE(Q,function(){return M_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,f=H.p,H.p=2,y=Ft,Ft|=4;try{_E(t,i,s)}finally{Ft=y,H.p=f,N.T=l}}Tn=1,x_(),y_(),S_()}}function x_(){if(Tn===1){Tn=0;var t=lr,i=ks,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var l=H.p;H.p=2;var f=Ft;Ft|=4;try{Jv(i,t);var d=yh,y=r0(t.containerInfo),C=d.focusedElem,V=d.selectionRange;if(y!==C&&C&&C.ownerDocument&&a0(C.ownerDocument.documentElement,C)){if(V!==null&&Wf(C)){var re=V.start,xe=V.end;if(xe===void 0&&(xe=re),"selectionStart"in C)C.selectionStart=re,C.selectionEnd=Math.min(xe,C.value.length);else{var Ee=C.ownerDocument||document,fe=Ee&&Ee.defaultView||window;if(fe.getSelection){var pe=fe.getSelection(),Ye=C.textContent.length,ct=Math.min(V.start,Ye),Qt=V.end===void 0?ct:Math.min(V.end,Ye);!pe.extend&&ct>Qt&&(y=Qt,Qt=ct,ct=y);var $=i0(C,ct),j=i0(C,Qt);if($&&j&&(pe.rangeCount!==1||pe.anchorNode!==$.node||pe.anchorOffset!==$.offset||pe.focusNode!==j.node||pe.focusOffset!==j.offset)){var ae=Ee.createRange();ae.setStart($.node,$.offset),pe.removeAllRanges(),ct>Qt?(pe.addRange(ae),pe.extend(j.node,j.offset)):(ae.setEnd(j.node,j.offset),pe.addRange(ae))}}}}for(Ee=[],pe=C;pe=pe.parentNode;)pe.nodeType===1&&Ee.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ee.length;C++){var Me=Ee[C];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}su=!!xh,yh=xh=null}finally{Ft=f,H.p=l,N.T=s}}t.current=i,Tn=2}}function y_(){if(Tn===2){Tn=0;var t=lr,i=ks,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var l=H.p;H.p=2;var f=Ft;Ft|=4;try{Yv(t,i.alternate,i)}finally{Ft=f,H.p=l,N.T=s}}Tn=3}}function S_(){if(Tn===4||Tn===3){Tn=0,W();var t=lr,i=ks,s=Aa,l=o_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,ks=lr=null,b_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(or=null),Uo(s),i=i.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ge,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=N.T,f=H.p,H.p=2,N.T=null;try{for(var d=t.onRecoverableError,y=0;y<l.length;y++){var C=l[y];d(C.value,{componentStack:C.stack})}}finally{N.T=i,H.p=f}}(Aa&3)!==0&&Yc(),$i(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===sh?fl++:(fl=0,sh=t):fl=0,dl(0)}}function b_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,jo(i)))}function Yc(){return x_(),y_(),S_(),M_()}function M_(){if(Tn!==5)return!1;var t=lr,i=ah;ah=0;var s=Uo(Aa),l=N.T,f=H.p;try{H.p=32>s?32:s,N.T=null,s=rh,rh=null;var d=lr,y=Aa;if(Tn=0,ks=lr=null,Aa=0,(Ft&6)!==0)throw Error(r(331));var C=Ft;if(Ft|=4,a_(d.current),t_(d,d.current,y,s),Ft=C,dl(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ge,d)}catch{}return!0}finally{H.p=f,N.T=l,b_(t,i)}}function E_(t,i,s){i=Si(s,i),i=zd(t.stateNode,i,2),t=tr(t,i,2),t!==null&&(We(t,2),$i(t))}function qt(t,i,s){if(t.tag===3)E_(t,t,s);else for(;i!==null;){if(i.tag===3){E_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=Si(s,t),s=Tv(2),l=tr(i,s,2),l!==null&&(Av(s,l,i,t),We(l,2),$i(l));break}}i=i.return}}function ch(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new SE;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(th=!0,f.add(s),t=AE.bind(null,t,i,s),i.then(t,t))}function AE(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Jt===t&&(At&s)===s&&(fn===4||fn===3&&(At&62914560)===At&&300>bt()-Gc?(Ft&2)===0&&Xs(t,0):nh|=s,Gs===At&&(Gs=0)),$i(t)}function T_(t,i){i===0&&(i=Ae()),t=Ir(t,i),t!==null&&(We(t,i),$i(t))}function wE(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),T_(t,s)}function RE(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),T_(t,s)}function CE(t,i){return cn(t,i)}var Kc=null,js=null,uh=!1,Zc=!1,fh=!1,ur=0;function $i(t){t!==js&&t.next===null&&(js===null?Kc=js=t:js=js.next=t),Zc=!0,uh||(uh=!0,NE())}function dl(t,i){if(!fh&&Zc){fh=!0;do for(var s=!1,l=Kc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var y=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-Ge(42|t)+1)-1,d&=f&~(y&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,C_(l,d))}else d=At,d=Se(l,l===Jt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Oe(l,d)||(s=!0,C_(l,d));l=l.next}while(s);fh=!1}}function DE(){A_()}function A_(){Zc=uh=!1;var t=0;ur!==0&&HE()&&(t=ur);for(var i=bt(),s=null,l=Kc;l!==null;){var f=l.next,d=w_(l,i);d===0?(l.next=null,s===null?Kc=f:s.next=f,f===null&&(js=s)):(s=l,(t!==0||(d&3)!==0)&&(Zc=!0)),l=f}Tn!==0&&Tn!==5||dl(t),ur!==0&&(ur=0)}function w_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Ge(d),C=1<<y,V=f[y];V===-1?((C&s)===0||(C&l)!==0)&&(f[y]=He(C,i)):V<=i&&(t.expiredLanes|=C),d&=~C}if(i=Jt,s=At,s=Se(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Je(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Oe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Je(l),Uo(s)){case 2:case 8:s=E;break;case 32:s=Q;break;case 268435456:s=de;break;default:s=Q}return l=R_.bind(null,t),s=cn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Je(l),t.callbackPriority=2,t.callbackNode=null,2}function R_(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Yc()&&t.callbackNode!==s)return null;var l=At;return l=Se(t,t===Jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(c_(t,l,i),w_(t,bt()),t.callbackNode!=null&&t.callbackNode===s?R_.bind(null,t):null)}function C_(t,i){if(Yc())return null;c_(t,i,!0)}function NE(){kE(function(){(Ft&6)!==0?cn(P,DE):A_()})}function dh(){if(ur===0){var t=Ns;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),ur=t}return ur}function D_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Lr(""+t)}function N_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function LE(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=D_((f[Ln]||null).action),y=l.submitter;y&&(i=(i=y[Ln]||null)?D_(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var C=new lc("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ur!==0){var V=y?N_(f,y):new FormData(f);Ld(s,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(C.preventDefault(),V=y?N_(f,y):new FormData(f),Ld(s,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var hh=0;hh<Kf.length;hh++){var ph=Kf[hh],UE=ph.toLowerCase(),OE=ph[0].toUpperCase()+ph.slice(1);Pi(UE,"on"+OE)}Pi(l0,"onAnimationEnd"),Pi(c0,"onAnimationIteration"),Pi(u0,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(ZM,"onTransitionRun"),Pi(QM,"onTransitionStart"),Pi($M,"onTransitionCancel"),Pi(f0,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function L_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var C=l[y],V=C.instance,re=C.currentTarget;if(C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=re;try{d(f)}catch(xe){fc(xe)}f.currentTarget=null,d=V}else for(y=0;y<l.length;y++){if(C=l[y],V=C.instance,re=C.currentTarget,C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=re;try{d(f)}catch(xe){fc(xe)}f.currentTarget=null,d=V}}}}function Tt(t,i){var s=i[Cr];s===void 0&&(s=i[Cr]=new Set);var l=t+"__bubble";s.has(l)||(U_(i,t,2,!1),s.add(l))}function mh(t,i,s){var l=0;i&&(l|=4),U_(s,t,l,i)}var Qc="_reactListening"+Math.random().toString(36).slice(2);function gh(t){if(!t[Qc]){t[Qc]=!0,ac.forEach(function(s){s!=="selectionchange"&&(PE.has(s)||mh(s,!1,t),mh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Qc]||(i[Qc]=!0,mh("selectionchange",!1,i))}}function U_(t,i,s,l){switch(lx(i)){case 2:var f=cT;break;case 8:f=uT;break;default:f=Nh}s=f.bind(null,i,s,t),f=void 0,!If||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function vh(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var C=l.stateNode.containerInfo;if(C===f)break;if(y===4)for(y=l.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;C!==null;){if(y=ca(C),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){l=d=y;continue e}C=C.parentNode}}l=l.return}zg(function(){var re=d,xe=Of(s),Ee=[];e:{var fe=d0.get(t);if(fe!==void 0){var pe=lc,Ye=t;switch(t){case"keypress":if(sc(s)===0)break e;case"keydown":case"keyup":pe=RM;break;case"focusin":Ye="focus",pe=Vf;break;case"focusout":Ye="blur",pe=Vf;break;case"beforeblur":case"afterblur":pe=Vf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=gM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=NM;break;case l0:case c0:case u0:pe=xM;break;case f0:pe=UM;break;case"scroll":case"scrollend":pe=pM;break;case"wheel":pe=PM;break;case"copy":case"cut":case"paste":pe=SM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=kg;break;case"toggle":case"beforetoggle":pe=FM}var ct=(i&4)!==0,Qt=!ct&&(t==="scroll"||t==="scrollend"),$=ct?fe!==null?fe+"Capture":null:fe;ct=[];for(var j=re,ae;j!==null;){var Me=j;if(ae=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ae===null||$===null||(Me=Po(j,$),Me!=null&&ct.push(pl(j,Me,ae))),Qt)break;j=j.return}0<ct.length&&(fe=new pe(fe,Ye,null,s,xe),Ee.push({event:fe,listeners:ct}))}}if((i&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",fe&&s!==Uf&&(Ye=s.relatedTarget||s.fromElement)&&(ca(Ye)||Ye[Kn]))break e;if((pe||fe)&&(fe=xe.window===xe?xe:(fe=xe.ownerDocument)?fe.defaultView||fe.parentWindow:window,pe?(Ye=s.relatedTarget||s.toElement,pe=re,Ye=Ye?ca(Ye):null,Ye!==null&&(Qt=c(Ye),ct=Ye.tag,Ye!==Qt||ct!==5&&ct!==27&&ct!==6)&&(Ye=null)):(pe=null,Ye=re),pe!==Ye)){if(ct=Hg,Me="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ct=kg,Me="onPointerLeave",$="onPointerEnter",j="pointer"),Qt=pe==null?fe:Nr(pe),ae=Ye==null?fe:Nr(Ye),fe=new ct(Me,j+"leave",pe,s,xe),fe.target=Qt,fe.relatedTarget=ae,Me=null,ca(xe)===re&&(ct=new ct($,j+"enter",Ye,s,xe),ct.target=ae,ct.relatedTarget=Qt,Me=ct),Qt=Me,pe&&Ye)t:{for(ct=IE,$=pe,j=Ye,ae=0,Me=$;Me;Me=ct(Me))ae++;Me=0;for(var rt=j;rt;rt=ct(rt))Me++;for(;0<ae-Me;)$=ct($),ae--;for(;0<Me-ae;)j=ct(j),Me--;for(;ae--;){if($===j||j!==null&&$===j.alternate){ct=$;break t}$=ct($),j=ct(j)}ct=null}else ct=null;pe!==null&&O_(Ee,fe,pe,ct,!1),Ye!==null&&Qt!==null&&O_(Ee,Qt,Ye,ct,!0)}}e:{if(fe=re?Nr(re):window,pe=fe.nodeName&&fe.nodeName.toLowerCase(),pe==="select"||pe==="input"&&fe.type==="file")var Pt=Qg;else if(Kg(fe))if($g)Pt=qM;else{Pt=WM;var et=XM}else pe=fe.nodeName,!pe||pe.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?re&&Vt(re.elementType)&&(Pt=Qg):Pt=jM;if(Pt&&(Pt=Pt(t,re))){Zg(Ee,Pt,s,xe);break e}et&&et(t,fe,re),t==="focusout"&&re&&fe.type==="number"&&re.memoizedProps.value!=null&&Mt(fe,"number",fe.value)}switch(et=re?Nr(re):window,t){case"focusin":(Kg(et)||et.contentEditable==="true")&&(Ms=et,jf=re,ko=null);break;case"focusout":ko=jf=Ms=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,s0(Ee,s,xe);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":s0(Ee,s,xe)}var _t;if(Gf)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else bs?qg(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(Xg&&s.locale!=="ko"&&(bs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&bs&&(_t=Bg()):(Ya=xe,Ff="value"in Ya?Ya.value:Ya.textContent,bs=!0)),et=$c(re,wt),0<et.length&&(wt=new Gg(wt,t,null,s,xe),Ee.push({event:wt,listeners:et}),_t?wt.data=_t:(_t=Yg(s),_t!==null&&(wt.data=_t)))),(_t=BM?VM(t,s):HM(t,s))&&(wt=$c(re,"onBeforeInput"),0<wt.length&&(et=new Gg("onBeforeInput","beforeinput",null,s,xe),Ee.push({event:et,listeners:wt}),et.data=_t)),LE(Ee,t,re,s,xe)}L_(Ee,i)})}function pl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function $c(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Po(t,s),f!=null&&l.unshift(pl(t,f,d)),f=Po(t,i),f!=null&&l.push(pl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function IE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O_(t,i,s,l,f){for(var d=i._reactName,y=[];s!==null&&s!==l;){var C=s,V=C.alternate,re=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||re===null||(V=re,f?(re=Po(s,d),re!=null&&y.unshift(pl(s,re,V))):f||(re=Po(s,d),re!=null&&y.push(pl(s,re,V)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var FE=/\r\n?/g,zE=/\u0000|\uFFFD/g;function P_(t){return(typeof t=="string"?t:""+t).replace(FE,`
`).replace(zE,"")}function I_(t,i){return i=P_(i),P_(t)===i}function Zt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||li(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&li(t,""+l);break;case"className":qe(t,"class",l);break;case"tabIndex":qe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,s,l);break;case"style":Oi(t,l,d);break;case"data":if(i!=="object"){qe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Lr(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Zt(t,i,"name",f.name,f,null),Zt(t,i,"formEncType",f.formEncType,f,null),Zt(t,i,"formMethod",f.formMethod,f,null),Zt(t,i,"formTarget",f.formTarget,f,null)):(Zt(t,i,"encType",f.encType,f,null),Zt(t,i,"method",f.method,f,null),Zt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Lr(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=fa);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Lr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Fe(t,"popover",l);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Fe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Yi.get(s)||s,Fe(t,s,l))}}function _h(t,i,s,l,f,d){switch(s){case"style":Oi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?li(t,l):(typeof l=="number"||typeof l=="bigint")&&li(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[Ln]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Fe(t,s,l)}}}function In(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Zt(t,i,d,y,s,null)}}f&&Zt(t,i,"srcSet",s.srcSet,s,null),l&&Zt(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var C=d=y=f=null,V=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var xe=s[l];if(xe!=null)switch(l){case"name":f=xe;break;case"type":y=xe;break;case"checked":V=xe;break;case"defaultChecked":re=xe;break;case"value":d=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,i));break;default:Zt(t,i,l,xe,s,null)}}Vn(t,d,C,V,re,y,f,!1);return;case"select":Tt("invalid",t),l=y=d=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":y=C;break;case"multiple":l=C;default:Zt(t,i,f,C,s,null)}i=d,s=y,t.multiple=!!l,i!=null?En(t,!!l,i,!1):s!=null&&En(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),d=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(C=s[y],C!=null))switch(y){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Zt(t,i,y,C,s,null)}Ui(t,l,f,d);return;case"option":for(V in s)s.hasOwnProperty(V)&&(l=s[V],l!=null)&&(V==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Zt(t,i,V,l,s,null));return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<hl.length;l++)Tt(hl[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Zt(t,i,re,l,s,null)}return;default:if(Vt(i)){for(xe in s)s.hasOwnProperty(xe)&&(l=s[xe],l!==void 0&&_h(t,i,xe,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Zt(t,i,C,l,s,null))}function BE(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,y=null,C=null,V=null,re=null,xe=null;for(pe in s){var Ee=s[pe];if(s.hasOwnProperty(pe)&&Ee!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":V=Ee;default:l.hasOwnProperty(pe)||Zt(t,i,pe,null,l,Ee)}}for(var fe in l){var pe=l[fe];if(Ee=s[fe],l.hasOwnProperty(fe)&&(pe!=null||Ee!=null))switch(fe){case"type":d=pe;break;case"name":f=pe;break;case"checked":re=pe;break;case"defaultChecked":xe=pe;break;case"value":y=pe;break;case"defaultValue":C=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,i));break;default:pe!==Ee&&Zt(t,i,fe,pe,l,Ee)}}ke(t,y,C,V,re,xe,d,f);return;case"select":pe=y=C=fe=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":pe=V;default:l.hasOwnProperty(d)||Zt(t,i,d,null,l,V)}for(f in l)if(d=l[f],V=s[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":fe=d;break;case"defaultValue":C=d;break;case"multiple":y=d;default:d!==V&&Zt(t,i,f,d,l,V)}i=C,s=y,l=pe,fe!=null?En(t,!!s,fe,!1):!!l!=!!s&&(i!=null?En(t,!!s,i,!0):En(t,!!s,s?[]:"",!1));return;case"textarea":pe=fe=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Zt(t,i,C,null,l,f)}for(y in l)if(f=l[y],d=s[y],l.hasOwnProperty(y)&&(f!=null||d!=null))switch(y){case"value":fe=f;break;case"defaultValue":pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Zt(t,i,y,f,l,d)}oi(t,fe,pe);return;case"option":for(var Ye in s)fe=s[Ye],s.hasOwnProperty(Ye)&&fe!=null&&!l.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:Zt(t,i,Ye,null,l,fe));for(V in l)fe=l[V],pe=s[V],l.hasOwnProperty(V)&&fe!==pe&&(fe!=null||pe!=null)&&(V==="selected"?t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol":Zt(t,i,V,fe,l,pe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)fe=s[ct],s.hasOwnProperty(ct)&&fe!=null&&!l.hasOwnProperty(ct)&&Zt(t,i,ct,null,l,fe);for(re in l)if(fe=l[re],pe=s[re],l.hasOwnProperty(re)&&fe!==pe&&(fe!=null||pe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,i));break;default:Zt(t,i,re,fe,l,pe)}return;default:if(Vt(i)){for(var Qt in s)fe=s[Qt],s.hasOwnProperty(Qt)&&fe!==void 0&&!l.hasOwnProperty(Qt)&&_h(t,i,Qt,void 0,l,fe);for(xe in l)fe=l[xe],pe=s[xe],!l.hasOwnProperty(xe)||fe===pe||fe===void 0&&pe===void 0||_h(t,i,xe,fe,l,pe);return}}for(var $ in s)fe=s[$],s.hasOwnProperty($)&&fe!=null&&!l.hasOwnProperty($)&&Zt(t,i,$,null,l,fe);for(Ee in l)fe=l[Ee],pe=s[Ee],!l.hasOwnProperty(Ee)||fe===pe||fe==null&&pe==null||Zt(t,i,Ee,fe,l,pe)}function F_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,y=f.initiatorType,C=f.duration;if(d&&C&&F_(y)){for(y=0,C=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],re=V.startTime;if(re>C)break;var xe=V.transferSize,Ee=V.initiatorType;xe&&F_(Ee)&&(V=V.responseEnd,y+=xe*(V<C?1:(C-re)/(V-re)))}if(--l,i+=8*(d+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xh=null,yh=null;function Jc(t){return t.nodeType===9?t:t.ownerDocument}function z_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Sh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bh=null;function HE(){var t=window.event;return t&&t.type==="popstate"?t===bh?!1:(bh=t,!0):(bh=null,!1)}var V_=typeof setTimeout=="function"?setTimeout:void 0,GE=typeof clearTimeout=="function"?clearTimeout:void 0,H_=typeof Promise=="function"?Promise:void 0,kE=typeof queueMicrotask=="function"?queueMicrotask:typeof H_<"u"?function(t){return H_.resolve(null).then(t).catch(XE)}:V_;function XE(t){setTimeout(function(){throw t})}function fr(t){return t==="head"}function G_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Zs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ml(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ml(s);for(var d=s.firstChild;d;){var y=d.nextSibling,C=d.nodeName;d[Xa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&ml(t.ownerDocument.body);s=f}while(s);Zs(i)}function k_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Mh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Mh(s),Wa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function WE(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function jE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ai(t.nextSibling),t===null))return null;return t}function X_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ai(t.nextSibling),t===null))return null;return t}function Eh(t){return t.data==="$?"||t.data==="$~"}function Th(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qE(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ai(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Ah=null;function W_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ai(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function j_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function q_(t,i,s){switch(i=Jc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Wa(t)}var wi=new Map,Y_=new Set;function eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=H.d;H.d={f:YE,r:KE,D:ZE,C:QE,L:$E,m:JE,X:tT,S:eT,M:nT};function YE(){var t=wa.f(),i=Wc();return t||i}function KE(t){var i=ua(t);i!==null&&i.tag===5&&i.type==="form"?fv(i):wa.r(t)}var qs=typeof document>"u"?null:document;function K_(t,i,s){var l=qs;if(l&&typeof i=="string"&&i){var f=Xt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Y_.has(f)||(Y_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),In(i,"link",t),vn(i),l.head.appendChild(i)))}}function ZE(t){wa.D(t),K_("dns-prefetch",t,null)}function QE(t,i){wa.C(t,i),K_("preconnect",t,i)}function $E(t,i,s){wa.L(t,i,s);var l=qs;if(l&&t&&i){var f='link[rel="preload"][as="'+Xt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Xt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Xt(s.imageSizes)+'"]')):f+='[href="'+Xt(t)+'"]';var d=f;switch(i){case"style":d=Ys(t);break;case"script":d=Ks(t)}wi.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),wi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(gl(d))||i==="script"&&l.querySelector(vl(d))||(i=l.createElement("link"),In(i,"link",t),vn(i),l.head.appendChild(i)))}}function JE(t,i){wa.m(t,i);var s=qs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Xt(l)+'"][href="'+Xt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ks(t)}if(!wi.has(d)&&(t=v({rel:"modulepreload",href:t},i),wi.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(vl(d)))return}l=s.createElement("link"),In(l,"link",t),vn(l),s.head.appendChild(l)}}}function eT(t,i,s){wa.S(t,i,s);var l=qs;if(l&&t){var f=ja(l).hoistableStyles,d=Ys(t);i=i||"default";var y=f.get(d);if(!y){var C={loading:0,preload:null};if(y=l.querySelector(gl(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=wi.get(d))&&wh(t,s);var V=y=l.createElement("link");vn(V),In(V,"link",t),V._p=new Promise(function(re,xe){V.onload=re,V.onerror=xe}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,tu(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:C},f.set(d,y)}}}function tT(t,i){wa.X(t,i);var s=qs;if(s&&t){var l=ja(s).hoistableScripts,f=Ks(t),d=l.get(f);d||(d=s.querySelector(vl(f)),d||(t=v({src:t,async:!0},i),(i=wi.get(f))&&Rh(t,i),d=s.createElement("script"),vn(d),In(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function nT(t,i){wa.M(t,i);var s=qs;if(s&&t){var l=ja(s).hoistableScripts,f=Ks(t),d=l.get(f);d||(d=s.querySelector(vl(f)),d||(t=v({src:t,async:!0,type:"module"},i),(i=wi.get(f))&&Rh(t,i),d=s.createElement("script"),vn(d),In(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Z_(t,i,s,l){var f=(f=X.current)?eu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ys(s.href),s=ja(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ys(s.href);var d=ja(f).hoistableStyles,y=d.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=f.querySelector(gl(t)))&&!d._p&&(y.instance=d,y.state.loading=5),wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wi.set(t,s),d||iT(f,t,s,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ks(s),s=ja(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ys(t){return'href="'+Xt(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function Q_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function iT(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),In(i,"link",s),vn(i),t.head.appendChild(i))}function Ks(t){return'[src="'+Xt(t)+'"]'}function vl(t){return"script[async]"+t}function $_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Xt(s.href)+'"]');if(l)return i.instance=l,vn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),vn(l),In(l,"style",f),tu(l,s.precedence,t),i.instance=l;case"stylesheet":f=Ys(s.href);var d=t.querySelector(gl(f));if(d)return i.state.loading|=4,i.instance=d,vn(d),d;l=Q_(s),(f=wi.get(f))&&wh(l,f),d=(t.ownerDocument||t).createElement("link"),vn(d);var y=d;return y._p=new Promise(function(C,V){y.onload=C,y.onerror=V}),In(d,"link",l),i.state.loading|=4,tu(d,s.precedence,t),i.instance=d;case"script":return d=Ks(s.src),(f=t.querySelector(vl(d)))?(i.instance=f,vn(f),f):(l=s,(f=wi.get(d))&&(l=v({},s),Rh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),vn(f),In(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,tu(l,s.precedence,t));return i.instance}function tu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,y=0;y<l.length;y++){var C=l[y];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function wh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Rh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var nu=null;function J_(t,i,s){if(nu===null){var l=new Map,f=nu=new Map;f.set(s,l)}else f=nu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Xa]||d[gn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=t+y;var C=l.get(y);C?C.push(d):l.set(y,[d])}}return l}function ex(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function aT(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function tx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rT(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ys(l.href),d=i.querySelector(gl(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=iu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,vn(d);return}d=i.ownerDocument||i,l=Q_(l),(f=wi.get(f))&&wh(l,f),d=d.createElement("link"),vn(d);var y=d;y._p=new Promise(function(C,V){y.onload=C,y.onerror=V}),In(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=iu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ch=0;function sT(t,i){return t.stylesheets&&t.count===0&&ru(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&ru(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Ch===0&&(Ch=62500*VE());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ru(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Ch?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var au=null;function ru(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,au=new Map,i.forEach(oT,t),au=null,iu.call(t))}function oT(t,i){if(!(i.state.loading&4)){var s=au.get(t);if(s)var l=s.get(null);else{s=new Map,au.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var y=f[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),d=s.get(y)||l,d===l&&s.set(null,f),s.set(y,f),this.count++,l=iu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var _l={$$typeof:F,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function lT(t,i,s,l,f,d,y,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function nx(t,i,s,l,f,d,y,C,V,re,xe,Ee){return t=new lT(t,i,s,y,V,re,xe,Ee,C),i=1,d===!0&&(i|=24),d=ui(3,null,null,i),t.current=d,d.stateNode=t,i=ld(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},dd(d),t}function ix(t){return t?(t=As,t):As}function ax(t,i,s,l,f,d){f=ix(f),l.context===null?l.context=f:l.pendingContext=f,l=er(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=tr(t,l,i),s!==null&&(ti(s,t,i),Zo(s,t,i))}function rx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Dh(t,i){rx(t,i),(t=t.alternate)&&rx(t,i)}function sx(t){if(t.tag===13||t.tag===31){var i=Ir(t,67108864);i!==null&&ti(i,t,67108864),Dh(t,67108864)}}function ox(t){if(t.tag===13||t.tag===31){var i=mi();i=Lo(i);var s=Ir(t,i);s!==null&&ti(s,t,i),Dh(t,i)}}var su=!0;function cT(t,i,s,l){var f=N.T;N.T=null;var d=H.p;try{H.p=2,Nh(t,i,s,l)}finally{H.p=d,N.T=f}}function uT(t,i,s,l){var f=N.T;N.T=null;var d=H.p;try{H.p=8,Nh(t,i,s,l)}finally{H.p=d,N.T=f}}function Nh(t,i,s,l){if(su){var f=Lh(l);if(f===null)vh(t,i,l,ou,s),cx(t,l);else if(dT(f,t,i,s,l))l.stopPropagation();else if(cx(t,l),i&4&&-1<fT.indexOf(t)){for(;f!==null;){var d=ua(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ne(d.pendingLanes);if(y!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var V=1<<31-Ge(y);C.entanglements[1]|=V,y&=~V}$i(d),(Ft&6)===0&&(kc=bt()+500,dl(0))}}break;case 31:case 13:C=Ir(d,2),C!==null&&ti(C,d,2),Wc(),Dh(d,2)}if(d=Lh(l),d===null&&vh(t,i,l,ou,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else vh(t,i,l,null,s)}}function Lh(t){return t=Of(t),Uh(t)}var ou=null;function Uh(t){if(ou=null,t=ca(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return ou=t,null}function lx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ft()){case P:return 2;case E:return 8;case Q:case ie:return 32;case de:return 268435456;default:return 32}default:return 32}}var Oh=!1,dr=null,hr=null,pr=null,xl=new Map,yl=new Map,mr=[],fT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cx(t,i){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":xl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(i.pointerId)}}function Sl(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=ua(i),i!==null&&sx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function dT(t,i,s,l,f){switch(i){case"focusin":return dr=Sl(dr,t,i,s,l,f),!0;case"dragenter":return hr=Sl(hr,t,i,s,l,f),!0;case"mouseover":return pr=Sl(pr,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return xl.set(d,Sl(xl.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,yl.set(d,Sl(yl.get(d)||null,t,i,s,l,f)),!0}return!1}function ux(t){var i=ca(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,xs(t.priority,function(){ox(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,xs(t.priority,function(){ox(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Lh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Uf=l,s.target.dispatchEvent(l),Uf=null}else return i=ua(s),i!==null&&sx(i),t.blockedOn=s,!1;i.shift()}return!0}function fx(t,i,s){lu(t)&&s.delete(i)}function hT(){Oh=!1,dr!==null&&lu(dr)&&(dr=null),hr!==null&&lu(hr)&&(hr=null),pr!==null&&lu(pr)&&(pr=null),xl.forEach(fx),yl.forEach(fx)}function cu(t,i){t.blockedOn===i&&(t.blockedOn=null,Oh||(Oh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,hT)))}var uu=null;function dx(t){uu!==t&&(uu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){uu===t&&(uu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Uh(l||s)===null)continue;break}var d=ua(s);d!==null&&(t.splice(i,3),i-=3,Ld(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Zs(t){function i(V){return cu(V,t)}dr!==null&&cu(dr,t),hr!==null&&cu(hr,t),pr!==null&&cu(pr,t),xl.forEach(i),yl.forEach(i);for(var s=0;s<mr.length;s++){var l=mr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<mr.length&&(s=mr[0],s.blockedOn===null);)ux(s),s.blockedOn===null&&mr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],y=f[Ln]||null;if(typeof d=="function")y||dx(s);else if(y){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,y=d[Ln]||null)C=y.formAction;else if(Uh(f)!==null)continue}else C=y.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),dx(s)}}}function hx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ph(t){this._internalRoot=t}fu.prototype.render=Ph.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=mi();ax(s,l,t,i,null,null)},fu.prototype.unmount=Ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ax(t.current,2,null,t,null,null),Wc(),i[Kn]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<mr.length&&i!==0&&i<mr[s].priority;s++);mr.splice(s,0,t),s===0&&ux(t)}};var px=e.version;if(px!=="19.2.8")throw Error(r(527,px,"19.2.8"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var pT={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{ge=du.inject(pT),ve=du}catch{}}return Ml.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=Sv,d=bv,y=Mv;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=nx(t,1,!1,null,null,s,l,null,f,d,y,hx),t[Kn]=i.current,gh(t),new Ph(i)},Ml.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=Sv,y=bv,C=Mv,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=nx(t,1,!0,i,s??null,l,f,V,d,y,C,hx),i.context=ix(null),s=i.current,l=mi(),l=Lo(l),f=er(l),f.callback=null,tr(s,f,l),s=l,i.current.lanes=s,We(i,s),$i(i),t[Kn]=i.current,gh(t),new fu(i)},Ml.version="19.2.8",Ml}var ty;function sw(){if(ty)return kh.exports;ty=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),kh.exports=rw(),kh.exports}var ow=sw();function vu(a){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${a}-${e}`}function ny(a){return{id:a.message_id,role:a.role,content:a.content}}function Kr(a,e,n,r){return a.map(o=>o.id!==e?o:{...o,content:n,streaming:r})}function lw(a,e,n){return e?a.find(r=>r.conversation_id===e)?.title??n:n}function cw(a,e){const[n,r]=Re.useState([]),[o,c]=Re.useState(null),u=o,[h,m]=Re.useState([]),[p,_]=Re.useState(""),[v,g]=Re.useState("idle"),[S,T]=Re.useState(null),[D,b]=Re.useState(null),[x,I]=Re.useState(null),[F,A]=Re.useState(null),[U,L]=Re.useState([]),B=Re.useRef(0),w=Re.useRef(null);Re.useEffect(()=>()=>{w.current&&clearTimeout(w.current)},[]);const z=Re.useMemo(()=>lw(n,o,e.newConversationTitle),[o,n,e.newConversationTitle]),k=v!=="idle";Re.useEffect(()=>{let ne=!0;async function be(){try{let J=await a.listConversations(),X=localStorage.getItem(e.storageKey);J.some(Pe=>Pe.conversation_id===X)||(X=J[0]?.conversation_id??null),X||(X=(await a.createConversation()).conversation_id,J=await a.listConversations());const ye=await a.loadMessages(X);if(!ne)return;r(J),c(X),m(ye.map(ny)),localStorage.setItem(e.storageKey,X)}catch(J){ne&&A(J instanceof Error?J.message:e.wakeErrorMessage)}}return be(),()=>{ne=!1}},[a,e.storageKey,e.wakeErrorMessage]);async function G(){r(await a.listConversations())}async function K(){if(k||h.length===0)return!1;const ne=await a.createConversation();return c(ne.conversation_id),m([]),b(null),T(null),I(null),localStorage.setItem(e.storageKey,ne.conversation_id),await G(),!0}async function he(ne){if(!k){if(await a.deleteConversation(ne),ne===u){const be=(await a.listConversations()).filter(J=>J.conversation_id!==ne);be.length>0?await ee(be[0].conversation_id):await K()}await G()}}async function me(ne){return a.getPassage(ne)}async function ee(ne){if(k||ne===o)return!1;const be=B.current+1;B.current=be;const J=await a.loadMessages(ne);return B.current!==be?!1:(c(ne),m(J.map(ny)),b(null),T(null),I(null),localStorage.setItem(e.storageKey,ne),!0)}function N(ne,be,J){if(ne.type==="delta"){w.current&&clearTimeout(w.current),L([]);const X=J+ne.text;return m(ce=>Kr(ce,be,X,!0)),{text:X,terminal:!1}}return ne.type==="completed"?(m(X=>Kr(X,be,ne.text,!1)),T(be),{text:ne.text,terminal:!0}):ne.type==="tool"?(L([{name:ne.name,status:ne.status,detail:ne.detail,preview:ne.preview,handles:ne.handles}]),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>L([]),3500),{text:J,terminal:!1}):(m(X=>Kr(X,be,J,!1)),I(ne.message),{text:J,terminal:!0})}async function H(ne){if(!o||k)return;const be=vu("assistant");_(""),b(ne),T(null),I(null),L([]),g("streaming"),m(ce=>[...ce,{id:vu("owner"),role:"owner",content:ne},{id:be,role:"weaver",content:"",streaming:!0}]);let J="",X=!1;try{for await(const ce of a.streamTurn(o,ne)){const ye=N(ce,be,J);if(J=ye.text,X=ye.terminal,ye.terminal)break}X||(m(ce=>Kr(ce,be,J,!1)),I(e.incompleteTurnMessage))}catch(ce){m(Pe=>Kr(Pe,be,J,!1));const ye=ce instanceof Error?ce.message:e.connectionLostMessage;I(ce instanceof Error?`${ye} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await G()}catch{}}}async function te(){if(!(!o||v!=="streaming")){g("cancelling");try{await a.cancelTurn(o)}catch(ne){I(ne instanceof Error?ne.message:e.cancelFailedMessage),g("streaming")}}}async function _e(){if(!o||v!=="idle"||!S)return;const ne=S,be=vu("assistant");T(null),I(null),L([]),g("streaming"),m(J=>[...J.filter(X=>X.id!==ne),{id:be,role:"weaver",content:"",streaming:!0}]),await O(be,a.regenerateTurn(o))}async function Te(){if(!o||v!=="idle"||!D)return;const ne=vu("assistant");T(null),I(null),L([]),g("streaming"),m(be=>[...be,{id:ne,role:"weaver",content:"",streaming:!0}]),await O(ne,a.retryTurn(o))}async function O(ne,be){let J="",X=!1;try{for await(const ce of be){const ye=N(ce,ne,J);if(J=ye.text,X=ye.terminal,ye.terminal)break}X||(m(ce=>Kr(ce,ne,J,!1)),I(e.incompleteTurnMessage))}catch(ce){m(Pe=>Kr(Pe,ne,J,!1));const ye=ce instanceof Error?ce.message:e.connectionLostMessage;I(ce instanceof Error?`${ye} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await G()}catch{}}}const Z=(()=>{const ne=h[h.length-1];return ne&&ne.role==="weaver"?ne.id:null})();return{activeTitle:z,activity:U,bootError:F,cancelTurn:te,conversationId:o,conversations:n,createConversation:K,deleteConversation:he,loadPassage:me,draft:p,lastReplyId:Z,liveReplyId:S,messages:h,recoveryMessage:x,regenerateReply:_e,retryLastTurn:Te,selectConversation:ee,sendMessage:H,setDraft:_,turnActive:k,turnState:v}}const Ri={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."},uw=["[Searching the fate tapestry.]","[Following a silver thread through the void.]","[Tracing where this memory touches the chapters.]"],fw=["[Reading what the Spell remembers.]","[Drawing the found passage into the weave.]","[Listening for the truth between the lines.]"],dw=["[Binding the scattered threads.]","[Setting each echo in its proper place.]","[Joining memory to canon.]"],hw=["[The Spell turns the question in the dark.]","[The pattern is beginning to answer.]","[Following the next thread of fate.]"];function _u(a,e){let n=0;for(const r of a)n+=r.charCodeAt(0);return e[n%e.length]}function qh(a,e){return e.some(n=>a.includes(n))}function pw(a){if(a.status!=="start")return null;const e=a.name.toLowerCase();return qh(e,["search","find","locate","browse","grep","glob","who_is"])?_u(e,uw):qh(e,["read","chapter","passage","inspect"])?_u(e,fw):qh(e,["connect","related","compare","timeline","link"])?_u(e,dw):_u(e,hw)}const Qb="weaver_first_nightmare";function mw(){const a=localStorage.getItem(Qb);return a==="completed"||a==="deferred"?a:null}function iy(a){localStorage.setItem(Qb,a)}function gw(){return mw()===null}var vw={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},_w={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},xw={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},yw={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},Sw={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},bw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Mw={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Ew={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},Tw={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},Aw={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},ww={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Rw={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Cw={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},Dw={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},Nw={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},Lw={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function Uw(a){return a=a-0,a===a}function $b(a){return Uw(a)?a:(a=a.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var Ow=(a,e)=>ag.createElement("stop",{key:`${e}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function Pw(a){return a.charAt(0).toUpperCase()+a.slice(1)}var $s=new Map,Iw=1e3;function Fw(a){if($s.has(a))return $s.get(a);const e={};let n=0;const r=a.length;for(;n<r;){const o=a.indexOf(";",n),c=o===-1?r:o,u=a.slice(n,c).trim();if(u){const h=u.indexOf(":");if(h>0){const m=u.slice(0,h).trim(),p=u.slice(h+1).trim();if(m&&p){const _=$b(m);e[_.startsWith("webkit")?Pw(_):_]=p}}}n=c+1}if($s.size===Iw){const o=$s.keys().next().value;o&&$s.delete(o)}return $s.set(a,e),e}function Jb(a,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(v=>{let g=v;return("fill"in n||n.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),Jb(a,g)}),o=e.attributes||{},c={};for(const[v,g]of Object.entries(o))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=Fw(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[$b(v)]=g}const{style:u,role:h,"aria-label":m,gradientFill:p,..._}=n;if(u&&(c.style=c.style?{...c.style,...u}:u),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;r.unshift(a(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(Ow)))}return a(e.tag,{...c,..._},...r)}var zw=Jb.bind(null,ag.createElement),ay=(a,e)=>{const n=Re.useId();return a||(e?n:void 0)},Bw=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},Vw="searchPseudoElementsFullScan"in ps&&typeof ps.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Hw=Number.parseInt(Vw)>=7,Gw=()=>Hw,Vl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},kw={left:"fa-pull-left",right:"fa-pull-right"},Xw={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Ww={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},zi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function jw(a){const e=ps.cssPrefix||ps.familyPrefix||Vl;return e===Vl?a:a.replace(new RegExp(String.raw`(?<=^|\s)${Vl}-`,"g"),`${e}-`)}function qw(a){const{beat:e,fade:n,beatFade:r,bounce:o,shake:c,spin:u,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:T,rotation:D,pull:b,swapOpacity:x,rotateBy:I,widthAuto:F,canvasSquare:A,canvasRoomy:U,flip360:L,buzz:B,float:w,jello:z,spinSnap:k,spinSnap4:G,spinSnap8:K,swing:he,wag:me,className:ee}=a,N=[];return ee&&N.push(...ee.split(" ")),e&&N.push(Cn.beat),n&&N.push(Cn.fade),r&&N.push(Cn.beatFade),o&&N.push(Cn.bounce),c&&N.push(Cn.shake),u&&N.push(Cn.spin),m&&N.push(Cn.spinReverse),h&&N.push(Cn.spinPulse),p&&N.push(Cn.pulse),_&&N.push(zi.fixedWidth),v&&N.push(zi.inverse),g&&N.push(zi.border),S===!0&&N.push(zi.flip),(S==="horizontal"||S==="both")&&N.push(zi.flipHorizontal),(S==="vertical"||S==="both")&&N.push(zi.flipVertical),T!=null&&N.push(Ww[T]),D!=null&&D!==0&&N.push(Xw[D]),b!=null&&N.push(kw[b]),x&&N.push(zi.swapOpacity),Gw()?(I&&N.push(zi.rotateBy),F&&N.push(zi.widthAuto),A&&N.push(zi.canvasSquare),U&&N.push(zi.canvasRoomy),L&&N.push(Cn.flip360),B&&N.push(Cn.buzz),w&&N.push(Cn.float),z&&N.push(Cn.jello),k&&N.push(Cn.spinSnap),G&&N.push(Cn.spinSnap4),K&&N.push(Cn.spinSnap8),he&&N.push(Cn.swing),me&&N.push(Cn.wag),(ps.cssPrefix||ps.familyPrefix||Vl)===Vl?N:N.map(jw)):N}var Yw=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function ry(a){if(a)return Yw(a)?a:Zb.icon(a)}function Kw(a){return Object.keys(a)}var sy=new Bw("FontAwesomeIcon"),e1={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Zw=new Set(Object.keys(e1)),Bn=ag.forwardRef((a,e)=>{const n={...e1,...a},{icon:r,mask:o,symbol:c,title:u,titleId:h,maskId:m,transform:p}=n,_=ay(m,!!o),v=ay(h,!!u),g=ry(r);if(!g)return sy.error("Icon lookup is undefined",r),null;const S=qw(n),T=typeof p=="string"?Zb.transform(p):p,D=ry(o),b=ew(g,{...S.length>0&&{classes:S},...T&&{transform:T},...D&&{mask:D},symbol:c,title:u,titleId:v,maskId:_});if(!b)return sy.error("Could not find icon",g),null;const{abstract:x}=b,I={ref:e};for(const F of Kw(n))Zw.has(F)||(I[F]=n[F]);return zw(x[0],I)});Bn.displayName="FontAwesomeIcon";function Qw(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Mw,...a})}function oy(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Dw,...a})}function $w(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Cw,...a})}function Jw(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Tw,...a})}function eR(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Nw,...a})}function tR(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Sw,...a})}function t1(a){return M.jsx(Bn,{"aria-hidden":"true",icon:vw,...a})}function nR(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Rw,...a})}function n1(a){return M.jsx(Bn,{"aria-hidden":"true",icon:bw,...a})}function iR(a){return M.jsx(Bn,{"aria-hidden":"true",icon:_w,...a})}function aR(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Aw,...a})}function Zp(a){return M.jsx(Bn,{"aria-hidden":"true",icon:ww,...a})}function ly(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Lw,...a})}function rR(a){return M.jsx(Bn,{"aria-hidden":"true",icon:Ew,...a})}function sR(a){return M.jsx(Bn,{"aria-hidden":"true",icon:yw,...a})}const oR=["awakened","ascended","transcendent"];function lR({cancelling:a,draft:e,inputLabel:n="Message assistant",onCancel:r,onDraftChange:o,onSubmit:c,onTierChange:u,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const T=Re.useRef(null),D=v??T,b=Re.useRef(null),[x,I]=Re.useState(!1);Re.useEffect(()=>{const U=D.current;U&&(U.style.height="auto",U.style.height=`${Math.min(U.scrollHeight,160)}px`)},[e,D]),Re.useEffect(()=>{if(!x)return;function U(B){b.current&&!b.current.contains(B.target)&&I(!1)}function L(B){B.key==="Escape"&&I(!1)}return document.addEventListener("pointerdown",U),document.addEventListener("keydown",L),()=>{document.removeEventListener("pointerdown",U),document.removeEventListener("keydown",L)}},[x]);function F(){const U=e.trim();!U||S||c(U)}function A(U){U.key!=="Enter"||U.shiftKey||(U.preventDefault(),F())}return M.jsx("div",{className:"composer-wrap",children:M.jsxs("div",{className:"composer-shell",children:[M.jsx("textarea",{"aria-label":n,disabled:S,onChange:U=>o(U.target.value),onKeyDown:A,placeholder:h,ref:D,rows:1,value:e}),M.jsxs("div",{className:"composer-tier",ref:b,children:[M.jsxs("button",{"aria-expanded":x,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>I(U=>!U),type:"button",children:[M.jsx("span",{className:"tier-pill-name",children:g}),M.jsx(Zp,{})]}),x&&M.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:oR.map(U=>M.jsx("li",{children:M.jsxs("button",{"aria-selected":U===g,onClick:()=>{u(U),I(!1)},role:"option",type:"button",children:[M.jsx("span",{className:"tier-menu-check",children:U===g?"✦":""}),U]})},U))})]}),S?M.jsx("button",{"aria-label":a?_:p,className:"composer-action composer-stop",disabled:a,onClick:r,type:"button",children:M.jsx(eR,{})}):M.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:F,type:"button",children:M.jsx(Qw,{})})]})})}const cy="weaver_device_id",Qp="weaver_api_key",$p="weaver_api_key_disabled",Jp="weaver_model_id",vg="deepseek-v4-flash",cR=[{id:"deepseek-v4-flash",label:"DeepSeek V4 Flash"},{id:"deepseek-v4-pro",label:"DeepSeek V4 Pro"}];function uR(){let a=localStorage.getItem(cy);return a||(a=crypto.randomUUID(),localStorage.setItem(cy,a)),a}function ff(){return localStorage.getItem(Qp)??""}function i1(a){a.trim()===""?localStorage.removeItem(Qp):localStorage.setItem(Qp,a.trim())}function em(){return localStorage.getItem($p)==="1"}function fR(a){a?localStorage.setItem($p,"1"):localStorage.removeItem($p)}function a1(){return localStorage.getItem(Jp)??vg}function dR(a){a===vg?localStorage.removeItem(Jp):localStorage.setItem(Jp,a)}function hR(a){const e={"X-Device-Id":uR()},n=ff();n!==""&&!em()&&(e["X-Weaver-Key"]=n);const r=a1();return r!==vg&&(e["X-Weaver-Model"]=r),{...e,...a}}function r1({label:a="Weaver is weaving an answer"}={}){return M.jsx("div",{"aria-label":a,className:"fate-weaving-loader",role:"status",children:M.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 128 36",children:[M.jsx("path",{className:"fate-loader-thread fate-loader-thread-one",d:"M2 7 C30 7, 37 18, 64 18 S98 29, 126 29",pathLength:"1"}),M.jsx("path",{className:"fate-loader-thread fate-loader-thread-two",d:"M2 29 C30 29, 37 18, 64 18 S98 7, 126 7",pathLength:"1"}),M.jsx("path",{className:"fate-loader-thread fate-loader-thread-three",d:"M2 18 C32 18, 42 12, 64 18 S96 24, 126 18",pathLength:"1"}),M.jsx("circle",{className:"fate-loader-core fate-loader-core-one",cx:"40",cy:"15",r:"1.7"}),M.jsx("circle",{className:"fate-loader-core fate-loader-core-two",cx:"64",cy:"18",r:"2.3"}),M.jsx("circle",{className:"fate-loader-core fate-loader-core-three",cx:"89",cy:"21",r:"1.7"})]})})}const pR=[{x:-78,y:-20},{x:-60,y:-14},{x:-42,y:-8},{x:-24,y:-3},{x:-7,y:0},{x:12,y:2},{x:30,y:7},{x:48,y:13},{x:67,y:20},{x:-78,y:20},{x:-60,y:14},{x:-42,y:8},{x:-24,y:3},{x:-7,y:0},{x:12,y:-2},{x:30,y:-7},{x:48,y:-13},{x:67,y:-20},{x:-2,y:-27},{x:-1,y:-14},{x:0,y:14},{x:1,y:27}];function mR(a,e){return{"--fragment-index":e,"--fragment-x":`${a.x}px`,"--fragment-y":`${a.y}px`}}function gR({announcement:a,eventKey:e}){return M.jsxs("div",{"aria-live":"polite",className:"first-nightmare-rune-event",children:[M.jsxs("div",{"aria-hidden":"true",className:"first-nightmare-particles",children:[M.jsxs("svg",{className:"first-nightmare-thread",viewBox:"0 0 180 60",children:[M.jsx("path",{d:"M5 12 C48 12 53 48 90 30 S135 12 175 48"}),M.jsx("path",{d:"M5 48 C48 48 53 12 90 30 S135 48 175 12"})]}),pR.map((n,r)=>M.jsx("span",{style:mR(n,r)},r))]}),M.jsx("p",{children:a})]},e)}const vR=["a[href]","button:not(:disabled)","input:not(:disabled)"].join(", ");function _R(a){const e=a.closest(".spell-surface-lab");if(!e)return()=>{};const n=Array.from(e.children).filter(o=>o!==a),r=n.map(o=>({ariaHidden:o.getAttribute("aria-hidden"),element:o,inert:o.inert}));for(const o of n)o.inert=!0,o.setAttribute("aria-hidden","true");return()=>{for(const o of r)o.element.inert=o.inert,o.ariaHidden===null?o.element.removeAttribute("aria-hidden"):o.element.setAttribute("aria-hidden",o.ariaHidden)}}function xR({initialStep:a=1,onComplete:e,onDefer:n,onKeyStored:r}){const[o,c]=Re.useState(a),[u,h]=Re.useState(ff),[m,p]=Re.useState(!1),_=Re.useRef(null),v=Re.useRef(document.activeElement instanceof HTMLElement?document.activeElement:null);Re.useEffect(()=>{const b=_.current;if(!b)return;const x=_R(b.parentElement??b);return()=>{x(),v.current?.focus()}},[]),Re.useEffect(()=>{_.current?.querySelector("[data-autofocus]")?.focus()},[o]);function g(){iy("deferred"),n()}function S(){try{i1(u),iy("completed"),p(!1),r?.(),c(4)}catch{p(!0)}}function T(b){if(b.key==="Escape"){b.preventDefault(),g();return}if(b.key!=="Tab"||!_.current)return;const x=_.current.querySelectorAll(vR),I=x[0],F=x[x.length-1];b.shiftKey&&document.activeElement===I&&(b.preventDefault(),F?.focus()),!b.shiftKey&&document.activeElement===F&&(b.preventDefault(),I?.focus())}const D=["","[The Nightmare Spell has found you.]","[The trial has taken shape.]","[Every Nightmare finds the vulnerable place.]","[Your preparation has been appraised.]"][o];return M.jsx("div",{className:"first-nightmare-backdrop",children:M.jsxs("section",{"aria-label":"First Nightmare setup","aria-modal":"true",className:"first-nightmare-panel",onKeyDown:T,ref:_,role:"dialog",children:[M.jsxs("header",{className:"first-nightmare-head",children:[M.jsx("span",{children:"First Nightmare"}),M.jsxs("small",{children:["· ",o," of 4"]})]}),M.jsx(gR,{announcement:D,eventKey:o}),M.jsxs("div",{className:"first-nightmare-content",children:[o===1&&M.jsxs(M.Fragment,{children:[M.jsx("h1",{children:"The Spell has found you"}),M.jsx("p",{children:"A thread has taken root in this browser. Before Weaver can read with you, there is one small trial."}),M.jsxs("div",{className:"first-nightmare-actions",children:[M.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:()=>c(2),type:"button",children:"Enter the First Nightmare"}),M.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===2&&M.jsxs(M.Fragment,{children:[M.jsx("h1",{children:"Bring your DeepSeek key"}),M.jsx("p",{children:"A DeepSeek API key is a private code that lets Weaver send your questions to DeepSeek and charge the model usage to your DeepSeek account."}),M.jsx("aside",{className:"first-nightmare-privacy",children:"Your key stays in this browser. Weaver sends it with each request and the server does not save it."}),M.jsxs("a",{href:"https://platform.deepseek.com/",rel:"noreferrer",target:"_blank",children:["Get a key from DeepSeek",M.jsx("span",{className:"sr-only",children:", opens the DeepSeek Platform in a new tab"})]}),M.jsxs("div",{className:"first-nightmare-actions",children:[M.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:()=>c(3),type:"button",children:"I have a key"}),M.jsx("button",{onClick:()=>c(1),type:"button",children:"Back"}),M.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===3&&M.jsxs("form",{onSubmit:b=>{b.preventDefault(),S()},children:[M.jsx("h1",{children:"Face the trial"}),M.jsx("label",{htmlFor:"first-nightmare-api-key",children:"Your DeepSeek API key"}),M.jsx("input",{autoCapitalize:"none",autoComplete:"off","data-autofocus":!0,id:"first-nightmare-api-key",onChange:b=>h(b.target.value),placeholder:"sk-...",spellCheck:!1,type:"password",value:u}),M.jsx("small",{children:"Stored only in this browser. You can replace or remove it later in Settings."}),m&&M.jsx("p",{className:"first-nightmare-error",role:"alert",children:"The key could not be stored in this browser. Check browser storage and try again."}),M.jsxs("div",{className:"first-nightmare-actions",children:[M.jsx("button",{className:"first-nightmare-primary",disabled:u.trim()==="",type:"submit",children:"Store key and continue"}),M.jsx("button",{onClick:()=>c(2),type:"button",children:"Back"}),M.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===4&&M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"first-nightmare-weaving",children:[M.jsx(r1,{label:"Fate threads draw together"}),M.jsx("span",{children:"[Fate threads draw together.]"})]}),M.jsxs("div",{"aria-label":"Appraisal: Glorious",className:"first-nightmare-appraisal",children:[M.jsx("span",{children:"Good"}),M.jsx("span",{children:"Exceptional"}),M.jsx("span",{children:"Remarkable"}),M.jsx("span",{children:"Glorious"})]}),M.jsx("h1",{children:"Your Aspect awakens"}),M.jsx("p",{children:"The key is stored in this browser. Weaver can now read, reread, and answer through your DeepSeek account."}),M.jsx("div",{className:"first-nightmare-actions",children:M.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:e,type:"button",children:"Enter Weaver"})})]})]},o)]})})}const yR=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function SR(a){try{const e=new URL(a);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function Yh(a,e){if(!e)return;const n=a.at(-1);if(n?.type==="text"){n.value+=e;return}a.push({type:"text",value:e})}function xu(a){const e=[];let n=0;for(const r of a.matchAll(yR)){const o=r.index??0;Yh(e,a.slice(n,o));const c=r[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const u=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=u?.[2]??"";u&&SR(h)?e.push({type:"link",label:u[1],href:h}):Yh(e,c)}n=o+c.length}return Yh(e,a.slice(n)),e}function bR(a){const e=a.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function MR(a){const e=[],n=String(a??"").split(/\r?\n/);let r=0;for(;r<n.length;){const o=n[r].trim();if(!o){r+=1;continue}if(o.startsWith("```")){const p=[];for(r+=1;r<n.length&&!n[r].trimStart().startsWith("```");)p.push(n[r]),r+=1;r<n.length&&(r+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(o);if(c){e.push({type:"heading",level:c[1].length,children:xu(c[2])}),r+=1;continue}if(o.startsWith(">")){e.push({type:"quote",children:xu(o.replace(/^>\s?/,""))}),r+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(o)){e.push({type:"rule"}),r+=1;continue}const u=/^[-*]\s+/.test(o),h=/^\d+[.)]\s+/.test(o);if(u||h){const p=[];for(;r<n.length;){const _=n[r].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(xu(v[1])),r+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;r<n.length;){const p=n[r].trim();if(!p||m.length>0&&bR(p))break;m.push(p),r+=1}e.push({type:"paragraph",children:xu(m.join(" "))})}return e}function mo(a){return a.map((e,n)=>{const r=`${e.type}-${n}`;return e.type==="text"?M.jsx(Re.Fragment,{children:e.value},r):e.type==="strong"?M.jsx("strong",{children:mo(e.children)},r):e.type==="emphasis"?M.jsx("em",{children:mo(e.children)},r):e.type==="code"?M.jsx("code",{children:e.value},r):M.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},r)})}function ER({children:a}){return MR(a).map((n,r)=>{const o=`${n.type}-${r}`;if(n.type==="paragraph")return M.jsx("p",{children:mo(n.children)},o);if(n.type==="heading"){const u=`h${n.level}`;return M.jsx(u,{children:mo(n.children)},o)}if(n.type==="code")return M.jsx("pre",{children:M.jsx("code",{children:n.value})},o);if(n.type==="quote")return M.jsx("blockquote",{children:mo(n.children)},o);if(n.type==="rule")return M.jsx("hr",{},o);const c=n.ordered?"ol":"ul";return M.jsx(c,{children:n.items.map((u,h)=>M.jsx("li",{children:mo(u)},`${o}-${h}`))},o)})}function TR({Mark:a,assistantName:e,message:n,onQuote:r,onRegenerate:o,regenerateLabel:c}){const[u,h]=Re.useState(!1),[m,p]=Re.useState(null),[_,v]=Re.useState(null),g=Re.useRef(null);Re.useEffect(()=>{function T(){if(n.role!=="weaver"||!r||!g.current)return;const D=window.getSelection(),b=D?D.toString().trim():"",x=g.current,I=D&&D.rangeCount>0&&x.contains(D.getRangeAt(0).commonAncestorContainer);if(b.length>=2&&I){const F=D.getRangeAt(0).getBoundingClientRect();p(b),v({top:F.bottom+6,left:F.left})}else p(null),v(null)}return document.addEventListener("selectionchange",T),()=>document.removeEventListener("selectionchange",T)},[n.role,r]);async function S(){await navigator.clipboard?.writeText(n.content),h(!0),window.setTimeout(()=>h(!1),1400)}return n.role==="owner"?M.jsx("article",{className:"message message-owner",children:M.jsxs("div",{className:"owner-message-content",children:[M.jsx("div",{className:"owner-bubble",children:n.content}),M.jsx("div",{className:"message-actions",children:M.jsxs("button",{"aria-label":"Copy owner message",onClick:S,type:"button",children:[M.jsx(oy,{}),M.jsx("span",{children:u?"Copied":"Copy"})]})})]})}):M.jsxs("article",{className:`message message-weaver ${n.streaming?"message-streaming":""}`,children:[M.jsx("div",{className:"weaver-avatar",children:M.jsx(a,{compact:!0})}),M.jsxs("div",{className:"weaver-message-content",children:[M.jsx("div",{className:"message-role",children:e}),M.jsx("div",{className:"markdown-body",ref:g,children:n.content?M.jsx(ER,{children:n.content}):M.jsx(r1,{})}),!n.streaming&&n.content&&M.jsxs("div",{className:"message-actions",children:[M.jsxs("button",{"aria-label":"Copy reply",onClick:S,type:"button",children:[M.jsx(oy,{}),M.jsx("span",{children:u?"Copied":"Copy"})]}),o&&M.jsxs("button",{"aria-label":"Regenerate reply",onClick:o,type:"button",children:[M.jsx(Jw,{}),M.jsx("span",{children:c})]})]})]}),m&&_&&M.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{r?.(m),p(null),v(null)},style:{top:_.top,left:_.left},type:"button",children:[M.jsx(aR,{}),M.jsx("span",{children:"ask about this"})]})]})}function AR({chooseLabel:a,createLabel:e,message:n,onChooseConversation:r,onCreateConversation:o,onRetry:c,retryLabel:u,title:h}){return M.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[M.jsx("span",{className:"recovery-knot"}),M.jsxs("div",{children:[M.jsx("strong",{children:h}),M.jsx("p",{children:n}),M.jsxs("div",{className:"recovery-actions",children:[c&&u&&M.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:u}),M.jsx("button",{onClick:o,type:"button",children:e}),M.jsx("button",{onClick:r,type:"button",children:a})]})]})]})}function wR(a){const e=Re.useRef(null);return e.current===null&&(e.current=a()),e.current}function RR(a,e){a.indexOf(e)===-1&&a.push(e)}function CR(a,e){const n=a.indexOf(e);n>-1&&a.splice(n,1)}const s1=(a,e,n)=>n>e?e:n<a?a:n;let DR=()=>{};const o1={},NR=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),LR=a=>/^0[^.\s]+$/u.test(a);function UR(a){let e;return()=>(e===void 0&&(e=a()),e)}const l1=a=>a;class c1{constructor(){this.subscriptions=[]}add(e){return RR(this.subscriptions,e),()=>CR(this.subscriptions,e)}notify(e,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,n,r);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const u1=a=>a*1e3,Kh=a=>a/1e3,OR=(a,e)=>e?a*(1e3/e):0,PR=a=>Array.isArray(a)&&typeof a[0]=="number",yu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function IR(a){let e=new Set,n=new Set,r=!1,o=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function h(p){c.has(p)&&(m.schedule(p),a()),p(u)}const m={schedule:(p,_=!1,v=!1)=>{const S=v&&r?e:n;return _&&c.add(p),S.add(p),p},cancel:p=>{n.delete(p),c.delete(p)},process:p=>{if(u=p,r){o=!0;return}r=!0;const _=e;e=n,n=_,e.forEach(h),e.clear(),r=!1,o&&(o=!1,m.process(p))}};return m}const FR=40;function f1(a,e){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=yu.reduce((F,A)=>(F[A]=IR(c),F),{}),{setup:h,read:m,resolveKeyframes:p,preUpdate:_,update:v,preRender:g,render:S,postRender:T}=u,D=()=>{const F=o1.useManualTiming,A=F?o.timestamp:performance.now();n=!1,F||(o.delta=r?1e3/60:Math.max(Math.min(A-o.timestamp,FR),1)),o.timestamp=A,o.isProcessing=!0,h.process(o),m.process(o),p.process(o),_.process(o),v.process(o),g.process(o),S.process(o),T.process(o),o.isProcessing=!1,n&&e&&(r=!1,a(D))},b=()=>{n=!0,r=!0,o.isProcessing||a(D)};return{schedule:yu.reduce((F,A)=>{const U=u[A];return F[A]=(L,B=!1,w=!1)=>(n||b(),U.schedule(L,B,w)),F},{}),cancel:F=>{for(let A=0;A<yu.length;A++)u[yu[A]].cancel(F)},state:o,steps:u}}const{schedule:Xl,cancel:uy,state:fy}=f1(typeof requestAnimationFrame<"u"?requestAnimationFrame:l1,!0);let ef;function zR(){ef=void 0}const Hl={now:()=>(ef===void 0&&Hl.set(fy.isProcessing||o1.useManualTiming?fy.timestamp:performance.now()),ef),set:a=>{ef=a,queueMicrotask(zR)}},Ro={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Wl={...Ro,transform:a=>s1(0,1,a)},Su={...Ro,default:1},Gl=a=>Math.round(a*1e5)/1e5,_g=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function BR(a){return a==null}const VR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xg=(a,e)=>n=>!!(typeof n=="string"&&VR.test(n)&&n.startsWith(a)||e&&!BR(n)&&Object.prototype.hasOwnProperty.call(n,e)),d1=(a,e,n)=>r=>{if(typeof r!="string")return r;const[o,c,u,h]=r.match(_g);return{[a]:parseFloat(o),[e]:parseFloat(c),[n]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},HR=a=>s1(0,255,a),Zh={...Ro,transform:a=>Math.round(HR(a))},Ol={test:xg("rgb","red"),parse:d1("red","green","blue"),transform:({red:a,green:e,blue:n,alpha:r=1})=>"rgba("+Zh.transform(a)+", "+Zh.transform(e)+", "+Zh.transform(n)+", "+Gl(Wl.transform(r))+")"};function GR(a){let e="",n="",r="",o="";return a.length>5?(e=a.substring(1,3),n=a.substring(3,5),r=a.substring(5,7),o=a.substring(7,9)):(e=a.substring(1,2),n=a.substring(2,3),r=a.substring(3,4),o=a.substring(4,5),e+=e,n+=n,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const dy={test:xg("#"),parse:GR,transform:Ol.transform},Ql=a=>({test:e=>typeof e=="string"&&e.endsWith(a)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${a}`}),Ua=Ql("deg"),_o=Ql("%"),$e=Ql("px"),kR=Ql("vh"),XR=Ql("vw"),hy={..._o,parse:a=>_o.parse(a)/100,transform:a=>_o.transform(a*100)},bu={test:xg("hsl","hue"),parse:d1("hue","saturation","lightness"),transform:({hue:a,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(a)+", "+_o.transform(Gl(e))+", "+_o.transform(Gl(n))+", "+Gl(Wl.transform(r))+")"},Nn={test:a=>Ol.test(a)||dy.test(a)||bu.test(a),parse:a=>Ol.test(a)?Ol.parse(a):bu.test(a)?bu.parse(a):dy.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Ol.transform(a):bu.transform(a),getAnimatableNone:a=>{const e=Nn.parse(a);return e.alpha=0,Nn.transform(e)}},WR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function jR(a){return isNaN(a)&&typeof a=="string"&&(a.match(_g)?.length||0)+(a.match(WR)?.length||0)>0}const h1="number",p1="color",qR="var",YR="var(",py="${}",KR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yg(a){const e=a.toString(),n=[],r={color:[],number:[],var:[]},o=[];let c=0;const h=e.replace(KR,m=>(Nn.test(m)?(r.color.push(c),o.push(p1),n.push(Nn.parse(m))):m.startsWith(YR)?(r.var.push(c),o.push(qR),n.push(m)):(r.number.push(c),o.push(h1),n.push(parseFloat(m))),++c,py)).split(py);return{values:n,split:h,indexes:r,types:o}}function ZR(a){return yg(a).values}function m1({split:a,types:e}){const n=a.length;return r=>{let o="";for(let c=0;c<n;c++)if(o+=a[c],r[c]!==void 0){const u=e[c];u===h1?o+=Gl(r[c]):u===p1?o+=Nn.transform(r[c]):o+=r[c]}return o}}function QR(a){return m1(yg(a))}const $R=a=>typeof a=="number"?0:Nn.test(a)?Nn.getAnimatableNone(a):a,JR=(a,e)=>typeof a=="number"?e?.trim().endsWith("/")?a:0:$R(a);function eC(a){const e=yg(a);return m1(e)(e.values.map((r,o)=>JR(r,e.split[o])))}const us={test:jR,parse:ZR,createTransformer:QR,getAnimatableNone:eC},tC=(a,e,n=10)=>{let r="";const o=Math.max(Math.round(e/n),2);for(let c=0;c<o;c++)r+=Math.round(a(c/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},nC=a=>a!==null;function iC(a,{repeat:e,repeatType:n="loop"},r,o=1){const c=a.filter(nC),h=o<0||e&&n!=="loop"&&e%2===1?0:c.length-1;return!h||r===void 0?c[h]:r}class aC{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}function rC(a){for(let e=1;e<a.length;e++)a[e]??(a[e]=a[e-1])}const os=a=>a*180/Math.PI,tm=a=>{const e=os(Math.atan2(a[1],a[0]));return nm(e)},sC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:tm,rotateZ:tm,skewX:a=>os(Math.atan(a[1])),skewY:a=>os(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},nm=a=>(a=a%360,a<0&&(a+=360),a),my=tm,gy=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),vy=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),oC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gy,scaleY:vy,scale:a=>(gy(a)+vy(a))/2,rotateX:a=>nm(os(Math.atan2(a[6],a[5]))),rotateY:a=>nm(os(Math.atan2(-a[2],a[0]))),rotateZ:my,rotate:my,skewX:a=>os(Math.atan(a[4])),skewY:a=>os(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function _y(a){return a.includes("scale")?1:0}function im(a,e){if(!a||a==="none")return _y(e);const n=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(n)r=oC,o=n;else{const h=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=sC,o=h}if(!o)return _y(e);const c=r[e],u=o[1].split(",").map(lC);return typeof c=="function"?c(u):u[c]}const SI=(a,e)=>{const{transform:n="none"}=getComputedStyle(a);return im(n,e)};function lC(a){return parseFloat(a.trim())}const g1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],cC=new Set([...g1,"pathRotation"]),bI=a=>a===Ro||a===$e,uC=new Set(["x","y","z"]),fC=g1.filter(a=>!uC.has(a));function dC(a){const e=[];return fC.forEach(n=>{const r=a.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const df={width:({x:a},{paddingLeft:e="0",paddingRight:n="0",boxSizing:r})=>{const o=a.max-a.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(n)},height:({y:a},{paddingTop:e="0",paddingBottom:n="0",boxSizing:r})=>{const o=a.max-a.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(n)},top:(a,{top:e})=>parseFloat(e),left:(a,{left:e})=>parseFloat(e),bottom:({y:a},{top:e})=>parseFloat(e)+(a.max-a.min),right:({x:a},{left:e})=>parseFloat(e)+(a.max-a.min),x:(a,{transform:e})=>im(e,"x"),y:(a,{transform:e})=>im(e,"y")};df.translateX=df.x;df.translateY=df.y;const fs=new Set;let am=!1,rm=!1,sm=!1;function v1(){if(rm){const a=Array.from(fs).filter(r=>r.needsMeasurement),e=new Set(a.map(r=>r.element)),n=new Map;e.forEach(r=>{const o=dC(r);o.length&&(n.set(r,o),r.render())}),a.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=n.get(r);o&&o.forEach(([c,u])=>{r.getValue(c)?.set(u)})}),a.forEach(r=>r.measureEndState()),a.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}rm=!1,am=!1,fs.forEach(a=>a.complete(sm)),fs.clear()}function _1(){fs.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(rm=!0)})}function MI(){sm=!0,_1(),v1(),sm=!1}class hC{constructor(e,n,r,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(fs.add(this),am||(am=!0,Xl.read(_1),Xl.resolveKeyframes(v1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:o}=this;if(e[0]===null){const c=o?.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&n){const h=r.readValue(n,u);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}rC(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),fs.delete(this)}cancel(){this.state==="scheduled"&&(fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const pC=a=>a.startsWith("--");function mC(a,e,n){pC(e)?a.style.setProperty(e,n):a.style[e]=n}const gC={};function x1(a,e){const n=UR(a);return()=>gC[e]??n()}const vC=x1(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),y1=x1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Pl=([a,e,n,r])=>`cubic-bezier(${a}, ${e}, ${n}, ${r})`,xy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pl([0,.65,.55,1]),circOut:Pl([.55,0,1,.45]),backIn:Pl([.31,.01,.66,-.59]),backOut:Pl([.33,1.53,.69,.99])};function S1(a,e){if(a)return typeof a=="function"?y1()?tC(a,e):"ease-out":PR(a)?Pl(a):Array.isArray(a)?a.map(n=>S1(n,e)||xy.easeOut):xy[a]}function _C(a,e,n,{delay:r=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:h="easeOut",times:m}={},p=void 0){const _={[e]:n};m&&(_.offset=m);const v=S1(h,o);Array.isArray(v)&&(_.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return p&&(g.pseudoElement=p),a.animate(_,g)}function xC(a){return typeof a=="function"&&"applyToOptions"in a}function yC({type:a,...e}){return xC(a)&&y1()?a.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class SC extends aC{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:r,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:h,onComplete:m}=e;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=e,DR(typeof e.type!="string");const p=yC(e);this.animation=_C(n,r,o,p,c),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const _=iC(o,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),mC(n,r,_),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Kh(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Kh(e)}get time(){return Kh(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=u1(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:r,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&vC()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),l1):o(this)}}const bC=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),yy=30,MC=a=>!isNaN(parseFloat(a));class EC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=Hl.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Hl.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=MC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new c1);const r=this.events[e].add(n);return e==="change"?()=>{r(),Xl.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Hl.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>yy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,yy);return OR(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function om(a,e){return new EC(a,e)}function TC(a,e){if(a?.inherit&&e){const{inherit:n,...r}=a;return{...e,...r}}return a}function Sy(a){const e=[{},{}];return a?.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function AC(a,e,n,r){if(typeof e=="function"){const[o,c]=Sy(r);e=e(n!==void 0?n:a.custom,o,c)}if(typeof e=="string"&&(e=a.variants&&a.variants[e]),typeof e=="function"){const[o,c]=Sy(r);e=e(n!==void 0?n:a.custom,o,c)}return e}const go=a=>!!(a&&a.getVelocity),wC={test:a=>a==="auto",parse:a=>a},b1=a=>e=>e.test(a),M1=[Ro,$e,_o,Ua,XR,kR,wC],EI=a=>M1.find(b1(a)),RC=new Set(["brightness","contrast","saturate","opacity"]);function CC(a){const[e,n]=a.slice(0,-1).split("(");if(e==="drop-shadow")return a;const[r]=n.match(_g)||[];if(!r)return a;const o=n.replace(r,"");let c=RC.has(e)?1:0;return r!==n&&(c*=100),e+"("+c+o+")"}const DC=/\b([a-z-]*)\(.*?\)/gu,lm={...us,getAnimatableNone:a=>{const e=a.match(DC);return e?e.map(CC).join(" "):a}},cm={...us,getAnimatableNone:a=>{const e=us.parse(a);return us.createTransformer(a)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},by={...Ro,transform:Math.round},NC={rotate:Ua,pathRotation:Ua,rotateX:Ua,rotateY:Ua,rotateZ:Ua,scale:Su,scaleX:Su,scaleY:Su,scaleZ:Su,skew:Ua,skewX:Ua,skewY:Ua,distance:$e,translateX:$e,translateY:$e,translateZ:$e,x:$e,y:$e,z:$e,perspective:$e,transformPerspective:$e,opacity:Wl,originX:hy,originY:hy,originZ:$e},LC={borderWidth:$e,borderTopWidth:$e,borderRightWidth:$e,borderBottomWidth:$e,borderLeftWidth:$e,borderRadius:$e,borderTopLeftRadius:$e,borderTopRightRadius:$e,borderBottomRightRadius:$e,borderBottomLeftRadius:$e,width:$e,maxWidth:$e,height:$e,maxHeight:$e,top:$e,right:$e,bottom:$e,left:$e,inset:$e,insetBlock:$e,insetBlockStart:$e,insetBlockEnd:$e,insetInline:$e,insetInlineStart:$e,insetInlineEnd:$e,padding:$e,paddingTop:$e,paddingRight:$e,paddingBottom:$e,paddingLeft:$e,paddingBlock:$e,paddingBlockStart:$e,paddingBlockEnd:$e,paddingInline:$e,paddingInlineStart:$e,paddingInlineEnd:$e,margin:$e,marginTop:$e,marginRight:$e,marginBottom:$e,marginLeft:$e,marginBlock:$e,marginBlockStart:$e,marginBlockEnd:$e,marginInline:$e,marginInlineStart:$e,marginInlineEnd:$e,fontSize:$e,backgroundPositionX:$e,backgroundPositionY:$e,...NC,zIndex:by,fillOpacity:Wl,strokeOpacity:Wl,numOctaves:by},UC={...LC,color:Nn,backgroundColor:Nn,outlineColor:Nn,fill:Nn,stroke:Nn,borderColor:Nn,borderTopColor:Nn,borderRightColor:Nn,borderBottomColor:Nn,borderLeftColor:Nn,filter:lm,WebkitFilter:lm,mask:cm,WebkitMask:cm},OC=a=>UC[a],PC=new Set([lm,cm]);function IC(a,e){let n=OC(a);return PC.has(n)||(n=us),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const{schedule:FC}=f1(queueMicrotask,!1),zC=[...M1,Nn,us],BC=a=>zC.find(b1(a)),My=()=>({min:0,max:0}),VC=()=>({x:My(),y:My()}),HC=new WeakMap;function GC(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function kC(a){return typeof a=="string"||Array.isArray(a)}const XC=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],WC=["initial",...XC];function E1(a){return GC(a.animate)||WC.some(e=>kC(a[e]))}function jC(a){return!!(E1(a)||a.variants)}function qC(a,e,n){for(const r in e){const o=e[r],c=n[r];if(go(o))a.addValue(r,o);else if(go(c))a.addValue(r,om(o,{owner:a}));else if(c!==o)if(a.hasValue(r)){const u=a.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=a.getStaticValue(r);a.addValue(r,om(u!==void 0?u:o,{owner:a}))}}for(const r in n)e[r]===void 0&&a.removeValue(r);return e}const um={current:null},T1={current:!1},YC=typeof window<"u";function KC(){if(T1.current=!0,!!YC)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),e=()=>um.current=a.matches;a.addEventListener("change",e),e()}else um.current=!1}const Ey=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let hf={};function A1(a){hf=a}function ZC(){return hf}class TI{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=hC,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Hl.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Xl.render(this.render,!1,!0))};const{latestValues:p,renderState:_}=h;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=_,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=E1(n),this.isVariantNode=jC(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(n,{},this);for(const S in g){const T=g[S];p[S]!==void 0&&go(T)&&T.set(p[S])}}mount(e){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=e,HC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(T1.current||KC(),this.shouldReduceMotion=um.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),uy(this.notifyUpdate),uy(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&bC.has(e)&&this.current instanceof HTMLElement){const{factory:u,keyframes:h,times:m,ease:p,duration:_}=n.accelerate,v=new SC({element:this.current,name:e,keyframes:h,times:m,ease:p,duration:u1(_)}),g=u(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=cC.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Xl.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{o(),c&&c()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in hf){const n=hf[e];if(!n)continue;const{isEnabled:r,Feature:o}=n;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):VC()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Ey.length;r++){const o=Ey[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=e[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=qC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=om(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(NR(r)||LR(r))?r=parseFloat(r):!BC(r)&&us.test(n)&&(r=IC(e,n)),this.setBaseTarget(e,go(r)?r.get():r)),go(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const c=AC(this.props,n,this.presenceContext?.custom);c&&(r=c[e])}if(n&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!go(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new c1),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){FC.render(this.render)}}const Ty=Re.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"}),QC=Re.createContext({strict:!1}),Ay={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let wy=!1;function $C(){if(wy)return;const a={};for(const e in Ay)a[e]={isEnabled:n=>Ay[e].some(r=>!!n[r])};A1(a),wy=!0}function JC(){return $C(),ZC()}function Ry(a){const e=JC();for(const n in a)e[n]={...e[n],...a[n]};A1(e)}function eD({children:a,features:e,strict:n=!1}){const[,r]=Re.useState(!Qh(e)),o=Re.useRef(void 0);if(!Qh(e)){const{renderer:c,...u}=e;o.current=c,Ry(u)}return Re.useEffect(()=>{Qh(e)&&e().then(({renderer:c,...u})=>{Ry(u),o.current=c,r(!0)})},[]),M.jsx(QC.Provider,{value:{renderer:o.current,strict:n},children:a})}function Qh(a){return typeof a=="function"}function tD({children:a,...e}){const n=Re.useContext(Ty);e={...n,...e},e.transition=TC(e.transition,n.transition),e.isStatic=wR(()=>e.isStatic);const r=Re.useMemo(()=>e,[JSON.stringify(e.transition),e.transformPagePoint,e.reducedMotion,e.skipAnimations,e.isValidProp]);return M.jsx(Ty.Provider,{value:r,children:a})}const nD=()=>GS(()=>import("./spellMotionFeatures-DTDDHiAF.js"),[]).then(a=>a.default);function iD({children:a}){return M.jsx(eD,{features:nD,strict:!0,children:M.jsx(tD,{reducedMotion:"user",children:a})})}const Sg="185",aD=0,Cy=1,rD=2,tf=1,sD=2,Il=3,Rr=0,ii=1,Oa=2,Ia=0,xo=1,Dy=2,Ny=3,Ly=4,oD=5,as=100,lD=101,cD=102,uD=103,fD=104,dD=200,hD=201,pD=202,mD=203,fm=204,dm=205,gD=206,vD=207,_D=208,xD=209,yD=210,SD=211,bD=212,MD=213,ED=214,hm=0,pm=1,mm=2,Mo=3,gm=4,vm=5,_m=6,xm=7,w1=0,TD=1,AD=2,sa=0,R1=1,C1=2,D1=3,N1=4,L1=5,U1=6,O1=7,P1=300,ms=301,Eo=302,$h=303,Jh=304,Cf=306,ym=1e3,Pa=1001,Sm=1002,Fn=1003,wD=1004,Mu=1005,Xn=1006,ep=1007,ls=1008,Li=1009,I1=1010,F1=1011,jl=1012,bg=1013,la=1014,aa=1015,Va=1016,Mg=1017,Eg=1018,ql=1020,z1=35902,B1=35899,V1=1021,H1=1022,Xi=1023,Ha=1026,cs=1027,G1=1028,Tg=1029,gs=1030,Ag=1031,wg=1033,nf=33776,af=33777,rf=33778,sf=33779,bm=35840,Mm=35841,Em=35842,Tm=35843,Am=36196,wm=37492,Rm=37496,Cm=37488,Dm=37489,pf=37490,Nm=37491,Lm=37808,Um=37809,Om=37810,Pm=37811,Im=37812,Fm=37813,zm=37814,Bm=37815,Vm=37816,Hm=37817,Gm=37818,km=37819,Xm=37820,Wm=37821,jm=36492,qm=36494,Ym=36495,Km=36283,Zm=36284,mf=36285,Qm=36286,RD=3200,Uy=0,CD=1,Mr="",Di="srgb",gf="srgb-linear",vf="linear",Yt="srgb",Js=7680,Oy=519,DD=512,ND=513,LD=514,Rg=515,UD=516,OD=517,Cg=518,PD=519,Py=35044,Iy="300 es",ra=2e3,_f=2001;function ID(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function xf(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function FD(){const a=xf("canvas");return a.style.display="block",a}const Fy={};function zy(...a){const e="THREE."+a.shift();console.log(e,...a)}function k1(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ut(...a){a=k1(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Lt(...a){a=k1(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function yo(...a){const e=a.join(" ");e in Fy||(Fy[e]=!0,ut(...a))}function zD(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const BD={[hm]:pm,[mm]:_m,[gm]:xm,[Mo]:vm,[pm]:hm,[_m]:mm,[xm]:gm,[vm]:Mo};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tp=Math.PI/180,$m=180/Math.PI;function $l(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Nt(a,e,n){return Math.max(e,Math.min(n,a))}function VD(a,e){return(a%e+e)%e}function np(a,e,n){return(1-n)*a+n*e}function El(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lg=class Lg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lg.prototype.isVector2=!0;let zt=Lg;class Co{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,h){let m=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3],g=c[u+0],S=c[u+1],T=c[u+2],D=c[u+3];if(v!==D||m!==g||p!==S||_!==T){let b=m*g+p*S+_*T+v*D;b<0&&(g=-g,S=-S,T=-T,D=-D,b=-b);let x=1-h;if(b<.9995){const I=Math.acos(b),F=Math.sin(I);x=Math.sin(x*I)/F,h=Math.sin(h*I)/F,m=m*x+g*h,p=p*x+S*h,_=_*x+T*h,v=v*x+D*h}else{m=m*x+g*h,p=p*x+S*h,_=_*x+T*h,v=v*x+D*h;const I=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=I,p*=I,_*=I,v*=I}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],_=r[o+3],v=c[u],g=c[u+1],S=c[u+2],T=c[u+3];return e[n]=h*T+_*v+m*S-p*g,e[n+1]=m*T+_*g+p*v-h*S,e[n+2]=p*T+_*S+h*g-m*v,e[n+3]=_*T-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(o/2),v=h(c/2),g=m(r/2),S=m(o/2),T=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"YZX":this._x=g*_*v+p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v-g*S*T;break;case"XZY":this._x=g*_*v-p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v+g*S*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-r*p,this._z=c*_+u*p+r*m-o*h,this._w=u*_-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ug=class Ug{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(By.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(By.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),_=2*(h*n-c*o),v=2*(c*r-u*n);return this.x=n+m*p+u*v-h*_,this.y=r+m*_+h*p-c*v,this.z=o+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ip.copy(this).projectOnVector(e),this.sub(ip)}reflect(e){return this.sub(ip.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ug.prototype.isVector3=!0;let se=Ug;const ip=new se,By=new Co,Og=class Og{constructor(e,n,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p)}set(e,n,r,o,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],_=r[4],v=r[7],g=r[2],S=r[5],T=r[8],D=o[0],b=o[3],x=o[6],I=o[1],F=o[4],A=o[7],U=o[2],L=o[5],B=o[8];return c[0]=u*D+h*I+m*U,c[3]=u*b+h*F+m*L,c[6]=u*x+h*A+m*B,c[1]=p*D+_*I+v*U,c[4]=p*b+_*F+v*L,c[7]=p*x+_*A+v*B,c[2]=g*D+S*I+T*U,c[5]=g*b+S*F+T*L,c[8]=g*x+S*A+T*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*h*p-r*c*_+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*u-h*p,g=h*m-_*c,S=p*c-u*m,T=n*v+r*g+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=v*D,e[1]=(o*p-_*r)*D,e[2]=(h*r-o*u)*D,e[3]=g*D,e[4]=(_*n-o*m)*D,e[5]=(o*c-h*n)*D,e[6]=S*D,e[7]=(r*m-p*n)*D,e[8]=(u*n-r*c)*D,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ap.makeScale(e,n)),this}rotate(e){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ap.makeRotation(-e)),this}translate(e,n){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ap.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Og.prototype.isMatrix3=!0;let mt=Og;const ap=new mt,Vy=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hy=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HD(){const a={enabled:!0,workingColorSpace:gf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Yt&&(o.r=Fa(o.r),o.g=Fa(o.g),o.b=Fa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=So(o.r),o.g=So(o.g),o.b=So(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?vf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[gf]:{primaries:e,whitePoint:r,transfer:vf,toXYZ:Vy,fromXYZ:Hy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:Vy,fromXYZ:Hy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),a}const Dt=HD();function Fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function So(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let eo;class GD{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{eo===void 0&&(eo=xf("canvas")),eo.width=e.width,eo.height=e.height;const o=eo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=eo}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xf("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Fa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fa(n[r]/255)*255):n[r]=Fa(n[r]);return{data:n,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kD=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kD++}),this.uuid=$l(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(rp(o[u].image)):c.push(rp(o[u]))}else c=rp(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function rp(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?GD.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let XD=0;const sp=new se;class qn extends _s{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,r=Pa,o=Pa,c=Xn,u=ls,h=Xi,m=Li,p=qn.DEFAULT_ANISOTROPY,_=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XD++}),this.uuid=$l(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sp).x}get height(){return this.source.getSize(sp).y}get depth(){return this.source.getSize(sp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ym:e.x=e.x-Math.floor(e.x);break;case Pa:e.x=e.x<0?0:1;break;case Sm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ym:e.y=e.y-Math.floor(e.y);break;case Pa:e.y=e.y<0?0:1;break;case Sm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=P1;qn.DEFAULT_ANISOTROPY=1;const Pg=class Pg{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],T=m[9],D=m[2],b=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(T-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(T+b)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(p+1)/2,A=(S+1)/2,U=(x+1)/2,L=(_+g)/4,B=(v+D)/4,w=(T+b)/4;return F>A&&F>U?F<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(F),o=L/r,c=B/r):A>U?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=L/o,c=w/o):U<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),r=B/c,o=w/c),this.set(r,o,c,n),this}let I=Math.sqrt((b-T)*(b-T)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(I)<.001&&(I=1),this.x=(b-T)/I,this.y=(v-D)/I,this.z=(g-_)/I,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this.w=Nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this.w=Nt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pg.prototype.isVector4=!0;let dn=Pg;class WD extends _s{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new dn(0,0,e,n),this.scissorTest=!1,this.viewport=new dn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new qn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Dg(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends WD{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class X1 extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jD extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mf=class Mf{constructor(e,n,r,o,c,u,h,m,p,_,v,g,S,T,D,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p,_,v,g,S,T,D,b)}set(e,n,r,o,c,u,h,m,p,_,v,g,S,T,D,b){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=g,x[3]=S,x[7]=T,x[11]=D,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mf().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/to.setFromMatrixColumn(e,0).length(),c=1/to.setFromMatrixColumn(e,1).length(),u=1/to.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,S=u*v,T=h*_,D=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=S+T*p,n[5]=g-D*p,n[9]=-h*m,n[2]=D-g*p,n[6]=T+S*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,T=p*_,D=p*v;n[0]=g+D*h,n[4]=T*h-S,n[8]=u*p,n[1]=u*v,n[5]=u*_,n[9]=-h,n[2]=S*h-T,n[6]=D+g*h,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,T=p*_,D=p*v;n[0]=g-D*h,n[4]=-u*v,n[8]=T+S*h,n[1]=S+T*h,n[5]=u*_,n[9]=D-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,S=u*v,T=h*_,D=h*v;n[0]=m*_,n[4]=T*p-S,n[8]=g*p+D,n[1]=m*v,n[5]=D*p+g,n[9]=S*p-T,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,S=u*p,T=h*m,D=h*p;n[0]=m*_,n[4]=D-g*v,n[8]=T*v+S,n[1]=v,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=S*v+T,n[10]=g-D*v}else if(e.order==="XZY"){const g=u*m,S=u*p,T=h*m,D=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+D,n[5]=u*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=h*_,n[10]=D*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qD,e,YD)}lookAt(e,n,r){const o=this.elements;return gi.subVectors(e,n),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),vr.crossVectors(r,gi),vr.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),vr.crossVectors(r,gi)),vr.normalize(),Eu.crossVectors(gi,vr),o[0]=vr.x,o[4]=Eu.x,o[8]=gi.x,o[1]=vr.y,o[5]=Eu.y,o[9]=gi.y,o[2]=vr.z,o[6]=Eu.z,o[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],_=r[1],v=r[5],g=r[9],S=r[13],T=r[2],D=r[6],b=r[10],x=r[14],I=r[3],F=r[7],A=r[11],U=r[15],L=o[0],B=o[4],w=o[8],z=o[12],k=o[1],G=o[5],K=o[9],he=o[13],me=o[2],ee=o[6],N=o[10],H=o[14],te=o[3],_e=o[7],Te=o[11],O=o[15];return c[0]=u*L+h*k+m*me+p*te,c[4]=u*B+h*G+m*ee+p*_e,c[8]=u*w+h*K+m*N+p*Te,c[12]=u*z+h*he+m*H+p*O,c[1]=_*L+v*k+g*me+S*te,c[5]=_*B+v*G+g*ee+S*_e,c[9]=_*w+v*K+g*N+S*Te,c[13]=_*z+v*he+g*H+S*O,c[2]=T*L+D*k+b*me+x*te,c[6]=T*B+D*G+b*ee+x*_e,c[10]=T*w+D*K+b*N+x*Te,c[14]=T*z+D*he+b*H+x*O,c[3]=I*L+F*k+A*me+U*te,c[7]=I*B+F*G+A*ee+U*_e,c[11]=I*w+F*K+A*N+U*Te,c[15]=I*z+F*he+A*H+U*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],T=e[3],D=e[7],b=e[11],x=e[15],I=m*S-p*g,F=h*S-p*v,A=h*g-m*v,U=u*S-p*_,L=u*g-m*_,B=u*v-h*_;return n*(D*I-b*F+x*A)-r*(T*I-b*U+x*L)+o*(T*F-D*U+x*B)-c*(T*A-D*L+b*B)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return n*(u*_-h*p)-r*(c*_-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],T=e[12],D=e[13],b=e[14],x=e[15],I=n*h-r*u,F=n*m-o*u,A=n*p-c*u,U=r*m-o*h,L=r*p-c*h,B=o*p-c*m,w=_*D-v*T,z=_*b-g*T,k=_*x-S*T,G=v*b-g*D,K=v*x-S*D,he=g*x-S*b,me=I*he-F*K+A*G+U*k-L*z+B*w;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/me;return e[0]=(h*he-m*K+p*G)*ee,e[1]=(o*K-r*he-c*G)*ee,e[2]=(D*B-b*L+x*U)*ee,e[3]=(g*L-v*B-S*U)*ee,e[4]=(m*k-u*he-p*z)*ee,e[5]=(n*he-o*k+c*z)*ee,e[6]=(b*A-T*B-x*F)*ee,e[7]=(_*B-g*A+S*F)*ee,e[8]=(u*K-h*k+p*w)*ee,e[9]=(r*k-n*K-c*w)*ee,e[10]=(T*L-D*A+x*I)*ee,e[11]=(v*A-_*L-S*I)*ee,e[12]=(h*z-u*G-m*w)*ee,e[13]=(n*G-r*z+o*w)*ee,e[14]=(D*F-T*U-b*I)*ee,e[15]=(_*U-v*F+g*I)*ee,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+r,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,v=h+h,g=c*p,S=c*_,T=c*v,D=u*_,b=u*v,x=h*v,I=m*p,F=m*_,A=m*v,U=r.x,L=r.y,B=r.z;return o[0]=(1-(D+x))*U,o[1]=(S+A)*U,o[2]=(T-F)*U,o[3]=0,o[4]=(S-A)*L,o[5]=(1-(g+x))*L,o[6]=(b+I)*L,o[7]=0,o[8]=(T+F)*B,o[9]=(b-I)*B,o[10]=(1-(g+D))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=to.set(o[0],o[1],o[2]).length();const h=to.set(o[4],o[5],o[6]).length(),m=to.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Bi.copy(this);const p=1/u,_=1/h,v=1/m;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,n.setFromRotationMatrix(Bi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,n,r,o,c,u,h=ra,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(r-o),g=(n+e)/(n-e),S=(r+o)/(r-o);let T,D;if(m)T=c/(u-c),D=u*c/(u-c);else if(h===ra)T=-(u+c)/(u-c),D=-2*u*c/(u-c);else if(h===_f)T=-u/(u-c),D=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,h=ra,m=!1){const p=this.elements,_=2/(n-e),v=2/(r-o),g=-(n+e)/(n-e),S=-(r+o)/(r-o);let T,D;if(m)T=1/(u-c),D=u/(u-c);else if(h===ra)T=-2/(u-c),D=-(u+c)/(u-c);else if(h===_f)T=-1/(u-c),D=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Mf.prototype.isMatrix4=!0;let hn=Mf;const to=new se,Bi=new hn,qD=new se(0,0,0),YD=new se(1,1,1),vr=new se,Eu=new se,gi=new se,Gy=new hn,ky=new Co;class vs{constructor(e=0,n=0,r=0,o=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],v=o[2],g=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Gy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gy,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ky.setFromEuler(this),this.setFromQuaternion(ky,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class W1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KD=0;const Xy=new se,no=new Co,Ra=new hn,Tu=new se,Tl=new se,ZD=new se,QD=new Co,Wy=new se(1,0,0),jy=new se(0,1,0),qy=new se(0,0,1),Yy={type:"added"},$D={type:"removed"},io={type:"childadded",child:null},op={type:"childremoved",child:null};class Yn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KD++}),this.uuid=$l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new se,n=new vs,r=new Co,o=new se(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new mt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(Wy,e)}rotateY(e){return this.rotateOnAxis(jy,e)}rotateZ(e){return this.rotateOnAxis(qy,e)}translateOnAxis(e,n){return Xy.copy(e).applyQuaternion(this.quaternion),this.position.add(Xy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wy,e)}translateY(e){return this.translateOnAxis(jy,e)}translateZ(e){return this.translateOnAxis(qy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Tu.copy(e):Tu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Tl,Tu,this.up):Ra.lookAt(Tu,Tl,this.up),this.quaternion.setFromRotationMatrix(Ra),o&&(Ra.extractRotation(o.matrixWorld),no.setFromRotationMatrix(Ra),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yy),io.child=e,this.dispatchEvent(io),io.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($D),op.child=e,this.dispatchEvent(op),op.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yy),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,ZD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,QD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Yn.DEFAULT_UP=new se(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Au extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JD={type:"move"};class lp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const D of e.hand.values()){const b=n.getJointPose(D,r),x=this._getHandJoint(p,D);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(JD)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Au;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const j1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},wu={h:0,s:0,l:0};function cp(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Dt.workingColorSpace){if(e=VD(e,1),n=Nt(n,0,1),r=Nt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=cp(u,c,e+1/3),this.g=cp(u,c,e),this.b=cp(u,c,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,n=Di){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Di){const r=j1[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Dt.workingToColorSpace(kn.copy(this),e),Math.round(Nt(kn.r*255,0,255))*65536+Math.round(Nt(kn.g*255,0,255))*256+Math.round(Nt(kn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(kn.copy(this),n);const r=kn.r,o=kn.g,c=kn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=_<=.5?v/(u+h):v/(2-u-h),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(kn.copy(this),n),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Di){Dt.workingToColorSpace(kn.copy(this),e);const n=kn.r,r=kn.g,o=kn.b;return e!==Di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(wu);const r=np(_r.h,wu.h,n),o=np(_r.s,wu.s,n),c=np(_r.l,wu.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Rt;Rt.NAMES=j1;class eN extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vi=new se,Ca=new se,up=new se,Da=new se,ao=new se,ro=new se,Ky=new se,fp=new se,dp=new se,hp=new se,pp=new dn,mp=new dn,gp=new dn;class Gi{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Vi.subVectors(e,n),o.cross(Vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Vi.subVectors(o,n),Ca.subVectors(r,n),up.subVectors(e,n);const u=Vi.dot(Vi),h=Vi.dot(Ca),m=Vi.dot(up),p=Ca.dot(Ca),_=Ca.dot(up),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,T=(u*_-h*m)*g;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,n,r,o,c,u,h,m){return this.getBarycoord(e,n,r,o,Da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Da.x),m.addScaledVector(u,Da.y),m.addScaledVector(h,Da.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return pp.setScalar(0),mp.setScalar(0),gp.setScalar(0),pp.fromBufferAttribute(e,n),mp.fromBufferAttribute(e,r),gp.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(pp,c.x),u.addScaledVector(mp,c.y),u.addScaledVector(gp,c.z),u}static isFrontFacing(e,n,r,o){return Vi.subVectors(r,n),Ca.subVectors(e,n),Vi.cross(Ca).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Vi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Gi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,h;ao.subVectors(o,r),ro.subVectors(c,r),fp.subVectors(e,r);const m=ao.dot(fp),p=ro.dot(fp);if(m<=0&&p<=0)return n.copy(r);dp.subVectors(e,o);const _=ao.dot(dp),v=ro.dot(dp);if(_>=0&&v<=_)return n.copy(o);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(r).addScaledVector(ao,u);hp.subVectors(e,c);const S=ao.dot(hp),T=ro.dot(hp);if(T>=0&&S<=T)return n.copy(c);const D=S*p-m*T;if(D<=0&&p>=0&&T<=0)return h=p/(p-T),n.copy(r).addScaledVector(ro,h);const b=_*T-S*v;if(b<=0&&v-_>=0&&S-T>=0)return Ky.subVectors(c,o),h=(v-_)/(v-_+(S-T)),n.copy(o).addScaledVector(Ky,h);const x=1/(b+D+g);return u=D*x,h=g*x,n.copy(r).addScaledVector(ao,u).addScaledVector(ro,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jl{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ru.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ru.copy(r.boundingBox)),Ru.applyMatrix4(e.matrixWorld),this.union(Ru)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Al),Cu.subVectors(this.max,Al),so.subVectors(e.a,Al),oo.subVectors(e.b,Al),lo.subVectors(e.c,Al),xr.subVectors(oo,so),yr.subVectors(lo,oo),Zr.subVectors(so,lo);let n=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Zr.z,Zr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Zr.z,0,-Zr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Zr.y,Zr.x,0];return!vp(n,so,oo,lo,Cu)||(n=[1,0,0,0,1,0,0,0,1],!vp(n,so,oo,lo,Cu))?!1:(Du.crossVectors(xr,yr),n=[Du.x,Du.y,Du.z],vp(n,so,oo,lo,Cu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new se,new se,new se,new se,new se,new se,new se,new se],Hi=new se,Ru=new Jl,so=new se,oo=new se,lo=new se,xr=new se,yr=new se,Zr=new se,Al=new se,Cu=new se,Du=new se,Qr=new se;function vp(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Qr.fromArray(a,c);const h=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),m=e.dot(Qr),p=n.dot(Qr),_=r.dot(Qr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const bn=new se,Nu=new zt;let tN=0;class Mn extends _s{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tN++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Py,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Nu.fromBufferAttribute(this,n),Nu.applyMatrix3(e),this.setXY(n,Nu.x,Nu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=El(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=El(n,this.array)),n}setX(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=El(n,this.array)),n}setY(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=El(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=El(n,this.array)),n}setW(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array),o=ni(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array),o=ni(o,this.array),c=ni(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Py&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class q1 extends Mn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Y1 extends Mn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wi extends Mn{constructor(e,n,r){super(new Float32Array(e),n,r)}}const nN=new Jl,wl=new se,_p=new se;class ec{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):nN.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const n=wl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(wl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_p.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(_p)),this.expandByPoint(wl.copy(e.center).sub(_p))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let iN=0;const Ci=new hn,xp=new Yn,co=new se,vi=new Jl,Rl=new Jl,Dn=new se;class ai extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iN++}),this.uuid=$l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ID(e)?Y1:q1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,n,r){return Ci.makeTranslation(e,n,r),this.applyMatrix4(Ci),this}scale(e,n,r){return Ci.makeScale(e,n,r),this.applyMatrix4(Ci),this}lookAt(e){return xp.lookAt(e),xp.updateMatrix(),this.applyMatrix4(xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ec);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Rl.setFromBufferAttribute(h),this.morphTargetsRelative?(Dn.addVectors(vi.min,Rl.min),vi.expandByPoint(Dn),Dn.addVectors(vi.max,Rl.max),vi.expandByPoint(Dn)):(vi.expandByPoint(Rl.min),vi.expandByPoint(Rl.max))}vi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Dn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Dn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Dn.fromBufferAttribute(h,p),m&&(co.fromBufferAttribute(e,p),Dn.add(co)),o=Math.max(o,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Mn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let w=0;w<r.count;w++)h[w]=new se,m[w]=new se;const p=new se,_=new se,v=new se,g=new zt,S=new zt,T=new zt,D=new se,b=new se;function x(w,z,k){p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,z),v.fromBufferAttribute(r,k),g.fromBufferAttribute(c,w),S.fromBufferAttribute(c,z),T.fromBufferAttribute(c,k),_.sub(p),v.sub(p),S.sub(g),T.sub(g);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(D.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(G),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(G),h[w].add(D),h[z].add(D),h[k].add(D),m[w].add(b),m[z].add(b),m[k].add(b))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let w=0,z=I.length;w<z;++w){const k=I[w],G=k.start,K=k.count;for(let he=G,me=G+K;he<me;he+=3)x(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const F=new se,A=new se,U=new se,L=new se;function B(w){U.fromBufferAttribute(o,w),L.copy(U);const z=h[w];F.copy(z),F.sub(U.multiplyScalar(U.dot(z))).normalize(),A.crossVectors(L,z);const G=A.dot(m[w])<0?-1:1;u.setXYZW(w,F.x,F.y,F.z,G)}for(let w=0,z=I.length;w<z;++w){const k=I[w],G=k.start,K=k.count;for(let he=G,me=G+K;he<me;he+=3)B(e.getX(he+0)),B(e.getX(he+1)),B(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new se,c=new se,u=new se,h=new se,m=new se,p=new se,_=new se,v=new se;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),D=e.getX(g+1),b=e.getX(g+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,b),h.add(_),m.add(_),p.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Dn.fromBufferAttribute(e,n),Dn.normalize(),e.setXYZ(n,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,T=0;for(let D=0,b=m.length;D<b;D++){h.isInterleavedBufferAttribute?S=m[D]*h.data.stride+h.offset:S=m[D]*_;for(let x=0;x<_;x++)g[T++]=p[S++]}return new Mn(g,_,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,r);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let aN=0;class Do extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aN++}),this.uuid=$l(),this.name="",this.type="Material",this.blending=xo,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fm,this.blendDst=dm,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ut(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fm&&(r.blendSrc=this.blendSrc),this.blendDst!==dm&&(r.blendDst=this.blendDst),this.blendEquation!==as&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const La=new se,yp=new se,Lu=new se,Sr=new se,Sp=new se,Uu=new se,bp=new se;class Ng{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,La)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=La.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(La.copy(this.origin).addScaledVector(this.direction,n),La.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){yp.copy(e).add(n).multiplyScalar(.5),Lu.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(yp);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Lu),h=Sr.dot(this.direction),m=-Sr.dot(Lu),p=Sr.lengthSq(),_=Math.abs(1-u*u);let v,g,S,T;if(_>0)if(v=u*m-h,g=u*h-m,T=c*_,v>=0)if(g>=-T)if(g<=T){const D=1/_;v*=D,g*=D,S=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(yp).addScaledVector(Lu,g),S}intersectSphere(e,n){La.subVectors(e.center,this.origin);const r=La.dot(this.direction),o=La.dot(La)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,La)!==null}intersectTriangle(e,n,r,o,c){Sp.subVectors(n,e),Uu.subVectors(r,e),bp.crossVectors(Sp,Uu);let u=this.direction.dot(bp),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Sr.subVectors(this.origin,e);const m=h*this.direction.dot(Uu.crossVectors(Sr,Uu));if(m<0)return null;const p=h*this.direction.dot(Sp.cross(Sr));if(p<0||m+p>u)return null;const _=-h*Sr.dot(bp);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class K1 extends Do{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=w1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zy=new hn,$r=new Ng,Ou=new ec,Qy=new se,Pu=new se,Iu=new se,Fu=new se,Mp=new se,zu=new se,$y=new se,Bu=new se;class Ga extends Yn{constructor(e=new ai,n=new K1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){zu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Mp.fromBufferAttribute(v,e),u?zu.addScaledVector(Mp,_):zu.addScaledVector(Mp.sub(n),_))}n.add(zu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(c),$r.copy(e.ray).recast(e.near),!(Ou.containsPoint($r.origin)===!1&&($r.intersectSphere(Ou,Qy)===null||$r.origin.distanceToSquared(Qy)>(e.far-e.near)**2))&&(Zy.copy(c).invert(),$r.copy(e.ray).applyMatrix4(Zy),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let T=0,D=g.length;T<D;T++){const b=g[T],x=u[b.materialIndex],I=Math.max(b.start,S.start),F=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let A=I,U=F;A<U;A+=3){const L=h.getX(A),B=h.getX(A+1),w=h.getX(A+2);o=Vu(this,x,e,r,p,_,v,L,B,w),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),D=Math.min(h.count,S.start+S.count);for(let b=T,x=D;b<x;b+=3){const I=h.getX(b),F=h.getX(b+1),A=h.getX(b+2);o=Vu(this,u,e,r,p,_,v,I,F,A),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,D=g.length;T<D;T++){const b=g[T],x=u[b.materialIndex],I=Math.max(b.start,S.start),F=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let A=I,U=F;A<U;A+=3){const L=A,B=A+1,w=A+2;o=Vu(this,x,e,r,p,_,v,L,B,w),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let b=T,x=D;b<x;b+=3){const I=b,F=b+1,A=b+2;o=Vu(this,u,e,r,p,_,v,I,F,A),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function rN(a,e,n,r,o,c,u,h){let m;if(e.side===ii?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Rr,h),m===null)return null;Bu.copy(h),Bu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Bu);return p<n.near||p>n.far?null:{distance:p,point:Bu.clone(),object:a}}function Vu(a,e,n,r,o,c,u,h,m,p){a.getVertexPosition(h,Pu),a.getVertexPosition(m,Iu),a.getVertexPosition(p,Fu);const _=rN(a,e,n,r,Pu,Iu,Fu,$y);if(_){const v=new se;Gi.getBarycoord($y,Pu,Iu,Fu,v),o&&(_.uv=Gi.getInterpolatedAttribute(o,h,m,p,v,new zt)),c&&(_.uv1=Gi.getInterpolatedAttribute(c,h,m,p,v,new zt)),u&&(_.normal=Gi.getInterpolatedAttribute(u,h,m,p,v,new se),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new se,materialIndex:0};Gi.getNormal(Pu,Iu,Fu,g.normal),_.face=g,_.barycoord=v}return _}class sN extends qn{constructor(e=null,n=1,r=1,o,c,u,h,m,p=Fn,_=Fn,v,g){super(null,u,h,m,p,_,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ep=new se,oN=new se,lN=new mt;class ns{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ep.subVectors(r,n).cross(oN.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Ep),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||lN.getNormalMatrix(e),o=this.coplanarPoint(Ep).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new ec,cN=new zt(.5,.5),Hu=new se;class Z1{constructor(e=new ns,n=new ns,r=new ns,o=new ns,c=new ns,u=new ns){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ra,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],T=c[8],D=c[9],b=c[10],x=c[11],I=c[12],F=c[13],A=c[14],U=c[15];if(o[0].setComponents(p-u,S-_,x-T,U-I).normalize(),o[1].setComponents(p+u,S+_,x+T,U+I).normalize(),o[2].setComponents(p+h,S+v,x+D,U+F).normalize(),o[3].setComponents(p-h,S-v,x-D,U-F).normalize(),r)o[4].setComponents(m,g,b,A).normalize(),o[5].setComponents(p-m,S-g,x-b,U-A).normalize();else if(o[4].setComponents(p-m,S-g,x-b,U-A).normalize(),n===ra)o[5].setComponents(p+m,S+g,x+b,U+A).normalize();else if(n===_f)o[5].setComponents(m,g,b,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const n=cN.distanceTo(e.center);return Jr.radius=.7071067811865476+n,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Hu.x=o.normal.x>0?e.max.x:e.min.x,Hu.y=o.normal.y>0?e.max.y:e.min.y,Hu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uN extends Do{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yf=new se,Sf=new se,Jy=new hn,Cl=new Ng,Gu=new ec,Tp=new se,eS=new se;class fN extends Yn{constructor(e=new ai,n=new uN){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)yf.fromBufferAttribute(n,o-1),Sf.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=yf.distanceTo(Sf);e.setAttribute("lineDistance",new Wi(r,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gu.copy(r.boundingSphere),Gu.applyMatrix4(o),Gu.radius+=c,e.ray.intersectsSphere(Gu)===!1)return;Jy.copy(o).invert(),Cl.copy(e.ray).applyMatrix4(Jy);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let D=S,b=T-1;D<b;D+=p){const x=_.getX(D),I=_.getX(D+1),F=ku(this,e,Cl,m,x,I,D);F&&n.push(F)}if(this.isLineLoop){const D=_.getX(T-1),b=_.getX(S),x=ku(this,e,Cl,m,D,b,T-1);x&&n.push(x)}}else{const S=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let D=S,b=T-1;D<b;D+=p){const x=ku(this,e,Cl,m,D,D+1,D);x&&n.push(x)}if(this.isLineLoop){const D=ku(this,e,Cl,m,T-1,S,T-1);D&&n.push(D)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function ku(a,e,n,r,o,c,u){const h=a.geometry.attributes.position;if(yf.fromBufferAttribute(h,o),Sf.fromBufferAttribute(h,c),n.distanceSqToSegment(yf,Sf,Tp,eS)>r)return;Tp.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Tp);if(!(p<e.near||p>e.far))return{distance:p,point:eS.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const tS=new se,nS=new se;class dN extends fN{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)tS.fromBufferAttribute(n,o),nS.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+tS.distanceTo(nS);e.setAttribute("lineDistance",new Wi(r,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hN extends Do{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const iS=new hn,Jm=new Ng,Xu=new ec,Wu=new se;class aS extends Yn{constructor(e=new ai,n=new hN){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xu.copy(r.boundingSphere),Xu.applyMatrix4(o),Xu.radius+=c,e.ray.intersectsSphere(Xu)===!1)return;iS.copy(o).invert(),Jm.copy(e.ray).applyMatrix4(iS);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let T=g,D=S;T<D;T++){const b=p.getX(T);Wu.fromBufferAttribute(v,b),rS(Wu,b,m,o,e,n,this)}}else{const g=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let T=g,D=S;T<D;T++)Wu.fromBufferAttribute(v,T),rS(Wu,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function rS(a,e,n,r,o,c,u){const h=Jm.distanceSqToPoint(a);if(h<n){const m=new se;Jm.closestPointToPoint(a,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Q1 extends qn{constructor(e=[],n=ms,r,o,c,u,h,m,p,_){super(e,n,r,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class To extends qn{constructor(e,n,r=la,o,c,u,h=Fn,m=Fn,p,_=Ha,v=1){if(_!==Ha&&_!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,o,c,u,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pN extends To{constructor(e,n=la,r=ms,o,c,u=Fn,h=Fn,m,p=Ha){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,r,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $1 extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tc extends ai{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Wi(p,3)),this.setAttribute("normal",new Wi(_,3)),this.setAttribute("uv",new Wi(v,2));function T(D,b,x,I,F,A,U,L,B,w,z){const k=A/B,G=U/w,K=A/2,he=U/2,me=L/2,ee=B+1,N=w+1;let H=0,te=0;const _e=new se;for(let Te=0;Te<N;Te++){const O=Te*G-he;for(let Z=0;Z<ee;Z++){const ne=Z*k-K;_e[D]=ne*I,_e[b]=O*F,_e[x]=me,p.push(_e.x,_e.y,_e.z),_e[D]=0,_e[b]=0,_e[x]=L>0?1:-1,_.push(_e.x,_e.y,_e.z),v.push(Z/B),v.push(1-Te/w),H+=1}}for(let Te=0;Te<w;Te++)for(let O=0;O<B;O++){const Z=g+O+ee*Te,ne=g+O+ee*(Te+1),be=g+(O+1)+ee*(Te+1),J=g+(O+1)+ee*Te;m.push(Z,ne,J),m.push(ne,be,J),te+=6}h.addGroup(S,te,z),S+=te,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Df extends ai{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(r),m=Math.floor(o),p=h+1,_=m+1,v=e/h,g=n/m,S=[],T=[],D=[],b=[];for(let x=0;x<_;x++){const I=x*g-u;for(let F=0;F<p;F++){const A=F*v-c;T.push(A,-I,0),D.push(0,0,1),b.push(F/h),b.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<h;I++){const F=I+p*x,A=I+p*(x+1),U=I+1+p*(x+1),L=I+1+p*x;S.push(F,A,L),S.push(A,U,L)}this.setIndex(S),this.setAttribute("position",new Wi(T,3)),this.setAttribute("normal",new Wi(D,3)),this.setAttribute("uv",new Wi(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ao(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(sS(o))o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(sS(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function jn(a){const e={};for(let n=0;n<a.length;n++){const r=Ao(a[n]);for(const o in r)e[o]=r[o]}return e}function sS(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function mN(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function J1(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const gN={clone:Ao,merge:jn};var vN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_N=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Do{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vN,this.fragmentShader=_N,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=mN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new se().fromArray(o.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new hn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xN extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yN extends Do{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SN extends Do{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ju=new se,qu=new Co,Ji=new se;class eM extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ju,qu,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ju,qu,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(ju,qu,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ju,qu,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new se,oS=new zt,lS=new zt;class Ni extends eM{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$m*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $m*2*Math.atan(Math.tan(tp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,oS,lS),n.subVectors(lS,oS)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tp*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class tM extends eM{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const uo=-90,fo=1;class bN extends Yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ni(uo,fo,e,n);o.layers=this.layers,this.add(o);const c=new Ni(uo,fo,e,n);c.layers=this.layers,this.add(c);const u=new Ni(uo,fo,e,n);u.layers=this.layers,this.add(u);const h=new Ni(uo,fo,e,n);h.layers=this.layers,this.add(h);const m=new Ni(uo,fo,e,n);m.layers=this.layers,this.add(m);const p=new Ni(uo,fo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===_f)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class MN extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class EN{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Ig=class Ig{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Ig.prototype.isMatrix2=!0;let cS=Ig;function uS(a,e,n,r){const o=TN(r);switch(n){case V1:return a*e;case G1:return a*e/o.components*o.byteLength;case Tg:return a*e/o.components*o.byteLength;case gs:return a*e*2/o.components*o.byteLength;case Ag:return a*e*2/o.components*o.byteLength;case H1:return a*e*3/o.components*o.byteLength;case Xi:return a*e*4/o.components*o.byteLength;case wg:return a*e*4/o.components*o.byteLength;case nf:case af:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case rf:case sf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mm:case Tm:return Math.max(a,16)*Math.max(e,8)/4;case bm:case Em:return Math.max(a,8)*Math.max(e,8)/2;case Am:case wm:case Cm:case Dm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Rm:case pf:case Nm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Lm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Um:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Om:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Pm:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Im:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case zm:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Bm:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Vm:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Hm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Gm:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case km:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Xm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Wm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case jm:case qm:case Ym:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Km:case Zm:return Math.ceil(a/4)*Math.ceil(e/4)*8;case mf:case Qm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TN(a){switch(a){case Li:case I1:return{byteLength:1,components:1};case jl:case F1:case Va:return{byteLength:2,components:1};case Mg:case Eg:return{byteLength:2,components:4};case la:case bg:case aa:return{byteLength:4,components:1};case z1:case B1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sg}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sg);function nM(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function AN(a){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const _=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],D=v[S];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,v[g]=D)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const D=v[S];a.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var wN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RN=`#ifdef USE_ALPHAHASH
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
#endif`,CN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UN=`#ifdef USE_AOMAP
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
#endif`,ON=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PN=`#ifdef USE_BATCHING
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
#endif`,IN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VN=`#ifdef USE_IRIDESCENCE
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
#endif`,HN=`#ifdef USE_BUMPMAP
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
#endif`,GN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ZN=`#define PI 3.141592653589793
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
} // validated`,QN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$N=`vec3 transformedNormal = objectNormal;
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
#endif`,JN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iL="gl_FragColor = linearToOutputTexel( gl_FragColor );",aL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rL=`#ifdef USE_ENVMAP
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
#endif`,sL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oL=`#ifdef USE_ENVMAP
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
#endif`,lL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cL=`#ifdef USE_ENVMAP
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
#endif`,uL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pL=`#ifdef USE_GRADIENTMAP
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
}`,mL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_L=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xL=`#ifdef USE_ENVMAP
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
#endif`,yL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ML=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EL=`PhysicalMaterial material;
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
#endif`,TL=`uniform sampler2D dfgLUT;
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
}`,AL=`
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
#endif`,wL=`#if defined( RE_IndirectDiffuse )
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
#endif`,RL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CL=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,DL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FL=`#if defined( USE_POINTS_UV )
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
#endif`,zL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kL=`#ifdef USE_MORPHTARGETS
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
#endif`,XL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ZL=`#ifdef USE_NORMALMAP
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
#endif`,QL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$L=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dU=`float getShadowMask() {
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
}`,hU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pU=`#ifdef USE_SKINNING
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
#endif`,mU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gU=`#ifdef USE_SKINNING
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
#endif`,vU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_U=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SU=`#ifdef USE_TRANSMISSION
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
#endif`,bU=`#ifdef USE_TRANSMISSION
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
#endif`,MU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RU=`uniform sampler2D t2D;
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
}`,CU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UU=`#include <common>
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
}`,OU=`#if DEPTH_PACKING == 3200
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
}`,PU=`#define DISTANCE
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
}`,IU=`#define DISTANCE
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
}`,FU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BU=`uniform float scale;
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
}`,VU=`uniform vec3 diffuse;
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
}`,HU=`#include <common>
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
}`,GU=`uniform vec3 diffuse;
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
}`,kU=`#define LAMBERT
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
}`,XU=`#define LAMBERT
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
}`,WU=`#define MATCAP
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
}`,jU=`#define MATCAP
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
}`,qU=`#define NORMAL
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
}`,YU=`#define NORMAL
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
}`,KU=`#define PHONG
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
}`,ZU=`#define PHONG
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
}`,QU=`#define STANDARD
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
}`,$U=`#define STANDARD
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
}`,JU=`#define TOON
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
}`,e4=`#define TOON
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
}`,t4=`uniform float size;
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
}`,n4=`uniform vec3 diffuse;
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
}`,i4=`#include <common>
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
}`,a4=`uniform vec3 color;
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
}`,r4=`uniform float rotation;
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
}`,s4=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:wN,alphahash_pars_fragment:RN,alphamap_fragment:CN,alphamap_pars_fragment:DN,alphatest_fragment:NN,alphatest_pars_fragment:LN,aomap_fragment:UN,aomap_pars_fragment:ON,batching_pars_vertex:PN,batching_vertex:IN,begin_vertex:FN,beginnormal_vertex:zN,bsdfs:BN,iridescence_fragment:VN,bumpmap_pars_fragment:HN,clipping_planes_fragment:GN,clipping_planes_pars_fragment:kN,clipping_planes_pars_vertex:XN,clipping_planes_vertex:WN,color_fragment:jN,color_pars_fragment:qN,color_pars_vertex:YN,color_vertex:KN,common:ZN,cube_uv_reflection_fragment:QN,defaultnormal_vertex:$N,displacementmap_pars_vertex:JN,displacementmap_vertex:eL,emissivemap_fragment:tL,emissivemap_pars_fragment:nL,colorspace_fragment:iL,colorspace_pars_fragment:aL,envmap_fragment:rL,envmap_common_pars_fragment:sL,envmap_pars_fragment:oL,envmap_pars_vertex:lL,envmap_physical_pars_fragment:xL,envmap_vertex:cL,fog_vertex:uL,fog_pars_vertex:fL,fog_fragment:dL,fog_pars_fragment:hL,gradientmap_pars_fragment:pL,lightmap_pars_fragment:mL,lights_lambert_fragment:gL,lights_lambert_pars_fragment:vL,lights_pars_begin:_L,lights_toon_fragment:yL,lights_toon_pars_fragment:SL,lights_phong_fragment:bL,lights_phong_pars_fragment:ML,lights_physical_fragment:EL,lights_physical_pars_fragment:TL,lights_fragment_begin:AL,lights_fragment_maps:wL,lights_fragment_end:RL,lightprobes_pars_fragment:CL,logdepthbuf_fragment:DL,logdepthbuf_pars_fragment:NL,logdepthbuf_pars_vertex:LL,logdepthbuf_vertex:UL,map_fragment:OL,map_pars_fragment:PL,map_particle_fragment:IL,map_particle_pars_fragment:FL,metalnessmap_fragment:zL,metalnessmap_pars_fragment:BL,morphinstance_vertex:VL,morphcolor_vertex:HL,morphnormal_vertex:GL,morphtarget_pars_vertex:kL,morphtarget_vertex:XL,normal_fragment_begin:WL,normal_fragment_maps:jL,normal_pars_fragment:qL,normal_pars_vertex:YL,normal_vertex:KL,normalmap_pars_fragment:ZL,clearcoat_normal_fragment_begin:QL,clearcoat_normal_fragment_maps:$L,clearcoat_pars_fragment:JL,iridescence_pars_fragment:eU,opaque_fragment:tU,packing:nU,premultiplied_alpha_fragment:iU,project_vertex:aU,dithering_fragment:rU,dithering_pars_fragment:sU,roughnessmap_fragment:oU,roughnessmap_pars_fragment:lU,shadowmap_pars_fragment:cU,shadowmap_pars_vertex:uU,shadowmap_vertex:fU,shadowmask_pars_fragment:dU,skinbase_vertex:hU,skinning_pars_vertex:pU,skinning_vertex:mU,skinnormal_vertex:gU,specularmap_fragment:vU,specularmap_pars_fragment:_U,tonemapping_fragment:xU,tonemapping_pars_fragment:yU,transmission_fragment:SU,transmission_pars_fragment:bU,uv_pars_fragment:MU,uv_pars_vertex:EU,uv_vertex:TU,worldpos_vertex:AU,background_vert:wU,background_frag:RU,backgroundCube_vert:CU,backgroundCube_frag:DU,cube_vert:NU,cube_frag:LU,depth_vert:UU,depth_frag:OU,distance_vert:PU,distance_frag:IU,equirect_vert:FU,equirect_frag:zU,linedashed_vert:BU,linedashed_frag:VU,meshbasic_vert:HU,meshbasic_frag:GU,meshlambert_vert:kU,meshlambert_frag:XU,meshmatcap_vert:WU,meshmatcap_frag:jU,meshnormal_vert:qU,meshnormal_frag:YU,meshphong_vert:KU,meshphong_frag:ZU,meshphysical_vert:QU,meshphysical_frag:$U,meshtoon_vert:JU,meshtoon_frag:e4,points_vert:t4,points_frag:n4,shadow_vert:i4,shadow_frag:a4,sprite_vert:r4,sprite_frag:s4},Ve={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new se},probesMax:{value:new se},probesResolution:{value:new se}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},na={basic:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:jn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:jn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:jn([Ve.points,Ve.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:jn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:jn([Ve.common,Ve.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:jn([Ve.sprite,Ve.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:jn([Ve.common,Ve.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:jn([Ve.lights,Ve.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};na.physical={uniforms:jn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Yu={r:0,b:0,g:0},o4=new hn,iM=new mt;iM.set(-1,0,0,0,1,0,0,0,1);function l4(a,e,n,r,o,c){const u=new Rt(0);let h=o===!0?0:1,m,p,_=null,v=0,g=null;function S(I){let F=I.isScene===!0?I.background:null;if(F&&F.isTexture){const A=I.backgroundBlurriness>0;F=e.get(F,A)}return F}function T(I){let F=!1;const A=S(I);A===null?b(u,h):A&&A.isColor&&(b(A,1),F=!0);const U=a.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function D(I,F){const A=S(F);A&&(A.isCubeTexture||A.mapping===Cf)?(p===void 0&&(p=new Ga(new tc(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ao(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(o4.makeRotationFromEuler(F.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(iM),p.material.toneMapped=Dt.getTransfer(A.colorSpace)!==Yt,(_!==A||v!==A.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=A,v=A.version,g=a.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Ga(new Df(2,2),new _i({name:"BackgroundMaterial",uniforms:Ao(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(A.colorSpace)!==Yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||v!==A.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=A,v=A.version,g=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function b(I,F){I.getRGB(Yu,J1(a)),n.buffers.color.setClear(Yu.r,Yu.g,Yu.b,F,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,F=1){u.set(I),h=F,b(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,b(u,h)},render:T,addToRenderList:D,dispose:x}}function c4(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function h(G,K,he,me,ee){let N=!1;const H=v(G,me,he,K);c!==H&&(c=H,p(c.object)),N=S(G,me,he,ee),N&&T(G,me,he,ee),ee!==null&&e.update(ee,a.ELEMENT_ARRAY_BUFFER),(N||u)&&(u=!1,A(G,K,he,me),ee!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function m(){return a.createVertexArray()}function p(G){return a.bindVertexArray(G)}function _(G){return a.deleteVertexArray(G)}function v(G,K,he,me){const ee=me.wireframe===!0;let N=r[K.id];N===void 0&&(N={},r[K.id]=N);const H=G.isInstancedMesh===!0?G.id:0;let te=N[H];te===void 0&&(te={},N[H]=te);let _e=te[he.id];_e===void 0&&(_e={},te[he.id]=_e);let Te=_e[ee];return Te===void 0&&(Te=g(m()),_e[ee]=Te),Te}function g(G){const K=[],he=[],me=[];for(let ee=0;ee<n;ee++)K[ee]=0,he[ee]=0,me[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:he,attributeDivisors:me,object:G,attributes:{},index:null}}function S(G,K,he,me){const ee=c.attributes,N=K.attributes;let H=0;const te=he.getAttributes();for(const _e in te)if(te[_e].location>=0){const O=ee[_e];let Z=N[_e];if(Z===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==me}function T(G,K,he,me){const ee={},N=K.attributes;let H=0;const te=he.getAttributes();for(const _e in te)if(te[_e].location>=0){let O=N[_e];O===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),ee[_e]=Z,H++}c.attributes=ee,c.attributesNum=H,c.index=me}function D(){const G=c.newAttributes;for(let K=0,he=G.length;K<he;K++)G[K]=0}function b(G){x(G,0)}function x(G,K){const he=c.newAttributes,me=c.enabledAttributes,ee=c.attributeDivisors;he[G]=1,me[G]===0&&(a.enableVertexAttribArray(G),me[G]=1),ee[G]!==K&&(a.vertexAttribDivisor(G,K),ee[G]=K)}function I(){const G=c.newAttributes,K=c.enabledAttributes;for(let he=0,me=K.length;he<me;he++)K[he]!==G[he]&&(a.disableVertexAttribArray(he),K[he]=0)}function F(G,K,he,me,ee,N,H){H===!0?a.vertexAttribIPointer(G,K,he,ee,N):a.vertexAttribPointer(G,K,he,me,ee,N)}function A(G,K,he,me){D();const ee=me.attributes,N=he.getAttributes(),H=K.defaultAttributeValues;for(const te in N){const _e=N[te];if(_e.location>=0){let Te=ee[te];if(Te===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(Te=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(Te=G.instanceColor)),Te!==void 0){const O=Te.normalized,Z=Te.itemSize,ne=e.get(Te);if(ne===void 0)continue;const be=ne.buffer,J=ne.type,X=ne.bytesPerElement,ce=J===a.INT||J===a.UNSIGNED_INT||Te.gpuType===bg;if(Te.isInterleavedBufferAttribute){const ye=Te.data,Pe=ye.stride,ot=Te.offset;if(ye.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)x(_e.location+Ke,ye.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)b(_e.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Ke=0;Ke<_e.locationSize;Ke++)F(_e.location+Ke,Z/_e.locationSize,J,O,Pe*X,(ot+Z/_e.locationSize*Ke)*X,ce)}else{if(Te.isInstancedBufferAttribute){for(let ye=0;ye<_e.locationSize;ye++)x(_e.location+ye,Te.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ye=0;ye<_e.locationSize;ye++)b(_e.location+ye);a.bindBuffer(a.ARRAY_BUFFER,be);for(let ye=0;ye<_e.locationSize;ye++)F(_e.location+ye,Z/_e.locationSize,J,O,Z*X,Z/_e.locationSize*ye*X,ce)}}else if(H!==void 0){const O=H[te];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(_e.location,O);break;case 3:a.vertexAttrib3fv(_e.location,O);break;case 4:a.vertexAttrib4fv(_e.location,O);break;default:a.vertexAttrib1fv(_e.location,O)}}}}I()}function U(){z();for(const G in r){const K=r[G];for(const he in K){const me=K[he];for(const ee in me){const N=me[ee];for(const H in N)_(N[H].object),delete N[H];delete me[ee]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const K=r[G.id];for(const he in K){const me=K[he];for(const ee in me){const N=me[ee];for(const H in N)_(N[H].object),delete N[H];delete me[ee]}}delete r[G.id]}function B(G){for(const K in r){const he=r[K];for(const me in he){const ee=he[me];if(ee[G.id]===void 0)continue;const N=ee[G.id];for(const H in N)_(N[H].object),delete N[H];delete ee[G.id]}}}function w(G){for(const K in r){const he=r[K],me=G.isInstancedMesh===!0?G.id:0,ee=he[me];if(ee!==void 0){for(const N in ee){const H=ee[N];for(const te in H)_(H[te].object),delete H[te];delete ee[N]}delete he[me],Object.keys(he).length===0&&delete r[K]}}}function z(){k(),u=!0,c!==o&&(c=o,p(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:z,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:b,disableUnusedAttributes:I}}function u4(a,e,n){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),n.update(p,r,1)}function u(m,p,_){_!==0&&(a.drawArraysInstanced(r,m,p,_),n.update(p,r,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];n.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function f4(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Xi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const w=B===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Li&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==aa&&!w)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(ut("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),U=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:A,maxSamples:U,samples:L}}function d4(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new ns,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,D=v.clipIntersection,b=v.clipShadows,x=a.get(v);if(!o||T===null||T.length===0||c&&!b)c?_(null):p();else{const I=c?0:r,F=I*4;let A=x.clippingState||null;m.value=A,A=_(T,g,F,S);for(let U=0;U!==F;++U)A[U]=n[U];x.clippingState=A,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,T){const D=v!==null?v.length:0;let b=null;if(D!==0){if(b=m.value,T!==!0||b===null){const x=S+D*4,I=g.matrixWorldInverse;h.getNormalMatrix(I),(b===null||b.length<x)&&(b=new Float32Array(x));for(let F=0,A=S;F!==D;++F,A+=4)u.copy(v[F]).applyMatrix4(I,h),u.normal.toArray(b,A),b[A+3]=u.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,b}}const Er=4,fS=[.125,.215,.35,.446,.526,.582],rs=20,h4=256,Dl=new tM,dS=new Rt;let Ap=null,wp=0,Rp=0,Cp=!1;const p4=new se;class hS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=p4}=c;Ap=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ap,wp,Rp),this._renderer.xr.enabled=Cp,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ap=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Va,format:Xi,colorSpace:gf,depthBuffer:!1},o=pS(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pS(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=m4(c)),this._blurMaterial=v4(c,e,n),this._ggxMaterial=g4(c,e,n)}return o}_compileMaterial(e){const n=new Ga(new ai,e);this._renderer.compile(n,Dl)}_sceneToCubeUV(e,n,r,o,c){const m=new Ni(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(dS),v.toneMapping=sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ga(new tc,new K1({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,b=D.material;let x=!1;const I=e.background;I?I.isColor&&(b.color.copy(I),e.background=null,x=!0):(b.color.copy(dS),x=!0);for(let F=0;F<6;F++){const A=F%3;A===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):A===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const U=this._cubeSize;ho(o,A*U,F>2?U:0,U,U),v.setRenderTarget(o),x&&v.render(D,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=I}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ms||e.mapping===Eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mS());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;ho(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,Dl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:T}=this,D=this._sizeLods[r],b=3*D*(r>T-Er?r-T+Er:0),x=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=T-n,ho(c,b,x,3*D,2*D),o.setRenderTarget(c),o.render(h,Dl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,ho(e,b,x,3*D,2*D),o.setRenderTarget(e),o.render(h,Dl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*rs-1),D=c/T,b=isFinite(c)?1+Math.floor(_*D):rs;b>rs&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${rs}`);const x=[];let I=0;for(let B=0;B<rs;++B){const w=B/D,z=Math.exp(-w*w/2);x.push(z),B===0?I+=z:B<b&&(I+=2*z)}for(let B=0;B<x.length;B++)x[B]=x[B]/I;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=x,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=T,g.mipInt.value=F-r;const A=this._sizeLods[o],U=3*A*(o>F-Er?o-F+Er:0),L=4*(this._cubeSize-A);ho(n,U,L,3*A,2*A),m.setRenderTarget(n),m.render(v,Dl)}}function m4(a){const e=[],n=[],r=[];let o=a;const c=a-Er+1+fS.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Er?m=fS[u-a+Er-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,D=3,b=2,x=1,I=new Float32Array(D*T*S),F=new Float32Array(b*T*S),A=new Float32Array(x*T*S);for(let L=0;L<S;L++){const B=L%3*2/3-1,w=L>2?0:-1,z=[B,w,0,B+2/3,w,0,B+2/3,w+1,0,B,w,0,B+2/3,w+1,0,B,w+1,0];I.set(z,D*T*L),F.set(g,b*T*L);const k=[L,L,L,L,L,L];A.set(k,x*T*L)}const U=new ai;U.setAttribute("position",new Mn(I,D)),U.setAttribute("uv",new Mn(F,b)),U.setAttribute("faceIndex",new Mn(A,x)),r.push(new Ga(U,null)),o>Er&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function pS(a,e,n){const r=new oa(a,e,n);return r.texture.mapping=Cf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ho(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function g4(a,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function v4(a,e,n){const r=new Float32Array(rs),o=new se(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function mS(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function gS(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Nf(){return`

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
	`}class aM extends oa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Q1(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new tc(5,5,5),c=new _i({name:"CubemapFromEquirect",uniforms:Ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:Ia});c.uniforms.tEquirect.value=n;const u=new Ga(o,c),h=n.minFilter;return n.minFilter===ls&&(n.minFilter=Xn),new bN(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function _4(a){let e=new WeakMap,n=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===$h||S===Jh)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new aM(T.height);return D.fromEquirectangularTexture(a,g),e.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===$h||S===Jh,D=S===ms||S===Eo;if(T||D){let b=n.get(g);const x=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new hS(a)),b=T?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),b.texture;if(b!==void 0)return b.texture;{const I=g.image;return T&&I&&I.height>0||D&&I&&m(I)?(r===null&&(r=new hS(a)),b=T?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===$h?g.mapping=ms:S===Jh&&(g.mapping=Eo),g}function m(g){let S=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=n.get(S);T!==void 0&&(n.delete(S),T.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function x4(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&yo("WebGLRenderer: "+r+" extension not supported."),o}}}function y4(a,e,n,r){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,T=v.attributes.position;let D=0;if(T===void 0)return;if(S!==null){const I=S.array;D=S.version;for(let F=0,A=I.length;F<A;F+=3){const U=I[F+0],L=I[F+1],B=I[F+2];g.push(U,L,L,B,B,U)}}else{const I=T.array;D=T.version;for(let F=0,A=I.length/3-1;F<A;F+=3){const U=F+0,L=F+1,B=F+2;g.push(U,L,L,B,B,U)}}const b=new(T.count>=65535?Y1:q1)(g,1);b.version=D;const x=c.get(v);x&&e.remove(x),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function S4(a,e,n){let r;function o(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){a.drawElements(r,g,c,v*u),n.update(g,r,1)}function p(v,g,S){S!==0&&(a.drawElementsInstanced(r,g,c,v*u,S),n.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let D=0;for(let b=0;b<S;b++)D+=g[b];n.update(D,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function b4(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function M4(a,e,n){const r=new WeakMap,o=new dn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let z=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),T===!0&&(F=2),D===!0&&(F=3);let A=h.attributes.position.count*F,U=1;A>e.maxTextureSize&&(U=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*U*4*v),B=new X1(L,A,U,v);B.type=aa,B.needsUpdate=!0;const w=F*4;for(let k=0;k<v;k++){const G=b[k],K=x[k],he=I[k],me=A*U*4*k;for(let ee=0;ee<G.count;ee++){const N=ee*w;S===!0&&(o.fromBufferAttribute(G,ee),L[me+N+0]=o.x,L[me+N+1]=o.y,L[me+N+2]=o.z,L[me+N+3]=0),T===!0&&(o.fromBufferAttribute(K,ee),L[me+N+4]=o.x,L[me+N+5]=o.y,L[me+N+6]=o.z,L[me+N+7]=0),D===!0&&(o.fromBufferAttribute(he,ee),L[me+N+8]=o.x,L[me+N+9]=o.y,L[me+N+10]=o.z,L[me+N+11]=he.itemSize===4?o.w:1)}}g={count:v,texture:B,size:new zt(A,U)},r.set(h,g),h.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let S=0;for(let D=0;D<p.length;D++)S+=p[D];const T=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function E4(a,e,n,r,o){let c=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const T4={[R1]:"LINEAR_TONE_MAPPING",[C1]:"REINHARD_TONE_MAPPING",[D1]:"CINEON_TONE_MAPPING",[N1]:"ACES_FILMIC_TONE_MAPPING",[U1]:"AGX_TONE_MAPPING",[O1]:"NEUTRAL_TONE_MAPPING",[L1]:"CUSTOM_TONE_MAPPING"};function A4(a,e,n,r,o,c){const u=new oa(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new To(e,n):void 0}),h=new oa(e,n,{type:Va,depthBuffer:!1,stencilBuffer:!1}),m=new ai;m.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const p=new xN({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ga(m,p),v=new tM(-1,1,1,-1,0,1);let g=null,S=null,T=!1,D,b=null,x=[],I=!1;this.setSize=function(F,A){u.setSize(F,A),h.setSize(F,A);for(let U=0;U<x.length;U++){const L=x[U];L.setSize&&L.setSize(F,A)}},this.setEffects=function(F){x=F,I=x.length>0&&x[0].isRenderPass===!0;const A=u.width,U=u.height;for(let L=0;L<x.length;L++){const B=x[L];B.setSize&&B.setSize(A,U)}},this.begin=function(F,A){if(T||F.toneMapping===sa&&x.length===0)return!1;if(b=A,A!==null){const U=A.width,L=A.height;(u.width!==U||u.height!==L)&&this.setSize(U,L)}return I===!1&&F.setRenderTarget(u),D=F.toneMapping,F.toneMapping=sa,!0},this.hasRenderPass=function(){return I},this.end=function(F,A){F.toneMapping=D,T=!0;let U=u,L=h;for(let B=0;B<x.length;B++){const w=x[B];if(w.enabled!==!1&&(w.render(F,L,U,A),w.needsSwap!==!1)){const z=U;U=L,L=z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},Dt.getTransfer(g)===Yt&&(p.defines.SRGB_TRANSFER="");const B=T4[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,F.setRenderTarget(b),F.render(_,v),b=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const rM=new qn,eg=new To(1,1),sM=new X1,oM=new jD,lM=new Q1,vS=[],_S=[],xS=new Float32Array(16),yS=new Float32Array(9),SS=new Float32Array(4);function No(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=vS[o];if(c===void 0&&(c=new Float32Array(o),vS[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function An(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function wn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Lf(a,e){let n=_S[e];n===void 0&&(n=new Int32Array(e),_S[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function w4(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function R4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2fv(this.addr,e),wn(n,e)}}function C4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;a.uniform3fv(this.addr,e),wn(n,e)}}function D4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4fv(this.addr,e),wn(n,e)}}function N4(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(n,e)}else{if(An(n,r))return;SS.set(r),a.uniformMatrix2fv(this.addr,!1,SS),wn(n,r)}}function L4(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(n,e)}else{if(An(n,r))return;yS.set(r),a.uniformMatrix3fv(this.addr,!1,yS),wn(n,r)}}function U4(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(n,e)}else{if(An(n,r))return;xS.set(r),a.uniformMatrix4fv(this.addr,!1,xS),wn(n,r)}}function O4(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function P4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2iv(this.addr,e),wn(n,e)}}function I4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3iv(this.addr,e),wn(n,e)}}function F4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4iv(this.addr,e),wn(n,e)}}function z4(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function B4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2uiv(this.addr,e),wn(n,e)}}function V4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3uiv(this.addr,e),wn(n,e)}}function H4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4uiv(this.addr,e),wn(n,e)}}function G4(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(eg.compareFunction=n.isReversedDepthBuffer()?Cg:Rg,c=eg):c=rM,n.setTexture2D(e||c,o)}function k4(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||oM,o)}function X4(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||lM,o)}function W4(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||sM,o)}function j4(a){switch(a){case 5126:return w4;case 35664:return R4;case 35665:return C4;case 35666:return D4;case 35674:return N4;case 35675:return L4;case 35676:return U4;case 5124:case 35670:return O4;case 35667:case 35671:return P4;case 35668:case 35672:return I4;case 35669:case 35673:return F4;case 5125:return z4;case 36294:return B4;case 36295:return V4;case 36296:return H4;case 35678:case 36198:case 36298:case 36306:case 35682:return G4;case 35679:case 36299:case 36307:return k4;case 35680:case 36300:case 36308:case 36293:return X4;case 36289:case 36303:case 36311:case 36292:return W4}}function q4(a,e){a.uniform1fv(this.addr,e)}function Y4(a,e){const n=No(e,this.size,2);a.uniform2fv(this.addr,n)}function K4(a,e){const n=No(e,this.size,3);a.uniform3fv(this.addr,n)}function Z4(a,e){const n=No(e,this.size,4);a.uniform4fv(this.addr,n)}function Q4(a,e){const n=No(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function $4(a,e){const n=No(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function J4(a,e){const n=No(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function eO(a,e){a.uniform1iv(this.addr,e)}function tO(a,e){a.uniform2iv(this.addr,e)}function nO(a,e){a.uniform3iv(this.addr,e)}function iO(a,e){a.uniform4iv(this.addr,e)}function aO(a,e){a.uniform1uiv(this.addr,e)}function rO(a,e){a.uniform2uiv(this.addr,e)}function sO(a,e){a.uniform3uiv(this.addr,e)}function oO(a,e){a.uniform4uiv(this.addr,e)}function lO(a,e,n){const r=this.cache,o=e.length,c=Lf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=eg:u=rM;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function cO(a,e,n){const r=this.cache,o=e.length,c=Lf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||oM,c[u])}function uO(a,e,n){const r=this.cache,o=e.length,c=Lf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||lM,c[u])}function fO(a,e,n){const r=this.cache,o=e.length,c=Lf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||sM,c[u])}function dO(a){switch(a){case 5126:return q4;case 35664:return Y4;case 35665:return K4;case 35666:return Z4;case 35674:return Q4;case 35675:return $4;case 35676:return J4;case 5124:case 35670:return eO;case 35667:case 35671:return tO;case 35668:case 35672:return nO;case 35669:case 35673:return iO;case 5125:return aO;case 36294:return rO;case 36295:return sO;case 36296:return oO;case 35678:case 36198:case 36298:case 36306:case 35682:return lO;case 35679:case 36299:case 36307:return cO;case 35680:case 36300:case 36308:case 36293:return uO;case 36289:case 36303:case 36311:case 36292:return fO}}class hO{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=j4(n.type)}}class pO{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dO(n.type)}}class mO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],r)}}}const Dp=/(\w+)(\])?(\[|\.)?/g;function bS(a,e){a.seq.push(e),a.map[e.id]=e}function gO(a,e,n){const r=a.name,o=r.length;for(Dp.lastIndex=0;;){const c=Dp.exec(r),u=Dp.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){bS(n,p===void 0?new hO(h,a,e):new pO(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new mO(h),bS(n,v)),n=v}}}class of{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);gO(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function MS(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const vO=37297;let _O=0;function xO(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const ES=new mt;function yO(a){Dt._getMatrix(ES,Dt.workingColorSpace,a);const e=`mat3( ${ES.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(a)){case vf:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function TS(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+xO(a.getShaderSource(e),h)}else return c}function SO(a,e){const n=yO(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const bO={[R1]:"Linear",[C1]:"Reinhard",[D1]:"Cineon",[N1]:"ACESFilmic",[U1]:"AgX",[O1]:"Neutral",[L1]:"Custom"};function MO(a,e){const n=bO[e];return n===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ku=new se;function EO(){Dt.getLuminanceCoefficients(Ku);const a=Ku.x.toFixed(4),e=Ku.y.toFixed(4),n=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TO(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function AO(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function wO(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function Fl(a){return a!==""}function AS(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wS(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RO=/^[ \t]*#include +<([\w\d./]+)>/gm;function tg(a){return a.replace(RO,DO)}const CO=new Map;function DO(a,e){let n=xt[e];if(n===void 0){const r=CO.get(e);if(r!==void 0)n=xt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tg(n)}const NO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function RS(a){return a.replace(NO,LO)}function LO(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function CS(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const UO={[tf]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function OO(a){return UO[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PO={[ms]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE",[Cf]:"ENVMAP_TYPE_CUBE_UV"};function IO(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":PO[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const FO={[Eo]:"ENVMAP_MODE_REFRACTION"};function zO(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":FO[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BO={[w1]:"ENVMAP_BLENDING_MULTIPLY",[TD]:"ENVMAP_BLENDING_MIX",[AD]:"ENVMAP_BLENDING_ADD"};function VO(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":BO[a.combine]||"ENVMAP_BLENDING_NONE"}function HO(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function GO(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=OO(n),p=IO(n),_=zO(n),v=VO(n),g=HO(n),S=TO(n),T=AO(c),D=o.createProgram();let b,x,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fl).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fl).join(`
`),x.length>0&&(x+=`
`)):(b=[CS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),x=[CS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sa?"#define TONE_MAPPING":"",n.toneMapping!==sa?xt.tonemapping_pars_fragment:"",n.toneMapping!==sa?MO("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,SO("linearToOutputTexel",n.outputColorSpace),EO(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fl).join(`
`)),u=tg(u),u=AS(u,n),u=wS(u,n),h=tg(h),h=AS(h,n),h=wS(h,n),u=RS(u),h=RS(h),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",n.glslVersion===Iy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Iy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=I+b+u,A=I+x+h,U=MS(o,o.VERTEX_SHADER,F),L=MS(o,o.FRAGMENT_SHADER,A);o.attachShader(D,U),o.attachShader(D,L),n.index0AttributeName!==void 0?o.bindAttribLocation(D,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function B(G){if(a.debug.checkShaderErrors){const K=o.getProgramInfoLog(D)||"",he=o.getShaderInfoLog(U)||"",me=o.getShaderInfoLog(L)||"",ee=K.trim(),N=he.trim(),H=me.trim();let te=!0,_e=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,D,U,L);else{const Te=TS(o,U,"vertex"),O=TS(o,L,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ee+`
`+Te+`
`+O)}else ee!==""?ut("WebGLProgram: Program Info Log:",ee):(N===""||H==="")&&(_e=!1);_e&&(G.diagnostics={runnable:te,programLog:ee,vertexShader:{log:N,prefix:b},fragmentShader:{log:H,prefix:x}})}o.deleteShader(U),o.deleteShader(L),w=new of(o,D),z=wO(o,D)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(D,vO)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_O++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=U,this.fragmentShader=L,this}let kO=0;class XO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new WO(e),n.set(e,r)),r}}class WO{constructor(e){this.id=kO++,this.code=e,this.usedTimes=0}}function jO(a){return a===gs||a===pf||a===mf}function qO(a,e,n,r,o,c){const u=new W1,h=new XO,m=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return m.add(w),w===0?"uv":`uv${w}`}function D(w,z,k,G,K,he){const me=G.fog,ee=K.geometry,N=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,H=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,te=e.get(w.envMap||N,H),_e=te&&te.mapping===Cf?te.image.height:null,Te=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ut("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const O=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Z=O!==void 0?O.length:0;let ne=0;ee.morphAttributes.position!==void 0&&(ne=1),ee.morphAttributes.normal!==void 0&&(ne=2),ee.morphAttributes.color!==void 0&&(ne=3);let be,J,X,ce;if(Te){const We=na[Te];be=We.vertexShader,J=We.fragmentShader}else{be=w.vertexShader,J=w.fragmentShader;const We=h.getVertexShaderStage(w),rn=h.getFragmentShaderStage(w);h.update(w,We,rn),X=We.id,ce=rn.id}const ye=a.getRenderTarget(),Pe=a.state.buffers.depth.getReversed(),ot=K.isInstancedMesh===!0,Ke=K.isBatchedMesh===!0,Ut=!!w.map,ht=!!w.matcap,yt=!!te,Ce=!!w.aoMap,Ze=!!w.lightMap,Bt=!!w.bumpMap&&w.wireframe===!1,Ht=!!w.normalMap,en=!!w.displacementMap,cn=!!w.emissiveMap,Je=!!w.metalnessMap,St=!!w.roughnessMap,W=w.anisotropy>0,bt=w.clearcoat>0,ft=w.dispersion>0,P=w.iridescence>0,E=w.sheen>0,Q=w.transmission>0,ie=W&&!!w.anisotropyMap,de=bt&&!!w.clearcoatMap,we=bt&&!!w.clearcoatNormalMap,Ue=bt&&!!w.clearcoatRoughnessMap,ge=P&&!!w.iridescenceMap,ve=P&&!!w.iridescenceThicknessMap,Le=E&&!!w.sheenColorMap,Ge=E&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Ie=!!w.specularColorMap,nt=!!w.specularIntensityMap,it=Q&&!!w.transmissionMap,dt=Q&&!!w.thicknessMap,q=!!w.gradientMap,Ne=!!w.alphaMap,Se=w.alphaTest>0,Oe=!!w.alphaHash,He=!!w.extensions;let Ae=sa;w.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const Qe={shaderID:Te,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:J,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&K._colorsTexture!==null,instancing:ot,instancingColor:ot&&K.instanceColor!==null,instancingMorph:ot&&K.morphTexture!==null,outputColorSpace:ye===null?a.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ut,matcap:ht,envMap:yt,envMapMode:yt&&te.mapping,envMapCubeUVHeight:_e,aoMap:Ce,lightMap:Ze,bumpMap:Bt,normalMap:Ht,displacementMap:en,emissiveMap:cn,normalMapObjectSpace:Ht&&w.normalMapType===CD,normalMapTangentSpace:Ht&&w.normalMapType===Uy,packedNormalMap:Ht&&w.normalMapType===Uy&&jO(w.normalMap.format),metalnessMap:Je,roughnessMap:St,anisotropy:W,anisotropyMap:ie,clearcoat:bt,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:Ue,dispersion:ft,iridescence:P,iridescenceMap:ge,iridescenceThicknessMap:ve,sheen:E,sheenColorMap:Le,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Ie,specularIntensityMap:nt,transmission:Q,transmissionMap:it,thicknessMap:dt,gradientMap:q,opaque:w.transparent===!1&&w.blending===xo&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Se,alphaHash:Oe,combine:w.combine,mapUv:Ut&&T(w.map.channel),aoMapUv:Ce&&T(w.aoMap.channel),lightMapUv:Ze&&T(w.lightMap.channel),bumpMapUv:Bt&&T(w.bumpMap.channel),normalMapUv:Ht&&T(w.normalMap.channel),displacementMapUv:en&&T(w.displacementMap.channel),emissiveMapUv:cn&&T(w.emissiveMap.channel),metalnessMapUv:Je&&T(w.metalnessMap.channel),roughnessMapUv:St&&T(w.roughnessMap.channel),anisotropyMapUv:ie&&T(w.anisotropyMap.channel),clearcoatMapUv:de&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(w.sheenRoughnessMap.channel),specularMapUv:ze&&T(w.specularMap.channel),specularColorMapUv:Ie&&T(w.specularColorMap.channel),specularIntensityMapUv:nt&&T(w.specularIntensityMap.channel),transmissionMapUv:it&&T(w.transmissionMap.channel),thicknessMapUv:dt&&T(w.thicknessMap.channel),alphaMapUv:Ne&&T(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ht||W),vertexNormals:!!ee.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ee.attributes.uv&&(Ut||Ne),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ee.attributes.normal===void 0&&Ht===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pe,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ne,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ut&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Yt,decodeVideoTextureEmissive:cn&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Yt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oa,flipSided:w.side===ii,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||Ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function b(w){const z=[];if(w.shaderID?z.push(w.shaderID):(z.push(w.customVertexShaderID),z.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)z.push(k),z.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(x(z,w),I(z,w),z.push(a.outputColorSpace)),z.push(w.customProgramCacheKey),z.join()}function x(w,z){w.push(z.precision),w.push(z.outputColorSpace),w.push(z.envMapMode),w.push(z.envMapCubeUVHeight),w.push(z.mapUv),w.push(z.alphaMapUv),w.push(z.lightMapUv),w.push(z.aoMapUv),w.push(z.bumpMapUv),w.push(z.normalMapUv),w.push(z.displacementMapUv),w.push(z.emissiveMapUv),w.push(z.metalnessMapUv),w.push(z.roughnessMapUv),w.push(z.anisotropyMapUv),w.push(z.clearcoatMapUv),w.push(z.clearcoatNormalMapUv),w.push(z.clearcoatRoughnessMapUv),w.push(z.iridescenceMapUv),w.push(z.iridescenceThicknessMapUv),w.push(z.sheenColorMapUv),w.push(z.sheenRoughnessMapUv),w.push(z.specularMapUv),w.push(z.specularColorMapUv),w.push(z.specularIntensityMapUv),w.push(z.transmissionMapUv),w.push(z.thicknessMapUv),w.push(z.combine),w.push(z.fogExp2),w.push(z.sizeAttenuation),w.push(z.morphTargetsCount),w.push(z.morphAttributeCount),w.push(z.numDirLights),w.push(z.numPointLights),w.push(z.numSpotLights),w.push(z.numSpotLightMaps),w.push(z.numHemiLights),w.push(z.numRectAreaLights),w.push(z.numDirLightShadows),w.push(z.numPointLightShadows),w.push(z.numSpotLightShadows),w.push(z.numSpotLightShadowsWithMaps),w.push(z.numLightProbes),w.push(z.shadowMapType),w.push(z.toneMapping),w.push(z.numClippingPlanes),w.push(z.numClipIntersection),w.push(z.depthPacking)}function I(w,z){u.disableAll(),z.instancing&&u.enable(0),z.instancingColor&&u.enable(1),z.instancingMorph&&u.enable(2),z.matcap&&u.enable(3),z.envMap&&u.enable(4),z.normalMapObjectSpace&&u.enable(5),z.normalMapTangentSpace&&u.enable(6),z.clearcoat&&u.enable(7),z.iridescence&&u.enable(8),z.alphaTest&&u.enable(9),z.vertexColors&&u.enable(10),z.vertexAlphas&&u.enable(11),z.vertexUv1s&&u.enable(12),z.vertexUv2s&&u.enable(13),z.vertexUv3s&&u.enable(14),z.vertexTangents&&u.enable(15),z.anisotropy&&u.enable(16),z.alphaHash&&u.enable(17),z.batching&&u.enable(18),z.dispersion&&u.enable(19),z.batchingColor&&u.enable(20),z.gradientMap&&u.enable(21),z.packedNormalMap&&u.enable(22),z.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),z.fog&&u.enable(0),z.useFog&&u.enable(1),z.flatShading&&u.enable(2),z.logarithmicDepthBuffer&&u.enable(3),z.reversedDepthBuffer&&u.enable(4),z.skinning&&u.enable(5),z.morphTargets&&u.enable(6),z.morphNormals&&u.enable(7),z.morphColors&&u.enable(8),z.premultipliedAlpha&&u.enable(9),z.shadowMapEnabled&&u.enable(10),z.doubleSided&&u.enable(11),z.flipSided&&u.enable(12),z.useDepthPacking&&u.enable(13),z.dithering&&u.enable(14),z.transmission&&u.enable(15),z.sheen&&u.enable(16),z.opaque&&u.enable(17),z.pointsUvs&&u.enable(18),z.decodeVideoTexture&&u.enable(19),z.decodeVideoTextureEmissive&&u.enable(20),z.alphaToCoverage&&u.enable(21),z.numLightProbeGrids>0&&u.enable(22),z.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function F(w){const z=S[w.type];let k;if(z){const G=na[z];k=gN.clone(G.uniforms)}else k=w.uniforms;return k}function A(w,z){let k=_.get(z);return k!==void 0?++k.usedTimes:(k=new GO(a,z,w,o),p.push(k),_.set(z,k)),k}function U(w){if(--w.usedTimes===0){const z=p.indexOf(w);p[z]=p[p.length-1],p.pop(),_.delete(w.cacheKey),w.destroy()}}function L(w){h.remove(w)}function B(){h.dispose()}return{getParameters:D,getProgramCacheKey:b,getUniforms:F,acquireProgram:A,releaseProgram:U,releaseShaderCache:L,programs:p,dispose:B}}function YO(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function KO(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function DS(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function NS(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,T,D,b,x){let I=a[e];return I===void 0?(I={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:D,renderOrder:g.renderOrder,z:b,group:x},a[e]=I):(I.id=g.id,I.object=g,I.geometry=S,I.material=T,I.materialVariant=u(g),I.groupOrder=D,I.renderOrder=g.renderOrder,I.z=b,I.group=x),e++,I}function m(g,S,T,D,b,x){const I=h(g,S,T,D,b,x);T.transmission>0?r.push(I):T.transparent===!0?o.push(I):n.push(I)}function p(g,S,T,D,b,x){const I=h(g,S,T,D,b,x);T.transmission>0?r.unshift(I):T.transparent===!0?o.unshift(I):n.unshift(I)}function _(g,S,T){n.length>1&&n.sort(g||KO),r.length>1&&r.sort(S||DS),o.length>1&&o.sort(S||DS),T&&(n.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,S=a.length;g<S;g++){const T=a[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:_}}function ZO(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new NS,a.set(r,[u])):o>=c.length?(u=new NS,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function QO(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Rt};break;case"SpotLight":n={position:new se,direction:new se,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new se,halfWidth:new se,halfHeight:new se};break}return a[e.id]=n,n}}}function $O(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let JO=0;function eP(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function tP(a){const e=new QO,n=$O(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new se);const o=new se,c=new hn,u=new hn;function h(p){let _=0,v=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let S=0,T=0,D=0,b=0,x=0,I=0,F=0,A=0,U=0,L=0,B=0;p.sort(eP);for(let z=0,k=p.length;z<k;z++){const G=p[z],K=G.color,he=G.intensity,me=G.distance;let ee=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===gs?ee=G.shadow.map.texture:ee=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=K.r*he,v+=K.g*he,g+=K.b*he;else if(G.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(G.sh.coefficients[N],he);B++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,te=n.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[S]=te,r.directionalShadowMap[S]=ee,r.directionalShadowMatrix[S]=G.shadow.matrix,I++}r.directional[S]=N,S++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(K).multiplyScalar(he),N.distance=me,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,r.spot[D]=N;const H=G.shadow;if(G.map&&(r.spotLightMap[U]=G.map,U++,H.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[D]=H.matrix,G.castShadow){const te=n.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[D]=te,r.spotShadowMap[D]=ee,A++}D++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy(K).multiplyScalar(he),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),r.rectArea[b]=N,b++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const H=G.shadow,te=n.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[T]=te,r.pointShadowMap[T]=ee,r.pointShadowMatrix[T]=G.shadow.matrix,F++}r.point[T]=N,T++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(he),N.groundColor.copy(G.groundColor).multiplyScalar(he),r.hemi[x]=N,x++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==S||w.pointLength!==T||w.spotLength!==D||w.rectAreaLength!==b||w.hemiLength!==x||w.numDirectionalShadows!==I||w.numPointShadows!==F||w.numSpotShadows!==A||w.numSpotMaps!==U||w.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=D,r.rectArea.length=b,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=A+U-L,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,w.directionalLength=S,w.pointLength=T,w.spotLength=D,w.rectAreaLength=b,w.hemiLength=x,w.numDirectionalShadows=I,w.numPointShadows=F,w.numSpotShadows=A,w.numSpotMaps=U,w.numLightProbes=B,r.version=JO++)}function m(p,_){let v=0,g=0,S=0,T=0,D=0;const b=_.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const F=p[x];if(F.isDirectionalLight){const A=r.directional[v];A.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(b),v++}else if(F.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(b),S++}else if(F.isRectAreaLight){const A=r.rectArea[T];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(b),u.identity(),c.copy(F.matrixWorld),c.premultiply(b),u.extractRotation(c),A.halfWidth.set(F.width*.5,0,0),A.halfHeight.set(0,F.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),T++}else if(F.isPointLight){const A=r.point[g];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){const A=r.hemi[D];A.direction.setFromMatrixPosition(F.matrixWorld),A.direction.transformDirection(b),D++}}}return{setup:h,setupView:m,state:r}}function LS(a){const e=new tP(a),n=[],r=[],o=[];function c(g){v.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function nP(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new LS(a),e.set(o,[h])):c>=u.length?(h=new LS(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const iP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aP=`uniform sampler2D shadow_pass;
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
}`,rP=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],sP=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],US=new hn,Nl=new se,Np=new se;function oP(a,e,n){let r=new Z1;const o=new zt,c=new zt,u=new dn,h=new yN,m=new SN,p={},_=n.maxTextureSize,v={[Rr]:ii,[ii]:Rr,[Oa]:Oa},g=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:iP,fragmentShader:aP}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new ai;T.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ga(T,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let x=this.type;this.render=function(L,B,w){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===sD&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tf);const z=a.getRenderTarget(),k=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Ia),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const he=x!==this.type;he&&B.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(ee=>ee.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,ee=L.length;me<ee;me++){const N=L[me],H=N.shadow;if(H===void 0){ut("WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const te=H.getFrameExtents();o.multiply(te),c.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/te.x),o.x=c.x*te.x,H.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/te.y),o.y=c.y*te.y,H.mapSize.y=c.y));const _e=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||he===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Il){if(N.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new oa(o.x,o.y,{format:gs,type:Va,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),H.map.texture.name=N.name+".shadowMap",H.map.depthTexture=new To(o.x,o.y,aa),H.map.depthTexture.name=N.name+".shadowMapDepth",H.map.depthTexture.format=Ha,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn}else N.isPointLight?(H.map=new aM(o.x),H.map.depthTexture=new pN(o.x,la)):(H.map=new oa(o.x,o.y),H.map.depthTexture=new To(o.x,o.y,la)),H.map.depthTexture.name=N.name+".shadowMap",H.map.depthTexture.format=Ha,this.type===tf?(H.map.depthTexture.compareFunction=_e?Cg:Rg,H.map.depthTexture.minFilter=Xn,H.map.depthTexture.magFilter=Xn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn);H.camera.updateProjectionMatrix()}const Te=H.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Te;O++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,O),a.clear();else{O===0&&(a.setRenderTarget(H.map),a.clear());const Z=H.getViewport(O);u.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),K.viewport(u)}if(N.isPointLight){const Z=H.camera,ne=H.matrix,be=N.distance||Z.far;be!==Z.far&&(Z.far=be,Z.updateProjectionMatrix()),Nl.setFromMatrixPosition(N.matrixWorld),Z.position.copy(Nl),Np.copy(Z.position),Np.add(rP[O]),Z.up.copy(sP[O]),Z.lookAt(Np),Z.updateMatrixWorld(),ne.makeTranslation(-Nl.x,-Nl.y,-Nl.z),US.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(US,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(N);r=H.getFrustum(),A(B,w,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===Il&&I(H,w),H.needsUpdate=!1}x=this.type,b.needsUpdate=!1,a.setRenderTarget(z,k,G)};function I(L,B){const w=e.update(D);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new oa(o.x,o.y,{format:gs,type:Va})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,w,g,D,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,w,S,D,null)}function F(L,B,w,z){let k=null;const G=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)k=G;else if(k=w.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const K=k.uuid,he=B.uuid;let me=p[K];me===void 0&&(me={},p[K]=me);let ee=me[he];ee===void 0&&(ee=k.clone(),me[he]=ee,B.addEventListener("dispose",U)),k=ee}if(k.visible=B.visible,k.wireframe=B.wireframe,z===Il?k.side=B.shadowSide!==null?B.shadowSide:B.side:k.side=B.shadowSide!==null?B.shadowSide:v[B.side],k.alphaMap=B.alphaMap,k.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,k.map=B.map,k.clipShadows=B.clipShadows,k.clippingPlanes=B.clippingPlanes,k.clipIntersection=B.clipIntersection,k.displacementMap=B.displacementMap,k.displacementScale=B.displacementScale,k.displacementBias=B.displacementBias,k.wireframeLinewidth=B.wireframeLinewidth,k.linewidth=B.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const K=a.properties.get(k);K.light=w}return k}function A(L,B,w,z,k){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Il)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const he=e.update(L),me=L.material;if(Array.isArray(me)){const ee=he.groups;for(let N=0,H=ee.length;N<H;N++){const te=ee[N],_e=me[te.materialIndex];if(_e&&_e.visible){const Te=F(L,_e,z,k);L.onBeforeShadow(a,L,B,w,he,Te,te),a.renderBufferDirect(w,null,he,Te,L,te),L.onAfterShadow(a,L,B,w,he,Te,te)}}}else if(me.visible){const ee=F(L,me,z,k);L.onBeforeShadow(a,L,B,w,he,ee,null),a.renderBufferDirect(w,null,he,ee,L,null),L.onAfterShadow(a,L,B,w,he,ee,null)}}const K=L.children;for(let he=0,me=K.length;he<me;he++)A(K[he],B,w,z,k)}function U(L){L.target.removeEventListener("dispose",U);for(const w in p){const z=p[w],k=L.target.uuid;k in z&&(z[k].dispose(),delete z[k])}}}function lP(a,e){function n(){let q=!1;const Ne=new dn;let Se=null;const Oe=new dn(0,0,0,0);return{setMask:function(He){Se!==He&&!q&&(a.colorMask(He,He,He,He),Se=He)},setLocked:function(He){q=He},setClear:function(He,Ae,Qe,We,rn){rn===!0&&(He*=We,Ae*=We,Qe*=We),Ne.set(He,Ae,Qe,We),Oe.equals(Ne)===!1&&(a.clearColor(He,Ae,Qe,We),Oe.copy(Ne))},reset:function(){q=!1,Se=null,Oe.set(-1,0,0,0)}}}function r(){let q=!1,Ne=!1,Se=null,Oe=null,He=null;return{setReversed:function(Ae){if(Ne!==Ae){const Qe=e.get("EXT_clip_control");Ae?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ae;const We=He;He=null,this.setClear(We)}},getReversed:function(){return Ne},setTest:function(Ae){Ae?ye(a.DEPTH_TEST):Pe(a.DEPTH_TEST)},setMask:function(Ae){Se!==Ae&&!q&&(a.depthMask(Ae),Se=Ae)},setFunc:function(Ae){if(Ne&&(Ae=BD[Ae]),Oe!==Ae){switch(Ae){case hm:a.depthFunc(a.NEVER);break;case pm:a.depthFunc(a.ALWAYS);break;case mm:a.depthFunc(a.LESS);break;case Mo:a.depthFunc(a.LEQUAL);break;case gm:a.depthFunc(a.EQUAL);break;case vm:a.depthFunc(a.GEQUAL);break;case _m:a.depthFunc(a.GREATER);break;case xm:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Oe=Ae}},setLocked:function(Ae){q=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,Ne&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){q=!1,Se=null,Oe=null,He=null,Ne=!1}}}function o(){let q=!1,Ne=null,Se=null,Oe=null,He=null,Ae=null,Qe=null,We=null,rn=null;return{setTest:function(Gt){q||(Gt?ye(a.STENCIL_TEST):Pe(a.STENCIL_TEST))},setMask:function(Gt){Ne!==Gt&&!q&&(a.stencilMask(Gt),Ne=Gt)},setFunc:function(Gt,ri,si){(Se!==Gt||Oe!==ri||He!==si)&&(a.stencilFunc(Gt,ri,si),Se=Gt,Oe=ri,He=si)},setOp:function(Gt,ri,si){(Ae!==Gt||Qe!==ri||We!==si)&&(a.stencilOp(Gt,ri,si),Ae=Gt,Qe=ri,We=si)},setLocked:function(Gt){q=Gt},setClear:function(Gt){rn!==Gt&&(a.clearStencil(Gt),rn=Gt)},reset:function(){q=!1,Ne=null,Se=null,Oe=null,He=null,Ae=null,Qe=null,We=null,rn=null}}}const c=new n,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,T=[],D=null,b=!1,x=null,I=null,F=null,A=null,U=null,L=null,B=null,w=new Rt(0,0,0),z=0,k=!1,G=null,K=null,he=null,me=null,ee=null;const N=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const _e=a.getParameter(a.VERSION);_e.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=te>=1):_e.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=te>=2);let Te=null,O={};const Z=a.getParameter(a.SCISSOR_BOX),ne=a.getParameter(a.VIEWPORT),be=new dn().fromArray(Z),J=new dn().fromArray(ne);function X(q,Ne,Se,Oe){const He=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(q,Ae),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<Se;Qe++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Oe,0,a.RGBA,a.UNSIGNED_BYTE,He):a.texImage2D(Ne+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,He);return Ae}const ce={};ce[a.TEXTURE_2D]=X(a.TEXTURE_2D,a.TEXTURE_2D,1),ce[a.TEXTURE_CUBE_MAP]=X(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[a.TEXTURE_2D_ARRAY]=X(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ce[a.TEXTURE_3D]=X(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ye(a.DEPTH_TEST),u.setFunc(Mo),Bt(!1),Ht(Cy),ye(a.CULL_FACE),Ce(Ia);function ye(q){_[q]!==!0&&(a.enable(q),_[q]=!0)}function Pe(q){_[q]!==!1&&(a.disable(q),_[q]=!1)}function ot(q,Ne){return g[q]!==Ne?(a.bindFramebuffer(q,Ne),g[q]=Ne,q===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ne),q===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(q,Ne){let Se=T,Oe=!1;if(q){Se=S.get(Ne),Se===void 0&&(Se=[],S.set(Ne,Se));const He=q.textures;if(Se.length!==He.length||Se[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,Qe=He.length;Ae<Qe;Ae++)Se[Ae]=a.COLOR_ATTACHMENT0+Ae;Se.length=He.length,Oe=!0}}else Se[0]!==a.BACK&&(Se[0]=a.BACK,Oe=!0);Oe&&a.drawBuffers(Se)}function Ut(q){return D!==q?(a.useProgram(q),D=q,!0):!1}const ht={[as]:a.FUNC_ADD,[lD]:a.FUNC_SUBTRACT,[cD]:a.FUNC_REVERSE_SUBTRACT};ht[uD]=a.MIN,ht[fD]=a.MAX;const yt={[dD]:a.ZERO,[hD]:a.ONE,[pD]:a.SRC_COLOR,[fm]:a.SRC_ALPHA,[yD]:a.SRC_ALPHA_SATURATE,[_D]:a.DST_COLOR,[gD]:a.DST_ALPHA,[mD]:a.ONE_MINUS_SRC_COLOR,[dm]:a.ONE_MINUS_SRC_ALPHA,[xD]:a.ONE_MINUS_DST_COLOR,[vD]:a.ONE_MINUS_DST_ALPHA,[SD]:a.CONSTANT_COLOR,[bD]:a.ONE_MINUS_CONSTANT_COLOR,[MD]:a.CONSTANT_ALPHA,[ED]:a.ONE_MINUS_CONSTANT_ALPHA};function Ce(q,Ne,Se,Oe,He,Ae,Qe,We,rn,Gt){if(q===Ia){b===!0&&(Pe(a.BLEND),b=!1);return}if(b===!1&&(ye(a.BLEND),b=!0),q!==oD){if(q!==x||Gt!==k){if((I!==as||U!==as)&&(a.blendEquation(a.FUNC_ADD),I=as,U=as),Gt)switch(q){case xo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Dy:a.blendFunc(a.ONE,a.ONE);break;case Ny:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ly:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",q);break}else switch(q){case xo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Dy:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Ny:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ly:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",q);break}F=null,A=null,L=null,B=null,w.set(0,0,0),z=0,x=q,k=Gt}return}He=He||Ne,Ae=Ae||Se,Qe=Qe||Oe,(Ne!==I||He!==U)&&(a.blendEquationSeparate(ht[Ne],ht[He]),I=Ne,U=He),(Se!==F||Oe!==A||Ae!==L||Qe!==B)&&(a.blendFuncSeparate(yt[Se],yt[Oe],yt[Ae],yt[Qe]),F=Se,A=Oe,L=Ae,B=Qe),(We.equals(w)===!1||rn!==z)&&(a.blendColor(We.r,We.g,We.b,rn),w.copy(We),z=rn),x=q,k=!1}function Ze(q,Ne){q.side===Oa?Pe(a.CULL_FACE):ye(a.CULL_FACE);let Se=q.side===ii;Ne&&(Se=!Se),Bt(Se),q.blending===xo&&q.transparent===!1?Ce(Ia):Ce(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Oe=q.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),cn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ye(a.SAMPLE_ALPHA_TO_COVERAGE):Pe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(q){G!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),G=q)}function Ht(q){q!==aD?(ye(a.CULL_FACE),q!==K&&(q===Cy?a.cullFace(a.BACK):q===rD?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Pe(a.CULL_FACE),K=q}function en(q){q!==he&&(H&&a.lineWidth(q),he=q)}function cn(q,Ne,Se){q?(ye(a.POLYGON_OFFSET_FILL),(me!==Ne||ee!==Se)&&(me=Ne,ee=Se,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,Se))):Pe(a.POLYGON_OFFSET_FILL)}function Je(q){q?ye(a.SCISSOR_TEST):Pe(a.SCISSOR_TEST)}function St(q){q===void 0&&(q=a.TEXTURE0+N-1),Te!==q&&(a.activeTexture(q),Te=q)}function W(q,Ne,Se){Se===void 0&&(Te===null?Se=a.TEXTURE0+N-1:Se=Te);let Oe=O[Se];Oe===void 0&&(Oe={type:void 0,texture:void 0},O[Se]=Oe),(Oe.type!==q||Oe.texture!==Ne)&&(Te!==Se&&(a.activeTexture(Se),Te=Se),a.bindTexture(q,Ne||ce[q]),Oe.type=q,Oe.texture=Ne)}function bt(){const q=O[Te];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ft(){try{a.compressedTexImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function E(){try{a.texSubImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function Q(){try{a.texSubImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function ie(){try{a.compressedTexSubImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function de(){try{a.compressedTexSubImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function we(){try{a.texStorage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function Ue(){try{a.texStorage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function ge(){try{a.texImage2D(...arguments)}catch(q){Lt("WebGLState:",q)}}function ve(){try{a.texImage3D(...arguments)}catch(q){Lt("WebGLState:",q)}}function Le(q){return v[q]!==void 0?v[q]:a.getParameter(q)}function Ge(q,Ne){v[q]!==Ne&&(a.pixelStorei(q,Ne),v[q]=Ne)}function ze(q){be.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),be.copy(q))}function Ie(q){J.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),J.copy(q))}function nt(q,Ne){let Se=p.get(Ne);Se===void 0&&(Se=new WeakMap,p.set(Ne,Se));let Oe=Se.get(q);Oe===void 0&&(Oe=a.getUniformBlockIndex(Ne,q.name),Se.set(q,Oe))}function it(q,Ne){const Oe=p.get(Ne).get(q);m.get(Ne)!==Oe&&(a.uniformBlockBinding(Ne,Oe,q.__bindingPointIndex),m.set(Ne,Oe))}function dt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},v={},Te=null,O={},g={},S=new WeakMap,T=[],D=null,b=!1,x=null,I=null,F=null,A=null,U=null,L=null,B=null,w=new Rt(0,0,0),z=0,k=!1,G=null,K=null,he=null,me=null,ee=null,be.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ye,disable:Pe,bindFramebuffer:ot,drawBuffers:Ke,useProgram:Ut,setBlending:Ce,setMaterial:Ze,setFlipSided:Bt,setCullFace:Ht,setLineWidth:en,setPolygonOffset:cn,setScissorTest:Je,activeTexture:St,bindTexture:W,unbindTexture:bt,compressedTexImage2D:ft,compressedTexImage3D:P,texImage2D:ge,texImage3D:ve,pixelStorei:Ge,getParameter:Le,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:we,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:ze,viewport:Ie,reset:dt}}function cP(a,e,n,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,E){return T?new OffscreenCanvas(P,E):xf("canvas")}function b(P,E,Q){let ie=1;const de=ft(P);if((de.width>Q||de.height>Q)&&(ie=Q/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const we=Math.floor(ie*de.width),Ue=Math.floor(ie*de.height);g===void 0&&(g=D(we,Ue));const ge=E?D(we,Ue):g;return ge.width=we,ge.height=Ue,ge.getContext("2d").drawImage(P,0,0,we,Ue),ut("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+Ue+")."),ge}else return"data"in P&&ut("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function x(P){return P.generateMipmaps}function I(P){a.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(P,E,Q,ie,de,we=!1){if(P!==null){if(a[P]!==void 0)return a[P];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ue;ie&&(Ue=e.get("EXT_texture_norm16"),Ue||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===a.RED&&(Q===a.FLOAT&&(ge=a.R32F),Q===a.HALF_FLOAT&&(ge=a.R16F),Q===a.UNSIGNED_BYTE&&(ge=a.R8),Q===a.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),Q===a.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),E===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ge=a.R8UI),Q===a.UNSIGNED_SHORT&&(ge=a.R16UI),Q===a.UNSIGNED_INT&&(ge=a.R32UI),Q===a.BYTE&&(ge=a.R8I),Q===a.SHORT&&(ge=a.R16I),Q===a.INT&&(ge=a.R32I)),E===a.RG&&(Q===a.FLOAT&&(ge=a.RG32F),Q===a.HALF_FLOAT&&(ge=a.RG16F),Q===a.UNSIGNED_BYTE&&(ge=a.RG8),Q===a.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),Q===a.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ge=a.RG8UI),Q===a.UNSIGNED_SHORT&&(ge=a.RG16UI),Q===a.UNSIGNED_INT&&(ge=a.RG32UI),Q===a.BYTE&&(ge=a.RG8I),Q===a.SHORT&&(ge=a.RG16I),Q===a.INT&&(ge=a.RG32I)),E===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),Q===a.UNSIGNED_INT&&(ge=a.RGB32UI),Q===a.BYTE&&(ge=a.RGB8I),Q===a.SHORT&&(ge=a.RGB16I),Q===a.INT&&(ge=a.RGB32I)),E===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),Q===a.UNSIGNED_INT&&(ge=a.RGBA32UI),Q===a.BYTE&&(ge=a.RGBA8I),Q===a.SHORT&&(ge=a.RGBA16I),Q===a.INT&&(ge=a.RGBA32I)),E===a.RGB&&(Q===a.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),Q===a.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(ge=a.R11F_G11F_B10F)),E===a.RGBA){const ve=we?vf:Dt.getTransfer(de);Q===a.FLOAT&&(ge=a.RGBA32F),Q===a.HALF_FLOAT&&(ge=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(ge=ve===Yt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),Q===a.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function U(P,E){let Q;return P?E===null||E===la||E===ql?Q=a.DEPTH24_STENCIL8:E===aa?Q=a.DEPTH32F_STENCIL8:E===jl&&(Q=a.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===ql?Q=a.DEPTH_COMPONENT24:E===aa?Q=a.DEPTH_COMPONENT32F:E===jl&&(Q=a.DEPTH_COMPONENT16),Q}function L(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fn&&P.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function B(P){const E=P.target;E.removeEventListener("dispose",B),z(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),G(E)}function z(P){const E=r.get(P);if(E.__webglInit===void 0)return;const Q=P.source,ie=S.get(Q);if(ie){const de=ie[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&k(P),Object.keys(ie).length===0&&S.delete(Q)}r.remove(P)}function k(P){const E=r.get(P);a.deleteTexture(E.__webglTexture);const Q=P.source,ie=S.get(Q);delete ie[E.__cacheKey],u.memory.textures--}function G(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let de=0;de<E.__webglFramebuffer[ie].length;de++)a.deleteFramebuffer(E.__webglFramebuffer[ie][de]);else a.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)a.deleteFramebuffer(E.__webglFramebuffer[ie]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=P.textures;for(let ie=0,de=Q.length;ie<de;ie++){const we=r.get(Q[ie]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove(Q[ie])}r.remove(P)}let K=0;function he(){K=0}function me(){return K}function ee(P){K=P}function N(){const P=K;return P>=o.maxTextures&&ut("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),K+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function te(P,E){const Q=r.get(P);if(P.isVideoTexture&&W(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Q.__version!==P.version){const ie=P.image;if(ie===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Q,P,E);return}}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+E)}function _e(P,E){const Q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){Pe(Q,P,E);return}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+E)}function Te(P,E){const Q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){Pe(Q,P,E);return}n.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+E)}function O(P,E){const Q=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Q.__version!==P.version){ot(Q,P,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+E)}const Z={[ym]:a.REPEAT,[Pa]:a.CLAMP_TO_EDGE,[Sm]:a.MIRRORED_REPEAT},ne={[Fn]:a.NEAREST,[wD]:a.NEAREST_MIPMAP_NEAREST,[Mu]:a.NEAREST_MIPMAP_LINEAR,[Xn]:a.LINEAR,[ep]:a.LINEAR_MIPMAP_NEAREST,[ls]:a.LINEAR_MIPMAP_LINEAR},be={[DD]:a.NEVER,[PD]:a.ALWAYS,[ND]:a.LESS,[Rg]:a.LEQUAL,[LD]:a.EQUAL,[Cg]:a.GEQUAL,[UD]:a.GREATER,[OD]:a.NOTEQUAL};function J(P,E){if(E.type===aa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===ep||E.magFilter===Mu||E.magFilter===ls||E.minFilter===Xn||E.minFilter===ep||E.minFilter===Mu||E.minFilter===ls)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,Z[E.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,Z[E.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,Z[E.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ne[E.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Mu&&E.minFilter!==ls||E.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function X(P,E){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",B));const ie=E.source;let de=S.get(ie);de===void 0&&(de={},S.set(ie,de));const we=H(E);if(we!==P.__cacheKey){de[we]===void 0&&(de[we]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),de[we].usedTimes++;const Ue=de[P.__cacheKey];Ue!==void 0&&(de[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&k(E)),P.__cacheKey=we,P.__webglTexture=de[we].texture}return Q}function ce(P,E,Q){return Math.floor(Math.floor(P/Q)/E)}function ye(P,E,Q,ie){const we=P.updateRanges;if(we.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,Q,ie,E.data);else{we.sort((Ge,ze)=>Ge.start-ze.start);let Ue=0;for(let Ge=1;Ge<we.length;Ge++){const ze=we[Ue],Ie=we[Ge],nt=ze.start+ze.count,it=ce(Ie.start,E.width,4),dt=ce(ze.start,E.width,4);Ie.start<=nt+1&&it===dt&&ce(Ie.start+Ie.count-1,E.width,4)===it?ze.count=Math.max(ze.count,Ie.start+Ie.count-ze.start):(++Ue,we[Ue]=Ie)}we.length=Ue+1;const ge=n.getParameter(a.UNPACK_ROW_LENGTH),ve=n.getParameter(a.UNPACK_SKIP_PIXELS),Le=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,ze=we.length;Ge<ze;Ge++){const Ie=we[Ge],nt=Math.floor(Ie.start/4),it=Math.ceil(Ie.count/4),dt=nt%E.width,q=Math.floor(nt/E.width),Ne=it,Se=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,dt,q,Ne,Se,Q,ie,E.data)}P.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,ge),n.pixelStorei(a.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(a.UNPACK_SKIP_ROWS,Le)}}function Pe(P,E,Q){let ie=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=a.TEXTURE_3D);const de=X(P,E),we=E.source;n.bindTexture(ie,P.__webglTexture,a.TEXTURE0+Q);const Ue=r.get(we);if(we.version!==Ue.__version||de===!0){if(n.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Se=Dt.getPrimaries(Dt.workingColorSpace),Oe=E.colorSpace===Mr?null:Dt.getPrimaries(E.colorSpace),He=E.colorSpace===Mr||Se===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let ve=b(E.image,!1,o.maxTextureSize);ve=bt(E,ve);const Le=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let ze=A(E.internalFormat,Le,Ge,E.normalized,E.colorSpace,E.isVideoTexture);J(ie,E);let Ie;const nt=E.mipmaps,it=E.isVideoTexture!==!0,dt=Ue.__version===void 0||de===!0,q=we.dataReady,Ne=L(E,ve);if(E.isDepthTexture)ze=U(E.format===cs,E.type),dt&&(it?n.texStorage2D(a.TEXTURE_2D,1,ze,ve.width,ve.height):n.texImage2D(a.TEXTURE_2D,0,ze,ve.width,ve.height,0,Le,Ge,null));else if(E.isDataTexture)if(nt.length>0){it&&dt&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,nt[0].width,nt[0].height);for(let Se=0,Oe=nt.length;Se<Oe;Se++)Ie=nt[Se],it?q&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Le,Ge,Ie.data):n.texImage2D(a.TEXTURE_2D,Se,ze,Ie.width,Ie.height,0,Le,Ge,Ie.data);E.generateMipmaps=!1}else it?(dt&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,ve.width,ve.height),q&&ye(E,ve,Le,Ge)):n.texImage2D(a.TEXTURE_2D,0,ze,ve.width,ve.height,0,Le,Ge,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&dt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ze,nt[0].width,nt[0].height,ve.depth);for(let Se=0,Oe=nt.length;Se<Oe;Se++)if(Ie=nt[Se],E.format!==Xi)if(Le!==null)if(it){if(q)if(E.layerUpdates.size>0){const He=uS(Ie.width,Ie.height,E.format,E.type);for(const Ae of E.layerUpdates){const Qe=Ie.data.subarray(Ae*He/Ie.data.BYTES_PER_ELEMENT,(Ae+1)*He/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,Ae,Ie.width,Ie.height,1,Le,Qe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,ve.depth,Le,Ie.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Se,ze,Ie.width,Ie.height,ve.depth,0,Ie.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?q&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,ve.depth,Le,Ge,Ie.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Se,ze,Ie.width,Ie.height,ve.depth,0,Le,Ge,Ie.data)}else{it&&dt&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,nt[0].width,nt[0].height);for(let Se=0,Oe=nt.length;Se<Oe;Se++)Ie=nt[Se],E.format!==Xi?Le!==null?it?q&&n.compressedTexSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Le,Ie.data):n.compressedTexImage2D(a.TEXTURE_2D,Se,ze,Ie.width,Ie.height,0,Ie.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?q&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Le,Ge,Ie.data):n.texImage2D(a.TEXTURE_2D,Se,ze,Ie.width,Ie.height,0,Le,Ge,Ie.data)}else if(E.isDataArrayTexture)if(it){if(dt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ze,ve.width,ve.height,ve.depth),q)if(E.layerUpdates.size>0){const Se=uS(ve.width,ve.height,E.format,E.type);for(const Oe of E.layerUpdates){const He=ve.data.subarray(Oe*Se/ve.data.BYTES_PER_ELEMENT,(Oe+1)*Se/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Oe,ve.width,ve.height,1,Le,Ge,He)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ge,ve.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,Le,Ge,ve.data);else if(E.isData3DTexture)it?(dt&&n.texStorage3D(a.TEXTURE_3D,Ne,ze,ve.width,ve.height,ve.depth),q&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ge,ve.data)):n.texImage3D(a.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,Le,Ge,ve.data);else if(E.isFramebufferTexture){if(dt)if(it)n.texStorage2D(a.TEXTURE_2D,Ne,ze,ve.width,ve.height);else{let Se=ve.width,Oe=ve.height;for(let He=0;He<Ne;He++)n.texImage2D(a.TEXTURE_2D,He,ze,Se,Oe,0,Le,Ge,null),Se>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const Se=a.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),ve.parentNode!==Se){Se.appendChild(ve),v.add(E),Se.onpaint=Oe=>{const He=Oe.changedElements;for(const Ae of v)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},Se.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ve);else{const He=a.RGBA,Ae=a.RGBA,Qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,He,Ae,Qe,ve)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&dt){const Se=ft(nt[0]);n.texStorage2D(a.TEXTURE_2D,Ne,ze,Se.width,Se.height)}for(let Se=0,Oe=nt.length;Se<Oe;Se++)Ie=nt[Se],it?q&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Le,Ge,Ie):n.texImage2D(a.TEXTURE_2D,Se,ze,Le,Ge,Ie);E.generateMipmaps=!1}else if(it){if(dt){const Se=ft(ve);n.texStorage2D(a.TEXTURE_2D,Ne,ze,Se.width,Se.height)}q&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,Ge,ve)}else n.texImage2D(a.TEXTURE_2D,0,ze,Le,Ge,ve);x(E)&&I(ie),Ue.__version=we.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ot(P,E,Q){if(E.image.length!==6)return;const ie=X(P,E),de=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+Q);const we=r.get(de);if(de.version!==we.__version||ie===!0){n.activeTexture(a.TEXTURE0+Q);const Ue=Dt.getPrimaries(Dt.workingColorSpace),ge=E.colorSpace===Mr?null:Dt.getPrimaries(E.colorSpace),ve=E.colorSpace===Mr||Ue===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let Ae=0;Ae<6;Ae++)!Le&&!Ge?ze[Ae]=b(E.image[Ae],!0,o.maxCubemapSize):ze[Ae]=Ge?E.image[Ae].image:E.image[Ae],ze[Ae]=bt(E,ze[Ae]);const Ie=ze[0],nt=c.convert(E.format,E.colorSpace),it=c.convert(E.type),dt=A(E.internalFormat,nt,it,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ne=we.__version===void 0||ie===!0,Se=de.dataReady;let Oe=L(E,Ie);J(a.TEXTURE_CUBE_MAP,E);let He;if(Le){q&&Ne&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,dt,Ie.width,Ie.height);for(let Ae=0;Ae<6;Ae++){He=ze[Ae].mipmaps;for(let Qe=0;Qe<He.length;Qe++){const We=He[Qe];E.format!==Xi?nt!==null?q?Se&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,We.width,We.height,nt,We.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,dt,We.width,We.height,0,We.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,We.width,We.height,nt,it,We.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,dt,We.width,We.height,0,nt,it,We.data)}}}else{if(He=E.mipmaps,q&&Ne){He.length>0&&Oe++;const Ae=ft(ze[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,dt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ge){q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ze[Ae].width,ze[Ae].height,nt,it,ze[Ae].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,dt,ze[Ae].width,ze[Ae].height,0,nt,it,ze[Ae].data);for(let Qe=0;Qe<He.length;Qe++){const rn=He[Qe].image[Ae].image;q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,rn.width,rn.height,nt,it,rn.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,dt,rn.width,rn.height,0,nt,it,rn.data)}}else{q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,nt,it,ze[Ae]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,dt,nt,it,ze[Ae]);for(let Qe=0;Qe<He.length;Qe++){const We=He[Qe];q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,nt,it,We.image[Ae]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,dt,nt,it,We.image[Ae])}}}x(E)&&I(a.TEXTURE_CUBE_MAP),we.__version=de.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ke(P,E,Q,ie,de,we){const Ue=c.convert(Q.format,Q.colorSpace),ge=c.convert(Q.type),ve=A(Q.internalFormat,Ue,ge,Q.normalized,Q.colorSpace),Le=r.get(E),Ge=r.get(Q);if(Ge.__renderTarget=E,!Le.__hasExternalTextures){const ze=Math.max(1,E.width>>we),Ie=Math.max(1,E.height>>we);de===a.TEXTURE_3D||de===a.TEXTURE_2D_ARRAY?n.texImage3D(de,we,ve,ze,Ie,E.depth,0,Ue,ge,null):n.texImage2D(de,we,ve,ze,Ie,0,Ue,ge,null)}n.bindFramebuffer(a.FRAMEBUFFER,P),St(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ie,de,Ge.__webglTexture,0,Je(E)):(de===a.TEXTURE_2D||de>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ie,de,Ge.__webglTexture,we),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ut(P,E,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,P),E.depthBuffer){const ie=E.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,we=U(E.stencilBuffer,de),Ue=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;St(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Je(E),we,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Je(E),we,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,we,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ue,a.RENDERBUFFER,P)}else{const ie=E.textures;for(let de=0;de<ie.length;de++){const we=ie[de],Ue=c.convert(we.format,we.colorSpace),ge=c.convert(we.type),ve=A(we.internalFormat,Ue,ge,we.normalized,we.colorSpace);St(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Je(E),ve,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Je(E),ve,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,ve,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(P,E,Q){const ie=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),de.__webglTexture===void 0){de.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),J(a.TEXTURE_CUBE_MAP,E.depthTexture);const Le=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let ze;E.depthTexture.format===Ha?ze=a.DEPTH_COMPONENT24:E.depthTexture.format===cs&&(ze=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ze,E.width,E.height,0,Le,Ge,null)}}else te(E.depthTexture,0);const we=de.__webglTexture,Ue=Je(E),ge=ie?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,ve=E.depthTexture.format===cs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ha)St(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,ge,we,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,ve,ge,we,0);else if(E.depthTexture.format===cs)St(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,ge,we,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,ve,ge,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yt(P){const E=r.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ie=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=ie}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let ie=0;ie<6;ie++)ht(E.__webglFramebuffer[ie],P,ie);else{const ie=P.texture.mipmaps;ie&&ie.length>0?ht(E.__webglFramebuffer[0],P,0):ht(E.__webglFramebuffer,P,0)}else if(Q){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=a.createRenderbuffer(),Ut(E.__webglDepthbuffer[ie],P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[ie];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,we)}}else{const ie=P.texture.mipmaps;if(ie&&ie.length>0?n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Ut(E.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,we)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ce(P,E,Q){const ie=r.get(P);E!==void 0&&Ke(ie.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&yt(P)}function Ze(P){const E=P.texture,Q=r.get(P),ie=r.get(E);P.addEventListener("dispose",w);const de=P.textures,we=P.isWebGLCubeRenderTarget===!0,Ue=de.length>1;if(Ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=E.version,u.memory.textures++),we){Q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ge]=[];for(let ve=0;ve<E.mipmaps.length;ve++)Q.__webglFramebuffer[ge][ve]=a.createFramebuffer()}else Q.__webglFramebuffer[ge]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)Q.__webglFramebuffer[ge]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Ue)for(let ge=0,ve=de.length;ge<ve;ge++){const Le=r.get(de[ge]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&St(P)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ge=0;ge<de.length;ge++){const ve=de[ge];Q.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[ge]);const Le=c.convert(ve.format,ve.colorSpace),Ge=c.convert(ve.type),ze=A(ve.internalFormat,Le,Ge,ve.normalized,ve.colorSpace,P.isXRRenderTarget===!0),Ie=Je(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,ze,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,Q.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),Ut(Q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){n.bindTexture(a.TEXTURE_CUBE_MAP,ie.__webglTexture),J(a.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Ke(Q.__webglFramebuffer[ge][ve],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ve);else Ke(Q.__webglFramebuffer[ge],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);x(E)&&I(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ge=0,ve=de.length;ge<ve;ge++){const Le=de[ge],Ge=r.get(Le);let ze=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ze=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ze,Ge.__webglTexture),J(ze,Le),Ke(Q.__webglFramebuffer,P,Le,a.COLOR_ATTACHMENT0+ge,ze,0),x(Le)&&I(ze)}n.unbindTexture()}else{let ge=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ge,ie.__webglTexture),J(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Ke(Q.__webglFramebuffer[ve],P,E,a.COLOR_ATTACHMENT0,ge,ve);else Ke(Q.__webglFramebuffer,P,E,a.COLOR_ATTACHMENT0,ge,0);x(E)&&I(ge),n.unbindTexture()}P.depthBuffer&&yt(P)}function Bt(P){const E=P.textures;for(let Q=0,ie=E.length;Q<ie;Q++){const de=E[Q];if(x(de)){const we=F(P),Ue=r.get(de).__webglTexture;n.bindTexture(we,Ue),I(we),n.unbindTexture()}}}const Ht=[],en=[];function cn(P){if(P.samples>0){if(St(P)===!1){const E=P.textures,Q=P.width,ie=P.height;let de=a.COLOR_BUFFER_BIT;const we=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=r.get(P),ge=E.length>1;if(ge)for(let Le=0;Le<E.length;Le++)n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const ve=P.texture.mipmaps;ve&&ve.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=a.STENCIL_BUFFER_BIT)),ge){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Ge=r.get(E[Le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,Q,ie,0,0,Q,ie,de,a.NEAREST),m===!0&&(Ht.length=0,en.length=0,Ht.push(a.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ht.push(we),en.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,en)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let Le=0;Le<E.length;Le++){n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Ge=r.get(E[Le]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,Ge,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Je(P){return Math.min(o.maxSamples,P.samples)}function St(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(P){const E=u.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function bt(P,E){const Q=P.colorSpace,ie=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==gf&&Q!==Mr&&(Dt.getTransfer(Q)===Yt?(ie!==Xi||de!==Li)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",Q)),E}function ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=N,this.resetTextureUnits=he,this.getTextureUnits=me,this.setTextureUnits=ee,this.setTexture2D=te,this.setTexture2DArray=_e,this.setTexture3D=Te,this.setTextureCube=O,this.rebindTextures=Ce,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function uP(a,e){function n(r,o=Mr){let c;const u=Dt.getTransfer(o);if(r===Li)return a.UNSIGNED_BYTE;if(r===Mg)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Eg)return a.UNSIGNED_SHORT_5_5_5_1;if(r===z1)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===B1)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===I1)return a.BYTE;if(r===F1)return a.SHORT;if(r===jl)return a.UNSIGNED_SHORT;if(r===bg)return a.INT;if(r===la)return a.UNSIGNED_INT;if(r===aa)return a.FLOAT;if(r===Va)return a.HALF_FLOAT;if(r===V1)return a.ALPHA;if(r===H1)return a.RGB;if(r===Xi)return a.RGBA;if(r===Ha)return a.DEPTH_COMPONENT;if(r===cs)return a.DEPTH_STENCIL;if(r===G1)return a.RED;if(r===Tg)return a.RED_INTEGER;if(r===gs)return a.RG;if(r===Ag)return a.RG_INTEGER;if(r===wg)return a.RGBA_INTEGER;if(r===nf||r===af||r===rf||r===sf)if(u===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===nf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===af)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===nf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===af)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bm||r===Mm||r===Em||r===Tm)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===bm)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mm)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Em)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Am||r===wm||r===Rm||r===Cm||r===Dm||r===pf||r===Nm)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Am||r===wm)return u===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Rm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cm)return c.COMPRESSED_R11_EAC;if(r===Dm)return c.COMPRESSED_SIGNED_R11_EAC;if(r===pf)return c.COMPRESSED_RG11_EAC;if(r===Nm)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Lm||r===Um||r===Om||r===Pm||r===Im||r===Fm||r===zm||r===Bm||r===Vm||r===Hm||r===Gm||r===km||r===Xm||r===Wm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Lm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Um)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Om)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Im)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===km)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wm)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jm||r===qm||r===Ym)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===jm)return u===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ym)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Km||r===Zm||r===mf||r===Qm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Km)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Zm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ql?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const fP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dP=`
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

}`;class hP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new $1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _i({vertexShader:fP,fragmentShader:dP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ga(new Df(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pP extends _s{constructor(e,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,T=null;const D=typeof XRWebGLBinding<"u",b=new hP,x={},I=n.getContextAttributes();let F=null,A=null;const U=[],L=[],B=new zt;let w=null;const z=new Ni;z.viewport=new dn;const k=new Ni;k.viewport=new dn;const G=[z,k],K=new MN;let he=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ce=U[X];return ce===void 0&&(ce=new lp,U[X]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(X){let ce=U[X];return ce===void 0&&(ce=new lp,U[X]=ce),ce.getGripSpace()},this.getHand=function(X){let ce=U[X];return ce===void 0&&(ce=new lp,U[X]=ce),ce.getHandSpace()};function ee(X){const ce=L.indexOf(X.inputSource);if(ce===-1)return;const ye=U[ce];ye!==void 0&&(ye.update(X.inputSource,X.frame,p||u),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",N),o.removeEventListener("inputsourceschange",H);for(let X=0;X<U.length;X++){const ce=L[X];ce!==null&&(L[X]=null,U[X].disconnect(ce))}he=null,me=null,b.reset();for(const X in x)delete x[X];e.setRenderTarget(F),S=null,g=null,v=null,o=null,A=null,J.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",N),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Pe=null,ot=null;I.depth&&(ot=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=I.stencil?cs:Ha,Pe=I.stencil?ql:la);const Ke={colorFormat:n.RGBA8,depthFormat:ot,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Ke),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new oa(g.textureWidth,g.textureHeight,{format:Xi,type:Li,depthTexture:new To(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,ye),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new oa(S.framebufferWidth,S.framebufferHeight,{format:Xi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),J.setContext(o),J.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function H(X){for(let ce=0;ce<X.removed.length;ce++){const ye=X.removed[ce],Pe=L.indexOf(ye);Pe>=0&&(L[Pe]=null,U[Pe].disconnect(ye))}for(let ce=0;ce<X.added.length;ce++){const ye=X.added[ce];let Pe=L.indexOf(ye);if(Pe===-1){for(let Ke=0;Ke<U.length;Ke++)if(Ke>=L.length){L.push(ye),Pe=Ke;break}else if(L[Ke]===null){L[Ke]=ye,Pe=Ke;break}if(Pe===-1)break}const ot=U[Pe];ot&&ot.connect(ye)}}const te=new se,_e=new se;function Te(X,ce,ye){te.setFromMatrixPosition(ce.matrixWorld),_e.setFromMatrixPosition(ye.matrixWorld);const Pe=te.distanceTo(_e),ot=ce.projectionMatrix.elements,Ke=ye.projectionMatrix.elements,Ut=ot[14]/(ot[10]-1),ht=ot[14]/(ot[10]+1),yt=(ot[9]+1)/ot[5],Ce=(ot[9]-1)/ot[5],Ze=(ot[8]-1)/ot[0],Bt=(Ke[8]+1)/Ke[0],Ht=Ut*Ze,en=Ut*Bt,cn=Pe/(-Ze+Bt),Je=cn*-Ze;if(ce.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Je),X.translateZ(cn),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ot[10]===-1)X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const St=Ut+cn,W=ht+cn,bt=Ht-Je,ft=en+(Pe-Je),P=yt*ht/W*St,E=Ce*ht/W*St;X.projectionMatrix.makePerspective(bt,ft,P,E,St,W),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function O(X,ce){ce===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ce.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ce=X.near,ye=X.far;b.texture!==null&&(b.depthNear>0&&(ce=b.depthNear),b.depthFar>0&&(ye=b.depthFar)),K.near=k.near=z.near=ce,K.far=k.far=z.far=ye,(he!==K.near||me!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),he=K.near,me=K.far),K.layers.mask=X.layers.mask|6,z.layers.mask=K.layers.mask&-5,k.layers.mask=K.layers.mask&-3;const Pe=X.parent,ot=K.cameras;O(K,Pe);for(let Ke=0;Ke<ot.length;Ke++)O(ot[Ke],Pe);ot.length===2?Te(K,z,k):K.projectionMatrix.copy(z.projectionMatrix),Z(X,K,Pe)};function Z(X,ce,ye){ye===null?X.matrix.copy(ce.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(ce.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$m*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(X){m=X,g!==null&&(g.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(K)},this.getCameraTexture=function(X){return x[X]};let ne=null;function be(X,ce){if(_=ce.getViewerPose(p||u),T=ce,_!==null){const ye=_.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let Pe=!1;ye.length!==K.cameras.length&&(K.cameras.length=0,Pe=!0);for(let ht=0;ht<ye.length;ht++){const yt=ye[ht];let Ce=null;if(S!==null)Ce=S.getViewport(yt);else{const Bt=v.getViewSubImage(g,yt);Ce=Bt.viewport,ht===0&&(e.setRenderTargetTextures(A,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(A))}let Ze=G[ht];Ze===void 0&&(Ze=new Ni,Ze.layers.enable(ht),Ze.viewport=new dn,G[ht]=Ze),Ze.matrix.fromArray(yt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(yt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ht===0&&(K.matrix.copy(Ze.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Pe===!0&&K.cameras.push(Ze)}const ot=o.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){v=r.getBinding();const ht=v.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&b.init(ht,o.renderState)}if(ot&&ot.includes("camera-access")&&D){e.state.unbindTexture(),v=r.getBinding();for(let ht=0;ht<ye.length;ht++){const yt=ye[ht].camera;if(yt){let Ce=x[yt];Ce||(Ce=new $1,x[yt]=Ce);const Ze=v.getCameraImage(yt);Ce.sourceTexture=Ze}}}}for(let ye=0;ye<U.length;ye++){const Pe=L[ye],ot=U[ye];Pe!==null&&ot!==void 0&&ot.update(Pe,ce,p||u)}ne&&ne(X,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const J=new nM;J.setAnimationLoop(be),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const mP=new hn,cM=new mt;cM.set(-1,0,0,0,1,0,0,0,1);function gP(a,e){function n(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function r(b,x){x.color.getRGB(b.fogColor.value,J1(a)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function o(b,x,I,F,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(b,x):x.isMeshLambertMaterial?(c(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(b,x),v(b,x)):x.isMeshPhongMaterial?(c(b,x),_(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(b,x),g(b,x),x.isMeshPhysicalMaterial&&S(b,x,A)):x.isMeshMatcapMaterial?(c(b,x),T(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),D(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(u(b,x),x.isLineDashedMaterial&&h(b,x)):x.isPointsMaterial?m(b,x,I,F):x.isSpriteMaterial?p(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,n(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===ii&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,n(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===ii&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,n(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,n(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const I=e.get(x),F=I.envMap,A=I.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(mP.makeRotationFromEuler(A)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(cM),b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,b.aoMapTransform))}function u(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform))}function h(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function m(b,x,I,F){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*I,b.scale.value=F*.5,x.map&&(b.map.value=x.map,n(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function p(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function _(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function v(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function g(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function S(b,x,I){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=I.texture,b.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,x){x.matcap&&(b.matcap.value=x.matcap)}function D(b,x){const I=e.get(x).light;b.referencePosition.value.setFromMatrixPosition(I.matrixWorld),b.nearDistance.value=I.shadow.camera.near,b.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function vP(a,e,n,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,U){const L=U.program;r.uniformBlockBinding(A,L)}function p(A,U){let L=o[A.id];L===void 0&&(b(A),L=_(A),o[A.id]=L,A.addEventListener("dispose",I));const B=U.program;r.updateUBOMapping(A,B);const w=e.render.frame;c[A.id]!==w&&(g(A),c[A.id]=w)}function _(A){const U=v();A.__bindingPointIndex=U;const L=a.createBuffer(),B=A.__size,w=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,L),L}function v(){for(let A=0;A<h;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const U=o[A.id],L=A.uniforms,B=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let w=0,z=L.length;w<z;w++){const k=L[w];if(Array.isArray(k))for(let G=0,K=k.length;G<K;G++)S(k[G],w,G,B);else S(k,w,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(A,U,L,B){if(D(A,U,L,B)===!0){const w=A.__offset,z=A.value;if(Array.isArray(z)){let k=0;for(let G=0;G<z.length;G++){const K=z[G],he=x(K);T(K,A.__data,k),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(k+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(z,A.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,w,A.__data)}}function T(A,U,L){typeof A=="number"||typeof A=="boolean"?U[0]=A:A.isMatrix3?(U[0]=A.elements[0],U[1]=A.elements[1],U[2]=A.elements[2],U[3]=0,U[4]=A.elements[3],U[5]=A.elements[4],U[6]=A.elements[5],U[7]=0,U[8]=A.elements[6],U[9]=A.elements[7],U[10]=A.elements[8],U[11]=0):ArrayBuffer.isView(A)?U.set(new A.constructor(A.buffer,A.byteOffset,U.length)):A.toArray(U,L)}function D(A,U,L,B){const w=A.value,z=U+"_"+L;if(B[z]===void 0)return typeof w=="number"||typeof w=="boolean"?B[z]=w:ArrayBuffer.isView(w)?B[z]=w.slice():B[z]=w.clone(),!0;{const k=B[z];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return B[z]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(k.equals(w)===!1)return k.copy(w),!0}}return!1}function b(A){const U=A.uniforms;let L=0;const B=16;for(let z=0,k=U.length;z<k;z++){const G=Array.isArray(U[z])?U[z]:[U[z]];for(let K=0,he=G.length;K<he;K++){const me=G[K],ee=Array.isArray(me.value)?me.value:[me.value];for(let N=0,H=ee.length;N<H;N++){const te=ee[N],_e=x(te),Te=L%B,O=Te%_e.boundary,Z=Te+O;L+=O,Z!==0&&B-Z<_e.storage&&(L+=B-Z),me.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=L,L+=_e.storage}}}const w=L%B;return w>0&&(L+=B-w),A.__size=L,A.__cache={},this}function x(A){const U={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(U.boundary=4,U.storage=4):A.isVector2?(U.boundary=8,U.storage=8):A.isVector3||A.isColor?(U.boundary=16,U.storage=12):A.isVector4?(U.boundary=16,U.storage=16):A.isMatrix3?(U.boundary=48,U.storage=48):A.isMatrix4?(U.boundary=64,U.storage=64):A.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(U.boundary=16,U.storage=A.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",A),U}function I(A){const U=A.target;U.removeEventListener("dispose",I);const L=u.indexOf(U.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function F(){for(const A in o)a.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:p,dispose:F}}const _P=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function xP(){return ea===null&&(ea=new sN(_P,16,16,gs,Va),ea.name="DFG_LUT",ea.minFilter=Xn,ea.magFilter=Xn,ea.wrapS=Pa,ea.wrapT=Pa,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class yP{constructor(e={}){const{canvas:n=FD(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Li}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const D=S,b=new Set([wg,Ag,Tg]),x=new Set([Li,la,jl,ql,Mg,Eg]),I=new Uint32Array(4),F=new Int32Array(4),A=new se;let U=null,L=null;const B=[],w=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,K=null,he=null,me=null,ee=null;this._outputColorSpace=Di;let N=0,H=0,te=null,_e=-1,Te=null;const O=new dn,Z=new dn;let ne=null;const be=new Rt(0);let J=0,X=n.width,ce=n.height,ye=1,Pe=null,ot=null;const Ke=new dn(0,0,X,ce),Ut=new dn(0,0,X,ce);let ht=!1;const yt=new Z1;let Ce=!1,Ze=!1;const Bt=new hn,Ht=new se,en=new dn,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function St(){return te===null?ye:1}let W=r;function bt(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sg}`),n.addEventListener("webglcontextlost",rn,!1),n.addEventListener("webglcontextrestored",Gt,!1),n.addEventListener("webglcontextcreationerror",ri,!1),W===null){const Y="webgl2";if(W=bt(Y,R),W===null)throw bt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Lt("WebGLRenderer: "+R.message),R}let ft,P,E,Q,ie,de,we,Ue,ge,ve,Le,Ge,ze,Ie,nt,it,dt,q,Ne,Se,Oe,He,Ae;function Qe(){ft=new x4(W),ft.init(),Oe=new uP(W,ft),P=new f4(W,ft,e,Oe),E=new lP(W,ft),P.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),he=W.createFramebuffer(),me=W.createFramebuffer(),ee=W.createFramebuffer(),Q=new b4(W),ie=new YO,de=new cP(W,ft,E,ie,P,Oe,Q),we=new _4(k),Ue=new AN(W),He=new c4(W,Ue),ge=new y4(W,Ue,Q,He),ve=new E4(W,ge,Ue,He,Q),q=new M4(W,P,de),nt=new d4(ie),Le=new qO(k,we,ft,P,He,nt),Ge=new gP(k,ie),ze=new ZO,Ie=new nP(ft),dt=new l4(k,we,E,ve,T,m),it=new oP(k,ve,P),Ae=new vP(W,Q,P,E),Ne=new u4(W,ft,Q),Se=new S4(W,ft,Q),Q.programs=Le.programs,k.capabilities=P,k.extensions=ft,k.properties=ie,k.renderLists=ze,k.shadowMap=it,k.state=E,k.info=Q}Qe(),D!==Li&&(z=new A4(D,n.width,n.height,h,o,c));const We=new pP(k,W);this.xr=We,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=ft.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ft.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(X,ce,!1))},this.getSize=function(R){return R.set(X,ce)},this.setSize=function(R,Y,ue=!0){if(We.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,ce=Y,n.width=Math.floor(R*ye),n.height=Math.floor(Y*ye),ue===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(X*ye,ce*ye).floor()},this.setDrawingBufferSize=function(R,Y,ue){X=R,ce=Y,ye=ue,n.width=Math.floor(R*ue),n.height=Math.floor(Y*ue),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(D===Li){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Ke)},this.setViewport=function(R,Y,ue,oe){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,Y,ue,oe),E.viewport(O.copy(Ke).multiplyScalar(ye).round())},this.getScissor=function(R){return R.copy(Ut)},this.setScissor=function(R,Y,ue,oe){R.isVector4?Ut.set(R.x,R.y,R.z,R.w):Ut.set(R,Y,ue,oe),E.scissor(Z.copy(Ut).multiplyScalar(ye).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){E.setScissorTest(ht=R)},this.setOpaqueSort=function(R){Pe=R},this.setTransparentSort=function(R){ot=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ue=!0){let oe=0;if(R){let le=!1;if(te!==null){const Be=te.texture.format;le=b.has(Be)}if(le){const Be=te.texture.type,Xe=x.has(Be),Fe=dt.getClearColor(),qe=dt.getClearAlpha(),je=Fe.r,at=Fe.g,gt=Fe.b;Xe?(I[0]=je,I[1]=at,I[2]=gt,I[3]=qe,W.clearBufferuiv(W.COLOR,0,I)):(F[0]=je,F[1]=at,F[2]=gt,F[3]=qe,W.clearBufferiv(W.COLOR,0,F))}else oe|=W.COLOR_BUFFER_BIT}Y&&(oe|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(oe|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&W.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),K=R},this.dispose=function(){n.removeEventListener("webglcontextlost",rn,!1),n.removeEventListener("webglcontextrestored",Gt,!1),n.removeEventListener("webglcontextcreationerror",ri,!1),dt.dispose(),ze.dispose(),Ie.dispose(),ie.dispose(),we.dispose(),ve.dispose(),He.dispose(),Ae.dispose(),Le.dispose(),We.dispose(),We.removeEventListener("sessionstart",gn),We.removeEventListener("sessionend",Ln),Kn.stop()};function rn(R){R.preventDefault(),zy("WebGLRenderer: Context Lost."),G=!0}function Gt(){zy("WebGLRenderer: Context Restored."),G=!1;const R=Q.autoReset,Y=it.enabled,ue=it.autoUpdate,oe=it.needsUpdate,le=it.type;Qe(),Q.autoReset=R,it.enabled=Y,it.autoUpdate=ue,it.needsUpdate=oe,it.type=le}function ri(R){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function si(R){const Y=R.target;Y.removeEventListener("dispose",si),Lo(Y)}function Lo(R){Uo(R),ie.remove(R)}function Uo(R){const Y=ie.get(R).programs;Y!==void 0&&(Y.forEach(function(ue){Le.releaseProgram(ue)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ue,oe,le,Be){Y===null&&(Y=cn);const Xe=le.isMesh&&le.matrixWorld.determinantAffine()<0,Fe=ja(R,Y,ue,oe,le);E.setMaterial(oe,Xe);let qe=ue.index,je=1;if(oe.wireframe===!0){if(qe=ge.getWireframeAttribute(ue),qe===void 0)return;je=2}const at=ue.drawRange,gt=ue.attributes.position;let tt=at.start*je,Ot=(at.start+at.count)*je;Be!==null&&(tt=Math.max(tt,Be.start*je),Ot=Math.min(Ot,(Be.start+Be.count)*je)),qe!==null?(tt=Math.max(tt,0),Ot=Math.min(Ot,qe.count)):gt!=null&&(tt=Math.max(tt,0),Ot=Math.min(Ot,gt.count));const sn=Ot-tt;if(sn<0||sn===1/0)return;He.setup(le,oe,Fe,ue,qe);let $t,kt=Ne;if(qe!==null&&($t=Ue.get(qe),kt=Se,kt.setIndex($t)),le.isMesh)oe.wireframe===!0?(E.setLineWidth(oe.wireframeLinewidth*St()),kt.setMode(W.LINES)):kt.setMode(W.TRIANGLES);else if(le.isLine){let Xt=oe.linewidth;Xt===void 0&&(Xt=1),E.setLineWidth(Xt*St()),le.isLineSegments?kt.setMode(W.LINES):le.isLineLoop?kt.setMode(W.LINE_LOOP):kt.setMode(W.LINE_STRIP)}else le.isPoints?kt.setMode(W.POINTS):le.isSprite&&kt.setMode(W.TRIANGLES);if(le.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))kt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Xt=le._multiDrawStarts,ke=le._multiDrawCounts,Vn=le._multiDrawCount,Mt=qe?Ue.get(qe).bytesPerElement:1,En=ie.get(oe).currentProgram.getUniforms();for(let oi=0;oi<Vn;oi++)En.setValue(W,"_gl_DrawID",oi),kt.render(Xt[oi]/Mt,ke[oi])}else if(le.isInstancedMesh)kt.renderInstances(tt,sn,le.count);else if(ue.isInstancedBufferGeometry){const Xt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ke=Math.min(ue.instanceCount,Xt);kt.renderInstances(tt,sn,ke)}else kt.render(tt,sn)};function Oo(R,Y,ue){R.transparent===!0&&R.side===Oa&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,Wa(R,Y,ue),R.side=Rr,R.needsUpdate=!0,Wa(R,Y,ue),R.side=Oa):Wa(R,Y,ue)}this.compile=function(R,Y,ue=null){ue===null&&(ue=R),L=Ie.get(ue),L.init(Y),w.push(L),ue.traverseVisible(function(le){le.isLight&&le.layers.test(Y.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),R!==ue&&R.traverseVisible(function(le){le.isLight&&le.layers.test(Y.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),L.setupLights();const oe=new Set;return R.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Be=le.material;if(Be)if(Array.isArray(Be))for(let Xe=0;Xe<Be.length;Xe++){const Fe=Be[Xe];Oo(Fe,ue,le),oe.add(Fe)}else Oo(Be,ue,le),oe.add(Be)}),L=w.pop(),oe},this.compileAsync=function(R,Y,ue=null){const oe=this.compile(R,Y,ue);return new Promise(le=>{function Be(){if(oe.forEach(function(Xe){ie.get(Xe).currentProgram.isReady()&&oe.delete(Xe)}),oe.size===0){le(R);return}setTimeout(Be,10)}ft.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let xs=null;function qi(R){xs&&xs(R)}function gn(){Kn.stop()}function Ln(){Kn.start()}const Kn=new nM;Kn.setAnimationLoop(qi),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(R){xs=R,We.setAnimationLoop(R),R===null?Kn.stop():Kn.start()},We.addEventListener("sessionstart",gn),We.addEventListener("sessionend",Ln),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(R,Y);const ue=We.enabled===!0&&We.isPresenting===!0,oe=z!==null&&(te===null||ue)&&z.begin(k,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Y),Y=We.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,Y,te),L=Ie.get(R,w.length),L.init(Y),L.state.textureUnits=de.getTextureUnits(),w.push(L),Bt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),yt.setFromProjectionMatrix(Bt,ra,Y.reversedDepth),Ze=this.localClippingEnabled,Ce=nt.init(this.clippingPlanes,Ze),U=ze.get(R,B.length),U.init(),B.push(U),We.enabled===!0&&We.isPresenting===!0){const Xe=k.xr.getDepthSensingMesh();Xe!==null&&Cr(Xe,Y,-1/0,k.sortObjects)}Cr(R,Y,0,k.sortObjects),U.finish(),k.sortObjects===!0&&U.sort(Pe,ot,Y.reversedDepth),Je=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Je&&dt.addToRenderList(U,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&nt.beginShadows();const le=L.state.shadowsArray;if(it.render(le,R,Y),Ce===!0&&nt.endShadows(),(oe&&z.hasRenderPass())===!1){const Xe=U.opaque,Fe=U.transmissive;if(L.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Fe.length>0)for(let je=0,at=qe.length;je<at;je++){const gt=qe[je];ic(Xe,Fe,R,gt)}Je&&dt.render(R);for(let je=0,at=qe.length;je<at;je++){const gt=qe[je];nc(U,R,gt,gt.viewport)}}else Fe.length>0&&ic(Xe,Fe,R,Y),Je&&dt.render(R),nc(U,R,Y)}te!==null&&H===0&&(de.updateMultisampleRenderTarget(te),de.updateRenderTargetMipmap(te)),oe&&z.end(k),R.isScene===!0&&R.onAfterRender(k,R,Y),He.resetDefaultState(),_e=-1,Te=null,w.pop(),w.length>0?(L=w[w.length-1],de.setTextureUnits(L.state.textureUnits),Ce===!0&&nt.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?U=B[B.length-1]:U=null,K!==null&&K.renderEnd()};function Cr(R,Y,ue,oe){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||yt.intersectsSprite(R)){oe&&en.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Bt);const Xe=ve.update(R),Fe=R.material;Fe.visible&&U.push(R,Xe,Fe,ue,en.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||yt.intersectsObject(R))){const Xe=ve.update(R),Fe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),en.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),en.copy(Xe.boundingSphere.center)),en.applyMatrix4(R.matrixWorld).applyMatrix4(Bt)),Array.isArray(Fe)){const qe=Xe.groups;for(let je=0,at=qe.length;je<at;je++){const gt=qe[je],tt=Fe[gt.materialIndex];tt&&tt.visible&&U.push(R,Xe,tt,ue,en.z,gt)}}else Fe.visible&&U.push(R,Xe,Fe,ue,en.z,null)}}const Be=R.children;for(let Xe=0,Fe=Be.length;Xe<Fe;Xe++)Cr(Be[Xe],Y,ue,oe)}function nc(R,Y,ue,oe){const{opaque:le,transmissive:Be,transparent:Xe}=R;L.setupLightsView(ue),Ce===!0&&nt.setGlobalState(k.clippingPlanes,ue),oe&&E.viewport(O.copy(oe)),le.length>0&&Dr(le,Y,ue),Be.length>0&&Dr(Be,Y,ue),Xe.length>0&&Dr(Xe,Y,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ic(R,Y,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const tt=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new oa(1,1,{generateMipmaps:!0,type:tt?Va:Li,minFilter:ls,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Be=L.state.transmissionRenderTarget[oe.id],Xe=oe.viewport||O;Be.setSize(Xe.z*k.transmissionResolutionScale,Xe.w*k.transmissionResolutionScale);const Fe=k.getRenderTarget(),qe=k.getActiveCubeFace(),je=k.getActiveMipmapLevel();k.setRenderTarget(Be),k.getClearColor(be),J=k.getClearAlpha(),J<1&&k.setClearColor(16777215,.5),k.clear(),Je&&dt.render(ue);const at=k.toneMapping;k.toneMapping=sa;const gt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),Ce===!0&&nt.setGlobalState(k.clippingPlanes,oe),Dr(R,ue,oe),de.updateMultisampleRenderTarget(Be),de.updateRenderTargetMipmap(Be),ft.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ot=0,sn=Y.length;Ot<sn;Ot++){const $t=Y[Ot],{object:kt,geometry:Xt,material:ke,group:Vn}=$t;if(ke.side===Oa&&kt.layers.test(oe.layers)){const Mt=ke.side;ke.side=ii,ke.needsUpdate=!0,Xa(kt,ue,oe,Xt,ke,Vn),ke.side=Mt,ke.needsUpdate=!0,tt=!0}}tt===!0&&(de.updateMultisampleRenderTarget(Be),de.updateRenderTargetMipmap(Be))}k.setRenderTarget(Fe,qe,je),k.setClearColor(be,J),gt!==void 0&&(oe.viewport=gt),k.toneMapping=at}function Dr(R,Y,ue){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let le=0,Be=R.length;le<Be;le++){const Xe=R[le],{object:Fe,geometry:qe,group:je}=Xe;let at=Xe.material;at.allowOverride===!0&&oe!==null&&(at=oe),Fe.layers.test(ue.layers)&&Xa(Fe,Y,ue,qe,at,je)}}function Xa(R,Y,ue,oe,le,Be){R.onBeforeRender(k,Y,ue,oe,le,Be),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),le.onBeforeRender(k,Y,ue,oe,R,Be),le.transparent===!0&&le.side===Oa&&le.forceSinglePass===!1?(le.side=ii,le.needsUpdate=!0,k.renderBufferDirect(ue,Y,oe,le,R,Be),le.side=Rr,le.needsUpdate=!0,k.renderBufferDirect(ue,Y,oe,le,R,Be),le.side=Oa):k.renderBufferDirect(ue,Y,oe,le,R,Be),R.onAfterRender(k,Y,ue,oe,le,Be)}function Wa(R,Y,ue){Y.isScene!==!0&&(Y=cn);const oe=ie.get(R),le=L.state.lights,Be=L.state.shadowsArray,Xe=le.state.version,Fe=Le.getParameters(R,le.state,Be,Y,ue,L.state.lightProbeGridArray),qe=Le.getProgramCacheKey(Fe);let je=oe.programs;oe.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,oe.fog=Y.fog;const at=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;oe.envMap=we.get(R.envMap||oe.environment,at),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",si),je=new Map,oe.programs=je);let gt=je.get(qe);if(gt!==void 0){if(oe.currentProgram===gt&&oe.lightsStateVersion===Xe)return ua(R,Fe),gt}else Fe.uniforms=Le.getUniforms(R),K!==null&&R.isNodeMaterial&&K.build(R,ue,Fe),R.onBeforeCompile(Fe,k),gt=Le.acquireProgram(Fe,qe),je.set(qe,gt),oe.uniforms=Fe.uniforms;const tt=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=nt.uniform),ua(R,Fe),oe.needsLights=ac(R),oe.lightsStateVersion=Xe,oe.needsLights&&(tt.ambientLightColor.value=le.state.ambient,tt.lightProbe.value=le.state.probe,tt.directionalLights.value=le.state.directional,tt.directionalLightShadows.value=le.state.directionalShadow,tt.spotLights.value=le.state.spot,tt.spotLightShadows.value=le.state.spotShadow,tt.rectAreaLights.value=le.state.rectArea,tt.ltc_1.value=le.state.rectAreaLTC1,tt.ltc_2.value=le.state.rectAreaLTC2,tt.pointLights.value=le.state.point,tt.pointLightShadows.value=le.state.pointShadow,tt.hemisphereLights.value=le.state.hemi,tt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,tt.spotLightMatrix.value=le.state.spotLightMatrix,tt.spotLightMap.value=le.state.spotLightMap,tt.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=L.state.lightProbeGridArray.length>0,oe.currentProgram=gt,oe.uniformsList=null,gt}function ca(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=of.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ua(R,Y){const ue=ie.get(R);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function Nr(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;A.setFromMatrixPosition(Y.matrixWorld);for(let ue=0,oe=R.length;ue<oe;ue++){const le=R[ue];if(le.texture!==null&&le.boundingBox.containsPoint(A))return le}return null}function ja(R,Y,ue,oe,le){Y.isScene!==!0&&(Y=cn),de.resetTextureUnits();const Be=Y.fog,Xe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Y.environment:null,Fe=te===null?k.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dt.workingColorSpace,qe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,je=we.get(oe.envMap||Xe,qe),at=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,gt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),tt=!!ue.morphAttributes.position,Ot=!!ue.morphAttributes.normal,sn=!!ue.morphAttributes.color;let $t=sa;oe.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&($t=k.toneMapping);const kt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Xt=kt!==void 0?kt.length:0,ke=ie.get(oe),Vn=L.state.lights;if(Ce===!0&&(Ze===!0||R!==Te)){const Vt=R===Te&&oe.id===_e;nt.setState(oe,R,Vt)}let Mt=!1;oe.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Vn.state.version||ke.outputColorSpace!==Fe||le.isBatchedMesh&&ke.batching===!1||!le.isBatchedMesh&&ke.batching===!0||le.isBatchedMesh&&ke.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&ke.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&ke.instancing===!1||!le.isInstancedMesh&&ke.instancing===!0||le.isSkinnedMesh&&ke.skinning===!1||!le.isSkinnedMesh&&ke.skinning===!0||le.isInstancedMesh&&ke.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&ke.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&ke.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&ke.instancingMorph===!1&&le.morphTexture!==null||ke.envMap!==je||oe.fog===!0&&ke.fog!==Be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==nt.numPlanes||ke.numIntersection!==nt.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==gt||ke.morphTargets!==tt||ke.morphNormals!==Ot||ke.morphColors!==sn||ke.toneMapping!==$t||ke.morphTargetsCount!==Xt||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,ke.__version=oe.version);let En=ke.currentProgram;Mt===!0&&(En=Wa(oe,Y,le),K&&oe.isNodeMaterial&&K.onUpdateProgram(oe,En,ke));let oi=!1,Ui=!1,li=!1;const Wt=En.getUniforms(),on=ke.uniforms;if(E.useProgram(En.program)&&(oi=!0,Ui=!0,li=!0),oe.id!==_e&&(_e=oe.id,Ui=!0),ke.needsLights){const Vt=Nr(L.state.lightProbeGridArray,le);ke.lightProbeGrid!==Vt&&(ke.lightProbeGrid=Vt,Ui=!0)}if(oi||Te!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Wt.setValue(W,"projectionMatrix",R.projectionMatrix),Wt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Yi=Wt.map.cameraPosition;Yi!==void 0&&Yi.setValue(W,Ht.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&Wt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Wt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),Te!==R&&(Te=R,Ui=!0,li=!0)}if(ke.needsLights&&(Vn.state.directionalShadowMap.length>0&&Wt.setValue(W,"directionalShadowMap",Vn.state.directionalShadowMap,de),Vn.state.spotShadowMap.length>0&&Wt.setValue(W,"spotShadowMap",Vn.state.spotShadowMap,de),Vn.state.pointShadowMap.length>0&&Wt.setValue(W,"pointShadowMap",Vn.state.pointShadowMap,de)),le.isSkinnedMesh){Wt.setOptional(W,le,"bindMatrix"),Wt.setOptional(W,le,"bindMatrixInverse");const Vt=le.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Wt.setValue(W,"boneTexture",Vt.boneTexture,de))}le.isBatchedMesh&&(Wt.setOptional(W,le,"batchingTexture"),Wt.setValue(W,"batchingTexture",le._matricesTexture,de),Wt.setOptional(W,le,"batchingIdTexture"),Wt.setValue(W,"batchingIdTexture",le._indirectTexture,de),Wt.setOptional(W,le,"batchingColorTexture"),le._colorsTexture!==null&&Wt.setValue(W,"batchingColorTexture",le._colorsTexture,de));const Oi=ue.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&q.update(le,ue,En),(Ui||ke.receiveShadow!==le.receiveShadow)&&(ke.receiveShadow=le.receiveShadow,Wt.setValue(W,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Y.environment!==null&&(on.envMapIntensity.value=Y.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=xP()),Ui){if(Wt.setValue(W,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&vn(on,li),Be&&oe.fog===!0&&Ge.refreshFogUniforms(on,Be),Ge.refreshMaterialUniforms(on,oe,ye,ce,L.state.transmissionRenderTarget[R.id]),ke.needsLights&&ke.lightProbeGrid){const Vt=ke.lightProbeGrid;on.probesSH.value=Vt.texture,on.probesMin.value.copy(Vt.boundingBox.min),on.probesMax.value.copy(Vt.boundingBox.max),on.probesResolution.value.copy(Vt.resolution)}of.upload(W,ca(ke),on,de)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(of.upload(W,ca(ke),on,de),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Wt.setValue(W,"center",le.center),Wt.setValue(W,"modelViewMatrix",le.modelViewMatrix),Wt.setValue(W,"normalMatrix",le.normalMatrix),Wt.setValue(W,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Vt=oe.uniformsGroups;for(let Yi=0,qa=Vt.length;Yi<qa;Yi++){const Lr=Vt[Yi];Ae.update(Lr,En),Ae.bind(Lr,En)}}return En}function vn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ac(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,Y,ue){const oe=ie.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ie.get(R.texture).__webglTexture=Y,ie.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ue=ie.get(R);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ue=0){te=R,N=Y,H=ue;let oe=null,le=!1,Be=!1;if(R){const Fe=ie.get(R);if(Fe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Fe.__webglFramebuffer),O.copy(R.viewport),Z.copy(R.scissor),ne=R.scissorTest,E.viewport(O),E.scissor(Z),E.setScissorTest(ne),_e=-1;return}else if(Fe.__webglFramebuffer===void 0)de.setupRenderTarget(R);else if(Fe.__hasExternalTextures)de.rebindTextures(R,ie.get(R.texture).__webglTexture,ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const at=R.depthTexture;if(Fe.__boundDepthTexture!==at){if(at!==null&&ie.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Be=!0);const je=ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[Y])?oe=je[Y][ue]:oe=je[Y],le=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?oe=ie.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?oe=je[ue]:oe=je,O.copy(R.viewport),Z.copy(R.scissor),ne=R.scissorTest}else O.copy(Ke).multiplyScalar(ye).floor(),Z.copy(Ut).multiplyScalar(ye).floor(),ne=ht;if(ue!==0&&(oe=he),E.bindFramebuffer(W.FRAMEBUFFER,oe)&&E.drawBuffers(R,oe),E.viewport(O),E.scissor(Z),E.setScissorTest(ne),le){const Fe=ie.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ue)}else if(Be){const Fe=Y;for(let qe=0;qe<R.textures.length;qe++){const je=ie.get(R.textures[qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qe,je.__webglTexture,ue,Fe)}}else if(R!==null&&ue!==0){const Fe=ie.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Fe.__webglTexture,ue)}_e=-1},this.readRenderTargetPixels=function(R,Y,ue,oe,le,Be,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){E.bindFramebuffer(W.FRAMEBUFFER,qe);try{const je=R.textures[Fe],at=je.format,gt=je.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe),!P.textureFormatReadable(at)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(gt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-oe&&ue>=0&&ue<=R.height-le&&W.readPixels(Y,ue,oe,le,Oe.convert(at),Oe.convert(gt),Be)}finally{const je=te!==null?ie.get(te).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ue,oe,le,Be,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(Y>=0&&Y<=R.width-oe&&ue>=0&&ue<=R.height-le){E.bindFramebuffer(W.FRAMEBUFFER,qe);const je=R.textures[Fe],at=je.format,gt=je.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe),!P.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,tt),W.bufferData(W.PIXEL_PACK_BUFFER,Be.byteLength,W.STREAM_READ),W.readPixels(Y,ue,oe,le,Oe.convert(at),Oe.convert(gt),0);const Ot=te!==null?ie.get(te).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Ot);const sn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await zD(W,sn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,tt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Be),W.deleteBuffer(tt),W.deleteSync(sn),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ue=0){const oe=Math.pow(2,-ue),le=Math.floor(R.image.width*oe),Be=Math.floor(R.image.height*oe),Xe=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;de.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,ue,0,0,Xe,Fe,le,Be),E.unbindTexture()},this.copyTextureToTexture=function(R,Y,ue=null,oe=null,le=0,Be=0){let Xe,Fe,qe,je,at,gt,tt,Ot,sn;const $t=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(ue!==null)Xe=ue.max.x-ue.min.x,Fe=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,je=ue.min.x,at=ue.min.y,gt=ue.isBox3?ue.min.z:0;else{const on=Math.pow(2,-le);Xe=Math.floor($t.width*on),Fe=Math.floor($t.height*on),R.isDataArrayTexture?qe=$t.depth:R.isData3DTexture?qe=Math.floor($t.depth*on):qe=1,je=0,at=0,gt=0}oe!==null?(tt=oe.x,Ot=oe.y,sn=oe.z):(tt=0,Ot=0,sn=0);const kt=Oe.convert(Y.format),Xt=Oe.convert(Y.type);let ke;Y.isData3DTexture?(de.setTexture3D(Y,0),ke=W.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(de.setTexture2DArray(Y,0),ke=W.TEXTURE_2D_ARRAY):(de.setTexture2D(Y,0),ke=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment);const Vn=E.getParameter(W.UNPACK_ROW_LENGTH),Mt=E.getParameter(W.UNPACK_IMAGE_HEIGHT),En=E.getParameter(W.UNPACK_SKIP_PIXELS),oi=E.getParameter(W.UNPACK_SKIP_ROWS),Ui=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,je),E.pixelStorei(W.UNPACK_SKIP_ROWS,at),E.pixelStorei(W.UNPACK_SKIP_IMAGES,gt);const li=R.isDataArrayTexture||R.isData3DTexture,Wt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const on=ie.get(R),Oi=ie.get(Y),Vt=ie.get(on.__renderTarget),Yi=ie.get(Oi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Vt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let qa=0;qa<qe;qa++)li&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(R).__webglTexture,le,gt+qa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(Y).__webglTexture,Be,sn+qa)),W.blitFramebuffer(je,at,Xe,Fe,tt,Ot,Xe,Fe,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(le!==0||R.isRenderTargetTexture||ie.has(R)){const on=ie.get(R),Oi=ie.get(Y);E.bindFramebuffer(W.READ_FRAMEBUFFER,me),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,ee);for(let Vt=0;Vt<qe;Vt++)li?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,on.__webglTexture,le,gt+Vt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,on.__webglTexture,le),Wt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Oi.__webglTexture,Be,sn+Vt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Oi.__webglTexture,Be),le!==0?W.blitFramebuffer(je,at,Xe,Fe,tt,Ot,Xe,Fe,W.COLOR_BUFFER_BIT,W.NEAREST):Wt?W.copyTexSubImage3D(ke,Be,tt,Ot,sn+Vt,je,at,Xe,Fe):W.copyTexSubImage2D(ke,Be,tt,Ot,je,at,Xe,Fe);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Wt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(ke,Be,tt,Ot,sn,Xe,Fe,qe,kt,Xt,$t.data):Y.isCompressedArrayTexture?W.compressedTexSubImage3D(ke,Be,tt,Ot,sn,Xe,Fe,qe,kt,$t.data):W.texSubImage3D(ke,Be,tt,Ot,sn,Xe,Fe,qe,kt,Xt,$t):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Be,tt,Ot,Xe,Fe,kt,Xt,$t.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Be,tt,Ot,$t.width,$t.height,kt,$t.data):W.texSubImage2D(W.TEXTURE_2D,Be,tt,Ot,Xe,Fe,kt,Xt,$t);E.pixelStorei(W.UNPACK_ROW_LENGTH,Vn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(W.UNPACK_SKIP_PIXELS,En),E.pixelStorei(W.UNPACK_SKIP_ROWS,oi),E.pixelStorei(W.UNPACK_SKIP_IMAGES,Ui),Be===0&&Y.generateMipmaps&&W.generateMipmap(ke),E.unbindTexture()},this.initRenderTarget=function(R){ie.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){N=0,H=0,te=null,E.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}const Zu=91;function SP(a){return Number.isFinite(a)?Math.min(Math.max(a,1),2):1}function uM(a){const e=SP(a.devicePixelRatio);if(a.reducedMotion)return{animated:!1,divineLightCount:Zu,maxThreadSegments:600,name:"static",pixelRatio:e,starCount:1200};const n=a.width>a.height&&a.height<=500;return a.width<360||n?{animated:!0,divineLightCount:Zu,maxThreadSegments:900,name:"compact",pixelRatio:e,starCount:1800}:a.width<768?{animated:!0,divineLightCount:Zu,maxThreadSegments:1600,name:"phone",pixelRatio:e,starCount:2600}:{animated:!0,divineLightCount:Zu,maxThreadSegments:3400,name:"desktop",pixelRatio:e,starCount:4500}}function bP(a,e){return e<=0||!a.animated?a:e===1?{...a,maxThreadSegments:Math.min(a.maxThreadSegments,900),pixelRatio:Math.min(a.pixelRatio,1.5),starCount:Math.min(a.starCount,1800)}:{...a,maxThreadSegments:Math.min(a.maxThreadSegments,600),pixelRatio:1,starCount:Math.min(a.starCount,1200)}}const MP=new Rt(12764882),EP=new Rt(13159638),is=91,TP=42,AP=new Rt(15253624),wP=`
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
`,RP=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,CP=`
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
`,DP=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,NP=`
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
`,LP=`
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
`;function UP(a){const e=new Float32Array(a*3),n=new Float32Array(a),r=new Float32Array(a);for(let o=0;o<a;o++){const c=24+Math.random()*36,u=Math.random()*Math.PI*2,h=(Math.random()-.5)*1.1;e[o*3]=c*Math.cos(u)*Math.cos(h),e[o*3+1]=c*Math.sin(h)*2.2,e[o*3+2]=c*Math.sin(u)*Math.cos(h)-18,n[o]=Math.random(),r[o]=.7+Math.random()*1.6}return{positions:e,phases:n,sizes:r}}function OP(){let a=1597463007;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}function PP(a,e,n){const r=(a.x-e.x)*n,o=a.y-e.y;return r*r+o*o}function IP(a){const e=OP(),n=[],r=48,o=.025;for(let c=0;c<is;c++){let u=null,h=-1;for(let m=0;m<r;m++){const p={x:o+e()*(1-o*2),y:o+e()*(1-o*2)};let _=Number.POSITIVE_INFINITY;for(const v of n){const g=PP(p,v,a);_=Math.min(_,g)}_>h&&(u=p,h=_)}u&&n.push(u)}return n}function fM(a,e){const n=IP(e);for(let r=0;r<n.length;r++){const o=n[r];a[r*3]=-.96+o.x*1.92,a[r*3+1]=-.9+o.y*1.8,a[r*3+2]=0}}function FP(a){const e=new Float32Array(is),n=new Float32Array(is*3),r=new Float32Array(is),o=new Float32Array(is);for(let c=0;c<is;c++){const u=c<TP;e[c]=u?1:0,r[c]=c/is,o[c]=u?32+c*29%7:12+c*17%4}return fM(n,a),{flares:e,positions:n,phases:r,sizes:o}}function zP(a,e,n={}){const r=a.clientWidth||window.innerWidth,o=a.clientHeight||window.innerHeight,c=n.profile??uM({devicePixelRatio:window.devicePixelRatio,height:o,reducedMotion:!1,width:r});let u=c;const{paused:h=!1,transparent:m=!1,threadAlpha:p}=n;if(!(typeof window.WebGLRenderingContext<"u"||typeof window.WebGL2RenderingContext<"u"))return()=>{};let v;try{v=new yP({alpha:!0,antialias:!1,canvas:a,powerPreference:"high-performance"})}catch{return()=>{}}v.setPixelRatio(c.pixelRatio);const g=new eN;g.background=m?null:new Rt(328968);const S=new Ni(62,1,.1,200);S.position.set(0,0,6),S.lookAt(0,0,-10);const{positions:T,phases:D,sizes:b}=UP(c.starCount),x=new ai;x.setAttribute("position",new Mn(T,3)),x.setAttribute("phase",new Mn(D,1)),x.setAttribute("size",new Mn(b,1));const I=new _i({vertexShader:wP,fragmentShader:RP,uniforms:{uTime:{value:0},uPixelRatio:{value:v.getPixelRatio()},uColor:{value:MP}},transparent:!0,depthWrite:!1}),F=new aS(x,I);g.add(F);const A=FP(r/o),U=A.positions,L=new ai;L.setAttribute("position",new Mn(U,3)),L.setAttribute("flare",new Mn(A.flares,1)),L.setAttribute("phase",new Mn(A.phases,1)),L.setAttribute("size",new Mn(A.sizes,1));const B=new _i({vertexShader:NP,fragmentShader:LP,uniforms:{uTime:{value:0},uPixelRatio:{value:v.getPixelRatio()},uColor:{value:AP}},transparent:!0,depthTest:!1,depthWrite:!1}),w=new aS(L,B);g.add(w);const z=c.maxThreadSegments,k=new ai,G=new Float32Array(z*6),K=new Float32Array(z*2),he=new Float32Array(z*2);k.setAttribute("position",new Mn(G,3)),k.setAttribute("lineUV",new Mn(K,1)),k.setAttribute("segPhase",new Mn(he,1)),k.setDrawRange(0,0);const me=new _i({vertexShader:CP,fragmentShader:DP,uniforms:{uTime:{value:0},uColor:{value:EP},uAlpha:{value:p??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),ee=new dN(k,me);g.add(ee);const N=e==="alive"?4.8:5.2,H=new Map;function te(Je,St,W){const bt=Math.floor(Je/N),ft=Math.floor(St/N),P=Math.floor(W/N);return`${bt}:${ft}:${P}`}for(let Je=0;Je<c.starCount;Je++){const St=T[Je*3],W=T[Je*3+1],bt=T[Je*3+2],ft=te(St,W,bt),P=H.get(ft)??[];P.push(Je),H.set(ft,P)}function _e(Je){const St=T[Je*3],W=T[Je*3+1],bt=T[Je*3+2],ft=Math.floor(St/N),P=Math.floor(W/N),E=Math.floor(bt/N),Q=[];for(let ie=-1;ie<=1;ie++)for(let de=-1;de<=1;de++)for(let we=-1;we<=1;we++){const Ue=`${ft+ie}:${P+de}:${E+we}`;Q.push(...H.get(Ue)??[])}return Q}const Te=()=>{const Je=new Set,St=[],W=[],bt=[];for(let ft=0;ft<c.starCount&&St.length<z*6;ft++){const P=T[ft*3],E=T[ft*3+1],Q=T[ft*3+2],ie=[];for(const de of _e(ft)){if(de===ft)continue;const we=T[de*3]-P,Ue=T[de*3+1]-E,ge=T[de*3+2]-Q,ve=we*we+Ue*Ue+ge*ge;ve<N*N&&ie.push([de,ve])}ie.sort((de,we)=>de[1]-we[1]);for(const[de]of ie.slice(0,5)){if(St.length>=z*6)break;const we=ft<de?`${ft}-${de}`:`${de}-${ft}`;Je.has(we)||(Je.add(we),St.push(P,E,Q,T[de*3],T[de*3+1],T[de*3+2]),W.push(0,1),bt.push(Math.random(),Math.random()))}}G.set(St),K.set(W),he.set(bt),k.getAttribute("position").needsUpdate=!0,k.getAttribute("lineUV").needsUpdate=!0,k.getAttribute("segPhase").needsUpdate=!0,k.setDrawRange(0,St.length/3)},O=()=>{for(let Je=0;Je<k.drawRange.count;Je++)he[Je]=Math.random();k.getAttribute("segPhase").needsUpdate=!0};Te();const Z=k.drawRange.count,ne=new EN;let be=0,J=0,X=r/o;const ce=()=>{const Je=a.clientWidth||window.innerWidth,St=a.clientHeight||window.innerHeight,W=Je/St;v.setSize(Je,St,!1),S.aspect=W,S.updateProjectionMatrix(),Math.abs(W-X)/X>=.08&&(fM(U,W),L.getAttribute("position").needsUpdate=!0,X=W)},ye=()=>{window.cancelAnimationFrame(J),J=window.requestAnimationFrame(ce)};ce(),window.addEventListener("resize",ye);let Pe=0,ot=!1,Ke=0,Ut=0,ht=0;const yt=performance.now()+4e3,Ce=c.name!=="desktop",Ze=()=>{a.dataset.drawCalls=String(v.info.render.calls),a.dataset.pixelRatio=String(u.pixelRatio),a.dataset.renderProfile=c.name,a.dataset.starCount=String(u.starCount),a.dataset.threadBudget=String(u.maxThreadSegments)},Bt=()=>{Ke+=1,u=bP(c,Ke),v.setPixelRatio(u.pixelRatio),x.setDrawRange(0,u.starCount),k.setDrawRange(0,Math.min(Z,u.maxThreadSegments*2)),I.uniforms.uPixelRatio.value=u.pixelRatio,B.uniforms.uPixelRatio.value=u.pixelRatio,a.dataset.adaptiveLevel=String(Ke),ot=!1,ce(),Ze(),Ke>=2&&v.setAnimationLoop(null)},Ht=Je=>{if(!Je){Ut=0;return}Ut+=1,Ut>=3&&Ke<2&&(Ut=0,Bt())},en=()=>{const Je=ne.getElapsedTime();Pe=Je,I.uniforms.uTime.value=Je,me.uniforms.uTime.value=Je,B.uniforms.uTime.value=Je,e==="alive"&&c.animated&&(be+=1/30,be>3.2&&(be=0,O())),v.render(g,S),ot||(Ze(),ot=!0)},cn=Je=>{if(document.hidden||h||a.dataset.paused==="true"){ht=Je;return}if(Ce&&ht>0&&Je>=yt){const W=Je-ht;Ht(W>45&&Ke<2)}ht=Je,ne.getElapsedTime()-Pe>=1/30&&en()};return en(),c.animated&&!h&&v.setAnimationLoop(cn),()=>{v.setAnimationLoop(null),cancelAnimationFrame(J),window.removeEventListener("resize",ye),x.dispose(),k.dispose(),L.dispose(),I.dispose(),me.dispose(),B.dispose(),v.dispose()}}function OS(){return uM({devicePixelRatio:window.devicePixelRatio,height:window.innerHeight,reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches,width:window.innerWidth})}function BP({mode:a,paused:e=!1,transparent:n=!1,threadAlpha:r,className:o="spell-bg"}){const c=Re.useRef(null),[u,h]=Re.useState(OS);return Re.useEffect(()=>{const m=window.matchMedia("(prefers-reduced-motion: reduce)");let p=0;const _=()=>{window.cancelAnimationFrame(p),p=window.requestAnimationFrame(()=>{h(OS())})};return window.addEventListener("resize",_),m.addEventListener("change",_),()=>{window.cancelAnimationFrame(p),window.removeEventListener("resize",_),m.removeEventListener("change",_)}},[]),Re.useEffect(()=>{const m=c.current;m&&(m.dataset.paused=String(e))},[e]),Re.useEffect(()=>{const m=c.current;return m?zP(m,a,{paused:e,profile:u,threadAlpha:r,transparent:n}):void 0},[a,e,u,n,r]),M.jsx("canvas",{"aria-hidden":"true",className:o,ref:c})}const VP=[{x:.5,y:0},{x:.5,y:.18},{x:.14,y:.3},{x:.86,y:.3},{x:.5,y:.52},{x:.18,y:.78},{x:.82,y:.78},{x:.5,y:1}],HP=[{x:0,y:.5},{x:.18,y:.18},{x:.5,y:.08},{x:.82,y:.18},{x:1,y:.5},{x:.82,y:.82},{x:.5,y:.92},{x:.18,y:.82},{x:.5,y:.5}];function GP(a){let e=a>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function PS(a){return Math.min(Math.max(a,0),1)}function kP(a){return(a==="portrait"?VP:HP).map(n=>({...n}))}function Ll(a,e,n,r){a.push({from:e,phase:r(),to:n})}function XP({composition:a,seed:e}){const n=kP(a),r=n.map(h=>({...h})),o=[],c=GP(e),u=a==="portrait"?.09:.075;for(let h=0;h<n.length;h++){const m=n[h],p=r.length;for(let _=0;_<2;_++){const v=c()*Math.PI*2,g=u*(.45+c()*.55);r.push({x:PS(m.x+Math.cos(v)*g),y:PS(m.y+Math.sin(v)*g)})}Ll(o,h,p,c),Ll(o,h,p+1,c),Ll(o,p,p+1,c)}for(let h=0;h<n.length-1;h++)Ll(o,h,h+1,c);for(let h=0;h<n.length-2;h+=2)Ll(o,h,h+2,c);return{anchors:n,points:r,segments:o}}function IS(a){return XP({composition:a,seed:a==="portrait"?25:250})}function FS({composition:a,geometry:e}){return M.jsxs("g",{"data-spell-composition":a,children:[M.jsx("path",{className:"spellweave-event-thread",d:a==="portrait"?"M 500 1000 C 430 760 570 520 500 0":"M 0 500 C 260 430 740 570 1000 500",pathLength:"1"}),e.segments.map((n,r)=>{const o=e.points[n.from],c=e.points[n.to];return M.jsx("line",{pathLength:"1",x1:o.x*1e3,x2:c.x*1e3,y1:o.y*1e3,y2:c.y*1e3},`${n.from}-${n.to}-${r}`)}),e.anchors.map((n,r)=>M.jsxs("g",{className:"spellweave-knot",transform:`translate(${n.x*1e3} ${n.y*1e3})`,children:[M.jsx("circle",{r:"5"}),M.jsx("path",{d:"M -14 0 H 14 M 0 -14 V 14",pathLength:"1"})]},`${n.x}-${n.y}-${r}`))]})}function zS({depth:a}){const e=Re.useMemo(()=>IS("portrait"),[]),n=Re.useMemo(()=>IS("desktop"),[]);return M.jsxs("svg",{className:`spellweave-field spellweave-field-${a}`,"data-spell-depth":a,"data-testid":"spellweave-field",focusable:"false",preserveAspectRatio:"none",viewBox:"0 0 1000 1000",children:[M.jsx(FS,{composition:"portrait",geometry:e}),M.jsx(FS,{composition:"desktop",geometry:n})]})}function WP({paused:a,state:e,threadAlpha:n}){return M.jsxs("div",{"aria-hidden":"true",className:"spellweave-backdrop","data-spell-state":e,"data-testid":"spellweave-backdrop",children:[M.jsxs("div",{className:"spellweave-distant","data-spell-depth":"distant",children:[M.jsx(BP,{className:"lab-spell-background",mode:"alive",paused:a,threadAlpha:n}),M.jsx("div",{className:"lab-galactic-band"}),M.jsx("div",{className:"lab-star-flare flare-one"}),M.jsx("div",{className:"lab-star-flare flare-two"})]}),M.jsx(zS,{depth:"middle"}),M.jsx(zS,{depth:"foreground"})]})}function ng({className:a,compact:e=!1}){const n=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",a].filter(Boolean).join(" ");return M.jsx(Bn,{"aria-hidden":"true",className:n,icon:xw})}const jP=["Today","Yesterday","Others"],BS=[{description:"Today, yesterday, and older threads",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],qP=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function YP(a,e){if(e==="flat")return[{label:null,threads:a}];if(e==="date")return jP.map(r=>({label:r,threads:a.filter(o=>o.dateGroup===r)}));const n=new Map;for(const r of a){const o=r.volume==null?"Volume unknown":`Vol ${r.volume}`,c=n.get(o)??[];n.set(o,[...c,r])}return[...n.entries()].map(([r,o])=>({label:r,threads:o}))}function KP({activeThreadId:a,archivedOpen:e,collapsed:n,drawerOpen:r,onArchive:o,onClose:c,onCreate:u,onDelete:h,onOpen:m,onOpenSettings:p,onPin:_,onRename:v,onSelect:g,onSetArchivedOpen:S,readerStatus:T,threads:D}){const[b,x]=Re.useState(null),[I,F]=Re.useState(""),[A,U]=Re.useState(null),[L,B]=Re.useState("date"),[w,z]=Re.useState(!1),[k,G]=Re.useState(()=>new Set(["Yesterday","Others"])),[K,he]=Re.useState(()=>window.matchMedia("(max-width: 767px)").matches),me=Re.useRef(null);Re.useEffect(()=>{const J=window.matchMedia("(max-width: 767px)");function X(ce){he(ce.matches)}return he(J.matches),J.addEventListener("change",X),()=>J.removeEventListener("change",X)},[]),Re.useEffect(()=>{K&&r&&me.current?.focus()},[r,K]);const ee=Re.useMemo(()=>D.filter(J=>J.archived===e).sort((J,X)=>Number(X.pinned)-Number(J.pinned)),[e,D]),N=YP(ee,L),H=D.filter(J=>J.archived).length,te=K?r:!n,_e=K?r:!0;function Te(J){x(J.id),F(J.title)}function O(J){const X=I.trim();X&&v(J,X),x(null)}function Z(J){if(A===J){h(J),U(null);return}U(J),window.setTimeout(()=>{U(X=>X===J?null:X)},3e3)}function ne(J){G(X=>{const ce=new Set(X);return ce.has(J)?ce.delete(J):ce.add(J),ce})}function be(J){const X=J.id===a;return M.jsxs("li",{className:`lab-thread-row ${X?"active":""}`,"data-testid":`thread-${J.id}`,children:[M.jsxs("div",{className:"lab-thread-main",children:[b===J.id?M.jsx("span",{className:"lab-thread-copy",children:M.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>O(J.id),onChange:ce=>F(ce.target.value),onClick:ce=>ce.stopPropagation(),onKeyDown:ce=>{ce.key==="Enter"&&(ce.preventDefault(),O(J.id)),ce.key==="Escape"&&x(null)},value:I})}):M.jsx("button",{"aria-current":X?"page":void 0,className:"lab-thread-select",onClick:()=>g(J.id),type:"button",children:M.jsx("span",{className:"lab-thread-copy",children:M.jsx("strong",{children:J.title})})}),A===J.id&&M.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),M.jsxs("div",{className:"lab-thread-actions",children:[M.jsx("button",{"aria-label":`${J.pinned?"Unpin":"Pin"} ${J.title}`,onClick:()=>_(J.id),type:"button",children:M.jsx(sR,{})}),M.jsx("button",{"aria-label":`Rename ${J.title}`,onClick:()=>Te(J),type:"button",children:M.jsx(rR,{})}),M.jsx("button",{"aria-label":`${J.archived?"Restore":"Archive"} ${J.title}`,onClick:()=>o(J.id),type:"button",children:M.jsx(ly,{})}),M.jsx("button",{"aria-label":`Delete ${J.title}`,className:A===J.id?"confirming":"",onClick:()=>Z(J.id),type:"button",children:M.jsx(iR,{})})]})]},J.id)}return M.jsxs("aside",{"aria-hidden":!_e,"aria-label":K?"Threads":void 0,"aria-modal":K&&r?!0:void 0,className:"lab-rail",id:"spell-surface-rail",inert:!_e,role:K?"dialog":void 0,children:[M.jsxs("header",{className:"lab-brand",children:[M.jsx("span",{className:"lab-brand-mark",children:M.jsx(ng,{compact:!0})}),M.jsx("span",{children:M.jsx("strong",{children:"weaver"})}),M.jsx("button",{"aria-label":te?"Close threads":"Open threads",className:"lab-rail-close",onClick:te?c:m,ref:me,type:"button",children:te?M.jsx(nR,{}):M.jsx(t1,{})})]}),M.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:u,type:"button",children:[M.jsx($w,{}),M.jsx("span",{children:"New Weave"})]}),M.jsxs("div",{className:"lab-rail-scroll",children:[M.jsxs("section",{className:"lab-chat-section",children:[M.jsxs("header",{className:"lab-rail-section-head",children:[M.jsx("h2",{children:"Chats"}),M.jsxs("div",{className:"lab-grouping-picker",children:[M.jsxs("button",{"aria-expanded":w,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>z(J=>!J),type:"button",children:[BS.find(J=>J.value===L)?.label,M.jsx(Zp,{})]}),w&&M.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[M.jsx("p",{children:"Organize threads"}),BS.map(J=>M.jsxs("button",{"aria-checked":L===J.value,onClick:()=>{B(J.value),z(!1)},role:"menuitemradio",type:"button",children:[M.jsx("span",{"aria-hidden":"true",children:L===J.value?"✓":""}),M.jsx("strong",{children:J.label}),M.jsx("small",{children:J.description})]},J.value))]})]})]}),M.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[N.map(J=>{const X=J.label,ce=X?k.has(X):!1;return M.jsxs("section",{className:"lab-thread-group",children:[X&&M.jsxs("button",{"aria-expanded":!ce,className:"lab-thread-group-toggle",onClick:()=>ne(X),type:"button",children:[M.jsx("span",{children:X}),M.jsx("small",{children:J.threads.length}),M.jsx(Zp,{})]}),M.jsx("div",{"aria-hidden":ce,className:`lab-thread-group-body ${ce?"collapsed":""}`,children:M.jsx("div",{children:M.jsx("ul",{className:"lab-thread-flat-list",children:J.threads.map(be)})})})]},X??"all")}),ee.length===0&&M.jsxs("div",{className:"lab-thread-empty",children:[M.jsx("span",{"aria-hidden":"true"}),M.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),M.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[M.jsxs("header",{className:"lab-rail-section-head",children:[M.jsx("h2",{children:"Library"}),M.jsx("small",{children:"novels"})]}),M.jsx("div",{className:"lab-novel-list",children:qP.map(J=>M.jsxs("button",{"aria-current":J.active?"page":void 0,"aria-disabled":!J.active,className:J.active?"active":"upcoming",type:"button",children:[M.jsx(tR,{}),M.jsxs("span",{children:[M.jsx("strong",{children:J.label}),M.jsx("small",{children:J.active?"current shelf":"upcoming"})]})]},J.label))})]})]}),M.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>S(!e),type:"button",children:[M.jsx(ly,{}),M.jsx("span",{children:"Archived"}),M.jsx("em",{children:H})]}),M.jsxs("footer",{className:"lab-rail-footer",children:[M.jsxs("button",{"aria-label":"Model and key settings",className:"lab-key-status",onClick:p,type:"button",children:[M.jsx("span",{"aria-hidden":"true",className:"lab-key-status-dot"}),M.jsxs("span",{children:[M.jsx("strong",{children:"Model & key"}),M.jsx("small",{children:"open settings"})]})]}),M.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:p,type:"button",children:[M.jsx(n1,{}),M.jsxs("span",{children:[M.jsx("strong",{children:"Settings"}),M.jsxs("small",{children:[T," · runes · appearance"]})]})]})]})]})}const ZP=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],QP=Array.from({length:20},(a,e)=>e);function $P(a){return{"--index":a}}function JP({announcement:a,eventKey:e,mode:n}){return M.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${n}`,children:[n==="particles"&&M.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:QP.map(r=>M.jsx("span",{style:$P(r)},r))}),n==="threads"&&M.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[M.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),M.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),M.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),M.jsx("p",{className:"rune-announcement",children:a})]},`${n}-${e}`)}const eI=Array.from({length:7},(a,e)=>e),tI=Array.from({length:8},(a,e)=>e),nI=Array.from({length:11},(a,e)=>e),bf={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function Lp(a){return{"--index":a}}function iI({compact:a=!1,mode:e,state:n}){return M.jsxs("div",{"aria-label":`${bf[e]}, ${n}`,className:`lab-soul-sea soul-${e} soul-state-${n} ${a?"soul-compact":""}`,role:"img",children:[M.jsxs("div",{className:"lab-soul-sky",children:[M.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[M.jsx("span",{}),M.jsx("span",{}),M.jsx("span",{})]}),M.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:eI.map(r=>M.jsx("span",{className:"lab-soul-sun",style:Lp(r)},r))}),M.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:tI.map(r=>M.jsx("span",{className:"lab-memory-light",style:Lp(r)},r))})]}),M.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:nI.map(r=>M.jsx("span",{className:"lab-shadow",style:Lp(r)},r))}),M.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[M.jsx("span",{className:"water-plane water-plane-back"}),M.jsx("span",{className:"water-plane water-plane-middle"}),M.jsx("span",{className:"water-plane water-plane-front"}),M.jsx("span",{className:"water-flash"})]}),!a&&M.jsxs("p",{className:"lab-soul-caption",children:[M.jsx("span",{children:bf[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const Up=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12},{end:3160,number:13}],aI={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},rI=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"key and model",id:"model",label:"Model"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],sI=["still","living","mirror"],oI=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function lI({initial:a,onApiKeyChange:e,onClose:n,onSave:r}){const[o,c]=Re.useState(a),[u,h]=Re.useState(ff),[m,p]=Re.useState(em),[_,v]=Re.useState(a1),[g,S]=Re.useState("customize"),T=Re.useRef(null),D=Re.useRef(null);Re.useEffect(()=>{T.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function b(A){if(A.key!=="Tab"||!T.current)return;const U=T.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),L=U[0],B=U[U.length-1];A.shiftKey&&document.activeElement===L&&(A.preventDefault(),B?.focus()),!A.shiftKey&&document.activeElement===B&&(A.preventDefault(),L?.focus())}function x(A,U){c(L=>({...L,[A]:U}))}function I(){i1(u),fR(m),dR(_),e?.(ff()!==""&&!em()),r(o)}function F(A){const U=Up.find(w=>w.number===A);if(!U)return;const L=Up[A-2]?.end??0,B=Math.max(L+1,Math.min(o.chapter,U.end));c(w=>({...w,chapter:B,volume:A}))}return M.jsx("div",{className:"lab-settings-backdrop",onMouseDown:n,children:M.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:b,onMouseDown:A=>A.stopPropagation(),ref:T,role:"dialog",children:[M.jsxs("header",{className:"lab-settings-head",children:[M.jsxs("div",{children:[M.jsx("p",{children:"the sea within"}),M.jsx("h2",{children:"Soul Sea"})]}),M.jsx("button",{"aria-label":"Close settings",onClick:n,type:"button",children:"×"})]}),M.jsxs("div",{className:"lab-settings-layout",children:[M.jsxs("aside",{className:"lab-settings-nav",children:[M.jsx("p",{children:"Settings"}),M.jsx("nav",{"aria-label":"Settings sections",children:rI.map(A=>M.jsxs("button",{"aria-label":A.label,"aria-current":g===A.id?"page":void 0,className:g===A.id?"on":"",onClick:()=>S(A.id),type:"button",children:[M.jsx("strong",{children:A.label}),M.jsx("span",{children:A.hint})]},A.id))})]}),M.jsxs("div",{className:"lab-settings-main",children:[M.jsx(iI,{compact:!0,mode:o.soulMode,state:"idle"}),M.jsxs("div",{className:"lab-settings-content",children:[g==="reader"&&M.jsxs("section",{className:"lab-settings-section",children:[M.jsxs("div",{className:"lab-setting-title",children:[M.jsx("h3",{children:"Reader position"}),M.jsx("span",{children:"The Spell will not read beyond this point."})]}),M.jsxs("div",{className:"lab-reader-grid",children:[M.jsxs("label",{children:[M.jsx("span",{children:"Volume"}),M.jsx("select",{"aria-label":"Reader volume",onChange:A=>F(Number(A.target.value)),ref:D,value:o.volume,children:Up.map(A=>M.jsxs("option",{value:A.number,children:["Vol ",A.number," · to ch ",A.end]},A.number))})]}),M.jsxs("label",{children:[M.jsx("span",{children:"Chapter"}),M.jsx("input",{max:3160,min:1,onChange:A=>x("chapter",Number(A.target.value)),type:"number",value:o.chapter})]})]})]}),g==="spoilers"&&M.jsxs("section",{className:"lab-settings-section",children:[M.jsxs("div",{className:"lab-setting-title",children:[M.jsx("h3",{children:"Spoilers"}),M.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),M.jsxs("div",{className:"lab-choice-grid two",children:[M.jsxs("button",{"aria-pressed":o.spoilerMode==="protect",className:o.spoilerMode==="protect"?"on":"",onClick:()=>x("spoilerMode","protect"),type:"button",children:[M.jsx("strong",{children:"Protect the story"}),M.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),M.jsxs("button",{"aria-pressed":o.spoilerMode==="none",className:o.spoilerMode==="none"?"on":"",onClick:()=>x("spoilerMode","none"),type:"button",children:[M.jsx("strong",{children:"No spoiler limits"}),M.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),g==="reading"&&M.jsxs("section",{className:"lab-settings-section",children:[M.jsxs("div",{className:"lab-setting-title",children:[M.jsx("h3",{children:"Reading tier"}),M.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),M.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(A=>M.jsxs("button",{"aria-pressed":o.tier===A,className:o.tier===A?"on":"",onClick:()=>x("tier",A),type:"button",children:[M.jsx("strong",{children:A}),M.jsx("span",{children:aI[A]})]},A))})]}),g==="customize"&&M.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[M.jsxs("div",{className:"lab-setting-title",children:[M.jsx("h3",{children:"Customize the Spell"}),M.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),M.jsxs("div",{className:"lab-customize-block",children:[M.jsx("h4",{children:"Surface theme"}),M.jsx("div",{className:"lab-theme-grid",children:oI.map(A=>M.jsxs("button",{"aria-label":A.label,"aria-pressed":o.theme===A.value,className:o.theme===A.value?"on":"",onClick:()=>x("theme",A.value),type:"button",children:[M.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:A.swatches.map(U=>M.jsx("i",{style:{background:U}},U))}),M.jsx("strong",{children:A.label}),M.jsx("span",{children:A.description})]},A.value))})]}),M.jsxs("div",{className:"lab-customize-block",children:[M.jsx("h4",{children:"Rune appearance"}),M.jsx("div",{className:"lab-choice-grid three",children:ZP.map(A=>M.jsxs("button",{"aria-label":A.label,"aria-pressed":o.runeMode===A.mode,className:o.runeMode===A.mode?"on":"",onClick:()=>x("runeMode",A.mode),type:"button",children:[M.jsx("strong",{children:A.label}),M.jsx("span",{children:A.description})]},A.mode))})]}),M.jsxs("div",{className:"lab-customize-block",children:[M.jsx("h4",{children:"Soul Sea"}),M.jsx("div",{className:"lab-choice-grid three",children:sI.map(A=>M.jsxs("button",{"aria-label":bf[A],"aria-pressed":o.soulMode===A,className:o.soulMode===A?"on":"",onClick:()=>x("soulMode",A),type:"button",children:[M.jsx("strong",{children:bf[A]}),M.jsx("span",{children:A==="still"?"A calm horizon behind the conversation.":A==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},A))})]}),M.jsxs("div",{className:"lab-customize-block",children:[M.jsx("h4",{children:"Message transparency"}),M.jsxs("div",{className:"lab-choice-grid two",children:[M.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":o.glass==="subtle",className:o.glass==="subtle"?"on":"",onClick:()=>x("glass","subtle"),type:"button",children:[M.jsx("strong",{children:"Subtle glass"}),M.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),M.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":o.glass==="immersive",className:o.glass==="immersive"?"on":"",onClick:()=>x("glass","immersive"),type:"button",children:[M.jsx("strong",{children:"Immersive · no surface"}),M.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),M.jsxs("div",{className:"lab-customize-block",children:[M.jsx("h4",{children:"Star web"}),M.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(A=>M.jsx("button",{"aria-pressed":o.starIntensity===A,className:o.starIntensity===A?"on":"",onClick:()=>x("starIntensity",A),type:"button",children:A},A))})]}),M.jsxs("div",{className:"lab-customize-row",children:[M.jsxs("div",{children:[M.jsx("h4",{children:"Reading density"}),M.jsxs("div",{className:"lab-segmented-control",children:[M.jsx("button",{"aria-label":"Compact text","aria-pressed":o.density==="compact",className:o.density==="compact"?"on":"",onClick:()=>x("density","compact"),type:"button",children:"compact"}),M.jsx("button",{"aria-label":"Comfortable text","aria-pressed":o.density==="comfortable",className:o.density==="comfortable"?"on":"",onClick:()=>x("density","comfortable"),type:"button",children:"comfortable"})]})]}),M.jsxs("div",{children:[M.jsx("h4",{children:"Font size"}),M.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(A=>M.jsx("button",{"aria-pressed":o.fontSize===A,className:o.fontSize===A?"on":"",onClick:()=>x("fontSize",A),type:"button",children:A},A))})]})]})]}),g==="privacy"&&M.jsxs("section",{className:"lab-settings-section",children:[M.jsxs("div",{className:"lab-setting-title",children:[M.jsx("h3",{children:"Keyboard & privacy"}),M.jsx("span",{children:"Quick controls and where your reading data stays."})]}),M.jsxs("dl",{className:"lab-shortcuts",children:[M.jsxs("div",{children:[M.jsxs("dt",{children:[M.jsx("kbd",{children:"Ctrl"}),M.jsx("kbd",{children:","})]}),M.jsx("dd",{children:"open settings"})]}),M.jsxs("div",{children:[M.jsx("dt",{children:M.jsx("kbd",{children:"Esc"})}),M.jsx("dd",{children:"close this panel"})]}),M.jsxs("div",{children:[M.jsx("dt",{children:M.jsx("kbd",{children:"Enter"})}),M.jsx("dd",{children:"send a message"})]})]}),M.jsxs("aside",{className:"lab-privacy-note",children:[M.jsx("span",{"aria-hidden":"true",children:"◎"}),M.jsxs("div",{children:[M.jsx("strong",{children:"Everything stays on this machine."}),M.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]}),g==="model"&&M.jsxs("section",{className:"lab-settings-section",children:[M.jsxs("div",{className:"lab-setting-title",children:[M.jsx("h3",{children:"Model"}),M.jsx("span",{children:"Your DeepSeek key and which model answers."})]}),M.jsxs("div",{className:"lab-api-key-setting",children:[M.jsx("label",{htmlFor:"spell-surface-api-key",children:"DeepSeek key"}),M.jsx("input",{autoCapitalize:"none",autoComplete:"off",id:"spell-surface-api-key",onChange:A=>h(A.target.value),placeholder:"sk-...",spellCheck:!1,type:"password",value:u}),M.jsx("small",{children:"Stored only in this browser. Sent with each request and never saved by the server. Leave empty and save to delete it."})]}),M.jsxs("label",{className:"lab-check-row",children:[M.jsx("input",{checked:m,onChange:A=>p(A.target.checked),type:"checkbox"}),M.jsxs("span",{children:["Disable this key",M.jsx("small",{children:"Fall back to the library key when yours is unavailable."})]})]}),M.jsxs("div",{className:"lab-api-key-setting",children:[M.jsx("label",{htmlFor:"spell-surface-model",children:"Model"}),M.jsx("select",{id:"spell-surface-model",onChange:A=>v(A.target.value),value:_,children:cR.map(A=>M.jsx("option",{value:A.id,children:A.label},A.id))}),M.jsx("small",{children:"DeepSeek V4 Flash is fast and cheap; V4 Pro is the strongest model. Your choice is stored in this browser."})]})]})]})]})]}),M.jsxs("footer",{className:"lab-settings-actions",children:[M.jsx("button",{onClick:n,type:"button",children:"Leave unchanged"}),M.jsx("button",{className:"primary",onClick:I,type:"button",children:"Apply settings"})]})]})})}const ta={chapter:1e3,density:"comfortable",fontSize:"small",glass:"immersive",runeMode:"particles",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"void",tier:"ascended",volume:5},dM="weaver.spell-surface";function es(a,e,n){return typeof a=="string"&&e.includes(a)?a:n}function cI(){try{const a=JSON.parse(window.localStorage.getItem(dM)??"null");return a?{...ta,density:es(a.density,["compact","comfortable"],ta.density),fontSize:es(a.fontSize,["small","medium","large"],ta.fontSize),glass:es(a.glass,["subtle","immersive"],ta.glass),runeMode:es(a.runeMode,["particles","voice","threads"],ta.runeMode),soulMode:es(a.soulMode,["still","living","mirror"],ta.soulMode),starIntensity:es(a.starIntensity,["quiet","balanced","vivid"],ta.starIntensity),theme:es(a.theme,["crimson","cosmos","starlight","void"],ta.theme)}:ta}catch{return ta}}function uI(a){window.localStorage.setItem(dM,JSON.stringify({density:a.density,fontSize:a.fontSize,glass:a.glass,runeMode:a.runeMode,soulMode:a.soulMode,starIntensity:a.starIntensity,theme:a.theme}))}const VS=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127,3160];function fI(a){const e=VS.findIndex(n=>a<=n);return e===-1?VS.length:e+1}function dI(a){if(!a)return"Others";const e=new Date(a);if(Number.isNaN(e.getTime()))return"Others";const n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),e>=n?"Today":e>=r?"Yesterday":"Others"}function HS(a){return{reader_chapter:a.chapter,spoiler_mode:a.spoilerMode,tier:a.tier}}function hI({api:a,privacyLabel:e}){const n=cw(a,Ri),[r,o]=Re.useState(cI),[c,u]=Re.useState(!1),[h,m]=Re.useState(gw),[p,_]=Re.useState(1),[v,g]=Re.useState(!1),[S,T]=Re.useState(!1),[D,b]=Re.useState(!1),[x,I]=Re.useState(new Set),[F,A]=Re.useState(new Set),[U,L]=Re.useState(new Map),[B,w]=Re.useState("idle"),[z,k]=Re.useState("[The Spell listens.]"),[G,K]=Re.useState(0),he=Re.useRef(null),me=Re.useRef(null),ee=Re.useRef(null),N=Re.useRef(!1),H=Re.useRef(!1),te=Re.useRef(null),_e=Re.useMemo(()=>n.conversations.map(Ce=>({archived:x.has(Ce.conversation_id),dateGroup:dI(Ce.created_at),id:Ce.conversation_id,pinned:F.has(Ce.conversation_id),preview:"private reading thread",title:U.get(Ce.conversation_id)??Ce.title,volume:null})),[x,n.conversations,F,U]);Re.useEffect(()=>{function Ce(Ze){Ze.ctrlKey&&Ze.key===","&&(Ze.preventDefault(),Z()),Ze.key==="Escape"&&!h&&(u(!1),v&&be())}return window.addEventListener("keydown",Ce),()=>window.removeEventListener("keydown",Ce)},[v,h]),Re.useEffect(()=>{if(!v)return;const Ce=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=Ce}},[v]),Re.useEffect(()=>{const Ce=ee.current;Ce&&(Ce.scrollTop=Ce.scrollHeight)},[n.activity,n.messages,n.recoveryMessage]),Re.useEffect(()=>{if(n.turnActive){N.current=!0,w(n.activity.length>0?"reading":"reaching");return}N.current&&(N.current=!1,w("complete"),O("[The weave is complete.]"),te.current&&window.clearTimeout(te.current),te.current=window.setTimeout(()=>w("idle"),900))},[n.activity.length,n.turnActive]),Re.useEffect(()=>{const Ce=n.activity.at(-1);if(!Ce)return;const Ze=pw(Ce);Ze&&(w("reading"),O(Ze))},[n.activity]);const Te=n.messages.some(Ce=>Ce.role==="weaver"&&Ce.streaming&&Ce.content.length>0);Re.useEffect(()=>{!n.turnActive||!Te||H.current||(H.current=!0,w("answering"),O("[Weaving the story.]"))},[n.turnActive,Te]),Re.useEffect(()=>()=>{te.current&&window.clearTimeout(te.current)},[]);function O(Ce){k(Ce),K(Ze=>Ze+1)}async function Z(){try{const Ce=await a.getPreferences(),Ze=Ce.reader_chapter??r.chapter;o(Bt=>({...Bt,chapter:Ze,spoilerMode:Ce.spoiler_mode,tier:Ce.tier,volume:fI(Ze)}))}finally{u(!0),O("[The sea within opens.]")}}function ne(){if(window.innerWidth<768){g(!0);return}T(!1)}function be(){if(window.innerWidth<768){g(!1),window.setTimeout(()=>me.current?.focus(),0);return}T(!0)}function J(){m(!1),window.setTimeout(()=>he.current?.focus(),0)}async function X(){await n.createConversation()&&(g(!1),O("[An empty thread waits in the void.]"),window.setTimeout(()=>he.current?.focus(),0))}async function ce(Ce){await n.selectConversation(Ce),g(!1),O("[The thread is recalled.]")}function ye(Ce,Ze){L(Bt=>new Map(Bt).set(Ce,Ze)),O("[The thread accepts a new name.]")}function Pe(Ce,Ze){Ce(Bt=>{const Ht=new Set(Bt);return Ht.has(Ze)?Ht.delete(Ze):Ht.add(Ze),Ht})}function ot(Ce){H.current=!1,w("reaching"),O("[The Spell reaches for the first thread.]"),n.sendMessage(Ce)}function Ke(){H.current=!1,w("reading"),O("[The Spell takes up the thread once more.]"),n.regenerateReply()}const Ut=`Vol ${r.volume} · ch ${r.chapter} · ${r.tier}`,ht=r.starIntensity==="quiet"?.2:r.starIntensity==="vivid"?.56:.36,yt=n.recoveryMessage?"failed":B;return M.jsxs("div",{className:["spell-surface-lab","spell-surface-live",v?"lab-rail-open":"",S?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":r.density,"data-font-size":r.fontSize,"data-glass":r.glass,"data-runes":r.runeMode,"data-soul":r.soulMode,"data-star-intensity":r.starIntensity,"data-theme":r.theme,"data-testid":"spell-surface-live",children:[M.jsx(WP,{paused:c||h,state:yt,threadAlpha:ht}),M.jsx(KP,{activeThreadId:n.conversationId??"",archivedOpen:D,collapsed:S,drawerOpen:v,onArchive:Ce=>Pe(I,Ce),onClose:be,onCreate:()=>{X()},onDelete:Ce=>{n.deleteConversation(Ce)},onOpen:ne,onOpenSettings:()=>{Z()},onPin:Ce=>Pe(A,Ce),onRename:ye,onSelect:Ce=>{ce(Ce)},onSetArchivedOpen:b,readerStatus:Ut,threads:_e}),M.jsxs("main",{"aria-hidden":v?!0:void 0,className:"lab-chat-main",inert:v,children:[M.jsxs("div",{className:"lab-chat-controls",children:[M.jsx("button",{"aria-controls":"spell-surface-rail","aria-expanded":v,"aria-label":"Open threads",className:"lab-mobile-rail",onClick:ne,ref:me,type:"button",children:M.jsx(t1,{})}),M.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{Z()},type:"button",children:M.jsx(n1,{})})]}),M.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:ee,children:M.jsxs("div",{className:"lab-transcript-column",children:[n.bootError&&M.jsx("div",{className:"boot-error",children:n.bootError}),!n.bootError&&n.messages.length===0&&M.jsxs("section",{className:"lab-empty-weave",children:[M.jsx("span",{className:"lab-empty-mark",children:M.jsx(ng,{})}),M.jsx("p",{children:"[An empty thread trembles in the void.]"}),M.jsx("h1",{children:"What are we reading?"}),M.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),n.messages.map(Ce=>M.jsx(TR,{Mark:ng,assistantName:Ri.assistantName,message:Ce,onQuote:Ze=>{n.setDraft(`"${Ze}" `),he.current?.focus()},onRegenerate:Ce.id===n.lastReplyId&&n.turnState==="idle"?Ke:void 0,regenerateLabel:Ri.regenerateLabel},Ce.id)),n.recoveryMessage&&M.jsx(AR,{chooseLabel:Ri.recoveryChooseLabel,createLabel:Ri.recoveryCreateLabel,message:n.recoveryMessage,onChooseConversation:ne,onCreateConversation:()=>{X()},onRetry:()=>{n.retryLastTurn()},retryLabel:Ri.recoveryRetryLabel,title:Ri.recoveryTitle})]})}),M.jsx(JP,{announcement:z,eventKey:G,mode:r.runeMode}),M.jsxs("footer",{className:"lab-composer-dock",children:[M.jsx(lR,{cancelling:n.turnState==="cancelling",draft:n.draft,inputLabel:Ri.inputLabel,onCancel:()=>{n.cancelTurn()},onDraftChange:n.setDraft,onSubmit:ot,onTierChange:Ce=>{const Ze={...r,tier:Ce};o(Ze),a.savePreferences(HS(Ze))},placeholder:Ri.composerPlaceholder,sendLabel:Ri.sendLabel,stopLabel:Ri.stopLabel,stoppingLabel:Ri.stoppingLabel,textareaRef:he,tier:r.tier,turnActive:n.turnActive}),M.jsxs("p",{children:[M.jsx("span",{})," ",e]})]})]}),v&&M.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:be,type:"button"}),c&&M.jsx(lI,{initial:r,onClose:()=>u(!1),onSave:Ce=>{o(Ce),uI(Ce),u(!1),O("[Your soul answers the change.]"),a.savePreferences(HS(Ce))}}),h&&M.jsx(xR,{initialStep:p,onComplete:J,onDefer:J})]})}function pI(a){return M.jsx(iD,{children:M.jsx(hI,{...a})})}async function ts(a,e){if(!a.ok)throw new Error(`${e} failed (${a.status})`);return await a.json()}function mI(a){const e=typeof a.data.text=="string"?a.data.text:"",n=typeof a.data.message=="string"?a.data.message:"";if(a.event==="delta")return{type:"delta",text:e};if(a.event==="completed")return{type:"completed",text:e,tokenCount:typeof a.data.token_count=="number"?a.data.token_count:void 0,tokenBudget:typeof a.data.token_budget=="number"?a.data.token_budget:void 0};if(a.event==="interrupted")return{type:"interrupted",message:n||"The turn was interrupted."};if(a.event==="failed")return{type:"failed",message:n||"The reply failed.",code:typeof a.data.code=="string"?a.data.code:void 0};if(a.event==="tool"){const r=Array.isArray(a.data.handles)?a.data.handles.filter(o=>typeof o=="string"):void 0;return{type:"tool",name:typeof a.data.name=="string"?a.data.name:"tool",status:typeof a.data.status=="string"?a.data.status:"start",detail:typeof a.data.detail=="string"?a.data.detail:"",preview:typeof a.data.preview=="string"?a.data.preview:void 0,handles:r&&r.length>0?r:void 0}}return null}async function*gI(a){const e=[];let n=[],r=null,o=0;const c=["delta","tool","completed","interrupted","failed"];for(const u of c)a.addEventListener(u,h=>{try{const m=mI({event:u,data:JSON.parse(h.data)});m&&(e.push(m),n.splice(0).forEach(p=>p()))}catch{}});a.onerror=()=>{o+=1,(a.readyState===EventSource.CLOSED||o>4)&&(r=new Error("The reply stream was interrupted."),n.splice(0).forEach(u=>u()))};try{for(;;)if(e.length>0)yield e.shift();else{if(r)throw r;await new Promise(u=>n.push(u))}}finally{a.close()}}async function*Op(a){const e=new EventSource(`/api/conversations/${encodeURIComponent(a)}/stream`);let n=!1;for await(const r of gI(e))if(yield r,r.type==="completed"||r.type==="interrupted"||r.type==="failed"){n=!0;break}if(!n)throw new Error("The reply stream closed without finishing.")}function vI(a=fetch){const e=(n,r)=>a(n,{...r,headers:{...hR(),...r?.headers}});return{async getPreferences(){const n=await e("/api/preferences");return ts(n,"Loading preferences")},async deleteConversation(n){const r=await e(`/api/conversations/${n}`,{method:"DELETE"});return ts(r,"Deleting conversation")},async getPassage(n){const r=await e(`/api/passages?handle=${encodeURIComponent(n)}`);return ts(r,"Loading passage")},async savePreferences(n){const r=await e("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return ts(r,"Saving preferences")},async listConversations(){const n=await e("/api/conversations");return ts(n,"Loading conversations")},async createConversation(){const n=await e("/api/conversations",{method:"POST"});return ts(n,"Creating a conversation")},async loadMessages(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/messages`);return ts(r,"Loading the conversation")},async*streamTurn(n,r){const o=await e(`/api/conversations/${encodeURIComponent(n)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r})});if(!o.ok)throw new Error(`Sending the message failed (${o.status})`);yield*Op(n)},async*retryTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/retry`,{method:"POST"});if(!r.ok)throw new Error(`Retrying failed (${r.status})`);yield*Op(n)},async*regenerateTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/regenerate`,{method:"POST"});if(!r.ok)throw new Error(`Regenerating failed (${r.status})`);yield*Op(n)},async cancelTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/cancel`,{method:"POST"});if(r.status===202)return"cancelling";if(r.status===200)return"idle";throw new Error(`Stopping the reply failed (${r.status})`)}}}const _I=Re.lazy(()=>GS(()=>import("./ThemeLab-Bw-77wC1.js"),[]).then(a=>({default:a.ThemeLab})));ps.autoAddCss=!1;function xI(a){return document.querySelector(`meta[name="${a}"]`)?.content??""}const hM=document.getElementById("root");if(!hM)throw new Error("Weaver root element is missing.");const yI=window.location.hash==="#theme-lab";ow.createRoot(hM).render(yI?M.jsx(Re.Suspense,{fallback:M.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:M.jsx(_I,{})}):M.jsx(pI,{api:vI(),privacyLabel:xI("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{TI as $,Qw as A,aC as B,oy as C,iC as D,mC as E,xC as F,bC as G,UR as H,MI as I,TC as J,hC as K,cC as L,o1 as M,SC as N,NR as O,AC as P,g1 as Q,t1 as R,BP as S,om as T,go as U,LR as V,ng as W,IC as X,EI as Y,df as Z,bI as _,iI as a,LC as a0,$e as a1,_y as a2,SI as a3,VC as a4,OC as a5,kC as a6,WC as a7,GC as a8,XC as a9,KP as b,n1 as c,Jw as d,JP as e,lI as f,DR as g,Ol as h,PR as i,M as j,bu as k,dy as l,Nn as m,l1 as n,us as o,yg as p,fy as q,Re as r,uy as s,Hl as t,Xl as u,Kh as v,s1 as w,tC as x,u1 as y,OR as z};

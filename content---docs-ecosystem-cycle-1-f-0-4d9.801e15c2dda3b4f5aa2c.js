(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));t(59),t(32),t(23),t(24),t(60),t(0);var r=t(225);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={id:"ecosystem-cycle",title:"single-spa-cycle",sidebar_label:"Cycle"},c=[{value:"Installation",id:"installation",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]}],i={rightToc:c},l="wrapper";function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(l,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"single-spa-cycle is a helper library that helps implement ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/configuration#registering-applications"}),"single-spa registered application")," ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(r.b)("a",a({parentName:"p"},{href:"https://cycle.js.org/"}),"Cycle.js"),". Check out the ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/pcmnac/single-spa-cycle"}),"single-spa-cycle github"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npm install --save @pcmnac/single-spa-cycle\n")),Object(r.b)("h2",{id:"quickstart"},"Quickstart"),Object(r.b)("p",null,"In your project's entry file, add the following:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"\nimport {run} from '@cycle/run'\nimport {makeDOMDriver} from '@cycle/dom'\nimport singleSpaCycle from '@pcmnac/single-spa-cycle';\nimport rootComponent from './root.component.js';\n\nconst cycleLifecycles = singleSpaCycle({\n  run,\n  rootComponent,\n  drivers: { DOM: makeDOMDriver(document.getElementById('main-content'))}, // or { DOM: makeDOMDriver('#main-content')}\n});\n\nexport const bootstrap = cycleLifecycles.bootstrap;\nexport const mount = cycleLifecycles.mount;\nexport const unmount = cycleLifecycles.unmount;\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"All options are passed to single-spa-cycle via the ",Object(r.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(r.b)("inlineCode",{parentName:"p"},"singleSpaCycle(opts)"),". The following options are available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"run"),": (required) Cycle.js run function."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"drivers"),": (required) Drivers (including DOM Driver) to be used by your Cycle.js root component."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level Cycle.js component which will be rendered")))}p.isMDXComponent=!0},225:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,m=s[i+"."+u]||s[u]||p[u]||o;return t?a.a.createElement(m,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(m,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);
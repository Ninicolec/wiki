"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[308],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_label:"Program State",sidebar_position:2},s="Gear program state",l={unversionedId:"developing-contracts/gear-program",id:"developing-contracts/gear-program",title:"Gear program state",description:"The program is the main unit of the Gear component. Program code is stored as an immutable Wasm blob. Each program has a fixed amount of memory which persists between messagehandling (so-called static area).",source:"@site/docs/developing-contracts/gear-program.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/gear-program",permalink:"/developing-contracts/gear-program",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/gear-program.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Program State",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Node FAQ",permalink:"/node/node-faq"},next:{title:"Message Format",permalink:"/developing-contracts/messaging"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gear-program-state"},"Gear program state"),(0,o.kt)("p",null,"The program is the main unit of the Gear component. Program code is stored as an immutable Wasm blob. Each program has a fixed amount of memory which persists between messagehandling (so-called static area)."),(0,o.kt)("p",null,"The minimum structure of the Gear program is this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![no_std]\n\nuse gstd::msg;\n\n#[no_mangle]\npub unsafe extern "C" fn handle() {\n    msg::reply(b"Hello world!", 0).unwrap();\n}\n\n#[no_mangle]\npub unsafe extern "C" fn init() {}\n\n')),(0,o.kt)("p",null,"Optional ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function is called only once during program initialization. And handles the incoming ",(0,o.kt)("inlineCode",{parentName:"p"},"init payload")," if there is one."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," function (also optional) will be called every time the program receives an incoming message. In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," will be processed."))}d.isMDXComponent=!0}}]);
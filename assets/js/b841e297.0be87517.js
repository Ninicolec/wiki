"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[614],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),m=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=m(e.components);return a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=n,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return t?a.createElement(f,s(s({ref:r},c),{},{components:t})):a.createElement(f,s({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9465:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_label:"Memory Parallelism",sidebar_position:5},l="Memory parallelism",m={unversionedId:"gear/memory-parallelism",id:"gear/memory-parallelism",title:"Memory parallelism",description:"Individual isolated memory space per program allows parallelization of message processing on a Gear node. Number of parallel processing streams equals the number of CPU cores. Each stream processes messages intended for a defined set of programs. It relates to messages sent from other programs or from outside (user\u2019s transactions).",source:"@site/docs/gear/memory-parallelism.md",sourceDirName:"gear",slug:"/gear/memory-parallelism",permalink:"/gear/memory-parallelism",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/memory-parallelism.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Memory Parallelism",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Actor Model",permalink:"/gear/actor-model"},next:{title:"WebAssembly (WASM)",permalink:"/gear/WASM"}},c={},p=[],u={toc:p};function d(e){var r=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"memory-parallelism"},"Memory parallelism"),(0,o.kt)("p",null,"Individual isolated memory space per program allows parallelization of message processing on a Gear node. Number of parallel processing streams equals the number of CPU cores. Each stream processes messages intended for a defined set of programs. It relates to messages sent from other programs or from outside (user\u2019s transactions)."),(0,o.kt)("p",null,"For example, given a message queue containing messages targeted to 100 different programs, Gear node runs on a network where 2 threads of processing are configured. Gear engine uses a runtime-defined number of streams (equal to number of CPU cores on a typical validator machine), divides total amount of targeted programs to number of streams and creates a message pool for each stream (50 programs per stream)."),(0,o.kt)("p",null,"Programs are distributed to separate streams and each message appears in a stream where its targeted program is defined. So, all messages addressed to a particular program appear in a single processing stream."),(0,o.kt)("p",null,"In each cycle a targeted program can have more than one message and one stream processes messages for plenty of programs. The result of message processing is a set of new messages from each stream that is added to the message queue, then the cycle repeats. The resultant messages generated during message processing are usually sent to another address (return to origin or to the next program)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:t(9392).Z,width:"1400",height:"1400"})))}d.isMDXComponent=!0},9392:function(e,r,t){r.Z=t.p+"assets/images/message-parallelism-f296727b5accdd4c315c190f19e0bcdb.jpg"}}]);
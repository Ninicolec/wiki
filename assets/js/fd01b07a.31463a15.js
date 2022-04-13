"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1519],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4186:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Node as a Service",sidebar_position:2},l="\u0421onfiguring a node as a Linux service",d={unversionedId:"node/node-as-service",id:"node/node-as-service",title:"\u0421onfiguring a node as a Linux service",description:"Prerequisites",source:"@site/docs/node/node-as-service.mdx",sourceDirName:"node",slug:"/node/node-as-service",permalink:"/node/node-as-service",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/node/node-as-service.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Node as a Service",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting Up",permalink:"/node/setting-up"},next:{title:"Node Monitoring",permalink:"/node/telemetry"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Starting the node",id:"starting-the-node",level:2},{value:"Checking logs",id:"checking-logs",level:2},{value:"Update the node with the new version",id:"update-the-node-with-the-new-version",level:2},{value:"Remove the node",id:"remove-the-node",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0441onfiguring-a-node-as-a-linux-service"},"\u0421onfiguring a node as a Linux service"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You need to download or compile the gear-node executable file for your OS. ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/node/setting-up#install-with-pre-build-binary"},"See more")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To run the Gear node as one of the Linux services, you need to configure the systemd file:"),(0,a.kt)("p",null,"From ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd /etc/systemd/system\nsudo nano gear-node.service\n")),(0,a.kt)("p",null,"Configure and save:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Gear Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nWorkingDirectory=/root/\nExecStart=/root/gear-node --name 'NODE_NAME' --telemetry-url 'ws://telemetry-backend-shard.gear-tech.io:32001/submit 0'\nRestart=always\nRestartSec=3\nLimitNOFILE=10000\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Declaration ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecStart")," points to the location of the gear-node binary file. In this case, it is in ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," directory.\nWith -- additional launch parameters are indicated, but not mandatory."))),(0,a.kt)("p",null,"That\u2019s it. We can now start the service."),(0,a.kt)("h2",{id:"starting-the-node"},"Starting the node"),(0,a.kt)("p",null,"Run to start the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start gear-node\n")),(0,a.kt)("p",null,"Automatically get it to start on boot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable gear-node\n")),(0,a.kt)("p",null,"How to check status of gear-node service?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status gear-node\n")),(0,a.kt)("h2",{id:"checking-logs"},"Checking logs"),(0,a.kt)("p",null,"You may see the service logs by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u gear-node\n")),(0,a.kt)("p",null,"Use navigation keys to browse the logs and ",(0,a.kt)("inlineCode",{parentName:"p"},"q")," key to exit."),(0,a.kt)("p",null,"You may see the last 50 lines of logs by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"-n 50")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u gear-node -n 50\n")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," parameter to see the last lines of logs in continuous mode (press Ctrl+C to exit):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u gear-node -fn 50\n")),(0,a.kt)("h2",{id:"update-the-node-with-the-new-version"},"Update the node with the new version"),(0,a.kt)("p",null,"You just need to replace the node executable (",(0,a.kt)("inlineCode",{parentName:"p"},"gear-node"),") with the latest version and restart the execution. For example, if your Linux executable is located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/root/gear-node")," (as we've configured above) you are to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://builds.gear.rs/gear-nightly-linux-x86_64.tar.xz\nsudo tar -xvf gear-nightly-linux-x86_64.tar.xz -C /root\nrm gear-nightly-linux-x86_64.tar.xz\nsudo systemctl restart gear-node\n")),(0,a.kt)("h2",{id:"remove-the-node"},"Remove the node"),(0,a.kt)("p",null,"You are to remove the node's storage, the service configuration, and the executable itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl stop gear-node\nsudo systemctl disable gear-node\nsudo rm -rf /root/.local/share/gear-node\nsudo rm /etc/systemd/system/gear-node.service\nsudo rm /root/gear-node\n")))}m.isMDXComponent=!0}}]);
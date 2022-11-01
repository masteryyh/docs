"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Harvester",title:""},s=void 0,i={unversionedId:"troubleshooting/harvester",id:"version-v1.0/troubleshooting/harvester",title:"",description:"Generate a support bundle",source:"@site/versioned_docs/version-v1.0/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/v1.0/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/troubleshooting/harvester.md",tags:[],version:"v1.0",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"Sep 27, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:""},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/v1.0/troubleshooting/installation"},next:{title:"Operating System",permalink:"/v1.0/troubleshooting/os"}},l={},p=[{value:"Generate a support bundle",id:"generate-a-support-bundle",level:2},{value:"Access Embedded Rancher",id:"access-embedded-rancher",level:2},{value:"Access Embedded Longhorn",id:"access-embedded-longhorn",level:2},{value:"I can&#39;t access Harvester after I changed SSL/TLS enabled protocols and ciphers",id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"generate-a-support-bundle"},"Generate a support bundle"),(0,a.kt)("p",null,"Users can generate a support bundle in the Harvester GUI with the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Support")," link at the bottom-left of Harvester Web UI.\n",(0,a.kt)("img",{src:r(46914).Z,width:"955",height:"902"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," button.\n",(0,a.kt)("img",{src:r(20566).Z,width:"953",height:"286"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enter a useful description for the support bundle and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," to generate and download a support bundle.\n",(0,a.kt)("img",{src:r(68972).Z,width:"941",height:"436"})))),(0,a.kt)("h2",{id:"access-embedded-rancher"},"Access Embedded Rancher"),(0,a.kt)("p",null,"You can access the embedded Rancher dashboard via ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We only support to use the embedded Rancher dashboard for debugging and validation purpose.\nFor Rancher's multi-cluster and multi-tenant integration, please refer to the docs ",(0,a.kt)("a",{parentName:"p",href:"/v1.0/rancher/rancher-integration"},"here"),".")),(0,a.kt)("h2",{id:"access-embedded-longhorn"},"Access Embedded Longhorn"),(0,a.kt)("p",null,"You can access the embedded Longhorn UI via ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We only support to use the embedded Longhorn UI for debugging and validation purpose .")),(0,a.kt)("h2",{id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers"},"I can't access Harvester after I changed SSL/TLS enabled protocols and ciphers"),(0,a.kt)("p",null,"If you changed\n",(0,a.kt)("a",{parentName:"p",href:"/v1.0/settings/#ssl-parameters"},"SSL/TLS enabled protocols and ciphers settings"),"\nand you no longer have access to Harvester GUI and API,\nit's highly possible that NGINX Ingress Controller has stopped working due to the misconfigured SSL/TLS protocols and ciphers.\nFollow these steps to reset the setting:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Following ",(0,a.kt)("a",{parentName:"li",href:"/v1.0/faq"},"FAQ")," to SSH into Harvester node and switch to ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo -s\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Editing setting ",(0,a.kt)("inlineCode",{parentName:"li"},"ssl-parameters")," manually using ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# kubectl edit settings ssl-parameters\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Deleting the line ",(0,a.kt)("inlineCode",{parentName:"li"},"value: ...")," so that NGINX Ingress Controller\nwill use the default protocols and ciphers.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\ndefault: \'{}\'\nkind: Setting\nmetadata:\n  name: ssl-parameters\n...\nvalue: \'{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}\' # <- Delete this line\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Save the change and you should see the following response after exit from the editor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setting.harvesterhci.io/ssl-parameters edited\n")),(0,a.kt)("p",null,"You can further check the logs of Pod ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," to see if NGINX Ingress Controller is working correctly."))}c.isMDXComponent=!0},20566:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},46914:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},68972:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"}}]);
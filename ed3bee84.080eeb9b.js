(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{209:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(9),i=(t(0),t(216)),a={id:"core_features",title:"Features",keywords:["feature"]},s={id:"get_started/core_features",isDocsHomePage:!1,title:"Features",description:"\x3c!--",source:"@site/docs/get_started/core_features.md",permalink:"/docs/next/get_started/core_features",version:"next",sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/next/"},next:{title:"Partition and Queue Configuration",permalink:"/docs/next/user_guide/queue_config"},latestVersionMainDocPermalink:"/docs"},c=[{value:"App-aware scheduling",id:"app-aware-scheduling",children:[]},{value:"Hierarchy Resource Queues",id:"hierarchy-resource-queues",children:[]},{value:"Job Ordering and Queuing",id:"job-ordering-and-queuing",children:[]},{value:"Resource fairness",id:"resource-fairness",children:[]},{value:"Resource Reservation",id:"resource-reservation",children:[]},{value:"Throughput",id:"throughput",children:[]}],u={rightToc:c};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The main features of YuniKorn include:"),Object(i.b)("h2",{id:"app-aware-scheduling"},"App-aware scheduling"),Object(i.b)("p",null,"One of the key differences of YuniKorn is, it does app-aware scheduling. In default K8s scheduler, it simply schedules\npod by pod, without any context about user, app, queue. However, YuniKorn recognizes users, apps, queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to do\nfine-grained controls on resource quotas, resource fairness and priorities, which are the most important requirements\nfor a multi-tenancy computing system."),Object(i.b)("h2",{id:"hierarchy-resource-queues"},"Hierarchy Resource Queues"),Object(i.b)("p",null,"Hierarchy queues provide an efficient mechanism to manage cluster resources. The hierarchy of the queues can logically\nmap to the structure of an organization. This gives fine-grained control over resources for different tenants. The YuniKorn\nUI provides a centralised view to monitor the usage of resource queues, it helps you to get the insight how the resources are\nused across different tenants. What's more, By leveraging the min/max queue capacity, it can define how elastic it can be\nin terms of the resource consumption for each tenant."),Object(i.b)("h2",{id:"job-ordering-and-queuing"},"Job Ordering and Queuing"),Object(i.b)("p",null,"Applications can be properly queued in working-queues, the ordering policy determines which application can get resources first.\nThe policy can be various, such as simple ",Object(i.b)("inlineCode",{parentName:"p"},"FIFO"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Fair"),", ",Object(i.b)("inlineCode",{parentName:"p"},"StateAware")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Priority")," based. Queues can maintain the order of applications,\nand based on different policies, the scheduler allocates resources to jobs accordingly. The behavior is much more predictable."),Object(i.b)("p",null,"What's more, when the queue max-capacity is configured, jobs and tasks can be properly queued up in the resource queue.\nIf the remaining capacity is not enough, they can be waiting in line until some resources are released. This simplifies\nthe client side operation. Unlike the default scheduler, resources are capped by namespace resource quotas,\nand that is enforced by the quota-admission-controller, if the underneath namespace has no enough quota, pods cannot be\ncreated. Client side needs complex logic, e.g retry by condition, to handle such scenarios."),Object(i.b)("h2",{id:"resource-fairness"},"Resource fairness"),Object(i.b)("p",null,"In a multi-tenant environment, a lot of users are sharing cluster resources. To avoid tenants from competing resources\nand potential get starving. More fine-grained fairness needs to achieve fairness across users, as well as teams/organizations.\nWith consideration of weights or priorities, some more important applications can get high demand resources that stand over its share.\nThis is often associated with resource budget, a more fine-grained fairness mode can further improve the expense control."),Object(i.b)("h2",{id:"resource-reservation"},"Resource Reservation"),Object(i.b)("p",null,"YuniKorn automatically does reservations for outstanding requests. If a pod could not be allocated, YuniKorn will try to\nreserve it on a qualified node and tentatively allocate the pod on this reserved node (before trying rest of nodes).\nThis mechanism can avoid this pod gets starved by later submitted smaller, less-picky pods.\nThis feature is important in the batch workloads scenario because when a large amount of heterogeneous pods is submitted\nto the cluster, it's very likely some pods can be starved even they are submitted much earlier. "),Object(i.b)("h2",{id:"throughput"},"Throughput"),Object(i.b)("p",null,"Throughput is a key criterion to measure scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling, and further impact service SLAs.\nWhen the cluster gets bigger, it also means the requirement of higher throughput. The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/performance/evaluate_perf_function_with_kubemark"}),"performance evaluation based on Kube-mark"),"\nreveals some perf numbers."))}l.isMDXComponent=!0},216:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},h=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),h=n,f=d["".concat(a,".").concat(h)]||d[h]||p[h]||i;return t?o.a.createElement(f,s(s({ref:r},u),{},{components:t})):o.a.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);
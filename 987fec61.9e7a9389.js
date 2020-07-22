(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),o=n(9),r=(n(0),n(216)),i={id:"how_to_contribute",title:"How To Contribute"},s={permalink:"/community/how_to_contribute",source:"@site/community/how_to_contribute.md",description:"\x3c!--",date:"2020-07-22T22:59:27.342Z",tags:[],title:"How To Contribute",readingTime:4.71,truncated:!1,prevItem:{title:"Apache YuniKorn (Incubating)",permalink:"/community/download"},nextItem:{title:"Reporting Issues",permalink:"/community/reporting_issues"}},l=[{value:"Find an issue",id:"find-an-issue",children:[]},{value:"Fix an issue",id:"fix-an-issue",children:[]},{value:"Create a pull request",id:"create-a-pull-request",children:[]},{value:"Committing a change",id:"committing-a-change",children:[]},{value:"Still got questions?",id:"still-got-questions",children:[]}],u={rightToc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"YuniKorn uses:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"JIRA for issue tracking."),Object(r.b)("li",{parentName:"ul"},"GitHub Pull Requests to manage code review and the change itself."),Object(r.b)("li",{parentName:"ul"},"MarkDown in the source tree for the documentation.")),Object(r.b)("h2",{id:"find-an-issue"},"Find an issue"),Object(r.b)("p",null,"We use JIRA issues to track bugs for this project.\nFind an issue that you would like to work on, or file a new one if you have discovered a new issue.\nFor help with reporting issues look at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"community/reporting_issues.md"}),"how to report an issue"),"."),Object(r.b)("p",null,"The easiest way to get started working with the code base is to pick up a really easy\nJIRA and work on that. This will help you get familiar with the code base, build system,\nreview process, etc. We flag these starter bugs ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://issues.apache.org/jira/issues/?jql=project%3DYUNIKORN%20AND%20status%3DOpen%20AND%20labels%3Dnewbie"}),"here"),"."),Object(r.b)("p",null,"If nobody is working on an existing issue, assign it to yourself only if you intend to work on it shortly.\nIf you pick up an existing JIRA look for pull requests that are linked to the JIRA ticket.\nSomeone might be already working on it and not assigned the ticket.\nJIRAs that have a pull requests linked will have the label ",Object(r.b)("inlineCode",{parentName:"p"},"pull-request-available")," and a link to the pull request can be found under issue links."),Object(r.b)("p",null,"For anything that is more than a trivial change, like a typo or one line code change, it\u2019s a good idea to discuss your intended approach on the issue.\nYou are much more likely to have your patch reviewed and committed if you\u2019ve already got buy-in from the YuniKorn community before you start writing the fix."),Object(r.b)("p",null,"If you cannot assign the JIRA to yourself ask the community to help assign it and add you to the contributors list in JIRA.   "),Object(r.b)("h2",{id:"fix-an-issue"},"Fix an issue"),Object(r.b)("p",null,"Fixes or improvement must be created on the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch.\nFork the relevant YuniKorn project into your own project and checkout the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch.\nMake sure that you have an up to date code revision checked out before you start.\nCreate a branch to work on, a good name to use is the JIRA ID you are working on."),Object(r.b)("p",null,"Now start coding! As you are writing your patch, please keep the following things in mind:"),Object(r.b)("p",null,"Include tests with your patch.\nIf your patch adds a feature or fixes a bug and does not include tests, it will generally not be accepted.\nIf you are unsure how to write tests for a particular component, please ask on the JIRA for guidance."),Object(r.b)("p",null,"Please keep your patch narrowly targeted to the problem described by the JIRA.\nIt\u2019s better for everyone if we maintain discipline about the scope of each patch.\nIn general, if you find a bug while working on a specific feature, file a JIRA for the bug, check if you can assign it to yourself and fix it independently of the feature.\nThis helps us to differentiate between bug fixes and features and allows us to build stable maintenance releases."),Object(r.b)("p",null,"Make sure you have observed the recommendations in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"community/coding_guidelines.md"}),"coding guidelines"),".\nBefore you commit you should also run the full test suite using ",Object(r.b)("inlineCode",{parentName:"p"},"make test"),".\nMake sure that all the tests pass."),Object(r.b)("p",null,"Finally, please write a good, clear commit message, with a short, descriptive title.\nThe descriptive title must start with the JIRA ID you are working on.\nAn example is: ",Object(r.b)("inlineCode",{parentName:"p"},"[YUNIKORN-2] Support Gang Scheduling"),"\nThe commit message will be used to pre-fill the pull request information.\nThe JIRA ID in the message will automatically link the pull request and the JIRA.\nThe message that follows can be used to explain what the problem was, and how it was fixed."),Object(r.b)("h2",{id:"create-a-pull-request"},"Create a pull request"),Object(r.b)("p",null,"Please create a pull request on github with your patch.\nSee ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/using-pull-requests/"}),"opening a pull request")," for all the details."),Object(r.b)("p",null,"For committers: You can create a new branch, push your change and create a PR using the GitHub UI.\nFor contributors: you have already forked the repository and committed your changes to your fork.\nUse the GitHub UI to create a PR using the ",Object(r.b)("inlineCode",{parentName:"p"},"compare across forks")," option."),Object(r.b)("p",null,"The pull request description must include the JIRA reference that you are working on.\nIf you set the commit message as described above the pull request will automatically pick it up.\nIf you did not do that you can amend the description of the pull request to add the JIRA ID.\nFor example a pull request linked to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-2"}),"YUNIKORN-2")," should have a description like:\n",Object(r.b)("inlineCode",{parentName:"p"},"[YUNIKORN-2] Support Gang Scheduling")),Object(r.b)("h2",{id:"committing-a-change"},"Committing a change"),Object(r.b)("p",null,"When a change is approved it will be committed to the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch of the repository.\nThe commit message must include the JIRA in the first line and should include a ",Object(r.b)("inlineCode",{parentName:"p"},"Closes #1")," as a\nA commit will automatically close the PR.\nThe JIRA will not be closed automatically."),Object(r.b)("h2",{id:"still-got-questions"},"Still got questions?"),Object(r.b)("p",null,"If you\u2019re not sure about something, try to follow the style of the existing codebase.\nLook at whether there are other examples in the code that do a similar thing.\nFeel free to ask questions on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:dev@yunikorn.apache.org"}),"dev@yunikorn.apache.org")," list as well."))}c.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||h[b]||r;return n?o.a.createElement(d,s(s({ref:t},u),{},{components:n})):o.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
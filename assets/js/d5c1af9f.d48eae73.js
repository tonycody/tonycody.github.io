"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[9335],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},924:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={},l="\u5e95\u5c42\u539f\u7406",s={unversionedId:"react/\u8fdb\u9636",id:"react/\u8fdb\u9636",title:"\u5e95\u5c42\u539f\u7406",description:"Fiber\u67b6\u6784",source:"@site/docs/react/\u8fdb\u9636.mdx",sourceDirName:"react",slug:"/react/\u8fdb\u9636",permalink:"/docs/react/\u8fdb\u9636",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/\u8fdb\u9636.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hook",permalink:"/docs/react/Hook"},next:{title:"\u7b2c\u4e09\u65b9\u5e93",permalink:"/docs/react/\u7b2c\u4e09\u65b9\u5e93"}},c={},d=[{value:"Fiber\u67b6\u6784",id:"fiber\u67b6\u6784",level:2},{value:"Diff\u7b56\u7565",id:"diff\u7b56\u7565",level:2},{value:"\u670d\u52a1\u7aef\u6e32\u67d3(SSR)",id:"\u670d\u52a1\u7aef\u6e32\u67d3ssr",level:2},{value:"\u540c\u6784",id:"\u540c\u6784",level:3},{value:"\u670d\u52a1\u7aef\u52a0\u8f7d\u6570\u636e",id:"\u670d\u52a1\u7aef\u52a0\u8f7d\u6570\u636e",level:3},{value:"\u670d\u52a1\u7aef\u52a0\u8f7dCSS",id:"\u670d\u52a1\u7aef\u52a0\u8f7dcss",level:3},{value:"Next.js",id:"nextjs",level:2},{value:"Create-React-App",id:"create-react-app",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"rewired",id:"rewired",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e95\u5c42\u539f\u7406"},"\u5e95\u5c42\u539f\u7406"),(0,o.kt)("h2",{id:"fiber\u67b6\u6784"},"Fiber\u67b6\u6784"),(0,o.kt)("p",null,"React\u5728\u5b83\u7684V16\u7248\u672c\u63a8\u51fa\u4e86Fiber\u67b6\u6784\uff0c\u5728\u5f04\u6e05\u695a\u4ec0\u4e48\u662fFiber\u4e4b\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u5148\u4e86\u89e3\u4e3a\u4ec0\u4e48\u9700\u8981Fiber\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6d4f\u89c8\u5668\u662f\u591a\u7ebf\u7a0b\u7684\uff0c\u8fd9\u4e9b\u7ebf\u7a0b\u5305\u62ecJS\u5f15\u64ce\u7ebf\u7a0b\uff08\u4e3b\u7ebf\u7a0b\uff09\uff0c\u4ee5\u53caGUI\u6e32\u67d3\u7ebf\u7a0b\uff0c\u5b9a\u65f6\u5668\u7ebf\u7a0b\uff0c\u4e8b\u4ef6\u7ebf\u7a0b\u7b49\u5de5\u4f5c\u7ebf\u7a0b\u3002\u5176\u4e2d\uff0cJS\u5f15\u64ce\u7ebf\u7a0b\u548cGUI\u6e32\u67d3\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\u3002\u53c8\u56e0\u4e3a\u7edd\u5927\u591a\u6570\u7684\u6d4f\u89c8\u5668\u9875\u9762\u7684\u5237\u65b0\u9891\u7387\u53d6\u51b3\u4e8e\u663e\u793a\u5668\u7684\u5237\u65b0\u9891\u7387\uff0c\u5373\u6bcf16.6\u6beb\u79d2\u5c31\u4f1a\u901a\u8fc7GUI\u6e32\u67d3\u5f15\u64ce\u5237\u65b0\u4e00\u6b21\u3002\u6240\u4ee5\uff0c\u5982\u679cJS\u5f15\u64ce\u7ebf\u7a0b\u4e00\u6b21\u6027\u6267\u884c\u4e86\u4e00\u4e2a\u957f\u65f6\u95f4\uff08\u5927\u4e8e16.6\u6beb\u79d2\uff09\u7684\u540c\u6b65\u4efb\u52a1\uff0c\u5c31\u53ef\u80fd\u51fa\u73b0\u6389\u5e27\u7684\u60c5\u51b5\uff0c\u5f71\u54cd\u7528\u6237\u7684\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"\u800c\u5728\u65e7\u7248\u672c\u7684React\u4e2d\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5e9e\u5927\u7684\u7ec4\u4ef6\uff0c\u65e0\u8bba\u662f\u7ec4\u4ef6\u7684\u521b\u5efa\u8fd8\u662f\u66f4\u65b0\u90fd\u53ef\u80fd\u9700\u8981\u8f83\u957f\u7684\u65f6\u95f4\u3002\u800cFiber\u7684\u601d\u8def\u662f\u5c06\u539f\u672c\u8017\u65f6\u8f83\u957f\u7684\u540c\u6b65\u4efb\u52a1\u5206\u7247\u4e3a\u591a\u4e2a\u4efb\u52a1\u5355\u5143\uff0c\u6267\u884c\u5b8c\u4e00\u4e2a\u4efb\u52a1\u5355\u5143\u540e\u53ef\u4ee5\u4fdd\u5b58\u5f53\u524d\u7684\u72b6\u6001\uff0c\u5207\u6362\u5230GUI\u6e32\u67d3\u7ebf\u7a0b\u53bb\u5237\u65b0\u9875\u9762\uff0c\u63a5\u4e0b\u6765\u518d\u56de\u5230\u4e3b\u7ebf\u7a0b\u5e76\u4ece\u4e0a\u4e2a\u65ad\u70b9\u7ee7\u7eed\u6267\u884c\u4efb\u52a1\u3002"),(0,o.kt)("p",null,"\u6211\u7684\u4e2a\u4eba\u4f53\u4f1a\uff0cReact\u4e2d\u7684Fiber\uff08\u7ea4\u7a0b\uff09\u7c7b\u4f3c\u6216\u8005\u8bf4\u5c31\u662fCoroutine\uff08\u534f\u7a0b\uff09\u3002ES6\u7684Generator\u672c\u8eab\u4e5f\u7b97\u662f\u534f\u7a0b\u7684\u4e00\u79cd\u5b9e\u73b0\uff0c\u6216\u8005\u8bf4\u662f\u72b6\u6001\u673a\uff0c\u901a\u8fc7\u5b83\u80fd\u591f\u5f97\u5230\u4e00\u4e2a\u53ef\u4ee5\u6682\u505c\u7684\u51fd\u6570\u4efb\u52a1\uff1b\u800cReact\u4e2d\u7684Fiber\uff0c\u5c06\u539f\u672c\u8017\u65f6\u5f88\u957f\u7684\u540c\u6b65\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u8017\u65f6\u77ed\u7684\u5206\u7247\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86\u6d4f\u89c8\u5668\u4e2d\u4e92\u65a5\u7684\u4e3b\u7ebf\u7a0b\u4e0eGUI\u6e32\u67d3\u7ebf\u7a0b\u4e4b\u95f4\u7684\u8c03\u5ea6\u3002"),(0,o.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4e2aFiber\u7684\u540c\u6b65\u4efb\u52a1\u6765\u8bf4\uff0c\u90fd\u62e5\u6709\u4e00\u4e2a\u4f18\u5148\u7ea7\uff08\u603b\u5171\u5b9a\u4e49\u4e866\u79cd\u4f18\u5148\u7ea7\uff09\u3002"),(0,o.kt)("p",null,"\u5f53\u4e3b\u7ebf\u7a0b\u521a\u6267\u884c\u5b8c\u4e00\u4e2a\u4efb\u52a1A\u7684\u4e00\u4e2a\u5206\u7247\uff0c\u82e5\u6b64\u65f6\u51fa\u73b0\u4e86\u4e00\u4e2a\u4f18\u5148\u7ea7\u66f4\u9ad8\u7684\u4efb\u52a1B\uff0cReact\u5c31\u53ef\u80fd\u4f1a\u628a\u4efb\u52a1A\u5e9f\u5f03\u6389\uff0c\u5f85\u4e4b\u540e\u91cd\u65b0\u6267\u884c\u4e00\u6b21\u4efb\u52a1A\u3002"),(0,o.kt)("p",null,'\u4e3a\u4ec0\u4e48\u8fd9\u91cc\u8981\u52a0\u4e00\u4e2a\u53ef\u80fd\uff0c\u8fd9\u662f\u56e0\u4e3a\u5bf9\u4e8e\u4f7f\u7528\u4e86Fiber\u7684React\u6765\u8bf4\uff0c\u7ec4\u4ef6\u53ef\u4ee5\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff0c\u5206\u522b\u662f\u201cRender/Reconciliation phase\u201d\u548c"Commit phase"\uff0c\u53ef\u4ee5\u5728\u5b98\u65b9\u7684\u751f\u547d\u5468\u671f\u56fe\u8c31\u770b\u5230\u5177\u4f53\u7684\u4fe1\u606f\u3002\u7b2c\u4e00\u4e2a\u9636\u6bb5\u662f\u6ca1\u6709\u526f\u4f5c\u7528\u7684\uff0c\u4e5f\u56e0\u6b64\u53ef\u4ee5\u88abReact\u6682\u505c\uff0c\u5e9f\u5f03\u53c8\u6216\u8005\u91cd\u65b0\u6267\u884c\uff1b\u800c\u7b2c\u4e8c\u4e2a\u9636\u6bb5\u4f1a\u6d89\u53ca\u5230\u5b9e\u9645\u7684DOM\uff0c\u662f\u6709\u526f\u4f5c\u7528\u7684\uff0c\u6240\u4ee5\u65e0\u6cd5\u88abReact\u6682\u505c\uff0c\u91cd\u65b0\u6267\u884c\u3002'),(0,o.kt)("p",null,"\u90a3\u4e48\u7ed3\u5408\u4e0a\u9762\u4e24\u6bb5\uff0c\u53ef\u4ee5\u77e5\u9053\u5904\u4e8e\u201cRender/Reconciliation phase\u201d\u7684\u4efb\u52a1A\uff0c\u5982\u679c\u6267\u884c\u65f6\u51fa\u73b0\u4e86\u4f18\u5148\u7ea7\u66f4\u9ad8\u7684\u4efb\u52a1B\uff0c\u4efb\u52a1A\u5c31\u4f1a\u88ab\u5e9f\u5f03\uff0c\u4e4b\u540e\u91cd\u65b0\u88ab\u6267\u884c\u3002"),(0,o.kt)("p",null,'\u4e3e\u4e2a\u4f8b\u5b50\u3002\u7531\u4e8ecomponentWillMount\u5df2\u7ecf\u8981\u88abReact\u5e9f\u5f03\u4e86\uff0c\u6240\u4ee5\u5728\u4ee5\u4e0a\u94fe\u63a5\u4e2d\u7684\u56fe\u8c31\u6ca1\u6709\u88ab\u6807\u51fa\u6765\uff0c\u5b83\u5176\u5b9e\u4e5f\u662f\u5c5e\u4e8e"Render/Reconciliation phase"\u7684\u3002\u90a3\u4e48\u5f53\u4e00\u4e2a\u7ec4\u4ef6\u5373\u5c06\u6302\u8f7d\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u5047\u5982\u5728\u8fd9\u4e4b\u540e\u6211\u4eec\u5c31\u78b0\u5230\u4e86\u4f18\u5148\u7ea7\u66f4\u9ad8\u7684\u4efb\u52a1\uff0c\u90a3\u4e48\u539f\u672c\u7684\u4efb\u52a1\u5c31\u4f1a\u88ab\u5e9f\u5f03\uff0c\u5e76\u5728\u4e4b\u540e\u88ab\u91cd\u65b0\u8c03\u7528\u3002\u5bfc\u81f4\u7684\u7ed3\u679c\u5c31\u662fcomponentWillMount\u88ab\u8c03\u7528\u4e86\u4e24\u6b21\uff0c\u8fd9\u662f\u4e00\u4e2a\u503c\u5f97\u6ce8\u610f\u7684\u70b9\u3002'),(0,o.kt)("h2",{id:"diff\u7b56\u7565"},"Diff\u7b56\u7565"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/20346379"},"\u53c2\u8003")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Web UI \u4e2d DOM \u8282\u70b9\u8de8\u5c42\u7ea7\u7684\u79fb\u52a8\u64cd\u4f5c\u7279\u522b\u5c11\uff0c\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u62e5\u6709\u76f8\u540c\u7c7b\u7684\u4e24\u4e2a\u7ec4\u4ef6\u5c06\u4f1a\u751f\u6210\u76f8\u4f3c\u7684\u6811\u5f62\u7ed3\u6784\uff0c\u62e5\u6709\u4e0d\u540c\u7c7b\u7684\u4e24\u4e2a\u7ec4\u4ef6\u5c06\u4f1a\u751f\u6210\u4e0d\u540c\u7684\u6811\u5f62\u7ed3\u6784\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u540c\u4e00\u5c42\u7ea7\u7684\u4e00\u7ec4\u5b50\u8282\u70b9\uff0c\u5b83\u4eec\u53ef\u4ee5\u901a\u8fc7\u552f\u4e00 id \u8fdb\u884c\u533a\u5206\u3002")),(0,o.kt)("p",null,"\u9488\u5bf9\u7b2c\u4e00\u70b9\u7b56\u7565\uff0cReact\u53ea\u5bf9\u65b0\u8001\u6811\u8fdb\u884c\u540c\u5c42\u7684\u6bd4\u8f83\uff08Vue\u4e5f\u662f\u5982\u6b64\uff09\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"tree diff")),(0,o.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e\u7b56\u7565\u4e00\uff0cReact \u5bf9\u6811\u7684\u7b97\u6cd5\u8fdb\u884c\u4e86\u7b80\u6d01\u660e\u4e86\u7684\u4f18\u5316\uff0c\u5373\u5bf9\u6811\u8fdb\u884c\u5206\u5c42\u6bd4\u8f83\uff0c\u4e24\u68f5\u6811\u53ea\u4f1a\u5bf9\u540c\u4e00\u5c42\u6b21\u7684\u8282\u70b9\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u65e2\u7136 DOM \u8282\u70b9\u8de8\u5c42\u7ea7\u7684\u79fb\u52a8\u64cd\u4f5c\u5c11\u5230\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\uff0c\u9488\u5bf9\u8fd9\u4e00\u73b0\u8c61\uff0cReact \u901a\u8fc7 updateDepth \u5bf9 Virtual DOM \u6811\u8fdb\u884c\u5c42\u7ea7\u63a7\u5236\uff0c\u53ea\u4f1a\u5bf9\u76f8\u540c\u989c\u8272\u65b9\u6846\u5185\u7684 DOM \u8282\u70b9\u8fdb\u884c\u6bd4\u8f83\uff0c\u5373\u540c\u4e00\u4e2a\u7236\u8282\u70b9\u4e0b\u7684\u6240\u6709\u5b50\u8282\u70b9\u3002\u5f53\u53d1\u73b0\u8282\u70b9\u5df2\u7ecf\u4e0d\u5b58\u5728\uff0c\u5219\u8be5\u8282\u70b9\u53ca\u5176\u5b50\u8282\u70b9\u4f1a\u88ab\u5b8c\u5168\u5220\u9664\u6389\uff0c\u4e0d\u4f1a\u7528\u4e8e\u8fdb\u4e00\u6b65\u7684\u6bd4\u8f83\u3002\u8fd9\u6837\u53ea\u9700\u8981\u5bf9\u6811\u8fdb\u884c\u4e00\u6b21\u904d\u5386\uff0c\u4fbf\u80fd\u5b8c\u6210\u6574\u4e2a DOM \u6811\u7684\u6bd4\u8f83\u3002")),(0,o.kt)("p",null,"\u9488\u5bf9\u7b2c\u4e8c\u70b9\u7b56\u7565\uff0c\u5f53React\u9047\u5230\u4e0d\u540c\u7c7b\u7684\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u5c06\u65e7\u7ec4\u4ef6\u5220\u9664\uff0c\u5e76\u589e\u52a0\u65b0\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u670d\u52a1\u7aef\u6e32\u67d3ssr"},"\u670d\u52a1\u7aef\u6e32\u67d3(SSR)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Messiahhh/react-ssr-demo"},"\u5b8c\u6574\u4ee3\u7801\u4f8b\u5b50")),(0,o.kt)("p",null,"\u901a\u5e38\u8fdb\u884c\u5ba2\u6237\u7aef\u6e32\u67d3\u65f6\uff0c\u5148\u4ece\u540e\u7aef\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},"\u7a7a\u9875\u9762"),"\uff0c\u901a\u8fc7\u4ee3\u7801\u6e32\u67d3\u51fa",(0,o.kt)("strong",{parentName:"p"},"\u6a21\u677f\u9875\u9762"),"\uff0c\u518d\u4ece\u540e\u7aef\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},"\u52a8\u6001\u6570\u636e"),"\uff0c\u4e4b\u540e\u518d\u6e32\u67d3\u51fa",(0,o.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u9875\u9762"),"\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u5f53\u8fdb\u884c\u670d\u52a1\u7aef\u6e32\u67d3\u65f6\uff0c\u6211\u4eec\u5e0c\u671b",(0,o.kt)("strong",{parentName:"p"},"\u5728\u670d\u52a1\u7aef\u83b7\u53d6\u52a8\u6001\u6570\u636e"),"\uff0c\u5e76\u5728",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u6e32\u67d3\u51fa\u5b8c\u6574\u9875\u9762\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u540e\u7aef\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"react-dom/server"),"\u63d0\u4f9b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"renderToString"),"\u6765\u751f\u6210\u9759\u6001\u9875\u9762\uff0c\u9759\u6001\u9875\u9762\u88ab\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5728\u524d\u7aef\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"react-dom"),"\u63d0\u4f9b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate"),"\u6765\u7ed9\u9759\u6001\u6807\u8bb0\u9644\u52a0\u4e8b\u4ef6\u3001\u751f\u547d\u5468\u671f\u7b49\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// server.js \u540e\u7aef\nimport { renderToString } from \'react-dom/server\'\n\nconst content = renderToString(<App />)\nctx.body = `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>React App</title>\n    </head>\n    <body>\n        <div id="root">${content}</div>\n        <script src="/client.js"><\/script>\n    </body>\n    </html>\n`\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// client.js \u524d\u7aef\nimport { hydrate } from 'react-dom'\n\nhydrate(<App />, document.querySelector('#root'))\n")),(0,o.kt)("h3",{id:"\u540c\u6784"},"\u540c\u6784"),(0,o.kt)("p",null,"\u6240\u8c13\u540c\u6784\uff0c\u6307\u7684\u662f\u4e00\u4efd\u4ee3\u7801\u53ef\u4ee5\u5206\u522b\u5728\u524d\u7aef\u548c\u540e\u7aef\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u4e0a\u8ff0\u4ee3\u7801\u4f8b\u5b50\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"App"),"\u7ec4\u4ef6\uff0c\u5206\u522b\u5728\u524d\u540e\u7aef\u8fd0\u884c\u4e86\u4e00\u6b21\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u53ea\u6709\u5728\u524d\u7aef\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate"),"\u540e\u624d\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684\u751f\u547d\u5468\u671f\u6216\u4e8b\u4ef6\uff0c\u800c\u4ec5\u5728\u540e\u7aef\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"renderToString"),"\u65f6\u5e76\u4e0d\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff0c\u6240\u4ee5\u6211\u4eec\u65e0\u6cd5\u901a\u8fc7\u751f\u547d\u5468\u671f\u5728\u540e\u7aef\u83b7\u53d6\u52a8\u6001\u6570\u636e\u3002"),(0,o.kt)("h3",{id:"\u670d\u52a1\u7aef\u52a0\u8f7d\u6570\u636e"},"\u670d\u52a1\u7aef\u52a0\u8f7d\u6570\u636e"),(0,o.kt)("p",null,"\u901a\u5e38\u4f7f\u7528\u670d\u52a1\u7aef\u6e32\u67d3\u90fd\u4f1a\u7528\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"redux")," \uff0c\u8981\u6ce8\u610f\u540e\u7aef\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"StaticRouter"),"\u800c\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserRouter")),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u670d\u52a1\u7aef\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\uff0c\u518d\u8c03\u7528\u6307\u5b9a\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u52a8\u6001\u6570\u636e\uff0c\u5e76\u66f4\u65b0",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u7684\u503c\u3002\u5728\u8fd9\u4e4b\u540e\u518d\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Provider"),"\u7684\u503c\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"renderToString"),"\u6e32\u67d3\u5b8c\u6574\u7684\u9875\u9762\u3002"),(0,o.kt)("p",null,"\u6d4f\u89c8\u5668\u6536\u5230\u9759\u6001\u9875\u9762\u540e\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate"),"\u7ed9\u9759\u6001\u9875\u9762\u7ed1\u5b9a\u4e8b\u4ef6\u65f6\u6211\u4eec\u4e5f\u9700\u8981\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"Provider"),"\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u3002\u6240\u4ee5\u5728\u4e4b\u524d\u6e32\u67d3\u5b8c\u6574\u9875\u9762\u65f6\u53ef\u4ee5\u5728\u9875\u9762\u63d2\u5165\u4e00\u6bb5",(0,o.kt)("inlineCode",{parentName:"p"},"window.__STATE__ = XXX"),"\uff0c\u4ece\u800c\u8fdb\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u5728\u524d\u540e\u7aef\u7684\u4f20\u9012\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const loadData = () => (dispatch) => {\n    dispatch(setFetching(true))\n    return axios.get('http://localhost:3000/getData')\n        .then(res => {\n            dispatch(setLists(res.data.lists))\n        })\n        .catch(err => console.log(err))\n}\n\n\nexport const load = (store) => {\n    return store.dispatch(loadData())\n}\n\nexport const routes = [\n    {\n        path: '/',\n        key: 'home',\n        component: Contain,\n        loadData: load, // \u5728\u8fd9\u91cc\u52a0\u8f7d\u6570\u636e\n        exact: true,\n    },\n    {\n        path: '/signup',\n        key: 'signup',\n        component: Signup\n    },\n]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// server.js \u540e\u7aef\napp.use(async (ctx) => {\n    const store = configureStore(initialState) // \u521b\u5efastore\n    const promiseArr = []\n    routes.forEach(route => {\n        if (route.loadData) {\n            promiseArr.push(route.loadData(store)) // \u52a0\u8f7d\u6570\u636e\n        }\n    })\n    await Promise.all(promiseArr) // \u9700\u8981\u7b49\u6240\u6709\u6570\u636e\u90fd\u52a0\u8f7d\u5b8c\u6bd5\n    const content = await renderToHTML(ctx.url, store) // \u751f\u6210\u5b8c\u6574\u9875\u9762\n    ctx.body = content\n})\n\nexport default async function renderToHTML(url, store) {\n    const template = await fs.readFileAsync((`./template/index.html`), 'utf8')\n      \n    const content = renderToString(\n        <Provider store={store}> // \u6b64\u65f6store\u5df2\u7ecf\u662f\u6700\u65b0\u503c\n            <StaticRouter location={url}>\n                <App />\n            </StaticRouter>\n        </Provider>\n    )\n    \n    // \u540e\u7aef\u628astore\u653e\u5728window\u91cc\uff0c\u4ece\u800c\u5411\u524d\u7aef\u4f20\u9012\n    const state = `\n        <script>\n            window.__STATE__ = ${JSON.stringify(store.getState())} \n        <\/script>\n    `\n    return template\n    .replace(`\x3c!-- CONTENT --\x3e`, content)\n    .replace(`\x3c!-- STATE --\x3e`, state)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// client.js \u524d\u7aef\nexport default function App() {\n    return (\n        <Switch>\n            {\n                routes.map(route => {\n                    return <Route  {...route}></Route> \n                })\n            }\n        </Switch>\n    )\n}\n\nconst state = window.__STATE__ // \u83b7\u53d6\u540e\u7aef\u4f20\u8fc7\u6765\u7684store\n\ndelete window.__STATE__\n\nconst store = configureStore(state)\n\nhydrate(\n    <Provider store={store}>\n        <Router>\n            <App />\n        </Router>\n    </Provider>, \n    document.querySelector('#root')\n)\n")),(0,o.kt)("h3",{id:"\u670d\u52a1\u7aef\u52a0\u8f7dcss"},"\u670d\u52a1\u7aef\u52a0\u8f7dCSS"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"App"),"\u7ec4\u4ef6\u4e2d\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"import 'index.css'"),"\u6765\u52a0\u8f7d\u6837\u5f0f\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"style-loader"),"\u6765\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"document.createElement('style')"),"\u521b\u5efa\u6807\u7b7e\uff0c\u53c8\u56e0\u4e3aNode\u73af\u5883\u4e2d\u5e76\u4e0d\u5b58\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\u53d8\u91cf\uff0c\u6240\u4ee5\u8fd9\u79cd\u601d\u8def\u662f\u884c\u4e0d\u901a\u7684\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u5207\u6362\u4e00\u4e0b\u601d\u8def\uff0c\u4e0e\u5176\u5f15\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"index.css"),"\u65f6\u81ea\u52a8\u521b\u5efa\u6807\u7b7e\uff0c\u6211\u4eec\u5b9e\u9645\u4e0a\u53ef\u4ee5\u5728\u5f15\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"index.css"),"\u540e\uff0c\u83b7\u53d6\u5bf9\u5e94\u7684\u6837\u5f0f\u4fe1\u606f\uff0c\u518d\u624b\u52a8\u7684\u5728\u6a21\u677fHTML\u4e2d\u6dfb\u52a0\u8fd9\u6bb5\u4fe1\u606f\uff0c\u5c31\u50cf\u6211\u4eec\u4e4b\u524d\u624b\u52a8\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"CONTENT"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"STATE"),"\u4e00\u6837\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8be5\u76ee\u7684\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"isomorphic-style-loader"),"\uff0c\u5e76\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u914d\u7f6e\u4e2d\u66ff\u6362\u6389\u539f\u672c\u7528\u6765\u8f6c\u6362CSS\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"style-loader"),"\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u5f15\u5165\u6837\u5f0f\u6587\u4ef6\u65f6\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa\u6807\u7b7e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\n{\n    test: /\\.module\\.css$/,\n    use: ["isomorphic-style-loader", {\n        loader: "css-loader",\n        options: {\n            importLoaders: 1,\n            esModule: false, // \u6ce8\u610f\u8fd9\u91cc\n        }\n    },\n    "postcss-loader"\n],\n')),(0,o.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u4e0e",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kriasoft/isomorphic-style-loader"},"\u5b98\u7f51\u6587\u6863\u4e0a\u7684\u4f8b\u5b50"),"\u4e0d\u540c\uff0c\u6211\u8fd9\u91cc\u4f7f\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"esModule: false"),"\u3002\u8fd9\u4e3b\u8981\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader"),"\u7248\u672c\u7684\u5dee\u5f02\u5bfc\u81f4\u7684\uff0c\u5728\u4e00\u4e9b\u8001\u7684\u6559\u7a0b\u548c\u6587\u6863\u4e2d\u53ef\u80fd\u4f7f\u7528\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader@3.x"),"\uff0c\u800c\u6700\u65b0\u7684\u7248\u672c\u5df2\u7ecf\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader@5.x"),"\u4e86\u3002",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/63458657/isomorphic-style-loader-doesnt-work-as-it-supposed-to/63983963#63983963"},"\u5728\u6700\u65b0\u7684\u60c5\u51b5\u4e0b"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader"),"\u4f1a\u751f\u6210\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"es\u6a21\u5757"),"\uff0c\u800c",(0,o.kt)("inlineCode",{parentName:"p"},"isomorphic-style-loader"),"\u9700\u8981\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"commonjs\u6a21\u5757"),"\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u6709\u7684\u6559\u7a0b\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"StaticRouter"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"\u6765\u5b9e\u73b0\u670d\u52a1\u7aef\u4e2dCSS\u7684\u52a0\u8f7d\uff0c\u800c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"isomorphic-style-loader"),"\u7684\u5b98\u7f51\u4e2d\uff0c\u4f7f\u7528\u7684\u662f\u5b83\u81ea\u5e26\u7684\u4e00\u4e9b\u5de5\u5177\u51fd\u6570\u6765\u5b9e\u73b0\uff0c\u6211\u53ef\u80fd\u66f4\u503e\u5411\u4e8e\u540e\u8005\u5427\u3002"),(0,o.kt)("p",null,"\u603b\u4e4b\uff0c\u5728\u914d\u7f6e\u597d\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u8ddf\u7740\u5b98\u7f51\u7684\u6559\u7a0b\u6765\u5b9e\u73b0\u670d\u52a1\u7aef\u52a0\u8f7dCSS\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// server.js \u540e\u7aef\nconst css = new Set() // CSS for all rendered React components\nconst insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))\nconst body = ReactDOM.renderToString(\n    <StyleContext.Provider value={{ insertCss }}>\n      <App />\n    </StyleContext.Provider>\n)\nconst html = `<!doctype html>\n    <html>\n      <head>\n        <script src="client.js" defer><\/script>\n        <style>${[...css].join(\'\')}</style>\n      </head>\n      <body>\n        <div id="root">${body}</div>\n      </body>\n    </html>\n`\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// client.js \u524d\u7aef\n\nimport React from 'react'\nimport withStyles from 'isomorphic-style-loader/withStyles'\nimport s from './App.scss'\n\nfunction App(props, context) {\n  return (\n    <div className={s.root}>\n      <h1 className={s.title}>Hello, world!</h1>\n    </div>\n  )\n}\n\nexport default withStyles(s)(App) // <--\n\nconst insertCss = (...styles) => {\n  // \u4e0d\u8fc7\uff0c\u8fd9\u4e24\u884c\u4ee3\u7801\u6709\u5fc5\u8981\u4e48\n  const removeCss = styles.map(style => style._insertCss())\n  return () => removeCss.forEach(dispose => dispose())\n}\n\nReactDOM.hydrate(\n  <StyleContext.Provider value={{ insertCss }}>\n    <App />\n  </StyleContext.Provider>,\n  document.getElementById('root')\n)\n")),(0,o.kt)("h2",{id:"nextjs"},"Next.js"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"next.js"),"\u662f\u4e00\u4e2aReact\u7684\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6\uff0c\u5b83\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u4e86\u7ea6\u675f\uff0c\u5e76\u63d0\u4f9b\u4e86\u8bb8\u591a\u6709\u7528\u7684\u5185\u90e8\u7ec4\u4ef6\uff0c\u4ece\u800c\u63d0\u4f9b\u5feb\u901f\u7684\u5f00\u53d1\u80fd\u529b"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5e26\u5bf9",(0,o.kt)("inlineCode",{parentName:"li"},"CSS Module"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"css-in-js"),"\u7684\u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u76ee\u5f55\u7ed3\u6784\u5212\u5206\u524d\u7aef\u8def\u7531\uff0c\u5e76\u652f\u6301\u52a8\u6001\u8def\u7531\u7b49\u529f\u80fd"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e24\u79cd\u9884\u6e32\u67d3\u65b9\u6848\uff1a\u2460\u9759\u6001\u751f\u6210\u7684\u9875\u9762\uff0c\u5373\u5728\u9879\u76ee\u6784\u5efa\u65f6\u751f\u6210\u9759\u6001\u9875\u9762\uff1b\u2461\u670d\u52a1\u7aef\u6e32\u67d3\uff0c\u5373\u6bcf\u6b21\u6536\u5230\u8bf7\u6c42\u65f6\u6784\u5efa\u4e00\u6b21\u9875\u9762\u3002")),(0,o.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u6211\u89c9\u5f97\u662f\u4e2a\u5f88\u4f18\u79c0\u7684\u6846\u67b6\uff0c\u62ff\u6765\u642d\u5efa\u535a\u5ba2\u4e5f\u662f\u4e2a\u975e\u5e38\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u90e8\u7f72\u5728\u5b83\u5bb6\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Vercel"),"\u5e73\u53f0\u4e5f\u5341\u5206\u65b9\u4fbf\u3002"),(0,o.kt)("h2",{id:"create-react-app"},"Create-React-App"),(0,o.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,o.kt)("p",null,"\u901a\u5e38\u9879\u76ee\u90fd\u4f1a\u5b58\u5728\u6d4b\u8bd5\u73af\u5883\u548c\u6b63\u5f0f\u73af\u5883\uff0c\u4e0d\u540c\u73af\u5883\u4e0b\u63a5\u53e3\u8bf7\u6c42\u7684\u8def\u5f84\u4e5f\u662f\u4e0d\u540c\u7684\u3002\u800c",(0,o.kt)("inlineCode",{parentName:"p"},"CRA"),"\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"process.env"),"\u8ba9\u6211\u4eec\u5728\u524d\u7aef\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u4ece\u800c\u53ef\u4ee5\u6839\u636e\u73af\u5883\u7684\u4e0d\u540c\u8bbe\u7f6e\u4e0d\u540c\u7684\u63a5\u53e3\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// process.env \u9ed8\u8ba4\u503c\n{\n    NODE_ENV: "development" | "production" | "test"\n    PUBLIC_URL: ""\n    WDS_SOCKET_HOST: undefined\n    WDS_SOCKET_PATH: undefined\n    WDS_SOCKET_PORT: undefined\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u7528\u7684\u6700\u591a\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u901a\u5e38\u5f53\u6211\u4eec\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"npm build"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"npm test"),"\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\u7684\u503c\u5206\u522b\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"development"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"production"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"\u3002\u53e6\u5916",(0,o.kt)("inlineCode",{parentName:"p"},"PUBLIC_URL"),"\u4e5f\u53ef\u4ee5\u5728\u6a21\u677fHTML\u4e2d\u770b\u5230\u5b83\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5df1\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\u6211\u4eec\u8bbe\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u5fc5\u987b\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_APP_"),"\u5f00\u5934\u624d\u80fd\u88ab",(0,o.kt)("inlineCode",{parentName:"p"},"process.env"),"\u8bfb\u53d6\u5230\uff0c\u6bd4\u5982\u53ef\u4ee5\u8fd9\u4e48\u5199\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dev": "cross-env REACT_APP_MY_ENV=development react-scripts start"\n}\n')),(0,o.kt)("h3",{id:"rewired"},"rewired"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),"\u521b\u5efa\u7684\u9879\u76ee\uff0c\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u914d\u7f6e\u7b49\u4fe1\u606f\u5bf9\u6211\u4eec\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u4e5f\u662f\u4e0d\u53ef\u76f4\u63a5\u4fee\u6539\u7684\u3002"),(0,o.kt)("p",null,"\u7136\u800c\u5728\u6709\u4e9b\u573a\u5408\u6211\u4eec\u8fd8\u662f\u5e0c\u671b\u80fd\u9002\u5ea6\u4fee\u6539\u914d\u7f6e\uff0c\u9664\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"eject"),"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u50cf",(0,o.kt)("inlineCode",{parentName:"p"},"react-app-rewired"),"\u8fd9\u6837\u7684\u5e93\u6765\u62d3\u5c55\u914d\u7f6e\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);
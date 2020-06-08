(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),c=(n(0),n(157)),o={title:"constSelector(constant)",sidebar_label:"constSelector()"},i={id:"api-reference/utils/constSelector",title:"constSelector(constant)",description:"A [selector](/docs/api-reference/core/selector) which always provides a constant value.",source:"@site/docs/api-reference/utils/constSelector.md",permalink:"/docs/api-reference/utils/constSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/constSelector.md",sidebar_label:"constSelector()",sidebar:"someSidebar",previous:{title:"selectorFamily(options)",permalink:"/docs/api-reference/utils/selectorFamily"},next:{title:"errorSelector(message)",permalink:"/docs/api-reference/utils/errorSelector"}},l=[{value:"Example",id:"example",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/selector"}),"selector")," which always provides a constant value."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function constSelector<T: Parameter>(constant: T): RecoilValueReadOnly<T>\n")),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"constSelector")," may be useful if you have an interface that uses a type such as ",Object(c.b)("inlineCode",{parentName:"p"},"RecoilValue<T>")," or ",Object(c.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly<T>")," that may be provided by different selector implementations."),Object(c.b)("p",null,"These selectors will memoize based on reference value equality.  So, ",Object(c.b)("inlineCode",{parentName:"p"},"constSelector()")," can be called multiple times with the same value and the same selector will be provided.  Because of this, the value used as a contant is restricted to types that may be serialized using the Recoil serialization.  Please see documentation in ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/utils/selectorFamily"}),Object(c.b)("inlineCode",{parentName:"a"},"selectorFamily"))," describing the limitations."),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"type MyInterface = {|\n  queryForStuff: RecoilValue<Thing>,\n  ...\n|};\n\nconst myIntefaceInstance1 = {\n  queryForStuff: selectorThatDoesQuery,\n};\n\nconst myInterfaceInstance2 = {\n  queryForStuff: constSelector(thing),\n};\n")))}p.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(o,".").concat(f)]||u[f]||b[f]||c;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
import{r as i,j as t}from"./jsx-runtime-26afeca0.js";import{b as p,d as h,e as x,f as y,M as S,L as f,O as j,S as w}from"./components-868f5dae.js";/**
 * @remix-run/react v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function g({getKey:r,...l}){let o=p(),c=h();x({getKey:r,storageKey:a});let u=i.useMemo(()=>{if(!r)return null;let e=r(o,c);return e!==o.key?e:null},[]),d=((e,m)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let n=JSON.parse(sessionStorage.getItem(e)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(s){console.error(s),sessionStorage.removeItem(e)}}).toString();return i.createElement("script",y({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(u)})`}}))}const k=()=>null,O=()=>[];function v(){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(S,{}),t.jsx(f,{})]}),t.jsxs("body",{children:[t.jsx(j,{}),t.jsx(g,{}),t.jsx(k,{}),t.jsx(w,{})]})]})}export{v as default,O as links};

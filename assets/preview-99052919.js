var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{n as l,j as m,S as u,p as k}from"./iframe-655d5b22.js";import{m as p}from"./make-decorator-5b0a2a6f.js";var L="links",f=l.document,h=l.HTMLElement,E=n(function(e){return m.getChannel().emit(k,e)},"navigate"),d=n(function(e){var a=e.target;if(a instanceof h){var v=a,i=v.dataset,o=i.sbKind,s=i.sbStory;(o||s)&&(e.preventDefault(),E({kind:o,story:s}))}},"linksListener"),r=!1,g=n(function(){r||(r=!0,f.addEventListener("click",d))},"on"),S=n(function(){r&&(r=!1,f.removeEventListener("click",d))},"off"),T=p({name:"withLinks",parameterName:L,wrapper:n(function(e,a){return g(),m.getChannel().once(u,S),e(a)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var b=[T];export{b as decorators};
//# sourceMappingURL=preview-99052919.js.map

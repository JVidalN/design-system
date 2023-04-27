var I=Object.defineProperty;var t=(a,n)=>I(a,"name",{value:n,configurable:!0});import{j as e,a as s,F as v}from"./jsx-runtime-a0b48ef0.js";import{A as C,u as g,M as j,C as p,S as u,a as h}from"./Props-16357187.js";import"./iframe-aed1102b.js";import{a as y}from"./index-9201d692.js";import{i as S,I as c}from"./Icon-79f62659.js";import"./string-56c4cb92.js";import"./es.map.constructor-e3421e4a.js";import"./es.number.to-fixed-55385441.js";import"./make-decorator-413b56e0.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";const l=Object.keys(S),i=t(a=>e(c,a),"IconTemplate");function f(a){const n=Object.assign({div:"div",h1:"h1",blockquote:"blockquote",p:"p",code:"code",h2:"h2",h3:"h3",span:"span"},g(),a.components);return s(v,{children:[e(j,{title:"Design System/Componentes/Icon",component:c,decorators:[r=>e(n.div,{className:"drop-shadow-md",children:e(n.div,{className:"w-24 h-24 bg-neutral-light-base rounded-lg flex flex-col items-center justify-center",children:r()})})],args:{name:"user",color:"text-brand-primary-dark",width:"24px",height:"24px"},argTypes:{color:{table:{disable:!0}},name:{options:l},onClick:{table:{disable:!0}}}}),`
`,`
`,e(n.h1,{children:"Icon"}),`
`,s(n.blockquote,{children:[`
`,s(n.p,{children:["O componente ",e(n.code,{children:"Icon"})," é um componente que exibe uma imagem ou símbolo gráfico usado para representar uma ação, item ou conceito em uma interface gráfica do usuário (GUI)."]}),`
`]}),`
`,e(n.h2,{children:"Variantes"}),`
`,e(n.h3,{children:"Default"}),`
`,e(p,{withToolbar:!0,children:e(u,{name:"Default",children:i.bind({})})}),`
`,e(h,{story:"Default"}),`
`,e(n.h3,{children:"Com ação"}),`
`,e(p,{withToolbar:!0,children:e(u,{name:"Clickable",args:{onClick:y("Ícone clicado!")},children:i.bind({})})}),`
`,e(h,{story:"Clickable"}),`
`,e(n.h3,{children:"Todos"}),`
`,e(p,{withToolbar:!0,children:e(u,{name:"AllIcons",children:r=>{const{name:d,...m}=r;return e(n.div,{className:"w-screen h-screen flex flex-row gap-2 flex-wrap py-4 px-4 items-center justify-center",children:l.map((b,N)=>e(n.div,{className:"drop-shadow-md",children:s(n.div,{className:"w-20 h-20 bg-neutral-light-base rounded-lg flex flex-col items-center justify-center",children:[e(c,Object.assign({name:b},m)),e(n.span,{className:"text-xs text-neutral-dark-dark02",children:b})]})},N))})}})}),`
`,e(h,{story:"AllIcons"})]})}t(f,"_createMdxContent");function T(a={}){const{wrapper:n}=Object.assign({},g(),a.components);return n?e(n,Object.assign({},a,{children:e(f,a)})):f(a)}t(T,"MDXContent");const k=i.bind({});k.storyName="Default";k.parameters={storySource:{source:"args => <Icon {...args} />"}};const x=i.bind({});x.storyName="Clickable";x.args={onClick:y("Ícone clicado!")};x.parameters={storySource:{source:"args => <Icon {...args} />"}};const w=t(a=>{const{name:n,...r}=a;return e("div",{className:"w-screen h-screen flex flex-row gap-2 flex-wrap py-4 px-4 items-center justify-center",children:l.map((d,m)=>e("div",{className:"drop-shadow-md",children:s("div",{className:"w-20 h-20 bg-neutral-light-base rounded-lg flex flex-col items-center justify-center",children:[e(c,{name:d,...r}),e("span",{className:"text-xs text-neutral-dark-dark02",children:d})]})},m))})},"allIcons");w.storyName="AllIcons";w.parameters={storySource:{source:`args => {
  const {
    name,
    ...rest
  } = args;
  return <div className="w-screen h-screen flex flex-row gap-2 flex-wrap py-4 px-4 items-center justify-center">
                  {iconNamesAsType.map((iconName, idx) => {
      return <div key={idx} className="drop-shadow-md">
                            <div className="w-20 h-20 bg-neutral-light-base rounded-lg flex flex-col items-center justify-center">  
                              <Icon name={iconName} {...rest} /> 
                              <span className="text-xs text-neutral-dark-dark02">{iconName}</span>
                            </div>
                        </div>;
    })}
                </div>;
}`}};const o={title:"Design System/Componentes/Icon",decorators:[a=>e("div",{className:"drop-shadow-md",children:e("div",{className:"w-24 h-24 bg-neutral-light-base rounded-lg flex flex-col items-center justify-center",children:a()})})],component:c,args:{name:"user",color:"text-brand-primary-dark",width:"24px",height:"24px"},argTypes:{color:{table:{disable:!0}},name:{options:l},onClick:{table:{disable:!0}}},includeStories:["defaultStory","clickable","allIcons"]},D={Default:"defaultStory",Clickable:"clickable",AllIcons:"allIcons"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(C,{mdxStoryNameToKey:D,mdxComponentAnnotations:o,children:e(T,{})})};const V=["IconTemplate","defaultStory","clickable","allIcons"];export{i as IconTemplate,V as __namedExportsOrder,w as allIcons,x as clickable,o as default,k as defaultStory};
//# sourceMappingURL=Icon.stories-c3dee75b.js.map

var b=Object.defineProperty;var i=(t,o)=>b(t,"name",{value:o,configurable:!0});import{j as e,a as r,F as f}from"./jsx-runtime-a0b48ef0.js";import{A as g,u as C,M as T,C as m,S as l,a as h}from"./Props-16357187.js";import"./iframe-aed1102b.js";import{B as y}from"./Button-4e57b723.js";import{I as S}from"./Icon-79f62659.js";import{V as p}from"./VoidState-3cec4adb.js";import"./string-56c4cb92.js";import"./es.map.constructor-e3421e4a.js";import"./es.number.to-fixed-55385441.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";const a=i(({children:t})=>e(p,{children:t}),"VoidStateTemplate");function x(t){const o=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",span:"span"},C(),t.components);return r(f,{children:[e(T,{title:"Design System/Componentes/VoidState",component:p,argTypes:{children:{table:{defaultValue:{summary:"empty"}}}}}),`
`,`
`,e(o.h1,{children:"Estado Vazio"}),`
`,r(o.blockquote,{children:[`
`,r(o.p,{children:["O componente ",e(o.code,{children:"VoidState"})," representa um estado vazio, e pode ser utilizado dentro de outros elementos. ",e("br",{}),`
É responsivo e o tamanho se adapta ao tamanho máximo do elemento que o encapsula.`]}),`
`]}),`
`,e(o.h2,{children:"Variantes"}),`
`,e(o.h3,{children:"Default"}),`
`,e(m,{withToolbar:!0,children:e(l,{name:"Default",decorators:[n=>e(o.div,{className:"w-[526px] h-[310px]",children:n()})],children:a.bind({})})}),`
`,e(h,{story:"Default"}),`
`,e(o.h3,{children:"Com Texto"}),`
`,e(m,{withToolbar:!0,children:e(l,{name:"Com Texto",args:{children:"Texto estado vazio"},decorators:[n=>e(o.div,{className:"w-[526px] h-[310px]",children:n()})],children:a.bind({})})}),`
`,e(h,{story:"Com Texto"}),`
`,e(o.h3,{children:"Customizável"}),`
`,e(m,{withToolbar:!0,children:e(l,{name:"Com Customização",args:{children:r(o.div,{className:"w-96 flex flex-col text-center items-center gap-4",children:[e(S,{name:"social",width:"165px",height:"165px"}),e(o.span,{children:"Você ainda não cadastrou nenhum representante legal. Clique no botão abaixo para cadastrar:"}),e(y,{label:"Cadastrar representante legal"})]})},decorators:[n=>e(o.div,{className:"w-[526px] h-[310px]",children:n()})],children:a.bind({})})}),`
`,e(h,{story:"Com Customização"})]})}i(x,"_createMdxContent");function V(t={}){const{wrapper:o}=Object.assign({},C(),t.components);return o?e(o,Object.assign({},t,{children:e(x,t)})):x(t)}i(V,"MDXContent");const u=a.bind({});u.storyName="Default";u.parameters={storySource:{source:`({
  children
}) => <VoidState>{children}</VoidState>`}};u.decorators=[t=>e("div",{className:"w-[526px] h-[310px]",children:t()})];const c=a.bind({});c.storyName="Com Texto";c.args={children:"Texto estado vazio"};c.parameters={storySource:{source:`({
  children
}) => <VoidState>{children}</VoidState>`}};c.decorators=[t=>e("div",{className:"w-[526px] h-[310px]",children:t()})];const d=a.bind({});d.storyName="Com Customização";d.args={children:r("div",{className:"w-96 flex flex-col text-center items-center gap-4",children:[e(S,{name:"social",width:"165px",height:"165px"}),e("span",{children:"Você ainda não cadastrou nenhum representante legal. Clique no botão abaixo para cadastrar:"}),e(y,{label:"Cadastrar representante legal"})]})};d.parameters={storySource:{source:`({
  children
}) => <VoidState>{children}</VoidState>`}};d.decorators=[t=>e("div",{className:"w-[526px] h-[310px]",children:t()})];const s={title:"Design System/Componentes/VoidState",component:p,argTypes:{children:{table:{defaultValue:{summary:"empty"}}}},includeStories:["defaultStory","comTexto","comCustomizacao"]},v={Default:"defaultStory","Com Texto":"comTexto","Com Customização":"comCustomizacao"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(g,{mdxStoryNameToKey:v,mdxComponentAnnotations:s,children:e(V,{})})};const X=["VoidStateTemplate","defaultStory","comTexto","comCustomizacao"];export{a as VoidStateTemplate,X as __namedExportsOrder,d as comCustomizacao,c as comTexto,s as default,u as defaultStory};
//# sourceMappingURL=VoidState.stories-f6cae1e3.js.map

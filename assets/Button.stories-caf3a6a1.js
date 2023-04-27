var D=Object.defineProperty;var s=(r,a)=>D(r,"name",{value:a,configurable:!0});import{j as e,a as l,F as b}from"./jsx-runtime-a0b48ef0.js";import{A as C,u as h,M as f,C as c,S as i,a as d}from"./Props-16357187.js";import"./iframe-aed1102b.js";import{a as o}from"./index-9201d692.js";import{B as m}from"./Button-4e57b723.js";import"./string-56c4cb92.js";import"./es.map.constructor-e3421e4a.js";import"./es.number.to-fixed-55385441.js";import"./make-decorator-413b56e0.js";import"./Icon-79f62659.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";const n=s(r=>e(m,r),"ButtonTemplate");function p(r){const a=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",h2:"h2",h3:"h3"},h(),r.components);return l(b,{children:[e(f,{title:"Design System/Componentes/Button",component:m,args:{disabled:!1,loading:!1,label:"Cadastrar simulação"},argTypes:{onClick:{action:"Primary Clicado!"}}}),`
`,`
`,e(a.h1,{children:"Button"}),`
`,l(a.blockquote,{children:[`
`,l(a.p,{children:["O componente ",e(a.code,{children:"Button"})," é um elemento de interface gráfica que permite ao usuário iniciar uma ação ou realizar uma tarefa específica ao clicar nele."]}),`
`]}),`
`,e(a.h2,{children:"Variantes"}),`
`,e(a.h3,{children:"Default"}),`
`,e(c,{withToolbar:!0,children:e(i,{name:"Default",children:n.bind({})})}),`
`,e(d,{story:"Default"}),`
`,e(a.h3,{children:"Secondary"}),`
`,e(c,{withToolbar:!0,children:e(i,{name:"Secondary",args:{variant:"secondary",onClick:o("Secondary Clicado!")},children:n.bind({})})}),`
`,e(d,{story:"Secondary"}),`
`,e(a.h3,{children:"Danger"}),`
`,e(c,{withToolbar:!0,children:e(i,{name:"Danger",args:{variant:"danger",label:"Rejeitar",onClick:o("Danger Clicado!")},children:n.bind({})})}),`
`,e(d,{story:"Danger"}),`
`,e(a.h3,{children:"Secondary Danger"}),`
`,e(c,{withToolbar:!0,children:e(i,{name:"Secondary Danger",args:{variant:"secondary-danger",label:"Rejeitar",onClick:o("Secondary Danger Clicado!")},children:n.bind({})})}),`
`,e(d,{story:"Secondary Danger"})]})}s(p,"_createMdxContent");function B(r={}){const{wrapper:a}=Object.assign({},h(),r.components);return a?e(a,Object.assign({},r,{children:e(p,r)})):p(r)}s(B,"MDXContent");const S=n.bind({});S.storyName="Default";S.parameters={storySource:{source:"args => <Button {...args} />"}};const g=n.bind({});g.storyName="Secondary";g.args={variant:"secondary",onClick:o("Secondary Clicado!")};g.parameters={storySource:{source:"args => <Button {...args} />"}};const y=n.bind({});y.storyName="Danger";y.args={variant:"danger",label:"Rejeitar",onClick:o("Danger Clicado!")};y.parameters={storySource:{source:"args => <Button {...args} />"}};const u=n.bind({});u.storyName="Secondary Danger";u.args={variant:"secondary-danger",label:"Rejeitar",onClick:o("Secondary Danger Clicado!")};u.parameters={storySource:{source:"args => <Button {...args} />"}};const t={title:"Design System/Componentes/Button",component:m,args:{disabled:!1,loading:!1,label:"Cadastrar simulação"},argTypes:{onClick:{action:"Primary Clicado!"}},includeStories:["defaultStory","secondary","danger","secondaryDanger"]},k={Default:"defaultStory",Secondary:"secondary",Danger:"danger","Secondary Danger":"secondaryDanger"};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(C,{mdxStoryNameToKey:k,mdxComponentAnnotations:t,children:e(B,{})})};const X=["ButtonTemplate","defaultStory","secondary","danger","secondaryDanger"];export{n as ButtonTemplate,X as __namedExportsOrder,y as danger,t as default,S as defaultStory,g as secondary,u as secondaryDanger};
//# sourceMappingURL=Button.stories-caf3a6a1.js.map

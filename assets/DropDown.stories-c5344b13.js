var j=Object.defineProperty;var l=(n,t)=>j(n,"name",{value:t,configurable:!0});import{r as s,a as i,j as e,F as q}from"./jsx-runtime-451690fa.js";import{A as _,u as S,M as G,C as h,S as f,a as b}from"./Props-d19cc01d.js";import"./iframe-655d5b22.js";import{a as m}from"./index-f6fb4ba6.js";import{I as M}from"./Icon-96a441ee.js";import"./string-3b6ee621.js";import"./es.map.constructor-9e179482.js";import"./es.number.to-fixed-56c36312.js";import"./make-decorator-5b0a2a6f.js";import"./index-50ee27ec.js";function u({className:n,placeholder:t,options:o,size:c="md",selectedValue:d,onChange:C,grouped:w=!1,...V}){const k=s.useRef(null),[,x]=s.useState(d),N=l(a=>{x(a.target.value),C(a.target.value)},"handleChange"),E=l(()=>o.map(a=>e("option",{value:a.value,children:a.label},a.value)),"ungroupedOptions"),O=l(()=>o.map(a=>e("optgroup",{label:Object.keys(a)[0],children:a[Object.keys(a)[0]].map(r=>e("option",{value:r.value,children:r.label},r.value))},Object.keys(a)[0])),"groupedOptions");return i("div",{className:`
        relative
        h-10
        w-full
        rounded-md
        text-neutral-dark-dark02
        bg-neutral-light-light01 
        border 
        border-neutral-dark-dark02
        focus-within:ring-1
        ring-brand-primary-dark
        ${l(a=>{let r="";switch(a){case"sm":return r="w-[180px]",r;case"md":return r="w-[250px]",r;case"lg":return r="w-80",r}},"getSizeStyle")(c)}
        ${n}
      `,children:[i("select",{ref:k,className:" block  appearance-none  bg-transparent w-full  px-4  py-2  pr-8  rounded focus:outline-none  focus:shadow-outline ",onChange:N,...V,defaultValue:"",children:[t&&e("option",{value:"",disabled:!0,children:t},"placeholder"),w?O():E()]}),e("div",{className:" pointer-events-none  absolute  inset-y-0  right-0  flex  items-center  px-3  text-neutral-dark-dark02 ",children:e(M,{name:"arrowDown",height:"8.5",width:"14"})})]})}l(u,"DropDown");try{u.displayName="DropDown",u.__docgenInfo={description:"",displayName:"DropDown",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOptionProps[] | SelectOptionGroupProps[]"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},grouped:{defaultValue:{value:"false"},description:"",name:"grouped",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const $=[{label:"New York",value:"NY"},{label:"Rome",value:"RM"},{label:"London",value:"LDN"},{label:"Istanbul",value:"IST"},{label:"Paris",value:"PRS"}],T=[{"Swedish Cars":[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"}]},{"German Cars":[{label:"Mercedes",value:"mercedes"},{label:"Audi",value:"audi"}]}],g={Data:$,Group:T};function y(n){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",h2:"h2",h3:"h3"},S(),n.components);return i(q,{children:[e(G,{title:"Design System/Componentes/DropDown",component:u,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}}}),`
`,e(t.h1,{children:"DropDown"}),`
`,i(t.blockquote,{children:[`
`,i(t.p,{children:["O componente ",e(t.code,{children:"DropDown"})," é uma lista suspensa de opções de seleção, que é exibida quando o usuário clica em um botão ou campo de seleção."]}),`
`]}),`
`,e(t.h2,{children:"Variantes"}),`
`,e(t.h3,{children:"Default"}),`
`,e(h,{withToolbar:!0,children:e(f,{name:"Default",children:o=>{const[c,d]=s.useState("");return s.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${c}`)},[c]),e(u,Object.assign({},o,{options:g.Data,selected:c,onChange:d}))}})}),`
`,e(b,{story:"Default"}),`
`,e(t.h3,{children:"Agrupado"}),`
`,e(h,{withToolbar:!0,children:e(f,{name:"Group",children:o=>{const[c,d]=s.useState("");return s.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${c}`)},[c]),e(u,Object.assign({},o,{options:g.Group,selected:c,onChange:d,grouped:!0}))}})}),`
`,e(b,{story:"Group"})]})}l(y,"_createMdxContent");function z(n={}){const{wrapper:t}=Object.assign({},S(),n.components);return t?e(t,Object.assign({},n,{children:e(y,n)})):y(n)}l(z,"MDXContent");const v=l(n=>{const[t,o]=s.useState("");return s.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${t}`)},[t]),e(u,{...n,options:g.Data,selected:t,onChange:o})},"defaultStory");v.storyName="Default";v.parameters={storySource:{source:`args => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    action("onChange Event")(\`Valor selecionado: \${selected}\`);
  }, [selected]);
  return <DropDown {...args} options={mock.Data} selected={selected} onChange={setSelected} />;
}`}};const D=l(n=>{const[t,o]=s.useState("");return s.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${t}`)},[t]),e(u,{...n,options:g.Group,selected:t,onChange:o,grouped:!0})},"group");D.storyName="Group";D.parameters={storySource:{source:`args => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    action("onChange Event")(\`Valor selecionado: \${selected}\`);
  }, [selected]);
  return <DropDown {...args} options={mock.Group} selected={selected} onChange={setSelected} grouped />;
}`}};const p={title:"Design System/Componentes/DropDown",component:u,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}},includeStories:["defaultStory","group"]},A={Default:"defaultStory",Group:"group"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(_,{mdxStoryNameToKey:A,mdxComponentAnnotations:p,children:e(z,{})})};const U=["defaultStory","group"];export{U as __namedExportsOrder,p as default,v as defaultStory,D as group};
//# sourceMappingURL=DropDown.stories-c5344b13.js.map

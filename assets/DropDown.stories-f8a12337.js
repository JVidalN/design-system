var O=Object.defineProperty;var l=(n,t)=>O(n,"name",{value:t,configurable:!0});import{r as c,a as d,j as e,F as j}from"./jsx-runtime-a0b48ef0.js";import{A as q,u as v,M as _,C as h,S as f,a as b}from"./Props-16357187.js";import"./iframe-aed1102b.js";import{a as m}from"./index-9201d692.js";import{I as G}from"./Icon-79f62659.js";import"./string-56c4cb92.js";import"./es.map.constructor-e3421e4a.js";import"./es.number.to-fixed-55385441.js";import"./make-decorator-413b56e0.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";function u({className:n,placeholder:t,options:o,size:s="md",selectedValue:p,onChange:C,grouped:w=!1,...V}){const k=c.useRef(null),x=l(a=>{C(a.target.value)},"handleChange"),N=l(()=>o.map(a=>e("option",{value:a.value,children:a.label},a.value)),"ungroupedOptions"),E=l(()=>o.map(a=>e("optgroup",{label:Object.keys(a)[0],children:a[Object.keys(a)[0]].map(r=>e("option",{value:r.value,children:r.label},r.value))},Object.keys(a)[0])),"groupedOptions");return d("div",{className:`
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
        ${l(a=>{let r="";switch(a){case"sm":return r="w-[180px]",r;case"md":return r="w-[250px]",r;case"lg":return r="w-80",r}},"getSizeStyle")(s)}
        ${n}
      `,children:[d("select",{ref:k,className:" block  appearance-none  bg-transparent w-full  px-4  py-2  pr-8  rounded focus:outline-none  focus:shadow-outline ",onChange:x,...V,defaultValue:"",children:[t&&e("option",{value:"",disabled:!0,children:t},"placeholder"),w?E():N()]}),e("div",{className:" pointer-events-none  absolute  inset-y-0  right-0  flex  items-center  px-3  text-neutral-dark-dark02 ",children:e(G,{name:"arrowDown",height:"8.5",width:"14"})})]})}l(u,"DropDown");try{u.displayName="DropDown",u.__docgenInfo={description:"",displayName:"DropDown",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOptionProps[] | SelectOptionGroupProps[]"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},grouped:{defaultValue:{value:"false"},description:"",name:"grouped",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=[{label:"New York",value:"NY"},{label:"Rome",value:"RM"},{label:"London",value:"LDN"},{label:"Istanbul",value:"IST"},{label:"Paris",value:"PRS"}],$=[{"Swedish Cars":[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"}]},{"German Cars":[{label:"Mercedes",value:"mercedes"},{label:"Audi",value:"audi"}]}],g={Data:M,Group:$};function y(n){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",h2:"h2",h3:"h3"},v(),n.components);return d(j,{children:[e(_,{title:"Design System/Componentes/DropDown",component:u,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}}}),`
`,e(t.h1,{children:"DropDown"}),`
`,d(t.blockquote,{children:[`
`,d(t.p,{children:["O componente ",e(t.code,{children:"DropDown"})," é uma lista suspensa de opções de seleção, que é exibida quando o usuário clica em um botão ou campo de seleção."]}),`
`]}),`
`,e(t.h2,{children:"Variantes"}),`
`,e(t.h3,{children:"Default"}),`
`,e(h,{withToolbar:!0,children:e(f,{name:"Default",children:o=>{const[s,p]=c.useState("");return c.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${s}`)},[s]),e(u,Object.assign({},o,{options:g.Data,selectedValue:s,onChange:p}))}})}),`
`,e(b,{story:"Default"}),`
`,e(t.h3,{children:"Agrupado"}),`
`,e(h,{withToolbar:!0,children:e(f,{name:"Group",children:o=>{const[s,p]=c.useState("");return c.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${s}`)},[s]),e(u,Object.assign({},o,{options:g.Group,selected:s,onChange:p,grouped:!0}))}})}),`
`,e(b,{story:"Group"})]})}l(y,"_createMdxContent");function T(n={}){const{wrapper:t}=Object.assign({},v(),n.components);return t?e(t,Object.assign({},n,{children:e(y,n)})):y(n)}l(T,"MDXContent");const S=l(n=>{const[t,o]=c.useState("");return c.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${t}`)},[t]),e(u,{...n,options:g.Data,selectedValue:t,onChange:o})},"defaultStory");S.storyName="Default";S.parameters={storySource:{source:`args => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    action("onChange Event")(\`Valor selecionado: \${selected}\`);
  }, [selected]);
  return <DropDown {...args} options={mock.Data} selectedValue={selected} onChange={setSelected} />;
}`}};const D=l(n=>{const[t,o]=c.useState("");return c.useEffect(()=>{m("onChange Event")(`Valor selecionado: ${t}`)},[t]),e(u,{...n,options:g.Group,selected:t,onChange:o,grouped:!0})},"group");D.storyName="Group";D.parameters={storySource:{source:`args => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    action("onChange Event")(\`Valor selecionado: \${selected}\`);
  }, [selected]);
  return <DropDown {...args} options={mock.Group} selected={selected} onChange={setSelected} grouped />;
}`}};const i={title:"Design System/Componentes/DropDown",component:u,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}},includeStories:["defaultStory","group"]},z={Default:"defaultStory",Group:"group"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(q,{mdxStoryNameToKey:z,mdxComponentAnnotations:i,children:e(T,{})})};const U=["defaultStory","group"];export{U as __namedExportsOrder,i as default,S as defaultStory,D as group};
//# sourceMappingURL=DropDown.stories-f8a12337.js.map

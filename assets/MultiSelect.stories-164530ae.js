var G=Object.defineProperty;var r=(l,t)=>G(l,"name",{value:t,configurable:!0});import{r as c,a as u,j as e,F as $}from"./jsx-runtime-8a7beee7.js";import{A as T,u as k,M as I,C as O,S as v,a as x}from"./Props-b6589c61.js";import"./iframe-78ed07bd.js";import{a as f}from"./index-ca834ea7.js";import{I as z}from"./Icon-abaf465f.js";import"./string-8238b9b7.js";import"./es.map.constructor-0018e916.js";import"./es.number.to-fixed-5347e8b2.js";import"./make-decorator-21a1830f.js";import"./inheritsLoose-b4b539fe.js";import"./index-3226ecaf.js";function p({options:l,placeholder:t,disabled:i=!1,size:a="md",onChange:m,selectedOptions:o,grouped:j=!1}){const[S,M]=c.useState(!1),D=r(()=>{M(!S)},"toggleOpen"),y=r(n=>{const s=[...o];if(o.find(d=>d.label===n.label)){const d=o.findIndex(g=>g.label===n.label);s.splice(d,1)}else s.push(n);m(s)},"handleOptionSelect"),V=r(n=>{let s="";switch(n){case"sm":return s="w-[180px]",s;case"md":return s="w-[250px]",s;case"lg":return s="w-80",s}},"getSizeStyle"),E=r(n=>{let s="";return n&&(s="pointer-events-none opacity-70"),s},"getDisabledStyle"),_=r(()=>e("ul",{children:l.map(n=>e("li",{children:u("label",{className:"flex items-center px-2",children:[e("input",{type:"checkbox",className:"h-4 w-4 mr-2 shadow",checked:o.find(s=>s.label===n.label)!==void 0,onChange:()=>y(n)}),e("span",{className:"text-sm",children:n.label})]})},n.label))}),"ungroupedOptions"),q=r(()=>l.map((n,s)=>u("ul",{children:[e("li",{children:e("label",{className:"flex items-center px-2",children:e("span",{className:"text-sm font-bold",children:Object.keys(n)[0]})})},Object.keys(n)[0]),n[Object.keys(n)[0]].map(d=>e("li",{children:u("label",{className:"flex items-center px-2",children:[e("input",{type:"checkbox",className:"h-4 w-4 mr-2 shadow",checked:o.find(g=>g.label===d.label)!==void 0,onChange:()=>y(d)}),e("span",{className:"text-sm",children:d.label})]})},d.label))]},s)),"groupedOptions");return u("div",{className:`
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
        ${V(a)}
        ${E(i)}
      `,children:[u("button",{type:"button",className:" flex  items-center  justify-between  w-full  px-4  p-[6px]  text-left  text-neutral-dark-dark02  rounded-md  bg-transparent  focus:outline-none  focus:shadow-outline ",onClick:D,children:[e("span",{className:"flex-1 truncate",children:o.length===0?t:o.map(n=>n.value).join(", ")}),e(z,{name:"arrowDown",height:"8.5",width:"14"})]}),S&&e("div",{className:" block  z-10  w-full  bg-transparent  border  border-neutral-dark-dark02  rounded-md  mt-1",children:j?q():_()})]})}r(p,"MultiSelect");try{p.displayName="MultiSelect",p.__docgenInfo={description:"",displayName:"MultiSelect",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"OptionProps[] | OptionGroupProps[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"OptionProps[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedOptions: OptionProps[]) => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},grouped:{defaultValue:{value:"false"},description:"",name:"grouped",required:!1,type:{name:"boolean"}}}}}catch{}const A=[{label:"New York",value:"NY"},{label:"Rome",value:"RM"},{label:"London",value:"LDN"},{label:"Istanbul",value:"IST"},{label:"Paris",value:"PRS"}],P=[{"Swedish Cars":[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"}]},{"German Cars":[{label:"Mercedes",value:"mercedes"},{label:"Audi",value:"audi"}]}],b={Data:A,Group:P};function C(l){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",h2:"h2",h3:"h3"},k(),l.components);return u($,{children:[e(I,{title:"Design System/Componentes/MultiSelect",component:p,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}}}),`
`,e(t.h1,{children:"MultiSelect"}),`
`,u(t.blockquote,{children:[`
`,u(t.p,{children:["O componente ",e(t.code,{children:"MultiSelect"})," é uma lista suspensa em que o usuário pode selecionar múltiplas opções de uma lista pré-definida."]}),`
`]}),`
`,e(t.h2,{children:"Variantes"}),`
`,e(t.h3,{children:"Default"}),`
`,e(O,{withToolbar:!0,children:e(v,{name:"Default",children:i=>{const[a,m]=c.useState([]);return c.useEffect(()=>{f("onChange Event")(`Valor(es) selecionado(s): ${a.map(o=>o.value).join(", ")}`)},[a]),e(p,Object.assign({},i,{options:b.Data,selectedOptions:a,onChange:o=>m(o)}))}})}),`
`,e(x,{story:"Default"}),`
`,e(t.h3,{children:"Agrupado"}),`
`,e(O,{withToolbar:!0,children:e(v,{name:"Group",children:i=>{const[a,m]=c.useState([]);return c.useEffect(()=>{f("onChange Event")(`Valor(es) selecionado(s): ${a.map(o=>o.value).join(", ")}`)},[a]),e(p,Object.assign({},i,{options:b.Group,selectedOptions:a,onChange:o=>m(o),grouped:!0}))}})}),`
`,e(x,{story:"Group"})]})}r(C,"_createMdxContent");function L(l={}){const{wrapper:t}=Object.assign({},k(),l.components);return t?e(t,Object.assign({},l,{children:e(C,l)})):C(l)}r(L,"MDXContent");const w=r(l=>{const[t,i]=c.useState([]);return c.useEffect(()=>{f("onChange Event")(`Valor(es) selecionado(s): ${t.map(a=>a.value).join(", ")}`)},[t]),e(p,{...l,options:b.Data,selectedOptions:t,onChange:a=>i(a)})},"defaultStory");w.storyName="Default";w.parameters={storySource:{source:`args => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    action("onChange Event")(\`Valor(es) selecionado(s): \${selectedOptions.map(o => o.value).join(", ")}\`);
  }, [selectedOptions]);
  return <MultiSelect {...args} options={mock.Data} selectedOptions={selectedOptions} onChange={selected => setSelectedOptions(selected)} />;
}`}};const N=r(l=>{const[t,i]=c.useState([]);return c.useEffect(()=>{f("onChange Event")(`Valor(es) selecionado(s): ${t.map(a=>a.value).join(", ")}`)},[t]),e(p,{...l,options:b.Group,selectedOptions:t,onChange:a=>i(a),grouped:!0})},"group");N.storyName="Group";N.parameters={storySource:{source:`args => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    action("onChange Event")(\`Valor(es) selecionado(s): \${selectedOptions.map(o => o.value).join(", ")}\`);
  }, [selectedOptions]);
  return <MultiSelect {...args} options={mock.Group} selectedOptions={selectedOptions} onChange={selected => setSelectedOptions(selected)} grouped />;
}`}};const h={title:"Design System/Componentes/MultiSelect",component:p,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}},includeStories:["defaultStory","group"]},R={Default:"defaultStory",Group:"group"};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:()=>e(T,{mdxStoryNameToKey:R,mdxComponentAnnotations:h,children:e(L,{})})};const te=["defaultStory","group"];export{te as __namedExportsOrder,h as default,w as defaultStory,N as group};
//# sourceMappingURL=MultiSelect.stories-164530ae.js.map

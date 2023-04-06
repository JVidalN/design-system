var $=Object.defineProperty;var o=(s,t)=>$(s,"name",{value:t,configurable:!0});import{r,a as u,j as e,F as T}from"./jsx-runtime-451690fa.js";import{A as I,u as w,M as z,C as v,S as x,a as C}from"./Props-d19cc01d.js";import"./iframe-655d5b22.js";import{a as b}from"./index-f6fb4ba6.js";import{I as A}from"./Icon-96a441ee.js";import"./string-3b6ee621.js";import"./es.map.constructor-9e179482.js";import"./es.number.to-fixed-56c36312.js";import"./make-decorator-5b0a2a6f.js";import"./index-50ee27ec.js";function p({options:s,placeholder:t,disabled:c=!1,size:l="md",onChange:h,grouped:i=!1}){const[m,M]=r.useState([]),[y,D]=r.useState(!1),E=o(()=>{D(!y)},"toggleOpen"),O=o(n=>{const a=[...m];if(m.find(d=>d.label===n.label)){const d=m.findIndex(S=>S.label===n.label);a.splice(d,1)}else a.push(n);M(a),h(a)},"handleOptionSelect"),V=o(n=>{let a="";switch(n){case"sm":return a="w-[180px]",a;case"md":return a="w-[250px]",a;case"lg":return a="w-80",a}},"getSizeStyle"),_=o(n=>{let a="";return n&&(a="pointer-events-none opacity-70"),a},"getDisabledStyle"),q=o(()=>e("ul",{children:s.map(n=>e("li",{children:u("label",{className:"flex items-center px-2",children:[e("input",{type:"checkbox",className:"h-4 w-4 mr-2 shadow",checked:m.find(a=>a.label===n.label)!==void 0,onChange:()=>O(n)}),e("span",{className:"text-sm",children:n.label})]})},n.label))}),"ungroupedOptions"),G=o(()=>s.map((n,a)=>u("ul",{children:[e("li",{children:e("label",{className:"flex items-center px-2",children:e("span",{className:"text-sm font-bold",children:Object.keys(n)[0]})})},Object.keys(n)[0]),n[Object.keys(n)[0]].map(d=>e("li",{children:u("label",{className:"flex items-center px-2",children:[e("input",{type:"checkbox",className:"h-4 w-4 mr-2 shadow",checked:m.find(S=>S.label===d.label)!==void 0,onChange:()=>O(d)}),e("span",{className:"text-sm",children:d.label})]})},d.label))]},a)),"groupedOptions");return u("div",{className:`
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
        ${V(l)}
        ${_(c)}
      `,children:[u("button",{type:"button",className:" flex  items-center  justify-between  w-full  px-4  p-[6px]  text-left  text-neutral-dark-dark02  rounded-md  bg-transparent  focus:outline-none  focus:shadow-outline ",onClick:E,children:[e("span",{className:"flex-1 truncate",children:m.length===0?t:m.map(n=>n.value).join(", ")}),e(A,{name:"arrowDown",height:"8.5",width:"14"})]}),y&&e("div",{className:" block  z-10  w-full  bg-transparent  border  border-neutral-dark-dark02  rounded-md  mt-1",children:i?G():q()})]})}o(p,"MultiSelect");try{p.displayName="MultiSelect",p.__docgenInfo={description:"",displayName:"MultiSelect",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"OptionProps[] | OptionGroupProps[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedOptions: OptionProps[]) => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},grouped:{defaultValue:{value:"false"},description:"",name:"grouped",required:!1,type:{name:"boolean"}}}}}catch{}const P=[{label:"New York",value:"NY"},{label:"Rome",value:"RM"},{label:"London",value:"LDN"},{label:"Istanbul",value:"IST"},{label:"Paris",value:"PRS"}],L=[{"Swedish Cars":[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"}]},{"German Cars":[{label:"Mercedes",value:"mercedes"},{label:"Audi",value:"audi"}]}],g={Data:P,Group:L};function k(s){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",h2:"h2",h3:"h3"},w(),s.components);return u(T,{children:[e(z,{title:"Design System/Componentes/MultiSelect",component:p,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}}}),`
`,e(t.h1,{children:"MultiSelect"}),`
`,u(t.blockquote,{children:[`
`,u(t.p,{children:["O componente ",e(t.code,{children:"MultiSelect"})," é uma lista suspensa em que o usuário pode selecionar múltiplas opções de uma lista pré-definida."]}),`
`]}),`
`,e(t.h2,{children:"Variantes"}),`
`,e(t.h3,{children:"Default"}),`
`,e(v,{withToolbar:!0,children:e(x,{name:"Default",children:c=>{const[l,h]=r.useState([]);return r.useEffect(()=>{b("onChange Event")(`Valor(es) selecionado(s): ${l.map(i=>i.value).join(", ")}`)},[l]),e(p,Object.assign({},c,{options:g.Data,onChange:i=>h(i)}))}})}),`
`,e(C,{story:"Default"}),`
`,e(t.h3,{children:"Agrupado"}),`
`,e(v,{withToolbar:!0,children:e(x,{name:"Group",children:c=>{const[l,h]=r.useState([]);return r.useEffect(()=>{b("onChange Event")(`Valor(es) selecionado(s): ${l.map(i=>i.value).join(", ")}`)},[l]),e(p,Object.assign({},c,{options:g.Group,onChange:i=>h(i),grouped:!0}))}})}),`
`,e(C,{story:"Group"})]})}o(k,"_createMdxContent");function R(s={}){const{wrapper:t}=Object.assign({},w(),s.components);return t?e(t,Object.assign({},s,{children:e(k,s)})):k(s)}o(R,"MDXContent");const N=o(s=>{const[t,c]=r.useState([]);return r.useEffect(()=>{b("onChange Event")(`Valor(es) selecionado(s): ${t.map(l=>l.value).join(", ")}`)},[t]),e(p,{...s,options:g.Data,onChange:l=>c(l)})},"defaultStory");N.storyName="Default";N.parameters={storySource:{source:`args => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    action("onChange Event")(\`Valor(es) selecionado(s): \${selectedOptions.map(o => o.value).join(", ")}\`);
  }, [selectedOptions]);
  return <MultiSelect {...args} options={mock.Data} onChange={selected => setSelectedOptions(selected)} />;
}`}};const j=o(s=>{const[t,c]=r.useState([]);return r.useEffect(()=>{b("onChange Event")(`Valor(es) selecionado(s): ${t.map(l=>l.value).join(", ")}`)},[t]),e(p,{...s,options:g.Group,onChange:l=>c(l),grouped:!0})},"group");j.storyName="Group";j.parameters={storySource:{source:`args => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    action("onChange Event")(\`Valor(es) selecionado(s): \${selectedOptions.map(o => o.value).join(", ")}\`);
  }, [selectedOptions]);
  return <MultiSelect {...args} options={mock.Group} onChange={selected => setSelectedOptions(selected)} grouped />;
}`}};const f={title:"Design System/Componentes/MultiSelect",component:p,args:{disabled:!1,placeholder:"Selecione..."},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},options:{control:"object"}},includeStories:["defaultStory","group"]},X={Default:"defaultStory",Group:"group"};f.parameters=f.parameters||{};f.parameters.docs={...f.parameters.docs||{},page:()=>e(I,{mdxStoryNameToKey:X,mdxComponentAnnotations:f,children:e(R,{})})};const te=["defaultStory","group"];export{te as __namedExportsOrder,f as default,N as defaultStory,j as group};
//# sourceMappingURL=MultiSelect.stories-437d034d.js.map

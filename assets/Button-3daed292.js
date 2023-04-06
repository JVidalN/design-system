var m=Object.defineProperty;var t=(r,a)=>m(r,"name",{value:a,configurable:!0});import{I as p}from"./Icon-96a441ee.js";import{j as o}from"./jsx-runtime-451690fa.js";function i({variant:r="primary",disabled:a,loading:l,label:s,...u}){const d=t(n=>{let e="";switch(n){case"primary":return e="bg-brand-primary-dark text-neutral-light-base",e;case"secondary":return e="bg-neutral-light-base text-brand-primary-dark border border-brand-primary-dark",e;case"danger":return e="bg-extra-error text-neutral-light-base",e;case"secondary-danger":return e="bg-neutral-light-base text-extra-error border border-extra-error",e}},"chooseStyle"),c=t(n=>{let e="";switch(n){case"primary":case"danger":return e="fill-neutral-light-base",e;case"secondary":return e="fill-brand-primary-dark",e;case"secondary-danger":return e="fill-extra-error",e}},"chooseIconColor");return o("button",{...u,disabled:a,className:`
                rounded-md 
                px-2 
                py-4 
                h-[38px] 
                flex 
                justify-center 
                items-center 
                font-roboto
                text-sm2
                ${d(r)}
                ${a?"opacity-60 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]":null}
            `,children:l?o("div",{className:"w-full min-h-screen flex justify-center items-center",children:o(p,{name:"loadingSpin",color:c(r),width:"24px",height:"24px",className:"w-6 h-6 animate-spin"})}):s})}t(i,"Button");try{i.displayName="Button",i.__docgenInfo={description:"Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico.",displayName:"Button",props:{label:{defaultValue:null,description:"Texto do botão",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"Define qual variante será utilizada",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"secondary-danger"'}]}},disabled:{defaultValue:null,description:"Define qual variante será utilizada",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Exibe o estado Carregando.",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{i as B};
//# sourceMappingURL=Button-3daed292.js.map

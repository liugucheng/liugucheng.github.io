import{d as h,h as r,Y as L,r as n,o as S,f as E,w as l,b as o,l as _,a2 as x,X as D,as as K,E as R}from"./index.491d38c7.js";import{a as A,c as B}from"./role.cbddc5c7.js";import{u as I}from"./orgs.66e5bb82.js";const N=h({__name:"data-scope",setup(O,{expose:v}){const u=r(!1),p=r([]),d=r(),i=r(),t=L({id:"",name:"",orgIdList:[],dataScope:0,remark:""}),g=s=>{u.value=!0,t.id="",i.value&&i.value.resetFields(),d.value&&d.value.setCheckedKeys([]),s&&k(s),b()},b=()=>I().then(s=>{p.value=s.data}),k=s=>{A(s).then(e=>{Object.assign(t,e.data),d.value.setCheckedKeys(t.orgIdList)})},c=()=>{t.orgIdList=d.value.getCheckedKeys(),B(t).then(()=>{R.success({message:"\u64CD\u4F5C\u6210\u529F",duration:500,onClose:()=>{u.value=!1}})})};return v({init:g}),(s,e)=>{const y=n("el-input"),m=n("el-form-item"),C=n("fast-select"),V=n("el-tree"),w=n("el-form"),f=n("el-button"),F=n("el-dialog");return S(),E(F,{modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=a=>u.value=a),title:"\u6570\u636E\u6743\u9650","close-on-click-modal":!1,width:600,draggable:""},{footer:l(()=>[o(f,{onClick:e[3]||(e[3]=a=>u.value=!1)},{default:l(()=>[_("\u53D6\u6D88")]),_:1}),o(f,{type:"primary",onClick:e[4]||(e[4]=a=>c())},{default:l(()=>[_("\u786E\u5B9A")]),_:1})]),default:l(()=>[o(w,{ref_key:"dataFormRef",ref:i,model:t,"label-width":"120px",onKeyup:e[2]||(e[2]=x(a=>c(),["enter"]))},{default:l(()=>[o(m,{prop:"name",label:"\u540D\u79F0"},{default:l(()=>[o(y,{modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=a=>t.name=a),disabled:""},null,8,["modelValue"])]),_:1}),o(m,{prop:"dataScope",label:"\u6570\u636E\u8303\u56F4"},{default:l(()=>[o(C,{modelValue:t.dataScope,"onUpdate:modelValue":e[1]||(e[1]=a=>t.dataScope=a),"dict-type":"role_data_scope",placeholder:"\u6570\u636E\u8303\u56F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),D(o(m,{label:"\u6570\u636E\u6743\u9650"},{default:l(()=>[o(V,{ref_key:"orgListTree",ref:d,data:p.value,props:{label:"name",children:"children"},"node-key":"id",accordion:"","show-checkbox":""},null,8,["data"])]),_:1},512),[[K,t.dataScope==4]])]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{N as _};

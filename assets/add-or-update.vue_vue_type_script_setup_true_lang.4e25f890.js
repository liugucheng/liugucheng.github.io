import{d as A,h as m,Y as B,r as s,o as N,f as k,w as l,b as u,l as _,a2 as y,E as x}from"./index.491d38c7.js";import{u as U,a as w}from"./post.70599488.js";const q=A({__name:"add-or-update",emits:["refreshDataList"],setup(P,{expose:b,emit:C}){const n=m(!1),r=m(),t=B({id:"",postCode:"",postName:"",sort:0,status:1}),V=a=>{n.value=!0,t.id="",r.value&&r.value.resetFields(),a&&g(a)},g=a=>{U(a).then(e=>{Object.assign(t,e.data)})},v=m({postCode:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],postName:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),p=()=>{r.value.validate(a=>{if(!a)return!1;w(t).then(()=>{x.success({message:"\u64CD\u4F5C\u6210\u529F",duration:500,onClose:()=>{n.value=!1,C("refreshDataList")}})})})};return b({init:V}),(a,e)=>{const i=s("el-input"),d=s("el-form-item"),F=s("el-input-number"),D=s("fast-radio-group"),E=s("el-form"),f=s("el-button"),c=s("el-dialog");return N(),k(c,{modelValue:n.value,"onUpdate:modelValue":e[7]||(e[7]=o=>n.value=o),title:t.id?"\u4FEE\u6539":"\u65B0\u589E","close-on-click-modal":!1,draggable:""},{footer:l(()=>[u(f,{onClick:e[5]||(e[5]=o=>n.value=!1)},{default:l(()=>[_("\u53D6\u6D88")]),_:1}),u(f,{type:"primary",onClick:e[6]||(e[6]=o=>p())},{default:l(()=>[_("\u786E\u5B9A")]),_:1})]),default:l(()=>[u(E,{ref_key:"dataFormRef",ref:r,model:t,rules:v.value,"label-width":"80px",onKeyup:e[4]||(e[4]=y(o=>p(),["enter"]))},{default:l(()=>[u(d,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"postCode"},{default:l(()=>[u(i,{modelValue:t.postCode,"onUpdate:modelValue":e[0]||(e[0]=o=>t.postCode=o)},null,8,["modelValue"])]),_:1}),u(d,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"postName"},{default:l(()=>[u(i,{modelValue:t.postName,"onUpdate:modelValue":e[1]||(e[1]=o=>t.postName=o)},null,8,["modelValue"])]),_:1}),u(d,{label:"\u6392\u5E8F",prop:"sort"},{default:l(()=>[u(F,{modelValue:t.sort,"onUpdate:modelValue":e[2]||(e[2]=o=>t.sort=o),min:0},null,8,["modelValue"])]),_:1}),u(d,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[u(D,{modelValue:t.status,"onUpdate:modelValue":e[3]||(e[3]=o=>t.status=o),"dict-type":"post_status"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{q as _};

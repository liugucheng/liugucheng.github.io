import{d as x,Y as H,h as I,ae as U,r as l,W as R,o as i,f as u,w as t,b as e,l as d,X as $,k as r,t as f,c as q}from"./index.491d38c7.js";import{_ as N}from"./data-add-or-update.vue_vue_type_script_setup_true_lang.2508e9a8.js";const O={key:1},A=x({__name:"data",props:{dictTypeId:{type:Number,required:!0}},setup(h){const p=h,n=H({dataListUrl:"/sys/dict/data/page",deleteUrl:"/sys/dict/data",queryForm:{dictTypeId:p.dictTypeId}}),s=I(),_=g=>{s.value.dataForm.dictTypeId=p.dictTypeId,s.value.init(g)},{getDataList:C,sizeChangeHandle:y,selectionChangeHandle:b,sortChangeHandle:w,currentChangeHandle:k,deleteBatchHandle:v}=U(n);return(g,m)=>{const c=l("el-button"),L=l("el-form-item"),z=l("el-form"),o=l("el-table-column"),B=l("el-tag"),F=l("el-table"),S=l("el-pagination"),D=l("el-card"),E=R("loading");return i(),u(D,null,{default:t(()=>[e(z,{inline:!0,model:n.queryForm},{default:t(()=>[e(L,null,{default:t(()=>[e(c,{type:"primary",onClick:m[0]||(m[0]=a=>_())},{default:t(()=>[d("\u65B0\u589E")]),_:1})]),_:1})]),_:1},8,["model"]),$((i(),u(F,{data:n.dataList,border:"",style:{width:"100%"},onSelectionChange:r(b),onSortChange:r(w)},{default:t(()=>[e(o,{type:"selection","header-align":"center",align:"center",width:"50"}),e(o,{prop:"dictValue",label:"\u5B57\u5178\u503C","header-align":"center",align:"center"}),e(o,{prop:"dictLabel",label:"\u5B57\u5178\u6807\u7B7E","show-overflow-tooltip":"","header-align":"center",align:"center"},{default:t(a=>[a.row.labelClass?(i(),u(B,{key:0,type:a.row.labelClass==="primary"?"":a.row.labelClass},{default:t(()=>[d(f(a.row.dictLabel),1)]),_:2},1032,["type"])):(i(),q("span",O,f(a.row.dictLabel),1))]),_:1}),e(o,{prop:"sort",label:"\u6392\u5E8F",sortable:"custom","header-align":"center",align:"center"}),e(o,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","header-align":"center",align:"center",width:"180"}),e(o,{label:"\u64CD\u4F5C",fixed:"right","header-align":"center",align:"center",width:"150"},{default:t(a=>[e(c,{type:"primary",link:"",onClick:T=>_(a.row.id)},{default:t(()=>[d("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(c,{type:"primary",link:"",onClick:T=>r(v)(a.row.id)},{default:t(()=>[d("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange","onSortChange"])),[[E,n.dataListLoading]]),e(S,{"current-page":n.page,"page-sizes":n.pageSizes,"page-size":n.limit,total:n.total,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:r(y),onCurrentChange:r(k)},null,8,["current-page","page-sizes","page-size","total","onSizeChange","onCurrentChange"]),e(N,{ref_key:"addOrUpdateRef",ref:s,onRefreshDataList:r(C)},null,8,["onRefreshDataList"])]),_:1})}}});export{A as _};

import{i as e,e as t,a,j as n}from"./index.9874402d.js";import{d as s,a4 as l,u as o,b as i,n as p,T as r,p as d,f as c,r as u,o as y,h as m,j as v,l as f,k as h,e as I,g as R,t as k,m as g,F as b,D as w,c as _,z as x,i as C,y as U}from"./vendor.f24ab909.js";var T=s({name:"AddReply",components:{[l.name]:l},props:{topic:{type:Object,default:{},required:!0},replyId:{type:String,default:""},replyTo:{type:String,default:""},show:{type:Boolean,default:!1}},emits:["hideItemReply","onReload"],setup(a,{emit:n}){const s=o(),l=i(),d=p(""),{topic:c,replyTo:u,replyId:y,show:m}=a,{token:v}=s.state.user.userInfo;u&&(d.value=`@${u}`);return{content:d,submit:async()=>{if(!d.value)return void r("回复内容不能为空");const a={topic_id:l.params.id,accesstoken:v,content:d.value};y&&(a.reply_id=y);try{(await e(a)).success&&s.dispatch(`topic/${t}`,{id:c.id,reload:!0,token:v}),d.value="",m&&n("hideItemReply")}catch(o){}}}}});d("data-v-a485f028");const j={class:"reply"},H={class:"van-hairline--surround"};c(),T.render=function(e,t,a,n,s,l){const o=u("van-field");return y(),m("section",j,[v("div",H,[f(o,{modelValue:e.content,"onUpdate:modelValue":t[0]||(t[0]=t=>e.content=t),rows:"8",type:"textarea",border:!1,placeholder:"回复支持Markdown语法,请注意标记代码"},null,8,["modelValue"])]),v("div",{class:"reply-btn",onClick:t[1]||(t[1]=(...t)=>e.submit&&e.submit(...t))},"确定")])},T.__scopeId="data-v-a485f028";var L=s({name:"TopicReply",props:{topic:{type:Object,default:{},required:!0}},components:{Reply:T},methods:{getLastTimeStr:(e,t)=>a(e,t)},setup(){const e=o(),t=h(),a=i(),s=p(""),l=I((()=>e.state.user.userInfo.token)),d=I((()=>e.state.user.userInfo.userId)),c=()=>{s.value=""};return{handleReplyUps:async e=>{if(!l.value)return r("你还没登录~~"),void t.push(`/login?redirect=${encodeURIComponent(a.path)}`);try{if("down"===(await n(l.value,e.id)).action){const t=e.ups.findIndex((e=>e===d.value));e.ups.splice(t,1)}else e.ups.push(d.value)}catch(s){r("点赞失败")}},isUps:e=>e.ups.findIndex((e=>e===d.value))>=0,userId:d,curReplyId:s,addReply:e=>{if(!l.value)return r("你还没登录~~"),void t.push(`/login?redirect=${encodeURIComponent(a.path)}`);e===s.value?c():s.value=e},hideItemReply:c,handleHtmlContent:e=>e.replace(/\/user\//,"#/user/")}}});d("data-v-496b8f93");const M={key:0,class:"topic-reply van-hairline--bottom van-hairline--top"},S=x(" 回复 "),$={class:"reply-list"},V={class:"d-flex align-items-center reply-user van-hairline--top"},q={class:"reply-avatar"},z={class:"d-flex align-items-center flex-1"},O={class:"flex-1 reply-info-content"},A=["onClick"],B={class:"reply-ups"},D=["onClick"],F=["innerHTML"];c(),L.render=function(e,t,a,n,s,l){const o=u("reply"),i=R("lazy");return y(),m(b,null,[e.topic.reply_count>=0?(y(),m("h3",M,[v("strong",null,k(e.topic.reply_count),1),S])):g("",!0),v("section",$,[(y(!0),m(b,null,w(e.topic.replies,(a=>(y(),m(b,{key:a.id},[v("div",V,[C(v("img",q,null,512),[[i,a.author.avatar_url]]),v("div",z,[v("div",O,k(a.author.loginname)+" 发布于："+k(e.getLastTimeStr(a.create_at,!0)),1),v("span",{class:U(["iconfont reply-icon",{uped:e.isUps(a)}]),onClick:t=>e.handleReplyUps(a)},"",10,A),v("span",B,k(a.ups.length),1),v("span",{class:"iconfont reply-icon",onClick:t=>e.addReply(a.id)},"",8,D)])]),v("div",{class:"markdown-body reply-content",innerHTML:e.handleHtmlContent(a.content)},null,8,F),e.userId&&e.curReplyId===a.id?(y(),_(o,{key:0,topic:e.topic,"onUpdate:topic":t[0]||(t[0]=t=>e.topic=t),"reply-id":a.id,"reply-to":a.author.loginname,show:!!e.curReplyId,onHideItemReply:e.hideItemReply},null,8,["topic","reply-id","reply-to","show","onHideItemReply"])):g("",!0)],64)))),128)),e.topic.id&&e.userId?(y(),_(o,{topic:e.topic,"onUpdate:topic":t[1]||(t[1]=t=>e.topic=t),key:Math.random()},null,8,["topic"])):g("",!0)])],64)},L.__scopeId="data-v-496b8f93";export{L as default};

"use strict";(()=>{function y(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}async function h(t){let i=await fetch(t);if(!i.ok)throw new Error("Network response was not ok");return i.text()}function m(t){let i=t.trim().split(`
`),o=i[0].split(",");return{data:i.slice(1).map(r=>{let a=r.split(",");return o.reduce((n,l,c)=>(n[l]=a[c],n),{})}),headers:o}}function C(t){let i=t.data.map(r=>r[t.headers[0]]),o=t.data.map(r=>parseFloat(r[t.headers[1]].replace("$","").replace(",",""))),s=t.data.map(r=>t.headers.slice(2).map(a=>`${a}: ${r[a]}`).join(", "));return{labels:i,values:o,tooltips:s}}function g(t){let i=Date.parse(t);return!isNaN(i)||t.includes(":")}function b(t,i,o,s,r){let a={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#fff",titleFont:{family:"'Clarity City', sans-serif",size:14},bodyColor:"#fff",bodyFont:{family:"'Clarity City', sans-serif",size:14},usePointStyle:!1,displayColors:!1,callbacks:{label:function(e){let f=e.raw;return`${r.headers[1]}: ${y(f)}`},afterLabel:function(e){return s[e.dataIndex].split(", ").map(p=>{let[d,u]=p.split(": ");return`${d.trim()}: ${y(u.trim())}`}).join(chartOptions.type==="line"?`
`:", ")}}},title:{display:!0,text:chartOptions.titleText,font:{family:"'Clarity City', sans-serif",size:16},color:"#333"}}},n={...a,scales:{x:g(i[0])?{type:"time",time:{parser:"dd/MM/yyyy HH:mm",tooltipFormat:"dd MMMM yyyy",unit:"month",displayFormats:{day:"MMM yy"}},grid:{color:"rgba(0, 0, 0, 0.1)"},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",autoSkip:!0,maxTicksLimit:Math.ceil(i.length/12)*4}}:{grid:{color:"rgba(0, 0, 0, 0.1)"},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",autoSkip:!0,maxTicksLimit:Math.ceil(i.length/12)*4}},y:{grid:{display:!1},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",callback:function(e){return e>=1e9?Math.round(e/1e9)+"B":e>=1e6?Math.round(e/1e6)+"M":y(Math.round(e))}},title:{display:!0,text:chartOptions.axisTitle,font:{family:"'Clarity City', sans-serif",size:14},color:"#333"}}}},l={...a,indexAxis:"y",scales:{y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.1)"},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",autoSkip:!1}},x:{grid:{display:!1},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",callback:function(e){return e>=1e9?Math.round(e/1e9)+"B":e>=1e6?Math.round(e/1e6)+"M":e>=1e3?Math.round(e/1e3)+"K":Math.round(e)}},title:{display:!0,text:chartOptions.axisTitle,font:{family:"'Clarity City', sans-serif",size:14},color:"#333"}}}},c={type:chartOptions.type,data:{labels:i,datasets:[{label:r.headers[1],data:o,backgroundColor:"rgba(0, 0, 0, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:chartOptions.type==="line"?3:1,tension:chartOptions.type==="line"?.4:0}]},options:chartOptions.type==="line"?n:l};return new Chart(t,c)}async function x(){try{let t=await h(chartOptions.txtUrl),i=m(t),{labels:o,values:s,tooltips:r}=C(i),a=document.getElementById("myChart").getContext("2d");b(a,o,s,r,i)}catch(t){console.error("Error:",t)}}x();})();

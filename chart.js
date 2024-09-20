"use strict";(()=>{function p(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function u(t){return t>=1e9?chartOptions.roundNumbers?(t/1e9).toFixed(2)+"b":t/1e9+"b":t>=1e6?chartOptions.roundNumbers?(t/1e6).toFixed(2)+"m":t/1e6+"m":t>=1e3?chartOptions.roundNumbers?(t/1e3).toFixed(2)+"k":t/1e3+"k":chartOptions.roundNumbers?t.toFixed(2):t}async function m(t){try{let e=await fetch(t),s=e.headers.get("Content-Type");if(!e.ok)throw new Error(`Network response was not ok: ${e.statusText}`);if(!s||!s.includes("text/csv"))throw new Error(`Expected text/csv but received ${s}`);return await e.text()}catch(e){throw console.error(`Failed to fetch data from ${t}:`,e),e}}function C(t){let e=t.trim().split(`
`),s=e[0].split(",");return{data:e.slice(1).map(o=>{let n=o.split(",");return s.reduce((l,c,f)=>(l[c]=n[f],l),{})}),headers:s}}function b(t){let e=t.data.map(o=>o[t.headers[0]]),s=t.data.map(o=>parseFloat(o[t.headers[1]].replace("$","").replace(",",""))),a=t.data.map(o=>t.headers.slice(2).map(n=>`${n}: ${o[n]}`).join(", "));return{labels:e,values:s,tooltips:a}}function x(t){let e=Date.parse(t);return!isNaN(e)||t.includes(":")}function g(t,e,s,a,o){let n={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#fff",titleFont:{family:"'Clarity City', sans-serif",size:14},bodyColor:"#fff",bodyFont:{family:"'Clarity City', sans-serif",size:14},usePointStyle:!1,displayColors:!1,callbacks:{label:function(r){let i=r.raw,d=chartOptions.roundNumbers?u(i):p(i);return`${o.headers[1].trim()}: ${chartOptions.isDollarValue?"$":""}${d}`},afterLabel:function(r){return o.headers.length<=2?"":a[r.dataIndex].split(", ").map(d=>{let[h,y]=d.split(": ");return`${h.trim()}: ${p(y?chartOptions.roundNumbers?u(parseFloat(y.trim())):y.trim():"")}`}).join(chartOptions.type==="line"?`
`:", ")}}},title:{display:!0,text:chartOptions.titleText,font:{family:"'Clarity City', sans-serif",size:16},color:"#333"}}},l={...n,scales:{x:x(e[0])?{type:"time",time:{parser:"dd/MM/yyyy HH:mm",tooltipFormat:"dd MMMM yyyy",unit:"month",displayFormats:{day:"MMM yy"}},grid:{color:"rgba(0, 0, 0, 0.1)"},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",autoSkip:!0,maxTicksLimit:Math.ceil(e.length/12)*4}}:{grid:{color:"rgba(0, 0, 0, 0.1)"},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",autoSkip:!0,maxTicksLimit:Math.ceil(e.length/12)*4}},y:{grid:{display:!1},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",callback:function(r){let i;return r>=1e9?i=Math.round(r/1e9)+"b":r>=1e6?i=Math.round(r/1e6)+"m":i=p(Math.round(r)),chartOptions.isDollarValue?"$"+i:i}},title:{display:!0,text:chartOptions.axisTitle,font:{family:"'Clarity City', sans-serif",size:14},color:"#333"}}}},c={...n,indexAxis:"y",scales:{y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.1)"},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",autoSkip:!1}},x:{grid:{display:!1},ticks:{font:{family:"'Clarity City', sans-serif",size:14},color:"#333",callback:function(r){let i;return r>=1e9?i=Math.round(r/1e9)+"b":r>=1e6?i=Math.round(r/1e6)+"m":r>=1e3?i=Math.round(r/1e3)+"k":i=Math.round(r),chartOptions.isDollarValue?"$"+i:i}},title:{display:!0,text:chartOptions.axisTitle,font:{family:"'Clarity City', sans-serif",size:14},color:"#333"}}}},f={type:chartOptions.type,data:{labels:e,datasets:[{label:o.headers[1],data:s,backgroundColor:"rgba(0, 0, 0, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:chartOptions.type==="line"?3:1,tension:chartOptions.type==="line"?.4:0}]},options:chartOptions.type==="line"?l:c};return new Chart(t,f)}async function k(){try{let t=await m(chartOptions.txtUrl),e=C(t),{labels:s,values:a,tooltips:o}=b(e),n=document.getElementById("blogChart").getContext("2d");g(n,s,a,o,e)}catch(t){console.error("Error:",t)}}k();})();

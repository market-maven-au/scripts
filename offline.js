"use strict";(()=>{var i="PBIOffline",r="PBIEmbed",a="countdown";var l=[6,7];function E(){document.addEventListener("DOMContentLoaded",T),c(),setInterval(c,1e4)}function T(){let{currentHour:n,currentDay:t}=d(),e=l.includes(t),o=n<7||n>=19,u=document.getElementById(i),s=document.getElementById(r);(o||e)&&(u.style.display="block",s.style.display="none")}function d(){let n=moment().tz("Australia/Sydney");return{currentHour:n.hours(),currentDay:n.isoWeekday()}}function m(){let{currentDay:n,currentHour:t}=d(),e;return n>=1&&n<=5?e=y(t,n):e=S(n),e?e.toDate():null}function y(n,t){if(n<7)return moment().tz("Australia/Sydney").hour(7).minute(0).second(0);if(n>=19){let e=t===5?3:1;return moment().tz("Australia/Sydney").add(e,"days").hour(7).minute(0).second(0)}return null}function S(n){let t=n===6?2:1;return moment().tz("Australia/Sydney").add(t,"days").hour(7).minute(0).second(0)}function c(){let n=document.getElementById(a),t=m();t?countdown(t,e=>{let o;e.days>0?o=countdown.DAYS|countdown.HOURS|countdown.MINUTES:o=countdown.HOURS|countdown.MINUTES;let u="We are back online in "+countdown(e,null,o)+".";n.innerHTML=u},countdown.ALL):n.innerHTML="Service is currently available!"}E();})();
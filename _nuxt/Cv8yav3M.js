import{x as o,y as u,z as f,i as d,A as v,B as i,C as l,D as h,E as m}from"./BjkH2sBn.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),h()&&(v(()=>{r.dispose()}),i(()=>{s.value=!0}),l(()=>{s.value=!1})),r}export{U as u};

import{b as M3,g as D2}from"./chunk-AE3QJDZZ.js";import{$,Fb as f3,Gb as m3,H as W1,I as G1,Ib as n2,Kb as Z2,Lb as J2,Ma as c3,Na as l3,P as V1,R as X1,Ra as s3,S as Y1,Sa as P,T as Q1,W as L2,X as v2,Ya as e3,Z as p2,Za as a3,a as m,aa as K1,b as h,ca as e2,d as U1,da as T2,dc as z3,ea as Z1,hb as n3,j as A2,ja as a2,kb as K2,lc as L3,n as q1,nc as p3,pc as Y,qb as i3,r as Q2,rb as t3,sa as P2,va as F2,vb as o3,wb as r3,y as $1,yb as E2,z as j1,za as J1,zb as R2}from"./chunk-Q2G4KG7R.js";function s1(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var K=s1();function x3(e){K=e}var N3=/[&<>"']/,$4=new RegExp(N3.source,"g"),b3=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,j4=new RegExp(b3.source,"g"),W4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u3=e=>W4[e];function y(e,s){if(s){if(N3.test(e))return e.replace($4,u3)}else if(b3.test(e))return e.replace(j4,u3);return e}var G4=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function V4(e){return e.replace(G4,(s,c)=>(c=c.toLowerCase(),c==="colon"?":":c.charAt(0)==="#"?c.charAt(1)==="x"?String.fromCharCode(parseInt(c.substring(2),16)):String.fromCharCode(+c.substring(1)):""))}var X4=/(^|[^\[])\^/g;function C(e,s){let c=typeof e=="string"?e:e.source;s=s||"";let l={replace:(a,n)=>{let i=typeof n=="string"?n:n.source;return i=i.replace(X4,"$1"),c=c.replace(a,i),l},getRegex:()=>new RegExp(c,s)};return l}function d3(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}var u2={exec:()=>null};function C3(e,s){let c=e.replace(/\|/g,(n,i,t)=>{let o=!1,r=i;for(;--r>=0&&t[r]==="\\";)o=!o;return o?"|":" |"}),l=c.split(/ \|/),a=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),s)if(l.length>s)l.splice(s);else for(;l.length<s;)l.push("");for(;a<l.length;a++)l[a]=l[a].trim().replace(/\\\|/g,"|");return l}function B2(e,s,c){let l=e.length;if(l===0)return"";let a=0;for(;a<l;){let n=e.charAt(l-a-1);if(n===s&&!c)a++;else if(n!==s&&c)a++;else break}return e.slice(0,l-a)}function Y4(e,s){if(e.indexOf(s[1])===-1)return-1;let c=0;for(let l=0;l<e.length;l++)if(e[l]==="\\")l++;else if(e[l]===s[0])c++;else if(e[l]===s[1]&&(c--,c<0))return l;return-1}function h3(e,s,c,l){let a=s.href,n=s.title?y(s.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){l.state.inLink=!0;let t={type:"link",raw:c,href:a,title:n,text:i,tokens:l.inlineTokens(i)};return l.state.inLink=!1,t}return{type:"image",raw:c,href:a,title:n,text:y(i)}}function Q4(e,s){let c=e.match(/^(\s+)(?:```)/);if(c===null)return s;let l=c[1];return s.split(`
`).map(a=>{let n=a.match(/^\s+/);if(n===null)return a;let[i]=n;return i.length>=l.length?a.slice(l.length):a}).join(`
`)}var t2=class{options;rules;lexer;constructor(s){this.options=s||K}space(s){let c=this.rules.block.newline.exec(s);if(c&&c[0].length>0)return{type:"space",raw:c[0]}}code(s){let c=this.rules.block.code.exec(s);if(c){let l=c[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:c[0],codeBlockStyle:"indented",text:this.options.pedantic?l:B2(l,`
`)}}}fences(s){let c=this.rules.block.fences.exec(s);if(c){let l=c[0],a=Q4(l,c[3]||"");return{type:"code",raw:l,lang:c[2]?c[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):c[2],text:a}}}heading(s){let c=this.rules.block.heading.exec(s);if(c){let l=c[2].trim();if(/#$/.test(l)){let a=B2(l,"#");(this.options.pedantic||!a||/ $/.test(a))&&(l=a.trim())}return{type:"heading",raw:c[0],depth:c[1].length,text:l,tokens:this.lexer.inline(l)}}}hr(s){let c=this.rules.block.hr.exec(s);if(c)return{type:"hr",raw:c[0]}}blockquote(s){let c=this.rules.block.blockquote.exec(s);if(c){let l=c[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);l=B2(l.replace(/^ *>[ \t]?/gm,""),`
`);let a=this.lexer.state.top;this.lexer.state.top=!0;let n=this.lexer.blockTokens(l);return this.lexer.state.top=a,{type:"blockquote",raw:c[0],tokens:n,text:l}}}list(s){let c=this.rules.block.list.exec(s);if(c){let l=c[1].trim(),a=l.length>1,n={type:"list",raw:"",ordered:a,start:a?+l.slice(0,-1):"",loose:!1,items:[]};l=a?`\\d{1,9}\\${l.slice(-1)}`:`\\${l}`,this.options.pedantic&&(l=a?l:"[*+-]");let i=new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),t="",o="",r=!1;for(;s;){let f=!1;if(!(c=i.exec(s))||this.rules.block.hr.test(s))break;t=c[0],s=s.substring(t.length);let L=c[2].split(`
`,1)[0].replace(/^\t+/,S=>" ".repeat(3*S.length)),z=s.split(`
`,1)[0],M=0;this.options.pedantic?(M=2,o=L.trimStart()):(M=c[2].search(/[^ ]/),M=M>4?1:M,o=L.slice(M),M+=c[1].length);let d=!1;if(!L&&/^ *$/.test(z)&&(t+=z+`
`,s=s.substring(z.length+1),f=!0),!f){let S=new RegExp(`^ {0,${Math.min(3,M-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),k=new RegExp(`^ {0,${Math.min(3,M-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),w=new RegExp(`^ {0,${Math.min(3,M-1)}}(?:\`\`\`|~~~)`),I=new RegExp(`^ {0,${Math.min(3,M-1)}}#`);for(;s;){let F=s.split(`
`,1)[0];if(z=F,this.options.pedantic&&(z=z.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),w.test(z)||I.test(z)||S.test(z)||k.test(s))break;if(z.search(/[^ ]/)>=M||!z.trim())o+=`
`+z.slice(M);else{if(d||L.search(/[^ ]/)>=4||w.test(L)||I.test(L)||k.test(L))break;o+=`
`+z}!d&&!z.trim()&&(d=!0),t+=F+`
`,s=s.substring(F.length+1),L=z.slice(M)}}n.loose||(r?n.loose=!0:/\n *\n *$/.test(t)&&(r=!0));let N=null,b;this.options.gfm&&(N=/^\[[ xX]\] /.exec(o),N&&(b=N[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),n.items.push({type:"list_item",raw:t,task:!!N,checked:b,loose:!1,text:o,tokens:[]}),n.raw+=t}n.items[n.items.length-1].raw=t.trimEnd(),n.items[n.items.length-1].text=o.trimEnd(),n.raw=n.raw.trimEnd();for(let f=0;f<n.items.length;f++)if(this.lexer.state.top=!1,n.items[f].tokens=this.lexer.blockTokens(n.items[f].text,[]),!n.loose){let L=n.items[f].tokens.filter(M=>M.type==="space"),z=L.length>0&&L.some(M=>/\n.*\n/.test(M.raw));n.loose=z}if(n.loose)for(let f=0;f<n.items.length;f++)n.items[f].loose=!0;return n}}html(s){let c=this.rules.block.html.exec(s);if(c)return{type:"html",block:!0,raw:c[0],pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]}}def(s){let c=this.rules.block.def.exec(s);if(c){let l=c[1].toLowerCase().replace(/\s+/g," "),a=c[2]?c[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=c[3]?c[3].substring(1,c[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):c[3];return{type:"def",tag:l,raw:c[0],href:a,title:n}}}table(s){let c=this.rules.block.table.exec(s);if(!c||!/[:|]/.test(c[2]))return;let l=C3(c[1]),a=c[2].replace(/^\||\| *$/g,"").split("|"),n=c[3]&&c[3].trim()?c[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:c[0],header:[],align:[],rows:[]};if(l.length===a.length){for(let t of a)/^ *-+: *$/.test(t)?i.align.push("right"):/^ *:-+: *$/.test(t)?i.align.push("center"):/^ *:-+ *$/.test(t)?i.align.push("left"):i.align.push(null);for(let t of l)i.header.push({text:t,tokens:this.lexer.inline(t)});for(let t of n)i.rows.push(C3(t,i.header.length).map(o=>({text:o,tokens:this.lexer.inline(o)})));return i}}lheading(s){let c=this.rules.block.lheading.exec(s);if(c)return{type:"heading",raw:c[0],depth:c[2].charAt(0)==="="?1:2,text:c[1],tokens:this.lexer.inline(c[1])}}paragraph(s){let c=this.rules.block.paragraph.exec(s);if(c){let l=c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1];return{type:"paragraph",raw:c[0],text:l,tokens:this.lexer.inline(l)}}}text(s){let c=this.rules.block.text.exec(s);if(c)return{type:"text",raw:c[0],text:c[0],tokens:this.lexer.inline(c[0])}}escape(s){let c=this.rules.inline.escape.exec(s);if(c)return{type:"escape",raw:c[0],text:y(c[1])}}tag(s){let c=this.rules.inline.tag.exec(s);if(c)return!this.lexer.state.inLink&&/^<a /i.test(c[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(c[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(c[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(c[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:c[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:c[0]}}link(s){let c=this.rules.inline.link.exec(s);if(c){let l=c[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;let i=B2(l.slice(0,-1),"\\");if((l.length-i.length)%2===0)return}else{let i=Y4(c[2],"()");if(i>-1){let o=(c[0].indexOf("!")===0?5:4)+c[1].length+i;c[2]=c[2].substring(0,i),c[0]=c[0].substring(0,o).trim(),c[3]=""}}let a=c[2],n="";if(this.options.pedantic){let i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);i&&(a=i[1],n=i[3])}else n=c[3]?c[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(l)?a=a.slice(1):a=a.slice(1,-1)),h3(c,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},c[0],this.lexer)}}reflink(s,c){let l;if((l=this.rules.inline.reflink.exec(s))||(l=this.rules.inline.nolink.exec(s))){let a=(l[2]||l[1]).replace(/\s+/g," "),n=c[a.toLowerCase()];if(!n){let i=l[0].charAt(0);return{type:"text",raw:i,text:i}}return h3(l,n,l[0],this.lexer)}}emStrong(s,c,l=""){let a=this.rules.inline.emStrongLDelim.exec(s);if(!a||a[3]&&l.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!l||this.rules.inline.punctuation.exec(l)){let i=[...a[0]].length-1,t,o,r=i,f=0,L=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(L.lastIndex=0,c=c.slice(-1*s.length+i);(a=L.exec(c))!=null;){if(t=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!t)continue;if(o=[...t].length,a[3]||a[4]){r+=o;continue}else if((a[5]||a[6])&&i%3&&!((i+o)%3)){f+=o;continue}if(r-=o,r>0)continue;o=Math.min(o,o+r+f);let z=[...a[0]][0].length,M=s.slice(0,i+a.index+z+o);if(Math.min(i,o)%2){let N=M.slice(1,-1);return{type:"em",raw:M,text:N,tokens:this.lexer.inlineTokens(N)}}let d=M.slice(2,-2);return{type:"strong",raw:M,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(s){let c=this.rules.inline.code.exec(s);if(c){let l=c[2].replace(/\n/g," "),a=/[^ ]/.test(l),n=/^ /.test(l)&&/ $/.test(l);return a&&n&&(l=l.substring(1,l.length-1)),l=y(l,!0),{type:"codespan",raw:c[0],text:l}}}br(s){let c=this.rules.inline.br.exec(s);if(c)return{type:"br",raw:c[0]}}del(s){let c=this.rules.inline.del.exec(s);if(c)return{type:"del",raw:c[0],text:c[2],tokens:this.lexer.inlineTokens(c[2])}}autolink(s){let c=this.rules.inline.autolink.exec(s);if(c){let l,a;return c[2]==="@"?(l=y(c[1]),a="mailto:"+l):(l=y(c[1]),a=l),{type:"link",raw:c[0],text:l,href:a,tokens:[{type:"text",raw:l,text:l}]}}}url(s){let c;if(c=this.rules.inline.url.exec(s)){let l,a;if(c[2]==="@")l=y(c[0]),a="mailto:"+l;else{let n;do n=c[0],c[0]=this.rules.inline._backpedal.exec(c[0])?.[0]??"";while(n!==c[0]);l=y(c[0]),c[1]==="www."?a="http://"+c[0]:a=c[0]}return{type:"link",raw:c[0],text:l,href:a,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(s){let c=this.rules.inline.text.exec(s);if(c){let l;return this.lexer.state.inRawBlock?l=c[0]:l=y(c[0]),{type:"text",raw:c[0],text:l}}}},K4=/^(?: *(?:\n|$))+/,Z4=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,J4=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,C2=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,c0=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,k3=/(?:[*+-]|\d{1,9}[.)])/,w3=C(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,k3).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),e1=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,l0=/^[^\n]+/,a1=/(?!\s*\])(?:\\.|[^\[\]\\])+/,s0=C(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",a1).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),e0=C(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,k3).getRegex(),H2="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n1=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,a0=C("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",n1).replace("tag",H2).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),S3=C(e1).replace("hr",C2).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H2).getRegex(),n0=C(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",S3).getRegex(),i1={blockquote:n0,code:Z4,def:s0,fences:J4,heading:c0,hr:C2,html:a0,lheading:w3,list:e0,newline:K4,paragraph:S3,table:u2,text:l0},g3=C("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",C2).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H2).getRegex(),i0=h(m({},i1),{table:g3,paragraph:C(e1).replace("hr",C2).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",g3).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H2).getRegex()}),t0=h(m({},i1),{html:C(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",n1).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:u2,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:C(e1).replace("hr",C2).replace("heading",` *#{1,6} *[^
]`).replace("lheading",w3).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),y3=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,o0=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,A3=/^( {2,}|\\)\n(?!\s*$)/,r0=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,h2="\\p{P}\\p{S}",f0=C(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,h2).getRegex(),m0=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,z0=C(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,h2).getRegex(),L0=C("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,h2).getRegex(),p0=C("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,h2).getRegex(),M0=C(/\\([punct])/,"gu").replace(/punct/g,h2).getRegex(),u0=C(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),d0=C(n1).replace("(?:-->|$)","-->").getRegex(),C0=C("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",d0).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),O2=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,h0=C(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",O2).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),v3=C(/^!?\[(label)\]\[(ref)\]/).replace("label",O2).replace("ref",a1).getRegex(),T3=C(/^!?\[(ref)\](?:\[\])?/).replace("ref",a1).getRegex(),g0=C("reflink|nolink(?!\\()","g").replace("reflink",v3).replace("nolink",T3).getRegex(),t1={_backpedal:u2,anyPunctuation:M0,autolink:u0,blockSkip:m0,br:A3,code:o0,del:u2,emStrongLDelim:z0,emStrongRDelimAst:L0,emStrongRDelimUnd:p0,escape:y3,link:h0,nolink:T3,punctuation:f0,reflink:v3,reflinkSearch:g0,tag:C0,text:r0,url:u2},x0=h(m({},t1),{link:C(/^!?\[(label)\]\((.*?)\)/).replace("label",O2).getRegex(),reflink:C(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O2).getRegex()}),c1=h(m({},t1),{escape:C(y3).replace("])","~|])").getRegex(),url:C(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),N0=h(m({},c1),{br:C(A3).replace("{2,}","*").getRegex(),text:C(c1.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),I2={normal:i1,gfm:i0,pedantic:t0},M2={normal:t1,gfm:c1,breaks:N0,pedantic:x0},O=class e{tokens;options;state;tokenizer;inlineQueue;constructor(s){this.tokens=[],this.tokens.links=Object.create(null),this.options=s||K,this.options.tokenizer=this.options.tokenizer||new t2,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let c={block:I2.normal,inline:M2.normal};this.options.pedantic?(c.block=I2.pedantic,c.inline=M2.pedantic):this.options.gfm&&(c.block=I2.gfm,this.options.breaks?c.inline=M2.breaks:c.inline=M2.gfm),this.tokenizer.rules=c}static get rules(){return{block:I2,inline:M2}}static lex(s,c){return new e(c).lex(s)}static lexInline(s,c){return new e(c).inlineTokens(s)}lex(s){s=s.replace(/\r\n|\r/g,`
`),this.blockTokens(s,this.tokens);for(let c=0;c<this.inlineQueue.length;c++){let l=this.inlineQueue[c];this.inlineTokens(l.src,l.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,c=[]){this.options.pedantic?s=s.replace(/\t/g,"    ").replace(/^ +$/gm,""):s=s.replace(/^( *)(\t+)/gm,(t,o,r)=>o+"    ".repeat(r.length));let l,a,n,i;for(;s;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(t=>(l=t.call({lexer:this},s,c))?(s=s.substring(l.raw.length),c.push(l),!0):!1))){if(l=this.tokenizer.space(s)){s=s.substring(l.raw.length),l.raw.length===1&&c.length>0?c[c.length-1].raw+=`
`:c.push(l);continue}if(l=this.tokenizer.code(s)){s=s.substring(l.raw.length),a=c[c.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):c.push(l);continue}if(l=this.tokenizer.fences(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.heading(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.hr(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.blockquote(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.list(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.html(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.def(s)){s=s.substring(l.raw.length),a=c[c.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+l.raw,a.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.lheading(s)){s=s.substring(l.raw.length),c.push(l);continue}if(n=s,this.options.extensions&&this.options.extensions.startBlock){let t=1/0,o=s.slice(1),r;this.options.extensions.startBlock.forEach(f=>{r=f.call({lexer:this},o),typeof r=="number"&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(n=s.substring(0,t+1))}if(this.state.top&&(l=this.tokenizer.paragraph(n))){a=c[c.length-1],i&&a.type==="paragraph"?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):c.push(l),i=n.length!==s.length,s=s.substring(l.raw.length);continue}if(l=this.tokenizer.text(s)){s=s.substring(l.raw.length),a=c[c.length-1],a&&a.type==="text"?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):c.push(l);continue}if(s){let t="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw new Error(t)}}return this.state.top=!0,c}inline(s,c=[]){return this.inlineQueue.push({src:s,tokens:c}),c}inlineTokens(s,c=[]){let l,a,n,i=s,t,o,r;if(this.tokens.links){let f=Object.keys(this.tokens.links);if(f.length>0)for(;(t=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)f.includes(t[0].slice(t[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(t=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(t=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,t.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;s;)if(o||(r=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(l=f.call({lexer:this},s,c))?(s=s.substring(l.raw.length),c.push(l),!0):!1))){if(l=this.tokenizer.escape(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.tag(s)){s=s.substring(l.raw.length),a=c[c.length-1],a&&l.type==="text"&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):c.push(l);continue}if(l=this.tokenizer.link(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(l.raw.length),a=c[c.length-1],a&&l.type==="text"&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):c.push(l);continue}if(l=this.tokenizer.emStrong(s,i,r)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.codespan(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.br(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.del(s)){s=s.substring(l.raw.length),c.push(l);continue}if(l=this.tokenizer.autolink(s)){s=s.substring(l.raw.length),c.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(s))){s=s.substring(l.raw.length),c.push(l);continue}if(n=s,this.options.extensions&&this.options.extensions.startInline){let f=1/0,L=s.slice(1),z;this.options.extensions.startInline.forEach(M=>{z=M.call({lexer:this},L),typeof z=="number"&&z>=0&&(f=Math.min(f,z))}),f<1/0&&f>=0&&(n=s.substring(0,f+1))}if(l=this.tokenizer.inlineText(n)){s=s.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(r=l.raw.slice(-1)),o=!0,a=c[c.length-1],a&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):c.push(l);continue}if(s){let f="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return c}},E=class{options;constructor(s){this.options=s||K}code(s,c,l){let a=(c||"").match(/^\S*/)?.[0];return s=s.replace(/\n$/,"")+`
`,a?'<pre><code class="language-'+y(a)+'">'+(l?s:y(s,!0))+`</code></pre>
`:"<pre><code>"+(l?s:y(s,!0))+`</code></pre>
`}blockquote(s){return`<blockquote>
${s}</blockquote>
`}html(s,c){return s}heading(s,c,l){return`<h${c}>${s}</h${c}>
`}hr(){return`<hr>
`}list(s,c,l){let a=c?"ol":"ul",n=c&&l!==1?' start="'+l+'"':"";return"<"+a+n+`>
`+s+"</"+a+`>
`}listitem(s,c,l){return`<li>${s}</li>
`}checkbox(s){return"<input "+(s?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(s){return`<p>${s}</p>
`}table(s,c){return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+s+`</thead>
`+c+`</table>
`}tablerow(s){return`<tr>
${s}</tr>
`}tablecell(s,c){let l=c.header?"th":"td";return(c.align?`<${l} align="${c.align}">`:`<${l}>`)+s+`</${l}>
`}strong(s){return`<strong>${s}</strong>`}em(s){return`<em>${s}</em>`}codespan(s){return`<code>${s}</code>`}br(){return"<br>"}del(s){return`<del>${s}</del>`}link(s,c,l){let a=d3(s);if(a===null)return l;s=a;let n='<a href="'+s+'"';return c&&(n+=' title="'+c+'"'),n+=">"+l+"</a>",n}image(s,c,l){let a=d3(s);if(a===null)return l;s=a;let n=`<img src="${s}" alt="${l}"`;return c&&(n+=` title="${c}"`),n+=">",n}text(s){return s}},d2=class{strong(s){return s}em(s){return s}codespan(s){return s}del(s){return s}html(s){return s}text(s){return s}link(s,c,l){return""+l}image(s,c,l){return""+l}br(){return""}},H=class e{options;renderer;textRenderer;constructor(s){this.options=s||K,this.options.renderer=this.options.renderer||new E,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new d2}static parse(s,c){return new e(c).parse(s)}static parseInline(s,c){return new e(c).parseInline(s)}parse(s,c=!0){let l="";for(let a=0;a<s.length;a++){let n=s[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]){let i=n,t=this.options.extensions.renderers[i.type].call({parser:this},i);if(t!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){l+=t||"";continue}}switch(n.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{let i=n;l+=this.renderer.heading(this.parseInline(i.tokens),i.depth,V4(this.parseInline(i.tokens,this.textRenderer)));continue}case"code":{let i=n;l+=this.renderer.code(i.text,i.lang,!!i.escaped);continue}case"table":{let i=n,t="",o="";for(let f=0;f<i.header.length;f++)o+=this.renderer.tablecell(this.parseInline(i.header[f].tokens),{header:!0,align:i.align[f]});t+=this.renderer.tablerow(o);let r="";for(let f=0;f<i.rows.length;f++){let L=i.rows[f];o="";for(let z=0;z<L.length;z++)o+=this.renderer.tablecell(this.parseInline(L[z].tokens),{header:!1,align:i.align[z]});r+=this.renderer.tablerow(o)}l+=this.renderer.table(t,r);continue}case"blockquote":{let i=n,t=this.parse(i.tokens);l+=this.renderer.blockquote(t);continue}case"list":{let i=n,t=i.ordered,o=i.start,r=i.loose,f="";for(let L=0;L<i.items.length;L++){let z=i.items[L],M=z.checked,d=z.task,N="";if(z.task){let b=this.renderer.checkbox(!!M);r?z.tokens.length>0&&z.tokens[0].type==="paragraph"?(z.tokens[0].text=b+" "+z.tokens[0].text,z.tokens[0].tokens&&z.tokens[0].tokens.length>0&&z.tokens[0].tokens[0].type==="text"&&(z.tokens[0].tokens[0].text=b+" "+z.tokens[0].tokens[0].text)):z.tokens.unshift({type:"text",text:b+" "}):N+=b+" "}N+=this.parse(z.tokens,r),f+=this.renderer.listitem(N,d,!!M)}l+=this.renderer.list(f,t,o);continue}case"html":{let i=n;l+=this.renderer.html(i.text,i.block);continue}case"paragraph":{let i=n;l+=this.renderer.paragraph(this.parseInline(i.tokens));continue}case"text":{let i=n,t=i.tokens?this.parseInline(i.tokens):i.text;for(;a+1<s.length&&s[a+1].type==="text";)i=s[++a],t+=`
`+(i.tokens?this.parseInline(i.tokens):i.text);l+=c?this.renderer.paragraph(t):t;continue}default:{let i='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return l}parseInline(s,c){c=c||this.renderer;let l="";for(let a=0;a<s.length;a++){let n=s[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]){let i=this.options.extensions.renderers[n.type].call({parser:this},n);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){l+=i||"";continue}}switch(n.type){case"escape":{let i=n;l+=c.text(i.text);break}case"html":{let i=n;l+=c.html(i.text);break}case"link":{let i=n;l+=c.link(i.href,i.title,this.parseInline(i.tokens,c));break}case"image":{let i=n;l+=c.image(i.href,i.title,i.text);break}case"strong":{let i=n;l+=c.strong(this.parseInline(i.tokens,c));break}case"em":{let i=n;l+=c.em(this.parseInline(i.tokens,c));break}case"codespan":{let i=n;l+=c.codespan(i.text);break}case"br":{l+=c.br();break}case"del":{let i=n;l+=c.del(this.parseInline(i.tokens,c));break}case"text":{let i=n;l+=c.text(i.text);break}default:{let i='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return l}},i2=class{options;constructor(s){this.options=s||K}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(s){return s}postprocess(s){return s}processAllTokens(s){return s}},l1=class{defaults=s1();options=this.setOptions;parse=this.#c(O.lex,H.parse);parseInline=this.#c(O.lexInline,H.parseInline);Parser=H;Renderer=E;TextRenderer=d2;Lexer=O;Tokenizer=t2;Hooks=i2;constructor(...s){this.use(...s)}walkTokens(s,c){let l=[];for(let a of s)switch(l=l.concat(c.call(this,a)),a.type){case"table":{let n=a;for(let i of n.header)l=l.concat(this.walkTokens(i.tokens,c));for(let i of n.rows)for(let t of i)l=l.concat(this.walkTokens(t.tokens,c));break}case"list":{let n=a;l=l.concat(this.walkTokens(n.items,c));break}default:{let n=a;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(i=>{let t=n[i].flat(1/0);l=l.concat(this.walkTokens(t,c))}):n.tokens&&(l=l.concat(this.walkTokens(n.tokens,c)))}}return l}use(...s){let c=this.defaults.extensions||{renderers:{},childTokens:{}};return s.forEach(l=>{let a=m({},l);if(a.async=this.defaults.async||a.async||!1,l.extensions&&(l.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let i=c.renderers[n.name];i?c.renderers[n.name]=function(...t){let o=n.renderer.apply(this,t);return o===!1&&(o=i.apply(this,t)),o}:c.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=c[n.level];i?i.unshift(n.tokenizer):c[n.level]=[n.tokenizer],n.start&&(n.level==="block"?c.startBlock?c.startBlock.push(n.start):c.startBlock=[n.start]:n.level==="inline"&&(c.startInline?c.startInline.push(n.start):c.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(c.childTokens[n.name]=n.childTokens)}),a.extensions=c),l.renderer){let n=this.defaults.renderer||new E(this.defaults);for(let i in l.renderer){if(!(i in n))throw new Error(`renderer '${i}' does not exist`);if(i==="options")continue;let t=i,o=l.renderer[t],r=n[t];n[t]=(...f)=>{let L=o.apply(n,f);return L===!1&&(L=r.apply(n,f)),L||""}}a.renderer=n}if(l.tokenizer){let n=this.defaults.tokenizer||new t2(this.defaults);for(let i in l.tokenizer){if(!(i in n))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let t=i,o=l.tokenizer[t],r=n[t];n[t]=(...f)=>{let L=o.apply(n,f);return L===!1&&(L=r.apply(n,f)),L}}a.tokenizer=n}if(l.hooks){let n=this.defaults.hooks||new i2;for(let i in l.hooks){if(!(i in n))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;let t=i,o=l.hooks[t],r=n[t];i2.passThroughHooks.has(i)?n[t]=f=>{if(this.defaults.async)return Promise.resolve(o.call(n,f)).then(z=>r.call(n,z));let L=o.call(n,f);return r.call(n,L)}:n[t]=(...f)=>{let L=o.apply(n,f);return L===!1&&(L=r.apply(n,f)),L}}a.hooks=n}if(l.walkTokens){let n=this.defaults.walkTokens,i=l.walkTokens;a.walkTokens=function(t){let o=[];return o.push(i.call(this,t)),n&&(o=o.concat(n.call(this,t))),o}}this.defaults=m(m({},this.defaults),a)}),this}setOptions(s){return this.defaults=m(m({},this.defaults),s),this}lexer(s,c){return O.lex(s,c??this.defaults)}parser(s,c){return H.parse(s,c??this.defaults)}#c(s,c){return(l,a)=>{let n=m({},a),i=m(m({},this.defaults),n);this.defaults.async===!0&&n.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);let t=this.#l(!!i.silent,!!i.async);if(typeof l>"u"||l===null)return t(new Error("marked(): input parameter is undefined or null"));if(typeof l!="string")return t(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(l):l).then(o=>s(o,i)).then(o=>i.hooks?i.hooks.processAllTokens(o):o).then(o=>i.walkTokens?Promise.all(this.walkTokens(o,i.walkTokens)).then(()=>o):o).then(o=>c(o,i)).then(o=>i.hooks?i.hooks.postprocess(o):o).catch(t);try{i.hooks&&(l=i.hooks.preprocess(l));let o=s(l,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let r=c(o,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(o){return t(o)}}}#l(s,c){return l=>{if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,s){let a="<p>An error occurred:</p><pre>"+y(l.message+"",!0)+"</pre>";return c?Promise.resolve(a):a}if(c)return Promise.reject(l);throw l}}},Q=new l1;function u(e,s){return Q.parse(e,s)}u.options=u.setOptions=function(e){return Q.setOptions(e),u.defaults=Q.defaults,x3(u.defaults),u};u.getDefaults=s1;u.defaults=K;u.use=function(...e){return Q.use(...e),u.defaults=Q.defaults,x3(u.defaults),u};u.walkTokens=function(e,s){return Q.walkTokens(e,s)};u.parseInline=Q.parseInline;u.Parser=H;u.parser=H.parse;u.Renderer=E;u.TextRenderer=d2;u.Lexer=O;u.lexer=O.lex;u.Tokenizer=t2;u.Hooks=i2;u.parse=u;var B8=u.options,I8=u.setOptions,O8=u.use,H8=u.walkTokens,_8=u.parseInline;var U8=H.parse,q8=O.lex;var w0=["*"],S0="Copy",y0="Copied",A0=(()=>{class e{constructor(){this._buttonClick$=new A2,this.copied$=this._buttonClick$.pipe(Y1(()=>j1(q1(!0),$1(3e3).pipe(W1(!1)))),G1(),V1(1)),this.copiedText$=this.copied$.pipe(X1(!1),Q2(c=>c?y0:S0))}onCopyToClipboardClick(){this._buttonClick$.next()}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275cmp=e2({type:e,selectors:[["markdown-clipboard"]],standalone:!0,features:[n2],decls:4,vars:7,consts:[[1,"markdown-clipboard-button",3,"click"]],template:function(l,a){l&1&&(i3(0,"button",0),Z2(1,"async"),r3("click",function(){return a.onCopyToClipboardClick()}),f3(2),Z2(3,"async"),t3()),l&2&&(K2("copied",J2(1,3,a.copied$)),s3(2),m3(J2(3,5,a.copiedText$)))},dependencies:[L3],encapsulation:2,changeDetection:0})}}return e})(),v0=new p2("CLIPBOARD_OPTIONS");var o1=function(e){return e.CommandLine="command-line",e.LineHighlight="line-highlight",e.LineNumbers="line-numbers",e}(o1||{}),F3=new p2("MARKED_EXTENSIONS"),T0=new p2("MARKED_OPTIONS"),P0="[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information",F0="[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information",E0="[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information",R0="[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information",D0="[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function",B0="[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information",E3=new p2("SECURITY_CONTEXT");var R3=(()=>{class e{get options(){return this._options}set options(c){this._options=m(m({},this.DEFAULT_MARKED_OPTIONS),c)}get renderer(){return this.options.renderer}set renderer(c){this.options.renderer=c}constructor(c,l,a,n,i,t,o){this.clipboardOptions=c,this.extensions=l,this.platform=n,this.securityContext=i,this.http=t,this.sanitizer=o,this.DEFAULT_MARKED_OPTIONS={renderer:new E},this.DEFAULT_KATEX_OPTIONS={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}]},this.DEFAULT_MERMAID_OPTIONS={startOnLoad:!1},this.DEFAULT_CLIPBOARD_OPTIONS={buttonComponent:void 0},this.DEFAULT_PARSE_OPTIONS={decodeHtml:!1,inline:!1,emoji:!1,mermaid:!1,markedOptions:void 0,disableSanitizer:!1},this.DEFAULT_RENDER_OPTIONS={clipboard:!1,clipboardOptions:void 0,katex:!1,katexOptions:void 0,mermaid:!1,mermaidOptions:void 0},this._reload$=new A2,this.reload$=this._reload$.asObservable(),this.options=a}parse(c,l=this.DEFAULT_PARSE_OPTIONS){let{decodeHtml:a,inline:n,emoji:i,mermaid:t,disableSanitizer:o}=l,r=m(m({},this.options),l.markedOptions),f=r.renderer||this.renderer||new E;this.extensions&&(this.renderer=this.extendsRendererForExtensions(f)),t&&(this.renderer=this.extendsRendererForMermaid(f));let L=this.trimIndentation(c),z=a?this.decodeHtml(L):L,M=i?this.parseEmoji(z):z,d=this.parseMarked(M,r,n);return(o?d:this.sanitizer.sanitize(this.securityContext,d))||""}render(c,l=this.DEFAULT_RENDER_OPTIONS,a){let{clipboard:n,clipboardOptions:i,katex:t,katexOptions:o,mermaid:r,mermaidOptions:f}=l;t&&this.renderKatex(c,m(m({},this.DEFAULT_KATEX_OPTIONS),o)),r&&this.renderMermaid(c,m(m({},this.DEFAULT_MERMAID_OPTIONS),f)),n&&this.renderClipboard(c,a,m(m(m({},this.DEFAULT_CLIPBOARD_OPTIONS),this.clipboardOptions),i)),this.highlight(c)}reload(){this._reload$.next()}getSource(c){if(!this.http)throw new Error(B0);return this.http.get(c,{responseType:"text"}).pipe(Q2(l=>this.handleExtension(c,l)))}highlight(c){if(!Y(this.platform)||typeof Prism>"u"||typeof Prism.highlightAllUnder>"u")return;c||(c=document);let l=c.querySelectorAll('pre code:not([class*="language-"])');Array.prototype.forEach.call(l,a=>a.classList.add("language-none")),Prism.highlightAllUnder(c)}decodeHtml(c){if(!Y(this.platform))return c;let l=document.createElement("textarea");return l.innerHTML=c,l.value}extendsRendererForExtensions(c){let l=c;return l.\u0275NgxMarkdownRendererExtendedForExtensions===!0||(this.extensions?.length>0&&u.use(...this.extensions),l.\u0275NgxMarkdownRendererExtendedForExtensions=!0),c}extendsRendererForMermaid(c){let l=c;if(l.\u0275NgxMarkdownRendererExtendedForMermaid===!0)return c;let a=c.code;return c.code=function(n,i,t){return i==="mermaid"?`<div class="mermaid">${n}</div>`:a.call(this,n,i,t)},l.\u0275NgxMarkdownRendererExtendedForMermaid=!0,c}handleExtension(c,l){let a=c.lastIndexOf("://"),n=a>-1?c.substring(a+4):c,i=n.lastIndexOf("/"),t=i>-1?n.substring(i+1).split("?")[0]:"",o=t.lastIndexOf("."),r=o>-1?t.substring(o+1):"";return r&&r!=="md"?"```"+r+`
`+l+"\n```":l}parseMarked(c,l,a=!1){if(l.renderer){let n=m({},l.renderer);delete n.\u0275NgxMarkdownRendererExtendedForExtensions,delete n.\u0275NgxMarkdownRendererExtendedForMermaid,delete l.renderer,u.use({renderer:n})}return a?u.parseInline(c,l):u.parse(c,l)}parseEmoji(c){if(!Y(this.platform))return c;if(typeof joypixels>"u"||typeof joypixels.shortnameToUnicode>"u")throw new Error(P0);return joypixels.shortnameToUnicode(c)}renderKatex(c,l){if(Y(this.platform)){if(typeof katex>"u"||typeof renderMathInElement>"u")throw new Error(F0);renderMathInElement(c,l)}}renderClipboard(c,l,a){if(!Y(this.platform))return;if(typeof ClipboardJS>"u")throw new Error(R0);if(!l)throw new Error(D0);let{buttonComponent:n,buttonTemplate:i}=a,t=c.querySelectorAll("pre");for(let o=0;o<t.length;o++){let r=t.item(o),f=document.createElement("div");f.style.position="relative",r.parentNode.insertBefore(f,r),f.appendChild(r);let L=document.createElement("div");L.classList.add("markdown-clipboard-toolbar"),L.style.position="absolute",L.style.top=".5em",L.style.right=".5em",L.style.zIndex="1",f.insertAdjacentElement("beforeend",L),f.onmouseenter=()=>L.classList.add("hover"),f.onmouseleave=()=>L.classList.remove("hover");let z;if(n){let d=l.createComponent(n);z=d.hostView,d.changeDetectorRef.markForCheck()}else if(i)z=l.createEmbeddedView(i);else{let d=l.createComponent(A0);z=d.hostView,d.changeDetectorRef.markForCheck()}let M;z.rootNodes.forEach(d=>{L.appendChild(d),M=new ClipboardJS(d,{text:()=>r.innerText})}),z.onDestroy(()=>M.destroy())}}renderMermaid(c,l=this.DEFAULT_MERMAID_OPTIONS){if(!Y(this.platform))return;if(typeof mermaid>"u"||typeof mermaid.initialize>"u")throw new Error(E0);let a=c.querySelectorAll(".mermaid");a.length!==0&&(mermaid.initialize(l),mermaid.run({nodes:a}))}trimIndentation(c){if(!c)return"";let l;return c.split(`
`).map(a=>{let n=l;return a.length>0&&(n=isNaN(n)?a.search(/\S|$/):Math.min(a.search(/\S|$/),n)),isNaN(l)&&(l=n),n?a.substring(n):a}).join(`
`)}static{this.\u0275fac=function(l){return new(l||e)($(v0,8),$(F3,8),$(T0,8),$(J1),$(E3),$(M3,8),$(D2))}}static{this.\u0275prov=L2({token:e,factory:e.\u0275fac})}}return e})(),r5=(()=>{class e{get disableSanitizer(){return this._disableSanitizer}set disableSanitizer(c){this._disableSanitizer=this.coerceBooleanProperty(c)}get inline(){return this._inline}set inline(c){this._inline=this.coerceBooleanProperty(c)}get clipboard(){return this._clipboard}set clipboard(c){this._clipboard=this.coerceBooleanProperty(c)}get emoji(){return this._emoji}set emoji(c){this._emoji=this.coerceBooleanProperty(c)}get katex(){return this._katex}set katex(c){this._katex=this.coerceBooleanProperty(c)}get mermaid(){return this._mermaid}set mermaid(c){this._mermaid=this.coerceBooleanProperty(c)}get lineHighlight(){return this._lineHighlight}set lineHighlight(c){this._lineHighlight=this.coerceBooleanProperty(c)}get lineNumbers(){return this._lineNumbers}set lineNumbers(c){this._lineNumbers=this.coerceBooleanProperty(c)}get commandLine(){return this._commandLine}set commandLine(c){this._commandLine=this.coerceBooleanProperty(c)}constructor(c,l,a){this.element=c,this.markdownService=l,this.viewContainerRef=a,this.error=new P2,this.load=new P2,this.ready=new P2,this._clipboard=!1,this._commandLine=!1,this._disableSanitizer=!1,this._emoji=!1,this._inline=!1,this._katex=!1,this._lineHighlight=!1,this._lineNumbers=!1,this._mermaid=!1,this.destroyed$=new A2}ngOnChanges(){this.loadContent()}loadContent(){if(this.data!=null){this.handleData();return}if(this.src!=null){this.handleSrc();return}}ngAfterViewInit(){!this.data&&!this.src&&this.handleTransclusion(),this.markdownService.reload$.pipe(Q1(this.destroyed$)).subscribe(()=>this.loadContent())}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}render(c,l=!1){return U1(this,null,function*(){let a={decodeHtml:l,inline:this.inline,emoji:this.emoji,mermaid:this.mermaid,disableSanitizer:this.disableSanitizer},n={clipboard:this.clipboard,clipboardOptions:{buttonComponent:this.clipboardButtonComponent,buttonTemplate:this.clipboardButtonTemplate},katex:this.katex,katexOptions:this.katexOptions,mermaid:this.mermaid,mermaidOptions:this.mermaidOptions},i=yield this.markdownService.parse(c,a);this.element.nativeElement.innerHTML=i,this.handlePlugins(),this.markdownService.render(this.element.nativeElement,n,this.viewContainerRef),this.ready.emit()})}coerceBooleanProperty(c){return c!=null&&`${String(c)}`!="false"}handleData(){this.render(this.data)}handleSrc(){this.markdownService.getSource(this.src).subscribe({next:c=>{this.render(c).then(()=>{this.load.emit(c)})},error:c=>this.error.emit(c)})}handleTransclusion(){this.render(this.element.nativeElement.innerHTML,!0)}handlePlugins(){this.commandLine&&(this.setPluginClass(this.element.nativeElement,o1.CommandLine),this.setPluginOptions(this.element.nativeElement,{dataFilterOutput:this.filterOutput,dataHost:this.host,dataPrompt:this.prompt,dataOutput:this.output,dataUser:this.user})),this.lineHighlight&&this.setPluginOptions(this.element.nativeElement,{dataLine:this.line,dataLineOffset:this.lineOffset}),this.lineNumbers&&(this.setPluginClass(this.element.nativeElement,o1.LineNumbers),this.setPluginOptions(this.element.nativeElement,{dataStart:this.start}))}setPluginClass(c,l){let a=c.querySelectorAll("pre");for(let n=0;n<a.length;n++){let i=l instanceof Array?l:[l];a.item(n).classList.add(...i)}}setPluginOptions(c,l){let a=c.querySelectorAll("pre");for(let n=0;n<a.length;n++)Object.keys(l).forEach(i=>{let t=l[i];if(t){let o=this.toLispCase(i);a.item(n).setAttribute(o,t.toString())}})}toLispCase(c){let l=c.match(/([A-Z])/g);if(!l)return c;let a=c.toString();for(let n=0,i=l.length;n<i;n++)a=a.replace(new RegExp(l[n]),"-"+l[n].toLowerCase());return a.slice(0,1)==="-"&&(a=a.slice(1)),a}static{this.\u0275fac=function(l){return new(l||e)(P(F2),P(R3),P(a3))}}static{this.\u0275cmp=e2({type:e,selectors:[["markdown"],["","markdown",""]],inputs:{data:"data",src:"src",disableSanitizer:"disableSanitizer",inline:"inline",clipboard:"clipboard",clipboardButtonComponent:"clipboardButtonComponent",clipboardButtonTemplate:"clipboardButtonTemplate",emoji:"emoji",katex:"katex",katexOptions:"katexOptions",mermaid:"mermaid",mermaidOptions:"mermaidOptions",lineHighlight:"lineHighlight",line:"line",lineOffset:"lineOffset",lineNumbers:"lineNumbers",start:"start",commandLine:"commandLine",filterOutput:"filterOutput",host:"host",prompt:"prompt",output:"output",user:"user"},outputs:{error:"error",load:"load",ready:"ready"},standalone:!0,features:[a2,n2],ngContentSelectors:w0,decls:1,vars:0,template:function(l,a){l&1&&(E2(),R2(0))},encapsulation:2})}}return e})();function I0(e){return[R3,e?.loader??[],e?.clipboardOptions??[],e?.markedOptions??[],{provide:F3,useValue:e?.markedExtensions??[]},{provide:E3,useValue:e?.sanitize??c3.HTML}]}var f5=(()=>{class e{static forRoot(c){return{ngModule:e,providers:[I0(c)]}}static forChild(){return{ngModule:e}}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275mod=T2({type:e})}static{this.\u0275inj=v2({imports:[p3]})}}return e})(),P3;(function(e){let s;(function(a){a.Strict="strict",a.Loose="loose",a.Antiscript="antiscript",a.Sandbox="sandbox"})(s=e.SecurityLevel||(e.SecurityLevel={}));let c;(function(a){a.Base="base",a.Forest="forest",a.Dark="dark",a.Default="default",a.Neutral="neutral"})(c=e.Theme||(e.Theme={}));let l;(function(a){a[a.Debug=1]="Debug",a[a.Info=2]="Info",a[a.Warn=3]="Warn",a[a.Error=4]="Error",a[a.Fatal=5]="Fatal"})(l=e.LogLevel||(e.LogLevel={}))})(P3||(P3={}));var p5={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]};var M5={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};var u5={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]};var D3=()=>{},v1={},n4={},i4=null,t4={mark:D3,measure:D3};try{typeof window<"u"&&(v1=window),typeof document<"u"&&(n4=document),typeof MutationObserver<"u"&&(i4=MutationObserver),typeof performance<"u"&&(t4=performance)}catch{}var{userAgent:B3=""}=v1.navigator||{},G=v1,g=n4,I3=i4,_2=t4,C5=!!G.document,q=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",o4=~B3.indexOf("MSIE")||~B3.indexOf("Trident/"),x="classic",r4="duotone",A="sharp",v="sharp-duotone",O0=[x,r4,A,v],H0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},O3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_0=["kit"],U0=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,q0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,$0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},j0={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},W0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},G0={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},V0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},X0={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},f4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Y0=["solid","regular","light","thin","duotone","brands"],m4=[1,2,3,4,5,6,7,8,9,10],Q0=m4.concat([11,12,13,14,15,16,17,18,19,20]),g2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K0=[...Object.keys(G0),...Y0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",g2.GROUP,g2.SWAP_OPACITY,g2.PRIMARY,g2.SECONDARY].concat(m4.map(e=>"".concat(e,"x"))).concat(Q0.map(e=>"w-".concat(e))),Z0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},J0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},c6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},H3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_="___FONT_AWESOME___",p1=16,z4="fa",L4="svg-inline--fa",l2="data-fa-i2svg",M1="data-fa-pseudo-element",l6="data-fa-pseudo-element-pending",T1="data-prefix",P1="data-icon",_3="fontawesome-i2svg",s6="async",e6=["HTML","HEAD","STYLE","SCRIPT"],p4=(()=>{try{return!0}catch{return!1}})(),M4=[x,A,v];function S2(e){return new Proxy(e,{get(s,c){return c in s?s[c]:s[x]}})}var u4=m({},f4);u4[x]=m(m(m({},f4[x]),O3.kit),O3["kit-duotone"]);var J=S2(u4),u1=m({},X0);u1[x]=m(m(m({},u1[x]),H3.kit),H3["kit-duotone"]);var k2=S2(u1),d1=m({},V0);d1[x]=m(m({},d1[x]),c6.kit);var c2=S2(d1),C1=m({},W0);C1[x]=m(m({},C1[x]),J0.kit);var a6=S2(C1),n6=U0,d4="fa-layers-text",i6=q0,t6=m({},H0),h5=S2(t6),o6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],r1=g2,f2=new Set;Object.keys(k2[x]).map(f2.add.bind(f2));Object.keys(k2[A]).map(f2.add.bind(f2));Object.keys(k2[v]).map(f2.add.bind(f2));var r6=[..._0,...K0],N2=G.FontAwesomeConfig||{};function f6(e){var s=g.querySelector("script["+e+"]");if(s)return s.getAttribute(e)}function m6(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[c,l]=s,a=m6(f6(c));a!=null&&(N2[l]=a)});var C4={styleDefault:"solid",familyDefault:"classic",cssPrefix:z4,replacementClass:L4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};N2.familyPrefix&&(N2.cssPrefix=N2.familyPrefix);var m2=m(m({},C4),N2);m2.autoReplaceSvg||(m2.observeMutations=!1);var p={};Object.keys(C4).forEach(e=>{Object.defineProperty(p,e,{enumerable:!0,set:function(s){m2[e]=s,b2.forEach(c=>c(p))},get:function(){return m2[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){m2.cssPrefix=e,b2.forEach(s=>s(p))},get:function(){return m2.cssPrefix}});G.FontAwesomeConfig=p;var b2=[];function z6(e){return b2.push(e),()=>{b2.splice(b2.indexOf(e),1)}}var j=p1,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function L6(e){if(!e||!q)return;let s=g.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=e;let c=g.head.childNodes,l=null;for(let a=c.length-1;a>-1;a--){let n=c[a],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(l=n)}return g.head.insertBefore(s,l),e}var p6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function w2(){let e=12,s="";for(;e-- >0;)s+=p6[Math.random()*62|0];return s}function z2(e){let s=[];for(let c=(e||[]).length>>>0;c--;)s[c]=e[c];return s}function F1(e){return e.classList?z2(e.classList):(e.getAttribute("class")||"").split(" ").filter(s=>s)}function h4(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M6(e){return Object.keys(e||{}).reduce((s,c)=>s+"".concat(c,'="').concat(h4(e[c]),'" '),"").trim()}function W2(e){return Object.keys(e||{}).reduce((s,c)=>s+"".concat(c,": ").concat(e[c].trim(),";"),"")}function E1(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function u6(e){let{transform:s,containerWidth:c,iconWidth:l}=e,a={transform:"translate(".concat(c/2," 256)")},n="translate(".concat(s.x*32,", ").concat(s.y*32,") "),i="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),t="rotate(".concat(s.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},r={transform:"translate(".concat(l/2*-1," -256)")};return{outer:a,inner:o,path:r}}function d6(e){let{transform:s,width:c=p1,height:l=p1,startCentered:a=!1}=e,n="";return a&&o4?n+="translate(".concat(s.x/j-c/2,"em, ").concat(s.y/j-l/2,"em) "):a?n+="translate(calc(-50% + ".concat(s.x/j,"em), calc(-50% + ").concat(s.y/j,"em)) "):n+="translate(".concat(s.x/j,"em, ").concat(s.y/j,"em) "),n+="scale(".concat(s.size/j*(s.flipX?-1:1),", ").concat(s.size/j*(s.flipY?-1:1),") "),n+="rotate(".concat(s.rotate,"deg) "),n}var C6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function g4(){let e=z4,s=L4,c=p.cssPrefix,l=p.replacementClass,a=C6;if(c!==e||l!==s){let n=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),t=new RegExp("\\.".concat(s),"g");a=a.replace(n,".".concat(c,"-")).replace(i,"--".concat(c,"-")).replace(t,".".concat(l))}return a}var U3=!1;function f1(){p.autoAddCss&&!U3&&(L6(g4()),U3=!0)}var h6={mixout(){return{dom:{css:g4,insertCss:f1}}},hooks(){return{beforeDOMElementCreation(){f1()},beforeI2svg(){f1()}}}},U=G||{};U[_]||(U[_]={});U[_].styles||(U[_].styles={});U[_].hooks||(U[_].hooks={});U[_].shims||(U[_].shims=[]);var D=U[_],x4=[],N4=function(){g.removeEventListener("DOMContentLoaded",N4),$2=1,x4.map(e=>e())},$2=!1;q&&($2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),$2||g.addEventListener("DOMContentLoaded",N4));function g6(e){q&&($2?setTimeout(e,0):x4.push(e))}function y2(e){let{tag:s,attributes:c={},children:l=[]}=e;return typeof e=="string"?h4(e):"<".concat(s," ").concat(M6(c),">").concat(l.map(y2).join(""),"</").concat(s,">")}function q3(e,s,c){if(e&&e[s]&&e[s][c])return{prefix:s,iconName:c,icon:e[s][c]}}var x6=function(s,c){return function(l,a,n,i){return s.call(c,l,a,n,i)}},m1=function(s,c,l,a){var n=Object.keys(s),i=n.length,t=a!==void 0?x6(c,a):c,o,r,f;for(l===void 0?(o=1,f=s[n[0]]):(o=0,f=l);o<i;o++)r=n[o],f=t(f,s[r],r,s);return f};function N6(e){let s=[],c=0,l=e.length;for(;c<l;){let a=e.charCodeAt(c++);if(a>=55296&&a<=56319&&c<l){let n=e.charCodeAt(c++);(n&64512)==56320?s.push(((a&1023)<<10)+(n&1023)+65536):(s.push(a),c--)}else s.push(a)}return s}function h1(e){let s=N6(e);return s.length===1?s[0].toString(16):null}function b6(e,s){let c=e.length,l=e.charCodeAt(s),a;return l>=55296&&l<=56319&&c>s+1&&(a=e.charCodeAt(s+1),a>=56320&&a<=57343)?(l-55296)*1024+a-56320+65536:l}function $3(e){return Object.keys(e).reduce((s,c)=>{let l=e[c];return!!l.icon?s[l.iconName]=l.icon:s[c]=l,s},{})}function g1(e,s){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:l=!1}=c,a=$3(s);typeof D.hooks.addPack=="function"&&!l?D.hooks.addPack(e,$3(s)):D.styles[e]=m(m({},D.styles[e]||{}),a),e==="fas"&&g1("fa",s)}var{styles:Z,shims:k6}=D,w6={[x]:Object.values(c2[x]),[A]:Object.values(c2[A]),[v]:Object.values(c2[v])},R1=null,b4={},k4={},w4={},S4={},y4={},S6={[x]:Object.keys(J[x]),[A]:Object.keys(J[A]),[v]:Object.keys(J[v])};function y6(e){return~r6.indexOf(e)}function A6(e,s){let c=s.split("-"),l=c[0],a=c.slice(1).join("-");return l===e&&a!==""&&!y6(a)?a:null}var A4=()=>{let e=l=>m1(Z,(a,n,i)=>(a[i]=m1(n,l,{}),a),{});b4=e((l,a,n)=>(a[3]&&(l[a[3]]=n),a[2]&&a[2].filter(t=>typeof t=="number").forEach(t=>{l[t.toString(16)]=n}),l)),k4=e((l,a,n)=>(l[n]=n,a[2]&&a[2].filter(t=>typeof t=="string").forEach(t=>{l[t]=n}),l)),y4=e((l,a,n)=>{let i=a[2];return l[n]=n,i.forEach(t=>{l[t]=n}),l});let s="far"in Z||p.autoFetchSvg,c=m1(k6,(l,a)=>{let n=a[0],i=a[1],t=a[2];return i==="far"&&!s&&(i="fas"),typeof n=="string"&&(l.names[n]={prefix:i,iconName:t}),typeof n=="number"&&(l.unicodes[n.toString(16)]={prefix:i,iconName:t}),l},{names:{},unicodes:{}});w4=c.names,S4=c.unicodes,R1=G2(p.styleDefault,{family:p.familyDefault})};z6(e=>{R1=G2(e.styleDefault,{family:p.familyDefault})});A4();function D1(e,s){return(b4[e]||{})[s]}function v6(e,s){return(k4[e]||{})[s]}function W(e,s){return(y4[e]||{})[s]}function v4(e){return w4[e]||{prefix:null,iconName:null}}function T6(e){let s=S4[e],c=D1("fas",e);return s||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function V(){return R1}var B1=()=>({prefix:null,iconName:null,rest:[]});function G2(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:c=x}=s,l=J[c][e],a=k2[c][e]||k2[c][l],n=e in D.styles?e:null;return a||n||null}var P6={[x]:Object.keys(c2[x]),[A]:Object.keys(c2[A]),[v]:Object.keys(c2[v])};function V2(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:c=!1}=s,l={[x]:"".concat(p.cssPrefix,"-").concat(x),[A]:"".concat(p.cssPrefix,"-").concat(A),[v]:"".concat(p.cssPrefix,"-").concat(v)},a=null,n=x,i=O0.filter(o=>o!==r4);i.forEach(o=>{(e.includes(l[o])||e.some(r=>P6[o].includes(r)))&&(n=o)});let t=e.reduce((o,r)=>{let f=A6(p.cssPrefix,r);if(Z[r]?(r=w6[n].includes(r)?a6[n][r]:r,a=r,o.prefix=r):S6[n].indexOf(r)>-1?(a=r,o.prefix=G2(r,{family:n})):f?o.iconName=f:r!==p.replacementClass&&!i.some(L=>r===l[L])&&o.rest.push(r),!c&&o.prefix&&o.iconName){let L=a==="fa"?v4(o.iconName):{},z=W(o.prefix,o.iconName);L.prefix&&(a=null),o.iconName=L.iconName||z||o.iconName,o.prefix=L.prefix||o.prefix,o.prefix==="far"&&!Z.far&&Z.fas&&!p.autoFetchSvg&&(o.prefix="fas")}return o},B1());return(e.includes("fa-brands")||e.includes("fab"))&&(t.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(t.prefix="fad"),!t.prefix&&n===A&&(Z.fass||p.autoFetchSvg)&&(t.prefix="fass",t.iconName=W(t.prefix,t.iconName)||t.iconName),!t.prefix&&n===v&&(Z.fasds||p.autoFetchSvg)&&(t.prefix="fasds",t.iconName=W(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||a==="fa")&&(t.prefix=V()||"fas"),t}var x1=class{constructor(){this.definitions={}}add(){for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];let a=c.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=m(m({},this.definitions[n]||{}),a[n]),g1(n,a[n]);let i=c2[x][n];i&&g1(i,a[n]),A4()})}reset(){this.definitions={}}_pullDefinitions(s,c){let l=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(l).map(a=>{let{prefix:n,iconName:i,icon:t}=l[a],o=t[2];s[n]||(s[n]={}),o.length>0&&o.forEach(r=>{typeof r=="string"&&(s[n][r]=t)}),s[n][i]=t}),s}},j3=[],o2={},r2={},F6=Object.keys(r2);function E6(e,s){let{mixoutsTo:c}=s;return j3=e,o2={},Object.keys(r2).forEach(l=>{F6.indexOf(l)===-1&&delete r2[l]}),j3.forEach(l=>{let a=l.mixout?l.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(c[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(i=>{c[n]||(c[n]={}),c[n][i]=a[n][i]})}),l.hooks){let n=l.hooks();Object.keys(n).forEach(i=>{o2[i]||(o2[i]=[]),o2[i].push(n[i])})}l.provides&&l.provides(r2)}),c}function N1(e,s){for(var c=arguments.length,l=new Array(c>2?c-2:0),a=2;a<c;a++)l[a-2]=arguments[a];return(o2[e]||[]).forEach(i=>{s=i.apply(null,[s,...l])}),s}function s2(e){for(var s=arguments.length,c=new Array(s>1?s-1:0),l=1;l<s;l++)c[l-1]=arguments[l];(o2[e]||[]).forEach(n=>{n.apply(null,c)})}function X(){let e=arguments[0],s=Array.prototype.slice.call(arguments,1);return r2[e]?r2[e].apply(null,s):void 0}function b1(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:s}=e,c=e.prefix||V();if(s)return s=W(c,s)||s,q3(T4.definitions,c,s)||q3(D.styles,c,s)}var T4=new x1,R6=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,s2("noAuto")},D6={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(s2("beforeI2svg",e),X("pseudoElements2svg",e),X("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s}=e;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,g6(()=>{I6({autoReplaceSvgRoot:s}),s2("watch",e)})}},B6={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let s=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],c=G2(e[0]);return{prefix:c,iconName:W(c,s)||s}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(n6))){let s=V2(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||V(),iconName:W(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){let s=V();return{prefix:s,iconName:W(s,e)||e}}}},T={noAuto:R6,config:p,dom:D6,parse:B6,library:T4,findIconDefinition:b1,toHtml:y2},I6=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s=g}=e;(Object.keys(D.styles).length>0||p.autoFetchSvg)&&q&&p.autoReplaceSvg&&T.dom.i2svg({node:s})};function X2(e,s){return Object.defineProperty(e,"abstract",{get:s}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(c=>y2(c))}}),Object.defineProperty(e,"node",{get:function(){if(!q)return;let c=g.createElement("div");return c.innerHTML=e.html,c.children}}),e}function O6(e){let{children:s,main:c,mask:l,attributes:a,styles:n,transform:i}=e;if(E1(i)&&c.found&&!l.found){let{width:t,height:o}=c,r={x:t/o/2,y:.5};a.style=W2(h(m({},n),{"transform-origin":"".concat(r.x+i.x/16,"em ").concat(r.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:s}]}function H6(e){let{prefix:s,iconName:c,children:l,attributes:a,symbol:n}=e,i=n===!0?"".concat(s,"-").concat(p.cssPrefix,"-").concat(c):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(m({},a),{id:i}),children:l}]}]}function I1(e){let{icons:{main:s,mask:c},prefix:l,iconName:a,transform:n,symbol:i,title:t,maskId:o,titleId:r,extra:f,watchable:L=!1}=e,{width:z,height:M}=c.found?c:s,d=l==="fak",N=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(F=>f.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(f.classes).join(" "),b={children:[],attributes:h(m({},f.attributes),{"data-prefix":l,"data-icon":a,class:N,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(M)})},S=d&&!~f.classes.indexOf("fa-fw")?{width:"".concat(z/M*16*.0625,"em")}:{};L&&(b.attributes[l2]=""),t&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(r||w2())},children:[t]}),delete b.attributes.title);let k=h(m({},b),{prefix:l,iconName:a,main:s,mask:c,maskId:o,transform:n,symbol:i,styles:m(m({},S),f.styles)}),{children:w,attributes:I}=c.found&&s.found?X("generateAbstractMask",k)||{children:[],attributes:{}}:X("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=w,k.attributes=I,i?H6(k):O6(k)}function W3(e){let{content:s,width:c,height:l,transform:a,title:n,extra:i,watchable:t=!1}=e,o=h(m(m({},i.attributes),n?{title:n}:{}),{class:i.classes.join(" ")});t&&(o[l2]="");let r=m({},i.styles);E1(a)&&(r.transform=d6({transform:a,startCentered:!0,width:c,height:l}),r["-webkit-transform"]=r.transform);let f=W2(r);f.length>0&&(o.style=f);let L=[];return L.push({tag:"span",attributes:o,children:[s]}),n&&L.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),L}function _6(e){let{content:s,title:c,extra:l}=e,a=h(m(m({},l.attributes),c?{title:c}:{}),{class:l.classes.join(" ")}),n=W2(l.styles);n.length>0&&(a.style=n);let i=[];return i.push({tag:"span",attributes:a,children:[s]}),c&&i.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),i}var{styles:z1}=D;function k1(e){let s=e[0],c=e[1],[l]=e.slice(4),a=null;return Array.isArray(l)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(r1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(r1.SECONDARY),fill:"currentColor",d:l[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(r1.PRIMARY),fill:"currentColor",d:l[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:l}},{found:!0,width:s,height:c,icon:a}}var U6={found:!1,width:512,height:512};function q6(e,s){!p4&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(s,'" is missing.'))}function w1(e,s){let c=s;return s==="fa"&&p.styleDefault!==null&&(s=V()),new Promise((l,a)=>{if(c==="fa"){let n=v4(e)||{};e=n.iconName||e,s=n.prefix||s}if(e&&s&&z1[s]&&z1[s][e]){let n=z1[s][e];return l(k1(n))}q6(e,s),l(h(m({},U6),{icon:p.showMissingIcons&&e?X("missingIconAbstract")||{}:{}}))})}var G3=()=>{},S1=p.measurePerformance&&_2&&_2.mark&&_2.measure?_2:{mark:G3,measure:G3},x2='FA "6.6.0"',$6=e=>(S1.mark("".concat(x2," ").concat(e," begins")),()=>P4(e)),P4=e=>{S1.mark("".concat(x2," ").concat(e," ends")),S1.measure("".concat(x2," ").concat(e),"".concat(x2," ").concat(e," begins"),"".concat(x2," ").concat(e," ends"))},O1={begin:$6,end:P4},U2=()=>{};function V3(e){return typeof(e.getAttribute?e.getAttribute(l2):null)=="string"}function j6(e){let s=e.getAttribute?e.getAttribute(T1):null,c=e.getAttribute?e.getAttribute(P1):null;return s&&c}function W6(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function G6(){return p.autoReplaceSvg===!0?q2.replace:q2[p.autoReplaceSvg]||q2.replace}function V6(e){return g.createElementNS("http://www.w3.org/2000/svg",e)}function X6(e){return g.createElement(e)}function F4(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:c=e.tag==="svg"?V6:X6}=s;if(typeof e=="string")return g.createTextNode(e);let l=c(e.tag);return Object.keys(e.attributes||[]).forEach(function(n){l.setAttribute(n,e.attributes[n])}),(e.children||[]).forEach(function(n){l.appendChild(F4(n,{ceFn:c}))}),l}function Y6(e){let s=" ".concat(e.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}var q2={replace:function(e){let s=e[0];if(s.parentNode)if(e[1].forEach(c=>{s.parentNode.insertBefore(F4(c),s)}),s.getAttribute(l2)===null&&p.keepOriginalSource){let c=g.createComment(Y6(s));s.parentNode.replaceChild(c,s)}else s.remove()},nest:function(e){let s=e[0],c=e[1];if(~F1(s).indexOf(p.replacementClass))return q2.replace(e);let l=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){let n=c[0].attributes.class.split(" ").reduce((i,t)=>(t===p.replacementClass||t.match(l)?i.toSvg.push(t):i.toNode.push(t),i),{toNode:[],toSvg:[]});c[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",n.toNode.join(" "))}let a=c.map(n=>y2(n)).join(`
`);s.setAttribute(l2,""),s.innerHTML=a}};function X3(e){e()}function E4(e,s){let c=typeof s=="function"?s:U2;if(e.length===0)c();else{let l=X3;p.mutateApproach===s6&&(l=G.requestAnimationFrame||X3),l(()=>{let a=G6(),n=O1.begin("mutate");e.map(a),n(),c()})}}var H1=!1;function R4(){H1=!0}function y1(){H1=!1}var j2=null;function Y3(e){if(!I3||!p.observeMutations)return;let{treeCallback:s=U2,nodeCallback:c=U2,pseudoElementsCallback:l=U2,observeMutationsRoot:a=g}=e;j2=new I3(n=>{if(H1)return;let i=V();z2(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!V3(t.addedNodes[0])&&(p.searchPseudoElements&&l(t.target),s(t.target)),t.type==="attributes"&&t.target.parentNode&&p.searchPseudoElements&&l(t.target.parentNode),t.type==="attributes"&&V3(t.target)&&~o6.indexOf(t.attributeName))if(t.attributeName==="class"&&j6(t.target)){let{prefix:o,iconName:r}=V2(F1(t.target));t.target.setAttribute(T1,o||i),r&&t.target.setAttribute(P1,r)}else W6(t.target)&&c(t.target)})}),q&&j2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Q6(){j2&&j2.disconnect()}function K6(e){let s=e.getAttribute("style"),c=[];return s&&(c=s.split(";").reduce((l,a)=>{let n=a.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(l[i]=t.join(":").trim()),l},{})),c}function Z6(e){let s=e.getAttribute("data-prefix"),c=e.getAttribute("data-icon"),l=e.innerText!==void 0?e.innerText.trim():"",a=V2(F1(e));return a.prefix||(a.prefix=V()),s&&c&&(a.prefix=s,a.iconName=c),a.iconName&&a.prefix||(a.prefix&&l.length>0&&(a.iconName=v6(a.prefix,e.innerText)||D1(a.prefix,h1(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function J6(e){let s=z2(e.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),c=e.getAttribute("title"),l=e.getAttribute("data-fa-title-id");return p.autoA11y&&(c?s["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(l||w2()):(s["aria-hidden"]="true",s.focusable="false")),s}function c8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Q3(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:c,prefix:l,rest:a}=Z6(e),n=J6(e),i=N1("parseNodeAttributes",{},e),t=s.styleParser?K6(e):[];return m({iconName:c,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:l,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t,attributes:n}},i)}var{styles:l8}=D;function D4(e){let s=p.autoReplaceSvg==="nest"?Q3(e,{styleParser:!1}):Q3(e);return~s.extra.classes.indexOf(d4)?X("generateLayersText",e,s):X("generateSvgReplacementMutation",e,s)}var B=new Set;M4.map(e=>{B.add("fa-".concat(e))});Object.keys(J[x]).map(B.add.bind(B));Object.keys(J[A]).map(B.add.bind(B));Object.keys(J[v]).map(B.add.bind(B));B=[...B];function K3(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();let c=g.documentElement.classList,l=f=>c.add("".concat(_3,"-").concat(f)),a=f=>c.remove("".concat(_3,"-").concat(f)),n=p.autoFetchSvg?B:M4.map(f=>"fa-".concat(f)).concat(Object.keys(l8));n.includes("fa")||n.push("fa");let i=[".".concat(d4,":not([").concat(l2,"])")].concat(n.map(f=>".".concat(f,":not([").concat(l2,"])"))).join(", ");if(i.length===0)return Promise.resolve();let t=[];try{t=z2(e.querySelectorAll(i))}catch{}if(t.length>0)l("pending"),a("complete");else return Promise.resolve();let o=O1.begin("onTree"),r=t.reduce((f,L)=>{try{let z=D4(L);z&&f.push(z)}catch(z){p4||z.name==="MissingIcon"&&console.error(z)}return f},[]);return new Promise((f,L)=>{Promise.all(r).then(z=>{E4(z,()=>{l("active"),l("complete"),a("pending"),typeof s=="function"&&s(),o(),f()})}).catch(z=>{o(),L(z)})})}function s8(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;D4(e).then(c=>{c&&E4([c],s)})}function e8(e){return function(s){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(s||{}).icon?s:b1(s||{}),{mask:a}=c;return a&&(a=(a||{}).icon?a:b1(a||{})),e(l,h(m({},c),{mask:a}))}}var a8=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:c=R,symbol:l=!1,mask:a=null,maskId:n=null,title:i=null,titleId:t=null,classes:o=[],attributes:r={},styles:f={}}=s;if(!e)return;let{prefix:L,iconName:z,icon:M}=e;return X2(m({type:"icon"},e),()=>(s2("beforeDOMElementCreation",{iconDefinition:e,params:s}),p.autoA11y&&(i?r["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(t||w2()):(r["aria-hidden"]="true",r.focusable="false")),I1({icons:{main:k1(M),mask:a?k1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:z,transform:m(m({},R),c),symbol:l,title:i,maskId:n,titleId:t,extra:{attributes:r,styles:f,classes:o}})))},n8={mixout(){return{icon:e8(a8)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=K3,e.nodeCallback=s8,e}}},provides(e){e.i2svg=function(s){let{node:c=g,callback:l=()=>{}}=s;return K3(c,l)},e.generateSvgReplacementMutation=function(s,c){let{iconName:l,title:a,titleId:n,prefix:i,transform:t,symbol:o,mask:r,maskId:f,extra:L}=c;return new Promise((z,M)=>{Promise.all([w1(l,i),r.iconName?w1(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(d=>{let[N,b]=d;z([s,I1({icons:{main:N,mask:b},prefix:i,iconName:l,transform:t,symbol:o,maskId:f,title:a,titleId:n,extra:L,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(s){let{children:c,attributes:l,main:a,transform:n,styles:i}=s,t=W2(i);t.length>0&&(l.style=t);let o;return E1(n)&&(o=X("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),c.push(o||a.icon),{children:c,attributes:l}}}},i8={mixout(){return{layer(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:c=[]}=s;return X2({type:"layer"},()=>{s2("beforeDOMElementCreation",{assembler:e,params:s});let l=[];return e(a=>{Array.isArray(a)?a.map(n=>{l=l.concat(n.abstract)}):l=l.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...c].join(" ")},children:l}]})}}}},t8={mixout(){return{counter(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:c=null,classes:l=[],attributes:a={},styles:n={}}=s;return X2({type:"counter",content:e},()=>(s2("beforeDOMElementCreation",{content:e,params:s}),_6({content:e.toString(),title:c,extra:{attributes:a,styles:n,classes:["".concat(p.cssPrefix,"-layers-counter"),...l]}})))}}}},o8={mixout(){return{text(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:c=R,title:l=null,classes:a=[],attributes:n={},styles:i={}}=s;return X2({type:"text",content:e},()=>(s2("beforeDOMElementCreation",{content:e,params:s}),W3({content:e,transform:m(m({},R),c),title:l,extra:{attributes:n,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(s,c){let{title:l,transform:a,extra:n}=c,i=null,t=null;if(o4){let o=parseInt(getComputedStyle(s).fontSize,10),r=s.getBoundingClientRect();i=r.width/o,t=r.height/o}return p.autoA11y&&!l&&(n.attributes["aria-hidden"]="true"),Promise.resolve([s,W3({content:s.innerHTML,width:i,height:t,transform:a,title:l,extra:n,watchable:!0})])}}},r8=new RegExp('"',"ug"),Z3=[1105920,1112319],J3=m(m(m({FontAwesome:{normal:"fas",400:"fas"}},j0),$0),Z0),A1=Object.keys(J3).reduce((e,s)=>(e[s.toLowerCase()]=J3[s],e),{}),f8=Object.keys(A1).reduce((e,s)=>{let c=A1[s];return e[s]=c[900]||[...Object.entries(c)][0][1],e},{});function m8(e){let s=e.replace(r8,""),c=b6(s,0),l=c>=Z3[0]&&c<=Z3[1],a=s.length===2?s[0]===s[1]:!1;return{value:h1(a?s[0]:s),isSecondary:l||a}}function z8(e,s){let c=e.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(s),a=isNaN(l)?"normal":l;return(A1[c]||{})[a]||f8[c]}function c4(e,s){let c="".concat(l6).concat(s.replace(":","-"));return new Promise((l,a)=>{if(e.getAttribute(c)!==null)return l();let i=z2(e.children).filter(z=>z.getAttribute(M1)===s)[0],t=G.getComputedStyle(e,s),o=t.getPropertyValue("font-family"),r=o.match(i6),f=t.getPropertyValue("font-weight"),L=t.getPropertyValue("content");if(i&&!r)return e.removeChild(i),l();if(r&&L!=="none"&&L!==""){let z=t.getPropertyValue("content"),M=z8(o,f),{value:d,isSecondary:N}=m8(z),b=r[0].startsWith("FontAwesome"),S=D1(M,d),k=S;if(b){let w=T6(d);w.iconName&&w.prefix&&(S=w.iconName,M=w.prefix)}if(S&&!N&&(!i||i.getAttribute(T1)!==M||i.getAttribute(P1)!==k)){e.setAttribute(c,k),i&&e.removeChild(i);let w=c8(),{extra:I}=w;I.attributes[M1]=s,w1(S,M).then(F=>{let U4=I1(h(m({},w),{icons:{main:F,mask:B1()},prefix:M,iconName:k,extra:I,watchable:!0})),Y2=g.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?e.insertBefore(Y2,e.firstChild):e.appendChild(Y2),Y2.outerHTML=U4.map(q4=>y2(q4)).join(`
`),e.removeAttribute(c),l()}).catch(a)}else l()}else l()})}function L8(e){return Promise.all([c4(e,"::before"),c4(e,"::after")])}function p8(e){return e.parentNode!==document.head&&!~e6.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(M1)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function l4(e){if(q)return new Promise((s,c)=>{let l=z2(e.querySelectorAll("*")).filter(p8).map(L8),a=O1.begin("searchPseudoElements");R4(),Promise.all(l).then(()=>{a(),y1(),s()}).catch(()=>{a(),y1(),c()})})}var M8={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=l4,e}}},provides(e){e.pseudoElements2svg=function(s){let{node:c=g}=s;p.searchPseudoElements&&l4(c)}}},s4=!1,u8={mixout(){return{dom:{unwatch(){R4(),s4=!0}}}},hooks(){return{bootstrap(){Y3(N1("mutationObserverCallbacks",{}))},noAuto(){Q6()},watch(e){let{observeMutationsRoot:s}=e;s4?y1():Y3(N1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},e4=e=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((c,l)=>{let a=l.toLowerCase().split("-"),n=a[0],i=a.slice(1).join("-");if(n&&i==="h")return c.flipX=!0,c;if(n&&i==="v")return c.flipY=!0,c;if(i=parseFloat(i),isNaN(i))return c;switch(n){case"grow":c.size=c.size+i;break;case"shrink":c.size=c.size-i;break;case"left":c.x=c.x-i;break;case"right":c.x=c.x+i;break;case"up":c.y=c.y-i;break;case"down":c.y=c.y+i;break;case"rotate":c.rotate=c.rotate+i;break}return c},s)},d8={mixout(){return{parse:{transform:e=>e4(e)}}},hooks(){return{parseNodeAttributes(e,s){let c=s.getAttribute("data-fa-transform");return c&&(e.transform=e4(c)),e}}},provides(e){e.generateAbstractTransformGrouping=function(s){let{main:c,transform:l,containerWidth:a,iconWidth:n}=s,i={transform:"translate(".concat(a/2," 256)")},t="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),r="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(t," ").concat(o," ").concat(r)},L={transform:"translate(".concat(n/2*-1," -256)")},z={outer:i,inner:f,path:L};return{tag:"g",attributes:m({},z.outer),children:[{tag:"g",attributes:m({},z.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:m(m({},c.icon.attributes),z.path)}]}]}}}},L1={x:0,y:0,width:"100%",height:"100%"};function a4(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||s)&&(e.attributes.fill="black"),e}function C8(e){return e.tag==="g"?e.children:[e]}var h8={hooks(){return{parseNodeAttributes(e,s){let c=s.getAttribute("data-fa-mask"),l=c?V2(c.split(" ").map(a=>a.trim())):B1();return l.prefix||(l.prefix=V()),e.mask=l,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(s){let{children:c,attributes:l,main:a,mask:n,maskId:i,transform:t}=s,{width:o,icon:r}=a,{width:f,icon:L}=n,z=u6({transform:t,containerWidth:f,iconWidth:o}),M={tag:"rect",attributes:h(m({},L1),{fill:"white"})},d=r.children?{children:r.children.map(a4)}:{},N={tag:"g",attributes:m({},z.inner),children:[a4(m({tag:r.tag,attributes:m(m({},r.attributes),z.path)},d))]},b={tag:"g",attributes:m({},z.outer),children:[N]},S="mask-".concat(i||w2()),k="clip-".concat(i||w2()),w={tag:"mask",attributes:h(m({},L1),{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,b]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:C8(L)},w]};return c.push(I,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(S,")")},L1)}),{children:c,attributes:l}}}},g8={provides(e){let s=!1;G.matchMedia&&(s=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let c=[],l={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c.push({tag:"path",attributes:h(m({},l),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=h(m({},a),{attributeName:"opacity"}),i={tag:"circle",attributes:h(m({},l),{cx:"256",cy:"364",r:"28"}),children:[]};return s||i.children.push({tag:"animate",attributes:h(m({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(m({},n),{values:"1;0;1;1;0;1;"})}),c.push(i),c.push({tag:"path",attributes:h(m({},l),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:h(m({},n),{values:"1;0;0;0;0;1;"})}]}),s||c.push({tag:"path",attributes:h(m({},l),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(m({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:c}}}},x8={hooks(){return{parseNodeAttributes(e,s){let c=s.getAttribute("data-fa-symbol"),l=c===null?!1:c===""?!0:c;return e.symbol=l,e}}}},N8=[h6,n8,i8,t8,o8,M8,u8,d8,h8,g8,x8];E6(N8,{mixoutsTo:T});var g5=T.noAuto,B4=T.config,x5=T.library,I4=T.dom,O4=T.parse,N5=T.findIconDefinition,b5=T.toHtml,H4=T.icon,k5=T.layer,b8=T.text,k8=T.counter;var w8=["*"],S8=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},y8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},A8=e=>{let s={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(s).map(c=>s[c]?c:null).filter(c=>c)},_1=new WeakSet,_4="fa-auto-css";function v8(e,s){if(!s.autoAddCss||_1.has(e))return;if(e.getElementById(_4)!=null){s.autoAddCss=!1,_1.add(e);return}let c=e.createElement("style");c.setAttribute("type","text/css"),c.setAttribute("id",_4),c.innerHTML=I4.css();let l=e.head.childNodes,a=null;for(let n=l.length-1;n>-1;n--){let i=l[n],t=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(a=i)}e.head.insertBefore(c,a),s.autoAddCss=!1,_1.add(e)}var T8=e=>e.prefix!==void 0&&e.iconName!==void 0,P8=(e,s)=>T8(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:s,iconName:e},F8=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(c){B4.autoAddCss=c,this._autoAddCss=c}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275prov=L2({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),E8=(()=>{class e{constructor(){this.definitions={}}addIcons(...c){for(let l of c){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let a of l.icon[2])typeof a=="string"&&(this.definitions[l.prefix][a]=l)}}addIconPacks(...c){for(let l of c){let a=Object.keys(l).map(n=>l[n]);this.addIcons(...a)}}getIconDefinition(c,l){return c in this.definitions&&l in this.definitions[c]?this.definitions[c][l]:null}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275prov=L2({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),R8=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(c){if("size"in c)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275dir=Z1({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[a2]})}}return e})(),D8=(()=>{class e{constructor(c,l){this.renderer=c,this.elementRef=l}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(c){"size"in c&&(c.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${c.size.currentValue}`),c.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${c.size.previousValue}`))}static{this.\u0275fac=function(l){return new(l||e)(P(e3),P(F2))}}static{this.\u0275cmp=e2({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[a2,n2],ngContentSelectors:w8,decls:1,vars:0,template:function(l,a){l&1&&(E2(),R2(0))},encapsulation:2})}}return e})(),H5=(()=>{class e{constructor(c,l,a,n,i){this.sanitizer=c,this.config=l,this.iconLibrary=a,this.stackItem=n,this.document=K1(z3),i!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(c){if(this.icon==null&&this.config.fallbackIcon==null){y8();return}if(c){let l=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(l!=null){let a=this.buildParams();v8(this.document,this.config);let n=H4(l,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(c){let l=P8(c,this.config.defaultPrefix);if("icon"in l)return l;let a=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return a??(S8(l),null)}buildParams(){let c={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},l=typeof this.transform=="string"?O4.transform(this.transform):this.transform;return{title:this.title,transform:l,classes:A8(c),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(l){return new(l||e)(P(D2),P(F8),P(E8),P(R8,8),P(D8,8))}}static{this.\u0275cmp=e2({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,a){l&2&&(o3("innerHTML",a.renderedIconHTML,l3),n3("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[a2,n2],decls:0,vars:0,template:function(l,a){},encapsulation:2})}}return e})();var _5=(()=>{class e{static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275mod=T2({type:e})}static{this.\u0275inj=v2({})}}return e})();export{r5 as a,I0 as b,f5 as c,p5 as d,M5 as e,u5 as f,H5 as g,_5 as h};

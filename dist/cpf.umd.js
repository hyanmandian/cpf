!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(r.cpf={})}(this,function(r){var n=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909"],t=/[.-]/g,e=/[^\d]/g;function i(r){var n=(r=r.split("").map(function(r){return parseInt(r,10)})).length+1,t=r.map(function(r,t){return r*(n-t)}).reduce(function(r,n){return r+n})%11;return t<2?0:11-t}function u(r){return f(r).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4")}function f(r,n){var i=n?t:e;return(r||"").toString().replace(i,"")}r.verifierDigit=i,r.format=u,r.strip=f,r.isValid=function(r,t){var e=f(r,t);if(!e)return!1;if(11!==e.length)return!1;if(n.includes(e))return!1;var u=e.substr(0,9);return u+=i(u),(u+=i(u)).substr(-2)===e.substr(-2)},r.generate=function(r){for(var n="",t=0;t<9;t+=1)n+=Math.floor(9*Math.random());return n+=i(n),n+=i(n),r?u(n):n}});
//# sourceMappingURL=cpf.umd.js.map
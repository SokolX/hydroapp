!function(n){var e={};function t(c){if(e[c])return e[c].exports;var r=e[c]={i:c,l:!1,exports:{}};return n[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(c,r,function(e){return n[e]}.bind(null,r));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n\nconst key = new Date().toISOString().slice(0, 10);\nconst counter = document.querySelector('.glass__counter--js');\nconst addButton = document.querySelector('.glass__button--add-js');\nconst removeButton = document.querySelector('.glass__button--remove-js');\n\n\n\nif (counter) {\n  if (localStorage[key]) {\n    counter.innerHTML = localStorage[key];\n  } else {\n    counter.innerHTML = 0;\n  }\n}\n\naddButton.addEventListener('click', (e) => {\n\n  counter.innerHTML = parseInt(counter.innerHTML) + 1;\n  localStorage.setItem(key, counter.innerHTML);\n  \n});\n\nremoveButton.addEventListener('click', (e) => {\n\n  if (parseInt(counter.innerHTML) > 0) {\n    counter.innerHTML = parseInt(counter.innerHTML) - 1;\n    localStorage.setItem(key, counter.innerHTML);\n  }\n\n})\n  ;\n\nconst dates = [];\nfor (let i = 0; i < 6; i++) {\n  if (localStorage.key(i)) {\n    dates.push(localStorage.key(i))\n  }\n}\n\nconst glasses = [];\nfor (let date of dates) {\n  glasses.push(localStorage[date]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbmNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xhc3NfX2NvdW50ZXItLWpzJyk7XG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xhc3NfX2J1dHRvbi0tYWRkLWpzJyk7XG5jb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xhc3NfX2J1dHRvbi0tcmVtb3ZlLWpzJyk7XG5cblxuXG5pZiAoY291bnRlcikge1xuICBpZiAobG9jYWxTdG9yYWdlW2tleV0pIHtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZVtrZXldO1xuICB9IGVsc2Uge1xuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gMDtcbiAgfVxufVxuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQoY291bnRlci5pbm5lckhUTUwpICsgMTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBjb3VudGVyLmlubmVySFRNTCk7XG4gIFxufSk7XG5cbnJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgaWYgKHBhcnNlSW50KGNvdW50ZXIuaW5uZXJIVE1MKSA+IDApIHtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IHBhcnNlSW50KGNvdW50ZXIuaW5uZXJIVE1MKSAtIDE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBjb3VudGVyLmlubmVySFRNTCk7XG4gIH1cblxufSlcbiAgO1xuXG5jb25zdCBkYXRlcyA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5rZXkoaSkpIHtcbiAgICBkYXRlcy5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG4gIH1cbn1cblxuY29uc3QgZ2xhc3NlcyA9IFtdO1xuZm9yIChsZXQgZGF0ZSBvZiBkYXRlcykge1xuICBnbGFzc2VzLnB1c2gobG9jYWxTdG9yYWdlW2RhdGVdKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);
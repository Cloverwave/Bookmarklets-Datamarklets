javascript:(function(){var win=window.open(''); win.document.head.innerHTML='<title>Donut!</title> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> '; win.document.body.innerHTML=' <p style="margin-left: 0px; margin-top: 0px; color:white;">Original donut in c created by andy from a1k0n.net, js version created by petercunha here: https://github.com/petercunha/Donut, and the entire thing ported into a bookmarklet from Cloverwave (me!!!) here: https://github.com/Cloverwave</p> <div class="container"> <pre class="center" id="d"></pre> </div> ';var script=document.createElement('script'); script.textContent=' var pretag = document.getElementById("d"); var tmr1 = undefined, tmr2 = undefined; var A = 1, B = 1; var asciiframe = () => { var b = []; var z = []; A += 0.07; B += 0.03; var cA = Math.cos(A), sA = Math.sin(A), cB = Math.cos(B), sB = Math.sin(B); for (var k = 0; k < 1760; k++) { b[k] = k % 80 == 79 ?%20%22\\n%22%20:%20%22%20%22;%20z[k]%20=%200;%20}%20for%20(var%20j%20=%200;%20j%20%3C%206.28;%20j%20+=%200.07)%20{%20var%20ct%20=%20Math.cos(j),%20st%20=%20Math.sin(j);%20for%20(i%20=%200;%20i%20%3C%206.28;%20i%20+=%200.02)%20{%20var%20sp%20=%20Math.sin(i),%20cp%20=%20Math.cos(i),%20h%20=%20ct%20+%202,%20D%20=%201%20/%20(sp%20*%20h%20*%20sA%20+%20st%20*%20cA%20+%205),%20t%20=%20sp%20*%20h%20*%20cA%20-%20st%20*%20sA;%20var%20x%20=%200%20|%20(40%20+%2030%20*%20D%20*%20(cp%20*%20h%20*%20cB%20-%20t%20*%20sB)),%20y%20=%200%20|%20(12%20+%2015%20*%20D%20*%20(cp%20*%20h%20*%20sB%20+%20t%20*%20cB)),%20o%20=%20x%20+%2080%20*%20y,%20N%20=%200%20|%20(8%20*%20((st%20*%20sA%20-%20sp%20*%20ct%20*%20cA)%20*%20cB%20-%20sp%20*%20ct%20*%20sA%20-%20st%20*%20cA%20-%20cp%20*%20ct%20*%20sB));%20if%20(y%20%3C%2022%20&&%20y%20%3E=%200%20&&%20x%20%3E=%200%20&&%20x%20%3C%2079%20&&%20D%20%3E%20z[o])%20{%20z[o]%20=%20D;%20b[o]%20=%20%22.,-~:;=!*#$@%22[N%20%3E%200%20?%20N%20:%200];%20}%20}%20}%20pretag.innerHTML%20=%20b.join(%22%22);%20};%20setInterval(asciiframe,%2050)%20';%20win.document.head.appendChild(script);%20var%20style=document.createElement('style');style.textContent=%22%20::selection%20{%20background:%20#505050;%20}%20::-moz-selection%20{%20background:%20#505050;%20}%20html,%20body,%20.container%20{%20overflow:%20hidden;%20background-color:%20black;%20height:%20100%;%20}%20.container%20{%20color:%20white;%20display:%20-webkit-flexbox;%20display:%20-ms-flexbox;%20display:%20-webkit-flex;%20display:%20flex;%20-webkit-flex-align:%20center;%20-ms-flex-align:%20center;%20-webkit-align-items:%20center;%20align-items:%20center;%20justify-content:%20center;%20}%20%22;win.document.head.appendChild(style);})();

/* Copyright 2022 Cloverwave Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. */

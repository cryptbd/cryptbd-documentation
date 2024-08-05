"use strict";(self.webpackChunkcryptbd=self.webpackChunkcryptbd||[]).push([[128],{5345:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=i(4848),s=i(8453);const n={sidebar_label:"Sistema de recomendaci\xf3n",sidebar_position:3},t="Sistema de recomendaci\xf3n",r={id:"desarrollo/sistema-recomendacion",title:"Sistema de recomendaci\xf3n",description:"La implementaci\xf3n de un sistema de recomendaci\xf3n ofrece varios beneficios al inversor. Proporciona personalizaci\xf3n al recomendar criptomonedas que se ajustan a sus intereses y preferencias individuales, fomenta la diversificaci\xf3n de las inversiones al permitir a los usuarios descubrir nuevas criptomonedas y ahorra tiempo al evitar que tengan que buscar manualmente nuevas oportunidades de inversi\xf3n.",source:"@site/docs/desarrollo/sistema-recomendacion.md",sourceDirName:"desarrollo",slug:"/desarrollo/sistema-recomendacion",permalink:"/cryptbd-documentation/docs/desarrollo/sistema-recomendacion",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/desarrollo/sistema-recomendacion.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Sistema de recomendaci\xf3n",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"An\xe1lisis exploratorio de datos",permalink:"/cryptbd-documentation/docs/desarrollo/eda"},next:{title:"Seguridad",permalink:"/cryptbd-documentation/docs/desarrollo/seguridad"}},c={},d=[{value:"Establecer el conjunto de datos",id:"establecer-el-conjunto-de-datos",level:2},{value:"De texto a vector",id:"de-texto-a-vector",level:2},{value:"C\xe1lculo de similitud del coseno",id:"c\xe1lculo-de-similitud-del-coseno",level:2},{value:"Selecci\xf3n de resultados",id:"selecci\xf3n-de-resultados",level:2}];function l(e){const a={h1:"h1",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"sistema-de-recomendaci\xf3n",children:"Sistema de recomendaci\xf3n"}),"\n",(0,o.jsx)(a.p,{children:"La implementaci\xf3n de un sistema de recomendaci\xf3n ofrece varios beneficios al inversor. Proporciona personalizaci\xf3n al recomendar criptomonedas que se ajustan a sus intereses y preferencias individuales, fomenta la diversificaci\xf3n de las inversiones al permitir a los usuarios descubrir nuevas criptomonedas y ahorra tiempo al evitar que tengan que buscar manualmente nuevas oportunidades de inversi\xf3n."}),"\n",(0,o.jsx)(a.p,{children:"Para el sistema de recomendaci\xf3n de criptomonedas de la secci\xf3n Moneda Particular, se decidi\xf3 utilizar un sistema de recomendaci\xf3n basado en contenido por varias razones. En primer lugar, su implementaci\xf3n suele ser m\xe1s eficiente que la de sistemas colaborativos en contextos donde la informaci\xf3n del usuario es escasa. Adem\xe1s, suele ser m\xe1s transparente en la forma en que genera recomendaciones, lo que aumenta la confianza del usuario. Por \xfaltimo, se adapta mejor a los cambios en los intereses del usuario al considerar \xfanicamente las caracter\xedsticas del contenido, en este caso de la moneda."}),"\n",(0,o.jsx)(a.p,{children:"El desarrollo de este sistema se dividi\xf3 en varias etapas."}),"\n",(0,o.jsx)(a.h2,{id:"establecer-el-conjunto-de-datos",children:"Establecer el conjunto de datos"}),"\n",(0,o.jsx)(a.p,{children:"Debido a la alta volatilidad en el mercado, se decidi\xf3 utilizar un conjunto de datos que se centra en las cien principales criptomonedas seg\xfan su capitalizaci\xf3n de mercado. A pesar de que siempre existe un riesgo considerable en este ecosistema, optamos por recomendar solo las principales criptomonedas. Para estas recomendaciones, utilizamos exclusivamente las categor\xedas a las que pertenece cada criptomoneda. Esto nos permiti\xf3 diferenciar aquellas que son m\xe1s similares seg\xfan la cantidad de coincidencias y caracter\xedsticas en com\xfan."}),"\n",(0,o.jsx)(a.h2,{id:"de-texto-a-vector",children:"De texto a vector"}),"\n",(0,o.jsx)(a.p,{children:"En etapas posteriores, necesitamos trabajar con vectores para encontrar la similitud entre dos vectores. Por este motivo, realizamos la vectorizaci\xf3n de texto de las categor\xedas correspondientes a cada criptomoneda."}),"\n",(0,o.jsx)(a.p,{children:"Debimos convertir la cadena de texto de manera inteligente para que los vectores representen el significado del texto. Es importante destacar que existen modelos avanzados, como BERT, capaces de convertir de manera inteligente oraciones en vectores, lo que permite representar el significado del texto de forma efectiva. Si bien BERT es una herramienta poderosa, para nuestro prop\xf3sito actual no es necesario profundizar en su funcionamiento espec\xedfico."}),"\n",(0,o.jsx)(a.h2,{id:"c\xe1lculo-de-similitud-del-coseno",children:"C\xe1lculo de similitud del coseno"}),"\n",(0,o.jsx)(a.p,{children:"La similitud del coseno es el coseno del \xe1ngulo entre vectores y est\xe1 dada por la f\xf3rmula matem\xe1tica del producto escalar:"}),"\n",(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"alt text",src:i(8171).A+"",width:"263",height:"88"})})}),"\n",(0,o.jsx)(a.p,{children:"Esta f\xf3rmula no es m\xe1s que lo siguiente:"}),"\n",(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"alt text",src:i(2861).A+"",width:"213",height:"94"})})}),"\n",(0,o.jsx)(a.p,{children:"Con esta ecuaci\xf3n sobre la similitud entre vectores podemos calcular c\xf3mo de similares son dos vectores. Si nos fijamos, lo \xfanico que ha cambiado es que los t\xe9rminos |u| |v| se han movido para ser los divisores de la ecuaci\xf3n, mientras que el coseno de \u03b8 ha pasado a ser ese t\xe9rmino nuevo que estamos introduciendo, qu\xe9 es la similitud."}),"\n",(0,o.jsx)(a.p,{children:"La parte superior de nuestra ecuaci\xf3n representa el producto escalar y la parte inferior es el producto del m\xf3dulo de los vectores."}),"\n",(0,o.jsx)(a.h2,{id:"selecci\xf3n-de-resultados",children:"Selecci\xf3n de resultados"}),"\n",(0,o.jsx)(a.p,{children:"Seleccionamos las 5 criptomonedas (vectores) con la mayor similitud coseno."})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2861:(e,a,i)=>{i.d(a,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAABeCAMAAACD6aGqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALiUExURf////b29s/Pz+vr69PT021tbYuLi/j4+F5eXqurq/n5+aOjo5OTk5iYmH19fRISEnR0dP39/a2trZKSkpubm2pqag8PD5aWlnl5eWBgYGNjYw4ODlBQUIeHh11dXWZmZlNTUwcHB3p6enFxcWdnZ+7u7u/v71lZWYODg/v7+/f39/T09Orq6rOzs+np6ezs7PX19aCgoDQ0NC0tLZ2dnXZ2dkhISNHR0WhoaCwsLEZGRujo6GJiYioqKvz8/EBAQAAAACEhIfr6+hEREQYGBuPj49/f30lJSTo6Ory8vFZWVh8fH9bW1p+fnyUlJcfHx0VFRf7+/tnZ2bKyso6OjsTExAICAk5OTnd3d4qKiuXl5SgoKAQEBNjY2FxcXI+Pjx0dHaenp+Li4gsLC/Ly8hUVFY2NjVFRUcbGxiYmJgoKCtvb24mJiWRkZOTk5MPDw0pKSiQkJBgYGEFBQaKior+/v6ysrM3Nzd3d3TExMYaGhsDAwBQUFPPz87Gxsa+vr97e3qqqqsvLy7u7uzk5OfDw8FdXV3V1defn5729vXNzc4iIiFVVVczMzIyMjKmpqT8/PzU1NaampgEBAW9vb9zc3A0NDUtLSz4+PoKCgoWFhbS0tH5+fpGRkc7OzoGBgfHx8U1NTdDQ0AgICMjIyHh4eLW1te3t7TAwMKioqMrKytra2tfX17m5uScnJ1RUVMXFxbq6uikpKRAQEGlpaXJychoaGjY2NgkJCbCwsH9/f0dHR3BwcICAgE9PT0JCQlhYWB4eHjc3N1tbW3x8fAUFBSsrKwwMDD09PWVlZTs7O5CQkK6uri8vL7i4uLe3t8HBwba2tuDg4AMDA9LS0tTU1Gtra0xMTGxsbDw8PMLCwqWlpRMTE2FhYYSEhBYWFpWVlTMzMxcXF+bm5jg4OMnJyeHh4W5ubiAgIBsbGy4uLhwcHKSkpJeXl6GhoTIyMr6+vtXV1ZSUlERERENDQwAAAI7EfzoAAAD2dFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AEo/IKkAAAAJcEhZcwAAFxEAABcRAcom8z8AAAUUSURBVHhe7ZpdkrMqEIbdgGvwin1AsQmWwi3lJbBI18AGztvd4MhMvnwmdU7mUMUzqahoDO3bf5pZJpPJZDKZTCaTyWQymUwmk8nkJ7kuT5SvKyOzxbpykkJdGY91XSO/nHV1KNShTa91ZDhc2uRv06kOxVTH9A/5hsNtqq410vhGLeG7UWrcsALfrQEPhsZiNYY12cqZ2tVmilpUMlsdGA5XNm2xVFY3gXw5tN6XVIz+UcMGYVWLNlhmXWQAVq1L0mEJS9Tj1uHMGT1qrlYxsSGG7Ulk7qBErrUJPsd+SEGmWD5lhy3CzR5RB1pRdIk7RjNuKlTWYvLhK6zAqpH9djtwvfJkjzew40uZiFZpP9vCf5/wo+I/wYc3MvGujyWnpJ0q5ImM0y6SXO/gnnX6sjNrLhmx3HIGhwm+DGSyJiitjTsv4Kq1fbMH9Lrz5R5veadYha+8Nd2ojzfiO8eIRLG7Uyl8oVvfrb+qPLke2EluXbWSDUh2+eYHxCeX6XM8vbC8E3ryRZMjjVTKP/KeVp+nalUpf7mL+02tclh3vqQ5UOFTAW6Vg6QvX5dtZ9WKN/ZgdAmcFHfeSYdXl1Q7jX9EK3WhDmEiRQNu/gs7VMZUHIYsMqmzWJFb0sKZtWqVqJrQPgIDpooWtDTasJfO+RGteP7CGQ+qaLNFVAest4mbQx8J89qSNgk3AVwo5JCqVaIGdHVGH9FF2HH0Vu1W21SQoD+h1YEvq68zHnZt2LPoTSYOOVABFwVzWKakqYP52tm0As0YHCt9Z+BjlViTcYabWik48svUzyJzwfXk1QjcDQvigahMtIC98owHhlCwiCGnVmyVfAA08/AZnBrvdBAZe1MraPw69bOPwJw3ifSLHDyAUitzk5uBFnQ3tHLtSt2OK59ep17Qx0TKC5K5uomTLDwMfyKrvsVVtaqeuo8rjjriIznQlVQSXvi7tHGBkgjfxXShQ1qxVfDIL6tuaSVZB0Cr/96qlopBeyrKZCRycpUaV3/SiqZ6K65S6xI/ohVKa6OFUgWeg5Feq2bVDa1O89Y+rtwv9hYAGQFW9Vo1D3yqFS+WZRM7cBNRcyA7JMrWB7R6xIquXynMij3nRa2ctruijgn3P5tXES7Oj/IObYPy1KDc1+pSbU4ejd0iobOheksT75qi06ozs1921iyHLSADhEVCpYlkieCCu8a78/KH+HDHwd+i8o+TcNPwhOyMRc/EdmzccnjL3QY9FeFRdViyrtvpanOC/Gk5fSqcxjivrJiRN2uPqLLtstIzVJ/ABMNZJ8jVvZJuPG06j5CVU/e6rNtt6/JOnGt8WL/1ggt5aqa/Y9iBV/GdK2WQZ2jqkax/1GoUq5pWbba8FK2aVbKL38sv5dZXEa1ykm5kP7g0NK3IA/eDYhnvnLpG0mo/NimOm5T3FlfQaj1wI0gHSBc0klZ5RwkklYo43SWuQvbow3wWS0eLq0JNjvwE8hVXnAMDF0wvVg8VV1iQPXstXl0OlB+0Vkv1cjCtdhaEfiwgLnFF7QsiThneM5hWjpOFETu6HAjfxGIT1xxMK546mmbFdelar9AyK7RtbOBoWuGm2rvNWB9p8xpXyti1cEcKBtMKMh2bStrwP1u0uGKB6Dlca9UH02pZHQLLx5Vn3eXATHsqo9Wrjq5eXRlFK1+16rBXra6MopUqUqI6Ntav1qsrxyBWPSHLv8dciQ8eB0wmk8lkMplMJpPJZPJ/ZFn+AWX+m8YsR6UQAAAAAElFTkSuQmCC"},8171:(e,a,i)=>{i.d(a,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAABYCAYAAAD4BDIxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFxEAABcRAcom8z8AAA/VSURBVHhe7Z0HcFXFGsex99577707lrHr2HtDKRZEyjgKyFMC+KQKoUgRkBYB6YJgAemgNAkKKDaQTug1gIX2vfvb7JKbk7259yb3kIT3/WbODNk95+455+7+92sJZURRFMWDioOiKF5UHBRF8aLioCiKFxUHRVG8qDgoiuJFxUFRFC8qDoqieFFxUBTFi4qDoiheVBwURfGi4qAoihcVB0VRvKg4KIriRcVBURQvKg6KonhRcVAUxYuKg6IoXlQcFEXxouKgKIoXFQdFUbyoOCiK4kXFQVEULyoOiqJ4UXFQFMWLioOiKF6KXRw2rlsrWzZvsj8VL9u3bZPZmdNkQ+SeFOX/nWIXh8zxY6VL40ayZsVy21J8bN6ULV2aNJLuzT+QDWtLh0D8vWWLbNqwQbZu/de2pJ5tW7dK9ob18ldkrFhwH9mR+/j3n39sS2rZsWOHbM7eKJs2bpQd27fbViVMSoRbMXLgAOnU8H1ZOn++bSk+stevl34ftZfOEZFYt2qVbS2Z7Ny5U0YPHiQtatWQmVMm29bU88dPs8wYn3fvxqC2NS/jhg6R9Jo1ZOqYMbYltSAKGenN5aP69WRVVpZtVcIkFHHYEtmBv+rVUwZ36ypDMroXeAztkSFDP+kujatVlfQab0YEYp79lPBYuXSJ9G3fTj5t01p6t22Te7RrI/07fCTdmjWVtIrljQWBWJRkvu7TW/7zwvMyaeQI25J6fo64Wu++WFZ6tEiXnZEd3MeIAf2kdtnnZMyQz21LakEc2qbVkQaVK8nSBQts657N5s2b5dNPP5XnnntO7r33XqlatapMmzbN9oZPKOKAmctiy2jeTHq0bFHg0bNVS7NIG1V9XZpUryrzf/vNfkp4ZC1aaNyHjg3+Kx83apDn6Nq0iXT4b30jDvSvX7PGXlUyGd6vr6RVKCdTRo+yLaln9vRMqRt5H71at4opDiM/GyB1yr8o474YaltSC+KA1dC4WhXJWrjQtu65ZGZmyk033ST77ruvnHvuuXLZZZfJ/vvvL8cee6wMHjzYnhUuxe5WYBpPHD5MPnqvnvz244+2tfjYElHrQV07S7v6dWX54sW2teSi4rDn8WNkHZx99tlSpkwZadKkibEg4LPPPjNtF110kaxevdq0hUmxi8OUUSMjO/V7snDuHNtSfJA1yUhvZuIfq5aVDr9WxWHPIisrSy655BIjAs2bN7etObCRnnHGGaZv0qRJtjU8il0c1q5YHjHdS0bgj6j89AnjI/cTviqnChWHPYu3337bLP477rhD/glkfhAHYg/09+zZ07aGR+ji8Pfff8vWyKIriK3btuV7EWHCWAWNx/3Eu+eSQiLiwHfAEQsmHf1//fWX+XeQVIpDvPlAP2nLIKkQhy1btsi6deuMmZ7I98t57vxE4f1t2LDBXMd425NIu/76669y9NFHm8U/cOBA25oL93z++eeb/k8++cS2hkdo4vDtt9/KXXfdJUcddZRcf/31MmXKFNuTy7bIInzttdfklFNOkbS0NNsaHgsjk+qNN96QU0891bxkfLhofvnlFxMZPvLII+W6664zz1DSKUgcFi9eLK+//rp5HnzYTp06eRdeRkaG+Q5uv/12+fff/PUSqRCHGTNmyPPPP28CajfccEO++TBhwgQzX1gcDzzwgPz++++2J4eiiMMPP/wgr7zyilx77bXmOOGEE+Sqq66SV1991fQF4d7ou/zyy835Z555pjzxxBPSv39/M2d9ICA9evSQhx9+WG688Ua5+uqr5eSTT5bbbrtN3nzzTVm0aJE9Mzbvv/++WfiMuTHyvEEQneOOO86c069fP9saHikXByZXixYt5LzzzjMLEWHgYZ599tl8uxJBldNOO830M3HDhIXOS69QoYKZnIx58803216RUaNGmYhwlSpVjElHPxOkpBNLHL755hu55pprjNg9/fTT5nmOOeYYWeWp3eA56X/88cdtS16KKg6YwFdeeaVJxZ111llmrOrVq9tekW7duskVV1whtWrV2uVvt23b1vbmUFhx+Pjjj43gIAa9e/c2vnrDhg1ln332MeM0a9bMnpkD8/Cggw6SCy64wNw353fp0mWXr8+cDlphCEO5cuVMf8WKFWXMmDHy3XffmQ2PNg5+LgisDDfvGjRoYFvzQhrz4IMPNudMnDjRtoZHKOJQo0YNGTo0Z5Lw8nmYu+++O9+uRbpm7733Nl/U9OnTbWvqYVx20PT0dPNz69atzT2xeBx169bdNVHYOegvX768+TkR+vTpYwSxKMfUqVPtpyVO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"},8453:(e,a,i)=>{i.d(a,{R:()=>t,x:()=>r});var o=i(6540);const s={},n=o.createContext(s);function t(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);
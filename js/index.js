var arraymagnitudes=[];
var mostroconstante=false;
var mostroresultado=false;
var seleccionot=false
function calcular() {
    var calculadoraMRUA=document.getElementById("calculadoraMRUA")
    calculadoraMRUA.showModal();
}
function aceptar() {
    var calculadoraMRUA=document.getElementById("calculadoraMRUA")
    var seleccion=document.getElementById("seleccion")
    calculadoraMRUA.close();
    escritura(seleccion.value)
}

function escritura (seleccion) {
    var contenedorest=document.getElementById("contenedorest")
    var child=document.getElementById("div")
    var resultados=document.getElementById("resultados")
    var resultadotexto=document.getElementById("divresultado")
    if (child==null) {    
    }else{
         contenedorest.removeChild(child);
    }
    if (!(resultadotexto==null)) {
        resultados.removeChild(resultadotexto);
    }
    var div=document.createElement("div")
    div.setAttribute("id","div")
    var selector=document.createElement("select")
    selector.setAttribute("id","selector")
    if (seleccion=="si") {
        arraymagnitudes=["x","Xo","t","a","Vo"]    
    }else{
        arraymagnitudes=["v","t","a","Vo","To"]
    }
    for (let index = 0; index < arraymagnitudes.length; index++) {
        var magnitud=document.createElement("option")
        magnitud.setAttribute("value",arraymagnitudes[index])
        magnitud.appendChild(document.createTextNode(arraymagnitudes[index]))
        selector.appendChild(magnitud)
    }

    var boton=document.createElement("button")
    if (seleccion=="si") {
        boton.setAttribute("onclick","mostrarConstantes()") 
    }else{
        boton.setAttribute("onclick","mostrarConstantes()") 
    }
    boton.appendChild(document.createTextNode("seleccionar"))
    
    div.appendChild(document.createTextNode("escoga la magnitud a hallar"))
    div.appendChild(selector)
    div.appendChild(boton)
    contenedorest.appendChild(div)
    var input=document.getElementById("input")
    var buton=document.getElementById("buton")
    
    var espacio=document.getElementById("espacio")
    var seleccion=document.getElementById("seleccion")
    
        if (espacio==null) {
            
        }else{
            if (mostroconstante) {
                input.removeChild(espacio)
                input.removeChild(buton)
            }
            
        }
        var resultados=document.getElementById("resultados")
    if (mostroresultado==true) {
        mostroresultado=false
        var resulta=document.getElementById("divresultado")
        resultados.removeChild(resulta)
    }
}
function mostrarConstantes(){
    
    var input=document.getElementById("input")
    var buton=document.getElementById("buton")
    
    var espacio=document.getElementById("espacio")
        
        if (espacio==null) {
            
        }else{
            if (mostroconstante) {
                input.removeChild(espacio)
                input.removeChild(buton)
            }
            
        }
        var selector=document.getElementById("selector").value;
        var div=document.createElement("div");
        div.setAttribute("id","espacio")
        div.setAttribute("class","espacio")
        div.setAttribute("style","background-color: aqua")
        div.setAttribute("style","display:flex;")
        
        for (let index = 0; index < arraymagnitudes.length; index++) {
            if (!(selector==arraymagnitudes[index])) {
                crearespacio(arraymagnitudes[index],div)
            }
            
        }
        mostrarinput=true
    var verprocedimiento=document.createElement("button")
    verprocedimiento.setAttribute("onclick","datosllenos()")
    verprocedimiento.setAttribute("id","buton")
    verprocedimiento.appendChild(document.createTextNode("ver procedimiento"))
    input.appendChild(verprocedimiento)
    mostroconstante=true
    var resultados=document.getElementById("resultados")
    if (mostroresultado==true) {
        mostroresultado=false
        var resulta=document.getElementById("divresultado")
        resultados.removeChild(resulta)
    }
}

function crearespacio(magnitud,div){
    var input=document.getElementById("input")
        var tipomagnitud=document.createElement("p")
        tipomagnitud.setAttribute("id","s"+magnitud)
        tipomagnitud.appendChild(document.createTextNode(magnitud))
        var inputtipomagnitud=document.createElement("input")
        inputtipomagnitud.setAttribute("id","id"+magnitud)
        inputtipomagnitud.setAttribute("type","number")
        inputtipomagnitud.setAttribute("placeholder","escriba el valor de "+magnitud+" aqui")
    div.appendChild(tipomagnitud)
    div.appendChild(inputtipomagnitud)
    input.appendChild(div);
    var resultados=document.getElementById("resultados")
    if (mostroresultado==true) {
        mostroresultado=false
        var resulta=document.getElementById("divresultado")
        resultados.removeChild(resulta)
    }
}
function datosllenos() {
    var seleccion=document.getElementById("seleccion").value
    var selector=document.getElementById("selector").value;
    var lleno=true

    for (let index = 0; index < arraymagnitudes.length; index++) {
        if (!(selector==arraymagnitudes[index])) {
            
            var mag=document.getElementById("id"+arraymagnitudes[index])
            if (mag.value=="") {
                
                lleno=false
            } else {
                
            }
        }
        
    }
    if (lleno) {
        if (seleccion=="si") {
            resultadox()
        }else{
            resultado()
        }
        
    }else{
        alert("llene el campo  o los campos que faltan")
    }
    
}
function inputx() {
    
}

function input() {
    var contenedor_de_contenedor=document.getElementById("contenedor_de_contenedor")
    var tipomagnitud=document.createElement("p")
    tipomagnitud.setAttribute("id","s"+magnitud)
    tipomagnitud.appendChild(document.createTextNode(magnitud))
    var inputtipomagnitud=document.createElement("input")
    inputtipomagnitud.setAttribute("id","id"+magnitud)
    inputtipomagnitud.setAttribute("type","number")
div.appendChild(tipomagnitud)
div.appendChild(inputtipomagnitud)
contenedor_de_contenedor.appendChild(div);
}
function resultadox() {
    var resultados=document.getElementById("resultados")
    if (mostroresultado==true) {
        mostroresultado=false
        var resulta=document.getElementById("divresultado")
        resultados.removeChild(resulta)
    }
    
    var contenedor=document.createElement("div")
    contenedor.setAttribute("class","contenedor")
    contenedor.setAttribute("id","divresultado")

        var contenedor_div1=document.createElement("div")
        var contenedor_div1_p=document.createElement("p")
        contenedor_div1_p.appendChild(document.createTextNode("a=dv/dt"))
        contenedor_div1.appendChild(contenedor_div1_p)

        var contenedor_div2=document.createElement("div")
        var contenedor_div2_p=document.createElement("p")
        contenedor_div2_p.appendChild(document.createTextNode("adt=dv"))
        contenedor_div2.appendChild(contenedor_div2_p)

        var contenedor_ecuacion=document.createElement("div")
        contenedor_ecuacion.setAttribute("class","contenedor_ecuacion")

            var contenedor_lado_contenedor_=document.createElement("div")
            contenedor_lado_contenedor_.setAttribute("class","contenedor_lado_contenedor_")

                var antes_integral_=document.createElement("div")
                antes_integral_.setAttribute("class","antes_integral_")
                antes_integral_.appendChild(document.createTextNode("a"))

                var integral_=document.createElement("div")
                integral_.setAttribute("class","integral_")

                    var parte_arriba_integral_=document.createElement("div")
                    parte_arriba_integral_.setAttribute("class","parte_arriba_integral_")
                    parte_arriba_integral_.appendChild(document.createTextNode("T"))

                    var parte_abajo_integral_=document.createElement("div")
                    parte_abajo_integral_.setAttribute("class","parte_abajo_integral_")
                    parte_abajo_integral_.appendChild(document.createTextNode("To"))

                integral_.appendChild(parte_arriba_integral_)
                integral_.appendChild(parte_abajo_integral_)

                var despues_integral_=document.createElement("div")
                despues_integral_.setAttribute("class","despues_integral_")
                despues_integral_.appendChild(document.createTextNode("dt"))

            contenedor_lado_contenedor_.appendChild(antes_integral_)
            contenedor_lado_contenedor_.appendChild(integral_)
            contenedor_lado_contenedor_.appendChild(despues_integral_)


        

        var igual=document.createElement("div")
        igual.setAttribute("class","igual")
        igual.appendChild(document.createTextNode("="))

        var contenedor_lado_contenedor_2=document.createElement("div")
            contenedor_lado_contenedor_2.setAttribute("class","contenedor_lado_contenedor_")

                var antes_integral_2=document.createElement("div")
                antes_integral_2.setAttribute("class","antes_integral_")
                antes_integral_2.appendChild(document.createTextNode(""))

                var integral_2=document.createElement("div")
                integral_2.setAttribute("class","integral_")

                    var parte_arriba_integral_2=document.createElement("div")
                    parte_arriba_integral_2.setAttribute("class","parte_arriba_integral_")
                    parte_arriba_integral_2.appendChild(document.createTextNode("V"))

                    var parte_abajo_integral_2=document.createElement("div")
                    parte_abajo_integral_2.setAttribute("class","parte_abajo_integral_")
                    parte_abajo_integral_2.appendChild(document.createTextNode("Vo"))

                integral_2.appendChild(parte_arriba_integral_2)
                integral_2.appendChild(parte_abajo_integral_2)

                var despues_integral_2=document.createElement("div")
                despues_integral_2.setAttribute("class","despues_integral_")
                despues_integral_2.appendChild(document.createTextNode("dv"))

            contenedor_lado_contenedor_2.appendChild(antes_integral_2)
            contenedor_lado_contenedor_2.appendChild(integral_2)
            contenedor_lado_contenedor_2.appendChild(despues_integral_2)
            
            contenedor_ecuacion.appendChild(contenedor_lado_contenedor_)
            contenedor_ecuacion.appendChild(igual)
            contenedor_ecuacion.appendChild(contenedor_lado_contenedor_2)



    

    var contenedor_div3=document.createElement("div")
        var contenedor_div3_p=document.createElement("p")
        contenedor_div3_p.appendChild(document.createTextNode("a(T-To)=V-Vo"))
        contenedor_div3.appendChild(contenedor_div3_p)

        var contenedor_div4=document.createElement("div")
        var contenedor_div4_p=document.createElement("p")
        contenedor_div4_p.appendChild(document.createTextNode("a(T-To)+Vo=V"))
        contenedor_div4.appendChild(contenedor_div4_p)
        
        var contenedor_div5=document.createElement("div")
        var contenedor_div5_p=document.createElement("p")
        contenedor_div5_p.appendChild(document.createTextNode("a(T-To)+Vo=dx/dt"))
        contenedor_div5.appendChild(contenedor_div5_p)

        var contenedor_div6=document.createElement("div")
        var contenedor_div6_p=document.createElement("p")
        contenedor_div6_p.appendChild(document.createTextNode("dt[a(T-To)+Vo]=dx"))
        contenedor_div6.appendChild(contenedor_div6_p)

        var contenedor_ecuacion2=document.createElement("div")
        contenedor_ecuacion2.setAttribute("class","contenedor_ecuacion")

            var contenedor_lado_contenedor_4=document.createElement("div")
            contenedor_lado_contenedor_4.setAttribute("class","contenedor_lado_contenedor_")

                var antes_integral_4=document.createElement("div")
                antes_integral_4.setAttribute("class","antes_integral_")
                antes_integral_4.appendChild(document.createTextNode(""))

                var integral_4=document.createElement("div")
                integral_4.setAttribute("class","integral_")

                    var parte_arriba_integral_4=document.createElement("div")
                    parte_arriba_integral_4.setAttribute("class","parte_arriba_integral_")
                    parte_arriba_integral_4.appendChild(document.createTextNode("T"))

                    var parte_abajo_integral_4=document.createElement("div")
                    parte_abajo_integral_4.setAttribute("class","parte_abajo_integral_")
                    parte_abajo_integral_4.appendChild(document.createTextNode("To"))

                integral_4.appendChild(parte_arriba_integral_4)
                integral_4.appendChild(parte_abajo_integral_4)

                var despues_integral_4=document.createElement("div")
                despues_integral_4.setAttribute("class","despues_integral_")
                despues_integral_4.appendChild(document.createTextNode("dt [a(T)+Vo]"))

            contenedor_lado_contenedor_4.appendChild(antes_integral_4)
            contenedor_lado_contenedor_4.appendChild(integral_4)
            contenedor_lado_contenedor_4.appendChild(despues_integral_4)


        

         igual=document.createElement("div")
        igual.setAttribute("class","igual")
        igual.appendChild(document.createTextNode("="))

        var contenedor_lado_contenedor_3=document.createElement("div")
            contenedor_lado_contenedor_3.setAttribute("class","contenedor_lado_contenedor_")

                var antes_integral_3=document.createElement("div")
                antes_integral_3.setAttribute("class","antes_integral_")
                antes_integral_3.appendChild(document.createTextNode(""))

                var integral_3=document.createElement("div")
                integral_3.setAttribute("class","integral_")

                    var parte_arriba_integral_3=document.createElement("div")
                    parte_arriba_integral_3.setAttribute("class","parte_arriba_integral_")
                    parte_arriba_integral_3.appendChild(document.createTextNode("X"))

                    var parte_abajo_integral_3=document.createElement("div")
                    parte_abajo_integral_3.setAttribute("class","parte_abajo_integral_")
                    parte_abajo_integral_3.appendChild(document.createTextNode("Xo"))

                integral_3.appendChild(parte_arriba_integral_3)
                integral_3.appendChild(parte_abajo_integral_3)

                var despues_integral_3=document.createElement("div")
                despues_integral_3.setAttribute("class","despues_integral_")
                despues_integral_3.appendChild(document.createTextNode("dx"))

            contenedor_lado_contenedor_3.appendChild(antes_integral_3)
            contenedor_lado_contenedor_3.appendChild(integral_3)
            contenedor_lado_contenedor_3.appendChild(despues_integral_3)
            
            contenedor_ecuacion2.appendChild(contenedor_lado_contenedor_4)
            contenedor_ecuacion2.appendChild(igual)
            contenedor_ecuacion2.appendChild(contenedor_lado_contenedor_3)

            var contenedor_div7=document.createElement("div")
        var contenedor_div7_p=document.createElement("p")
        contenedor_div7_p.appendChild(document.createTextNode("t(at+Vo)=X-Xo"))
        contenedor_div7.appendChild(contenedor_div7_p)

        var contenedor_div8=document.createElement("div")
        var contenedor_div8_p=document.createElement("p")
        contenedor_div8_p.appendChild(document.createTextNode("at^2 + Vot =X - Xo"))
        contenedor_div8.appendChild(contenedor_div8_p)

        contenedor.appendChild(contenedor_div1_p)
        contenedor.appendChild(contenedor_div2_p)
        contenedor.appendChild(contenedor_ecuacion)
        contenedor.appendChild(contenedor_div3)
        contenedor.appendChild(contenedor_div4)
        contenedor.appendChild(contenedor_div5)
        contenedor.appendChild(contenedor_div6)
        contenedor.appendChild(document.createTextNode("To=0"))
        contenedor.appendChild(contenedor_ecuacion2)
        contenedor.appendChild(contenedor_div7)
        contenedor.appendChild(contenedor_div8)
        
        var selector=document.getElementById("selector").value;
    var valores=document.createElement("div")
    var resultadoprint=document.createElement("div")
    switch (selector) {

        case "a":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("a=(X - Vot - Xo)t^2"))
            
            var inputT=document.getElementById("idt").value
            var inputXo=document.getElementById("idXo").value
            var inputVo=document.getElementById("idVo").value
            var inputx=document.getElementById("idx").value
            valores.appendChild(document.createTextNode("a=("+inputx+"-"+inputT+"("+inputVo+")-"+inputXo+")/"+inputT+"^2"))
            var resultado=(inputx-(inputVo*inputT)-inputXo)
            resultado/=(inputT*inputT)

            

            resultadoprint.appendChild(document.createTextNode(resultado+"=a"))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "Vo":
                // at^2 + Vot + Xo=X
            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("Vo=(-at^2-Xo+X)t"))
            
            var inputT=document.getElementById("idt").value
            var inputa=document.getElementById("ida").value
            var inputXo=document.getElementById("idXo").value
            var inputx=document.getElementById("idx").value
            valores.appendChild(document.createTextNode("Vo=((-"+inputa+")"+inputT+"^2-"+inputXo+"+"+inputx+")/"+inputT))
            var resultado=(-inputa*inputT*inputT)-inputXo+parseInt(inputx,10)
            resultado/=inputT

            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("Vo="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "x":
// at^2 + Vot + Xo=X
            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("at^2 + Vot + Xo=X"))
            
            var inputT=document.getElementById("idt").value
            var inputa=document.getElementById("ida").value
            var inputXo=document.getElementById("idXo").value
            var inputVo=document.getElementById("idVo").value
            valores.appendChild(document.createTextNode("X=("+inputa+")"+inputT+"^2 +"+inputT+"("+inputVo+")+"+inputXo))
            var resultado=(inputa*inputT*inputT) +(inputT*inputVo)+parseInt(inputXo,10)


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("x="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "t":
// at^2 + Vot + Xo=X
alert("Opción no disponible por el momento")
seleccionot=true
            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("at^2 + Vot + Xo-X=0"))
            
            var inputXo=document.getElementById("idXo").value
            var inputa=document.getElementById("ida").value
            var inputx=document.getElementById("idx").value
            var inputVo=document.getElementById("idVo").value
            valores.appendChild(document.createTextNode(inputa+"t^2"+"+"+inputVo+"(t)"+"+"+inputXo+"-"+inputx))
            


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("t="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            
            break;
            case "Xo":
// at^2 + Vot + Xo=X
            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode(" Xo=X-at^2 - Vot "))
            
            var inputT=document.getElementById("idt").value
            var inputa=document.getElementById("ida").value
            var inputx=document.getElementById("idx").value
            var inputVo=document.getElementById("idVo").value
            valores.appendChild(document.createTextNode("Xo="+inputx+"-("+inputa+")"+inputT+"^2 -"+inputT+"("+inputVo+")"))
            var resultado=(-inputa*inputT*inputT) -(inputT*inputVo)+parseInt(inputx,10)


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("Xo="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
    }

    resultados.appendChild(contenedor)
        mostroresultado=true
        if (seleccionot) {
            seleccionot=false;
            resultados.removeChild(contenedor)
            mostroresultado=false
        }else{
            
        }
}
function resultado() {
    var resultados=document.getElementById("resultados")
    if (mostroresultado==true) {
        mostroresultado=false
        var resulta=document.getElementById("divresultado")
        resultados.removeChild(resulta)
    }
    
    var contenedor=document.createElement("div")
    contenedor.setAttribute("class","contenedor")
    contenedor.setAttribute("id","divresultado")

        var contenedor_div1=document.createElement("div")
        var contenedor_div1_p=document.createElement("p")
        contenedor_div1_p.appendChild(document.createTextNode("a=dv/dt"))
        contenedor_div1.appendChild(contenedor_div1_p)

        var contenedor_div2=document.createElement("div")
        var contenedor_div2_p=document.createElement("p")
        contenedor_div2_p.appendChild(document.createTextNode("adt=dv"))
        contenedor_div2.appendChild(contenedor_div2_p)

        var contenedor_ecuacion=document.createElement("div")
        contenedor_ecuacion.setAttribute("class","contenedor_ecuacion")

            var contenedor_lado_contenedor_=document.createElement("div")
            contenedor_lado_contenedor_.setAttribute("class","contenedor_lado_contenedor_")

                var antes_integral_=document.createElement("div")
                antes_integral_.setAttribute("class","antes_integral_")
                antes_integral_.appendChild(document.createTextNode("a"))

                var integral_=document.createElement("div")
                integral_.setAttribute("class","integral_")

                    var parte_arriba_integral_=document.createElement("div")
                    parte_arriba_integral_.setAttribute("class","parte_arriba_integral_")
                    parte_arriba_integral_.appendChild(document.createTextNode("T"))

                    var parte_abajo_integral_=document.createElement("div")
                    parte_abajo_integral_.setAttribute("class","parte_abajo_integral_")
                    parte_abajo_integral_.appendChild(document.createTextNode("To"))

                integral_.appendChild(parte_arriba_integral_)
                integral_.appendChild(parte_abajo_integral_)

                var despues_integral_=document.createElement("div")
                despues_integral_.setAttribute("class","despues_integral_")
                despues_integral_.appendChild(document.createTextNode("dt"))

            contenedor_lado_contenedor_.appendChild(antes_integral_)
            contenedor_lado_contenedor_.appendChild(integral_)
            contenedor_lado_contenedor_.appendChild(despues_integral_)


        

        var igual=document.createElement("div")
        igual.setAttribute("class","igual")
        igual.appendChild(document.createTextNode("="))

        var contenedor_lado_contenedor_2=document.createElement("div")
            contenedor_lado_contenedor_2.setAttribute("class","contenedor_lado_contenedor_")

                var antes_integral_2=document.createElement("div")
                antes_integral_2.setAttribute("class","antes_integral_")
                antes_integral_2.appendChild(document.createTextNode(""))

                var integral_2=document.createElement("div")
                integral_2.setAttribute("class","integral_")

                    var parte_arriba_integral_2=document.createElement("div")
                    parte_arriba_integral_2.setAttribute("class","parte_arriba_integral_")
                    parte_arriba_integral_2.appendChild(document.createTextNode("V"))

                    var parte_abajo_integral_2=document.createElement("div")
                    parte_abajo_integral_2.setAttribute("class","parte_abajo_integral_")
                    parte_abajo_integral_2.appendChild(document.createTextNode("Vo"))

                integral_2.appendChild(parte_arriba_integral_2)
                integral_2.appendChild(parte_abajo_integral_2)

                var despues_integral_2=document.createElement("div")
                despues_integral_2.setAttribute("class","despues_integral_")
                despues_integral_2.appendChild(document.createTextNode("dv"))

            contenedor_lado_contenedor_2.appendChild(antes_integral_2)
            contenedor_lado_contenedor_2.appendChild(integral_2)
            contenedor_lado_contenedor_2.appendChild(despues_integral_2)
            
            contenedor_ecuacion.appendChild(contenedor_lado_contenedor_)
            contenedor_ecuacion.appendChild(igual)
            contenedor_ecuacion.appendChild(contenedor_lado_contenedor_2)



    

    var contenedor_div3=document.createElement("div")
        var contenedor_div3_p=document.createElement("p")
        contenedor_div3_p.appendChild(document.createTextNode("a(T-To)=V-Vo"))
        contenedor_div3.appendChild(contenedor_div3_p)

        contenedor.appendChild(contenedor_div1_p)
        contenedor.appendChild(contenedor_div2_p)
        contenedor.appendChild(contenedor_ecuacion)
        contenedor.appendChild(contenedor_div3)
        var selector=document.getElementById("selector").value;
    var valores=document.createElement("div")
    var resultadoprint=document.createElement("div")
    console.log(selector)
    switch (selector) {
        case "v":
            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("a(T-To)+Vo=V"))
            
            var inputT=document.getElementById("idt").value
            var inputa=document.getElementById("ida").value
            var inputto=document.getElementById("idTo").value
            var inputVo=document.getElementById("idVo").value
            valores.appendChild(document.createTextNode(inputa+"("+inputT+"-"+inputto+")+"+inputVo+"=V"))
            var resultado=(inputT-inputto)
            resultado*=inputa
                resultado=(resultado+(inputVo)*1)*1

            

            resultadoprint.appendChild(document.createTextNode(resultado+"=V"))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "Vo":
            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("Vo=V-a(T-To)"))
            
            var inputT=document.getElementById("idt").value
            var inputa=document.getElementById("ida").value
            var inputto=document.getElementById("idTo").value
            var inputv=document.getElementById("idv").value
            valores.appendChild(document.createTextNode("Vo="+inputv+"-"+inputa+"("+inputT+"-"+inputto+")"))
            var resultado=(inputT-inputto)
            resultado*=inputa
                resultado=(-resultado+(inputv)*1)*1

            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("Vo="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "a":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("a=(V-Vo)/(T-To)"))
            
            var inputT=document.getElementById("idt").value
            var inputVo=document.getElementById("idVo").value
            var inputto=document.getElementById("idTo").value
            var inputv=document.getElementById("idv").value
            valores.appendChild(document.createTextNode("a="+"("+inputv+"-"+inputVo+")"+"/("+inputT+"-"+inputto+")"))
            var resultado=(inputv-inputVo)
            resultado/=(inputT-inputto)


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("a="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "t":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("t=((V-Vo)/v)+To"))
            
            var inputa=document.getElementById("ida").value
            var inputVo=document.getElementById("idVo").value
            var inputto=document.getElementById("idTo").value
            var inputv=document.getElementById("idv").value
            valores.appendChild(document.createTextNode("t="+"(("+inputv+"-"+inputVo+")"+"/"+inputa+")+"+inputto))
            var resultado=(inputv-inputVo)
            resultado/=inputa
            resultado=resultado+((inputto)*1)


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("t="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "To":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("To=T-((V-Vo)/a)"))
            
            var inputa=document.getElementById("ida").value
            var inputVo=document.getElementById("idVo").value
            var inputT=document.getElementById("idTo").value
            var inputv=document.getElementById("idv").value
            valores.appendChild(document.createTextNode("To="+inputT+"-(("+inputv+"-"+inputVo+")"+"/"+inputa))
            var resultado=(inputv-inputVo)
            console.log(resultado)
            resultado/=inputa
            console.log(resultado)
            resultado=inputT-resultado


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("To="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
    }

        resultados.appendChild(contenedor)
        mostroresultado=true
}
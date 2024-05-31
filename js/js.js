
var mostrarinput=false;
var banderaprocedimiento=false;

function mostrarConstantes(){
    if (mostrarinput) {
        borrar()
    }
    var contenedor_de_contenedor=document.getElementById("contenedor_de_contenedor")
    var seleccion=document.getElementById("seleccion").value;
        var arrayselecciones=["t","to","v","x","xo"]
        var div=document.createElement("div");
        div.setAttribute("id","espacio")
        div.setAttribute("class","espacio")
        div.setAttribute("style","background-color: aqua")
        div.setAttribute("style","display:flex;")
        
        for (let index = 0; index < arrayselecciones.length; index++) {
            if (!(seleccion==arrayselecciones[index])) {
                crearespacio(arrayselecciones[index],div)
            }
            
        }
        mostrarinput=true
    var verprocedimiento=document.createElement("button")
    verprocedimiento.setAttribute("onclick","datosllenos(seleccion)")
    verprocedimiento.setAttribute("id","buton")
    verprocedimiento.appendChild(document.createTextNode("ver procedimiento"))
    contenedor_de_contenedor.appendChild(verprocedimiento)
    
}

function crearespacio(magnitud,div){
    var contenedor_de_contenedor=document.getElementById("contenedor_de_contenedor")
        var tipomagnitud=document.createElement("p")
        tipomagnitud.setAttribute("id","s"+magnitud)
        tipomagnitud.appendChild(document.createTextNode(magnitud))
        var inputtipomagnitud=document.createElement("input")
        inputtipomagnitud.setAttribute("id","id"+magnitud)
        inputtipomagnitud.setAttribute("type","number")
        inputtipomagnitud.setAttribute("placeholder","escriba el valor de "+magnitud+" aqui")
    div.appendChild(tipomagnitud)
    div.appendChild(inputtipomagnitud)
    contenedor_de_contenedor.appendChild(div);
}
function datosllenos() {
    var seleccion=document.getElementById("seleccion").value;
    var lleno=true
    var arrayselecciones=["t","to","v","x","xo"]

    for (let index = 0; index < arrayselecciones.length; index++) {
        if (!(seleccion==arrayselecciones[index])) {
            
            var mag=document.getElementById("id"+arrayselecciones[index])
            if (mag.value=="") {
                
                lleno=false
            } else {
                
            }
        }
        
    }
    if (lleno) {
        procedimiento()
    }else{
        alert("llene el campo  o los campos que faltan")
    }
    
}
function procedimiento() {
    if (banderaprocedimiento) {
        borrarsol()
        
    }
    var resultadoouput= document.getElementById("resultadoouput")
    banderaprocedimiento=true
    var contenedor=document.createElement("div")
    contenedor.setAttribute("class","contenedor")
    contenedor.setAttribute("id","contenedor")
        var contenedor_div1=document.createElement("div")
        var contenedor_div1_p=document.createElement("p")
        contenedor_div1_p.appendChild(document.createTextNode("v=dx/dt"))
        contenedor_div1.appendChild(contenedor_div1_p)

        var contenedor_div2=document.createElement("div")
        var contenedor_div2_p=document.createElement("p")
        contenedor_div2_p.appendChild(document.createTextNode("vdt=dx"))
        contenedor_div2.appendChild(contenedor_div2_p)

        var contenedor_ecuacion=document.createElement("div")
        contenedor_ecuacion.setAttribute("class","contenedor_ecuacion")

            var contenedor_lado_contenedor_=document.createElement("div")
            contenedor_lado_contenedor_.setAttribute("class","contenedor_lado_contenedor_")

                var antes_integral_=document.createElement("div")
                antes_integral_.setAttribute("class","antes_integral_")
                antes_integral_.appendChild(document.createTextNode("v"))

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
                    parte_arriba_integral_2.appendChild(document.createTextNode("X"))

                    var parte_abajo_integral_2=document.createElement("div")
                    parte_abajo_integral_2.setAttribute("class","parte_abajo_integral_")
                    parte_abajo_integral_2.appendChild(document.createTextNode("Xo"))

                integral_2.appendChild(parte_arriba_integral_2)
                integral_2.appendChild(parte_abajo_integral_2)

                var despues_integral_2=document.createElement("div")
                despues_integral_2.setAttribute("class","despues_integral_")
                despues_integral_2.appendChild(document.createTextNode("dx"))

            contenedor_lado_contenedor_2.appendChild(antes_integral_2)
            contenedor_lado_contenedor_2.appendChild(integral_2)
            contenedor_lado_contenedor_2.appendChild(despues_integral_2)
            
            contenedor_ecuacion.appendChild(contenedor_lado_contenedor_)
            contenedor_ecuacion.appendChild(igual)
            contenedor_ecuacion.appendChild(contenedor_lado_contenedor_2)



    

    var contenedor_div3=document.createElement("div")
        var contenedor_div3_p=document.createElement("p")
        contenedor_div3_p.appendChild(document.createTextNode("v(T-To)=X-Xo"))
        contenedor_div3.appendChild(contenedor_div3_p)
        banderaprocedimiento=true

    contenedor.appendChild(contenedor_div1_p)
    contenedor.appendChild(contenedor_div2_p)
    contenedor.appendChild(contenedor_ecuacion)
    contenedor.appendChild(contenedor_div3)
    var seleccion=document.getElementById("seleccion").value;
    var valores=document.createElement("div")
    var resultadoprint=document.createElement("div")
    switch (seleccion) {
        case "x":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("v(T-To)+Xo=X"))
            
            var inputT=document.getElementById("idt").value
            var inputv=document.getElementById("idv").value
            var inputto=document.getElementById("idto").value
            var inputxo=document.getElementById("idxo").value
            valores.appendChild(document.createTextNode(inputv+"("+inputT+"-"+inputto+")+"+inputxo+"=X"))
            var resultado=(inputT-inputto)
            resultado*=inputv
                resultado=(resultado+(inputxo)*1)*1

            

            resultadoprint.appendChild(document.createTextNode(resultado+"=X"))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "xo":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("Xo=X-v(T-To)"))
            
            var inputT=document.getElementById("idt").value
            var inputv=document.getElementById("idv").value
            var inputto=document.getElementById("idto").value
            var inputx=document.getElementById("idx").value
            valores.appendChild(document.createTextNode("Xo="+inputx+"-"+inputv+"("+inputT+"-"+inputto+")"))
            var resultado=(inputT-inputto)
            resultado*=inputv
                resultado=(-resultado+(inputx)*1)*1

            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("Xo="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "v":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("v=(X-Xo)/(T-To)"))
            
            var inputT=document.getElementById("idt").value
            var inputxo=document.getElementById("idxo").value
            var inputto=document.getElementById("idto").value
            var inputx=document.getElementById("idx").value
            valores.appendChild(document.createTextNode("v="+"("+inputx+"-"+inputxo+")"+"/("+inputT+"-"+inputto+")"))
            var resultado=(inputx-inputxo)
            resultado/=(inputT-inputto)


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("v="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "t":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("t=((X-Xo)/v)+To"))
            
            var inputv=document.getElementById("idv").value
            var inputxo=document.getElementById("idxo").value
            var inputto=document.getElementById("idto").value
            var inputx=document.getElementById("idx").value
            valores.appendChild(document.createTextNode("t="+"(("+inputx+"-"+inputxo+")"+"/"+inputv+")+"+inputto))
            var resultado=(inputx-inputxo)
            resultado/=inputv
            resultado=resultado+((inputto)*1)


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("t="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
            case "to":

            var posicion=document.createElement("p")
            posicion.appendChild(document.createTextNode("To=T-((X-Xo)/v)"))
            
            var inputv=document.getElementById("idv").value
            var inputxo=document.getElementById("idxo").value
            var inputT=document.getElementById("idt").value
            var inputx=document.getElementById("idx").value
            valores.appendChild(document.createTextNode("to="+inputT+"-(("+inputx+"-"+inputxo+")"+"/"+inputv))
            var resultado=(inputx-inputxo)
            console.log(resultado)
            resultado/=inputv
            console.log(resultado)
            resultado=inputT-resultado


            
            console.log(resultado)
            resultadoprint.appendChild(document.createTextNode("to="+resultado))
            
            contenedor.appendChild(posicion)
            contenedor.appendChild(valores)
            contenedor.appendChild(resultadoprint)
            break;
    }

    resultadoouput.appendChild(contenedor)
}
function borrarsol(){
    
    var resultado=document.getElementById("resultado")
    var div2 = document.getElementById("contenedor")
    resultado.removeChild(div2)         
 }
function borrar(){
    var contenedor_de_contenedor=document.getElementById("contenedor_de_contenedor")
   var div = document.getElementById("espacio")
   contenedor_de_contenedor.removeChild(div)
    
     var div3 = document.getElementById("buton")
     contenedor_de_contenedor.removeChild(div3)
     if (banderaprocedimiento) {
        borrarsol()
     }
     banderaprocedimiento=false          
}
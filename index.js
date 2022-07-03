var screenInitial=$(window).outerWidth();
var nameAssistant;
var optionSelect;
var documento
var nombre
var animo
var estado
var notas
var bajas
var desempeño
var hablar
var algomas
window.onbeforeunload = function() {
};

$(window).resize(function() {
	var screenW=$(window).outerWidth();
   if(screenInitial!=screenW){}

});

window.onload = function(){
            
   setTimeout(function(){
      $('#assisWriteI').fadeOut(200);
      msjAsistente("varI");
   },2000);
   setTimeout(function(){
      asistenteEscribiendo();
      setTimeout(function(){
      $('#assisWrite').fadeOut(200);
      msjAsistente("varII");
      },2000);
   },2200);


}

$(document).ready(function(){


});

$(window).scroll(function(){

});

function sendDNI(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   documento=nameClient

   if(nameClient==""){
      alert("Debes ingresar tu DNI si deseas continuar");
   }else{
      var btnReadText=document.getElementById('btnReadText');
      btnReadText.removeAttribute("onclick");
      inputName.value="";
      inputName.setAttribute("readonly","readonly");

      var contAssistant=document.getElementById("contAssistant");
      var hourClientRight=document.createElement("p");
      var textClientRight=document.createElement("p");

      hourClientRight.setAttribute("class","hourClientRight");
      hourClientRight.innerHTML=horaActual();
      contAssistant.appendChild(hourClientRight);
      textClientRight.setAttribute("class","textClientRight");
      textClientRight.setAttribute("id","DNI");
      textClientRight.innerHTML=""+nameClient;
      contAssistant.appendChild(textClientRight);

      setTimeout(function(){
         asistenteEscribiendo();
              },500);
              
              setTimeout(function(){
                  $('#assisWrite').fadeOut(200);
                  msjAsistente("varIII");
              },2500);
              /*fin mensaje tres*/

              /*mensaje cuatro
              setTimeout(function(){
               asistenteEscribiendo();
              },3000);
              
              setTimeout(function(){
                  $('#assisWrite').fadeOut(200);
                  msjAsistente("varXV");
              },5000);
              fin mensaje cuatro*/

              /*mensaje cinco
              setTimeout(function(){
               clienteTomaDecision();
              },5500);
              fin mensaje cinco*/
           
              
         }

}

function sendName(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   nombre=nameClient

   if(nameClient==""){
       alert("Debes ingresar tu nombre si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Nombreestudiante");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cuatro*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varIV");
         },2500);
         /*fin mensaje cuatro*/
}
}
function sendAnimo(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   animo=nameClient

   if(nameClient==""){
       alert("Debes ingresar tu estado de animo si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Animo");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cuatro*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varV");
         },2500);
         /*fin mensaje cuatro*/
}
}
function sendPresentismo(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   estado=nameClient

   if(nameClient==""){
       alert("Debes ingresar tu respuesta si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Animo");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cinco*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varVI");
         },2500);
         /*fin mensaje cinco*/
}}
function sendNotas(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
  notas=nameClient

   if(nameClient==""){
       alert("Debes ingresar tu respuesta si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Animo");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cinco*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varVII");
         },2500);
         /*fin mensaje cinco*/
}
}

function sendBajas(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   bajas=nameClient


   if(nameClient==""){
       alert("Debes ingresar tu respuesta si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Animo");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cinco*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varVIII");
         },2500);
         /*fin mensaje cinco*/
}
}
function sendDesempeño(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   desempeño=nameClient

   if(nameClient==""){
       alert("Debes ingresar tu respuesta si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Animo");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cinco*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varIX");
         },2500);
         /*fin mensaje cinco*/
}
}
function sendHablar(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   hablar=nameClient

   if(nameClient==""){
       alert("Debes ingresar tu respuesta si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Animo");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cinco*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varX");
         },2500);
         /*fin mensaje cinco*/
}
}

function sendalgomas(){
   var inputName=document.getElementById('readText');
   var nameClient=document.getElementById("readText").value;
   algomas=nameClient

   if(nameClient==""){
       alert("Debes ingresar tu respuesta si deseas continuar");
   }else{
       var btnReadText=document.getElementById('btnReadText');
       btnReadText.removeAttribute("onclick");
       inputName.value="";
       inputName.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","Animo");
         textClientRight.innerHTML=""+nameClient;
         contAssistant.appendChild(textClientRight);
         
         /*mensaje cinco*/
         setTimeout(function(){
          asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
             $('#assisWrite').fadeOut(200);
             msjAsistente("varXI");
         },2500);
         /*fin mensaje cinco*/
         console.log(documento)
         console.log(nombre)
         console.log(animo)
         console.log(estado)
         console.log(notas)
         console.log(bajas)
         console.log(desempeño)
         console.log(hablar)
         console.log(algomas)
         var promedio=(notas-=bajas)
         console.log(promedio)
         if(promedio<=4){
            var riesgo="Alto"
         }
         else if(promedio<=7){
            var riesgo="Medio"
         }
         else{
            var riesgo="Bajo"
         }
         console.log(riesgo)
}
}

function mandartodo(){
   
}


function createLink(data){
        var textoCompleto=data;
         var textoFinal="";
         
         textoCompleto=textoCompleto.replace(/(\r\n|\n|\r)/gm, " ");
         searchLink=textoCompleto.split(" ");

          for(var i=0;i<searchLink.length;i++){
               var encontrado=searchLink[i].substring(0,8); 
               if(encontrado=="@enlace:"){
                  /*aca edito el elemento por esto <a href="searchLink[i].substring(8));"><a/>*/
                  var link=searchLink[i].substring(8);
                  searchLink[i]="<a onclick=window.open('"+link+"','_blank')>"+link+"</a>";
                  textoFinal=textoFinal+" "+searchLink[i];
               }else{
                  if(i==0){
                     /*comienza, texto sin espacio*/
                     textoFinal=""+searchLink[i];
                  }else{
                     /*texto con espacio*/
                     textoFinal=textoFinal+" "+searchLink[i];
                  }
               }
          }

          return textoFinal;
}

function asistenteEscribiendo(){
   nameAssistant=document.getElementById("nameAssistant").innerHTML;
   
   var writeAssis=document.createElement('div');
      var textAssisWrite=document.createElement('p');
      var loadMsjAssis=document.createElement('div');
         
         writeAssis.setAttribute("id","assisWrite");
      contAssistant.appendChild(writeAssis);
      textAssisWrite.setAttribute("id","textAssisWrite");
      textAssisWrite.innerHTML=nameAssistant+" está escribiendo";
      writeAssis.appendChild(textAssisWrite);
      loadMsjAssis.setAttribute("id","loadMsjAssis");
      writeAssis.appendChild(loadMsjAssis);
      $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
      
}

function msjAsistente(data){
      
      var dataToWrite=document.getElementById(data).innerHTML;
      var varNum=data.substring(3,data.length);
      
      if(data=="varI"){
            $('#assisWriteI').remove();
            var contAssistant=document.getElementById('contAssistant');
            var hourAssis=document.createElement('p');
            var textAssis=document.createElement('p');
            dataToWrite=createLink(dataToWrite);
            hourAssis.setAttribute("class","hourAssisLeft");
            hourAssis.setAttribute("id","hourAssisLeft"+varNum);
            hourAssis.innerHTML=horaActual();
            contAssistant.appendChild(hourAssis);
            textAssis.setAttribute("class","textAssisLeft");
            textAssis.setAttribute("id","textAssisLeft"+varNum);
            textAssis.innerHTML=dataToWrite;
            contAssistant.appendChild(textAssis);
      }if(data=="varII"){
            $('#assisWrite').remove();
            var contAssistant=document.getElementById('contAssistant');
            var hourAssis=document.createElement('p');
            var textAssis=document.createElement('p');
            dataToWrite=createLink(dataToWrite);
            hourAssis.setAttribute("class","hourAssisLeft");
            hourAssis.setAttribute("id","hourAssisLeft"+varNum);
            hourAssis.innerHTML=horaActual();
            contAssistant.appendChild(hourAssis);
            textAssis.setAttribute("class","textAssisLeft");
            textAssis.setAttribute("id","textAssisLeft"+varNum);
            textAssis.innerHTML=dataToWrite;
            contAssistant.appendChild(textAssis);

            var inputName=document.getElementById('readText');
            var btnReadText=document.getElementById('btnReadText');

            inputName.removeAttribute("readonly");
            btnReadText.setAttribute("onclick","sendDNI()");
      }if(data=="varIII"){
         $('#assisWrite').remove();
         var contAssistant=document.getElementById('contAssistant');
         var hourAssis=document.createElement('p');
         var textAssis=document.createElement('p');
         dataToWrite=createLink(dataToWrite);
         hourAssis.setAttribute("class","hourAssisLeft");
         hourAssis.setAttribute("id","hourAssisLeft"+varNum);
         hourAssis.innerHTML=horaActual();
         contAssistant.appendChild(hourAssis);
         textAssis.setAttribute("class","textAssisLeft");
         textAssis.setAttribute("id","textAssisLeft"+varNum);
         textAssis.innerHTML=dataToWrite;
         contAssistant.appendChild(textAssis);

         var inputName=document.getElementById('readText');
         var btnReadText=document.getElementById('btnReadText');

         inputName.removeAttribute("readonly");
         btnReadText.setAttribute("onclick","sendName()");}
         if(data=="varIV"){
            $('#assisWrite').remove();
            var contAssistant=document.getElementById('contAssistant');
            var hourAssis=document.createElement('p');
            var textAssis=document.createElement('p');
            dataToWrite=createLink(dataToWrite);
            hourAssis.setAttribute("class","hourAssisLeft");
            hourAssis.setAttribute("id","hourAssisLeft"+varNum);
            hourAssis.innerHTML=horaActual();
            contAssistant.appendChild(hourAssis);
            textAssis.setAttribute("class","textAssisLeft");
            textAssis.setAttribute("id","textAssisLeft"+varNum);
            textAssis.innerHTML=dataToWrite;
            contAssistant.appendChild(textAssis);
   
            var inputName=document.getElementById('readText');
            var btnReadText=document.getElementById('btnReadText');
   
            inputName.removeAttribute("readonly");
            btnReadText.setAttribute("onclick","sendAnimo()");}
            if(data=="varV"){
               $('#assisWrite').remove();
               var contAssistant=document.getElementById('contAssistant');
               var hourAssis=document.createElement('p');
               var textAssis=document.createElement('p');
               dataToWrite=createLink(dataToWrite);
               hourAssis.setAttribute("class","hourAssisLeft");
               hourAssis.setAttribute("id","hourAssisLeft"+varNum);
               hourAssis.innerHTML=horaActual();
               contAssistant.appendChild(hourAssis);
               textAssis.setAttribute("class","textAssisLeft");
               textAssis.setAttribute("id","textAssisLeft"+varNum);
               textAssis.innerHTML=dataToWrite;
               contAssistant.appendChild(textAssis);
      
               var inputName=document.getElementById('readText');
               var btnReadText=document.getElementById('btnReadText');
      
               inputName.removeAttribute("readonly");
               btnReadText.setAttribute("onclick","sendPresentismo()");}
               if(data=="varVI"){
                  $('#assisWrite').remove();
                  var contAssistant=document.getElementById('contAssistant');
                  var hourAssis=document.createElement('p');
                  var textAssis=document.createElement('p');
                  dataToWrite=createLink(dataToWrite);
                  hourAssis.setAttribute("class","hourAssisLeft");
                  hourAssis.setAttribute("id","hourAssisLeft"+varNum);
                  hourAssis.innerHTML=horaActual();
                  contAssistant.appendChild(hourAssis);
                  textAssis.setAttribute("class","textAssisLeft");
                  textAssis.setAttribute("id","textAssisLeft"+varNum);
                  textAssis.innerHTML=dataToWrite;
                  contAssistant.appendChild(textAssis);
         
                  var inputName=document.getElementById('readText');
                  var btnReadText=document.getElementById('btnReadText');
         
                  inputName.removeAttribute("readonly");
                  btnReadText.setAttribute("onclick","sendNotas()");}
                  if(data=="varVII"){
                     $('#assisWrite').remove();
                     var contAssistant=document.getElementById('contAssistant');
                     var hourAssis=document.createElement('p');
                     var textAssis=document.createElement('p');
                     dataToWrite=createLink(dataToWrite);
                     hourAssis.setAttribute("class","hourAssisLeft");
                     hourAssis.setAttribute("id","hourAssisLeft"+varNum);
                     hourAssis.innerHTML=horaActual();
                     contAssistant.appendChild(hourAssis);
                     textAssis.setAttribute("class","textAssisLeft");
                     textAssis.setAttribute("id","textAssisLeft"+varNum);
                     textAssis.innerHTML=dataToWrite;
                     contAssistant.appendChild(textAssis);
            
                     var inputName=document.getElementById('readText');
                     var btnReadText=document.getElementById('btnReadText');
            
                     inputName.removeAttribute("readonly");
                     btnReadText.setAttribute("onclick","sendBajas()");}
                     if(data=="varVIII"){
                        $('#assisWrite').remove();
                        var contAssistant=document.getElementById('contAssistant');
                        var hourAssis=document.createElement('p');
                        var textAssis=document.createElement('p');
                        dataToWrite=createLink(dataToWrite);
                        hourAssis.setAttribute("class","hourAssisLeft");
                        hourAssis.setAttribute("id","hourAssisLeft"+varNum);
                        hourAssis.innerHTML=horaActual();
                        contAssistant.appendChild(hourAssis);
                        textAssis.setAttribute("class","textAssisLeft");
                        textAssis.setAttribute("id","textAssisLeft"+varNum);
                        textAssis.innerHTML=dataToWrite;
                        contAssistant.appendChild(textAssis);
               
                        var inputName=document.getElementById('readText');
                        var btnReadText=document.getElementById('btnReadText');
               
                        inputName.removeAttribute("readonly");
                        btnReadText.setAttribute("onclick","sendDesempeño()");}
                        if(data=="varIX"){
                           $('#assisWrite').remove();
                           var contAssistant=document.getElementById('contAssistant');
                           var hourAssis=document.createElement('p');
                           var textAssis=document.createElement('p');
                           dataToWrite=createLink(dataToWrite);
                           hourAssis.setAttribute("class","hourAssisLeft");
                           hourAssis.setAttribute("id","hourAssisLeft"+varNum);
                           hourAssis.innerHTML=horaActual();
                           contAssistant.appendChild(hourAssis);
                           textAssis.setAttribute("class","textAssisLeft");
                           textAssis.setAttribute("id","textAssisLeft"+varNum);
                           textAssis.innerHTML=dataToWrite;
                           contAssistant.appendChild(textAssis);
                  
                           var inputName=document.getElementById('readText');
                           var btnReadText=document.getElementById('btnReadText');
                  
                           inputName.removeAttribute("readonly");
                           btnReadText.setAttribute("onclick","sendHablar()");}
                           if(data=="varX"){
                              $('#assisWrite').remove();
                              var contAssistant=document.getElementById('contAssistant');
                              var hourAssis=document.createElement('p');
                              var textAssis=document.createElement('p');
                              dataToWrite=createLink(dataToWrite);
                              hourAssis.setAttribute("class","hourAssisLeft");
                              hourAssis.setAttribute("id","hourAssisLeft"+varNum);
                              hourAssis.innerHTML=horaActual();
                              contAssistant.appendChild(hourAssis);
                              textAssis.setAttribute("class","textAssisLeft");
                              textAssis.setAttribute("id","textAssisLeft"+varNum);
                              textAssis.innerHTML=dataToWrite;
                              contAssistant.appendChild(textAssis);
                     
                              var inputName=document.getElementById('readText');
                              var btnReadText=document.getElementById('btnReadText');
                     
                              inputName.removeAttribute("readonly");
                              btnReadText.setAttribute("onclick","sendalgomas()");}
                              if(data=="varXI"){
                                 $('#assisWrite').remove();
                                 var contAssistant=document.getElementById('contAssistant');
                                 var hourAssis=document.createElement('p');
                                 var textAssis=document.createElement('p');
                                 dataToWrite=createLink(dataToWrite);
                                 hourAssis.setAttribute("class","hourAssisLeft");
                                 hourAssis.setAttribute("id","hourAssisLeft"+varNum);
                                 hourAssis.innerHTML=horaActual();
                                 contAssistant.appendChild(hourAssis);
                                 textAssis.setAttribute("class","textAssisLeft");
                                 textAssis.setAttribute("id","textAssisLeft"+varNum);
                                 textAssis.innerHTML=dataToWrite;
                                 contAssistant.appendChild(textAssis);
                        
                                 var inputName=document.getElementById('readText');
                                 var btnReadText=document.getElementById('btnReadText');
                        
                                 inputName.removeAttribute("readonly");
                                 btnReadText.setAttribute("onclick","mandartodo()");}
                  else{
               $('#assisWrite').remove();
               var contAssistant=document.getElementById('contAssistant');
               var hourAssis=document.createElement('p');
               var textAssis=document.createElement('p');
               dataToWrite=replaceName(dataToWrite);
               dataToWrite=createLink(dataToWrite);
               hourAssis.setAttribute("class","hourAssisLeft");
               hourAssis.setAttribute("id","hourAssisLeft"+varNum);
               hourAssis.innerHTML=horaActual();
               contAssistant.appendChild(hourAssis);
               textAssis.setAttribute("class","textAssisLeft");
               textAssis.setAttribute("id","textAssisLeft"+varNum);
               textAssis.innerHTML=dataToWrite;
               contAssistant.appendChild(textAssis);
            }
}

function clienteTomaDecision(){
                  
                  var hourClientRight=document.createElement('p');
                  var decision=document.createElement('div');
                  
                  hourClientRight.setAttribute("class","hourClientRight");
                  hourClientRight.innerHTML=horaActual();
                  contAssistant.appendChild(hourClientRight);
                  decision.setAttribute("class","decision");
                  decision.setAttribute("id","decisionI");
                  contAssistant.appendChild(decision);

                  var optionI=document.createElement("div");
                  var optionII=document.createElement("div");

                  optionI.setAttribute("class", "option");
                  optionI.setAttribute("id", "optionI");
                  optionI.setAttribute("onclick", "yes()");
                  optionI.innerHTML="Sí";
                  decision.appendChild(optionI);
                  optionII.setAttribute("class", "option");
                  optionII.setAttribute("id", "optionII");
                  optionII.setAttribute("onclick", "moreInfoNo()");
                  optionII.innerHTML="No";
                  decision.appendChild(optionII);
                  $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

}

function horaActual(){
      
      var ahora= new Date();
      var horas = ahora.getHours();
      var minutos= ahora.getMinutes();

      if((horas.toString()).length==1){
         horas="0"+ahora.getHours();
      }else{
         
      }

      if((minutos.toString()).length==1){
         minutos="0"+ahora.getMinutes();
      }else{
         
      }

      return horas+":"+minutos;
}

function asistenteDesconectado(){

      setTimeout(function(){
         var discon=document.createElement('p');
         discon.setAttribute("id","discon");
         discon.innerHTML="El asistente se ha desconectado";
         contAssistant.appendChild(discon);
         $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
      },10000);

}

function asistenteDiceEsto(data){

         var hourAssis=document.createElement('p');
         var textAssis=document.createElement('p');
            
         hourAssis.setAttribute("class","hourAssisLeft");
         hourAssis.innerHTML=horaActual();
         contAssistant.appendChild(hourAssis);
         textAssis.setAttribute("class","textAssisLeft");
         textAssis.innerHTML=data;
         contAssistant.appendChild(textAssis);
    
}

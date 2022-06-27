var screenInitial=$(window).outerWidth();
var nameAssistant;
var optionSelect;
window.onbeforeunload = function() {/////esto sucede cuando se presiona el boton actualizar
                   // $('html').animate( { scrollTop : 0 }, 0 );
};

$(window).resize(function() {
	var screenW=$(window).outerWidth();
   if(screenInitial!=screenW){
   // location.reload();
   }
});

window.onload = function(){
            
   /*mensaje uno*/
   setTimeout(function(){
      $('#assisWriteI').fadeOut(200);
      msjAsistente("varI");
      },2000);
   /*fin mensaje uno*/

   /*mensaje dos*/
   setTimeout(function(){
      asistenteEscribiendo();
      setTimeout(function(){
         $('#assisWrite').fadeOut(200);
         msjAsistente("varII");
      },2000);    
   },2200);
   /*fin mensaje dos*/

}


$(window).scroll(function(){

	     // if($(window).scrollTop() >= 400){
         //            $('#subir').fadeIn(700);
         //            document.getElementById("subir").style.display="flex";
         // }else{
         // 	$('#subir').fadeOut(700);
         // }

});

function sendName(){
        var inputName=document.getElementById('readText');
        var nameClient=document.getElementById("readText").value;

        if(nameClient==""){
            alert("Debes ingresar tu nombre si deseas continuar");
        }else{
            var btnReadText=document.getElementById('btnReadText');
            btnReadText.removeAttribute("onclick");
            var DNI=nameClient
            console.log(DNI)
            inputName.value="";
            inputName.setAttribute("readonly","readonly");

              var contAssistant=document.getElementById("contAssistant");
              var hourClientRight=document.createElement("p");
              var textClientRight=document.createElement("p");

              hourClientRight.setAttribute("class","hourClientRight");
              hourClientRight.innerHTML=horaActual();
              contAssistant.appendChild(hourClientRight);
              textClientRight.setAttribute("class","textClientRight");
              textClientRight.setAttribute("id","nombreCliente");
              textClientRight.innerHTML=""+nameClient;
              contAssistant.appendChild(textClientRight);
              
              /*mensaje tres*/
            setTimeout(function(){
               asistenteEscribiendo();
               setTimeout(function(){
                  $('#assisWrite').fadeOut(200);
                  msjAsistente("varIII");
               },2000);    
            },2200);
            
              /*fin mensaje tres*/

              /*mensaje cuatro
              setTimeout(function(){
               asistenteEscribiendo();
              },3000);
              
              setTimeout(function(){
                  $('#assisWrite').fadeOut(200);
                  msjAsistente("varXV");
              },5000);*/
              /*fin mensaje cuatro*/

              /*mensaje cinco
              setTimeout(function(){
               clienteTomaDecision();
              },5500);*/
              /*fin mensaje cinco*/
              
         }

}

function moreInfoYes(){
            document.getElementById('optionI').style.pointerEvents="none";
            document.getElementById('optionII').style.pointerEvents="none";

            setTimeout(function(){
               asistenteEscribiendo();
            },500);

            setTimeout(function(){
               $('#assisWrite').fadeOut(200);
               asistenteDiceEsto("¿Por qué medio te gustaría ser contactado?");
            },2500);

            setTimeout(function(){
               $('#assisWrite').remove();
               optionWhatOrMail();
            },3000);

}

function moreInfoNo(){
         document.getElementById('optionI').style.pointerEvents="none";
         document.getElementById('optionII').style.pointerEvents="none";
        
          /*mensaje tres*/
          setTimeout(function(){
            asistenteEscribiendo();
           },500);
           
           setTimeout(function(){
               $('#assisWrite').fadeOut(200);
               msjAsistente("varIV");
           },2500);
           /*fin mensaje tres*/

         
           asistenteDesconectado();

}

function whats(){
         document.getElementById('optionII-I').style.pointerEvents="none";
        document.getElementById('optionII-II').style.pointerEvents="none";

        setTimeout(function(){
         asistenteEscribiendo();
        },500);

        setTimeout(function(){
               $('#assisWrite').fadeOut(200);
               asistenteDiceEsto("Por favor, ingresa tu número de Whatsapp");

               var barTextCliente=document.getElementById('barTextCliente');
               var inputName=document.getElementById('readText');
               var btnReadText=document.getElementById('btnReadText');

               inputName.removeAttribute("readonly");
               btnReadText.setAttribute("onclick","sendWhats()");
                
        },2500);

        setTimeout(function(){
         $('#assisWrite').remove();
         $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
        },2700);

}


function mails(){
         document.getElementById('optionII-I').style.pointerEvents="none";
        document.getElementById('optionII-II').style.pointerEvents="none";
        
        setTimeout(function(){
         asistenteEscribiendo();
        },500);

        setTimeout(function(){
               $('#assisWrite').fadeOut(200);
               asistenteDiceEsto("Por favor, ingresa tu E-mail");

               var barTextCliente=document.getElementById('barTextCliente');
               var inputName=document.getElementById('readText');
               var btnReadText=document.getElementById('btnReadText');

               inputName.removeAttribute("readonly");
               btnReadText.setAttribute("onclick","sendMail()");
                
        },2500);

        setTimeout(function(){
         $('#assisWrite').remove();
         $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
        },2700);

}

function sendWhats(){
                var btnReadText=document.getElementById('btnReadText');
                var inputWhat=document.getElementById('readText');
                var inputWhatValue=inputWhat.value;

                validarNumber(inputWhatValue);
}

function sendMail(){

                var btnReadText=document.getElementById('btnReadText');
                var inputMail=document.getElementById('readText');
                var inputMailValue=inputMail.value;
             
               validarMail(inputMailValue);

}

function validarNumber(data){
             var approved=0;
             var datoWrite=data;
             
             for(var i=0;i<datoWrite.length;i++){
                 
                    if(datoWrite.charCodeAt(i)<48 || datoWrite.charCodeAt(i)>57){
                        approved=0;
                        break;
                    }else{
                        approved=1;
                    }
             }

             if(approved==1){
                 //escribio lo que sige y desactivo el atributo onclick del booton
                 var btnReadText=document.getElementById('btnReadText');
                  var inputWhat=document.getElementById('readText');
                  var inputWhatValue=inputWhat.value;
               
                  btnReadText.removeAttribute("onclick");
                  inputWhat.value="";
                  inputWhat.setAttribute("readonly","readonly");

                  var contAssistant=document.getElementById("contAssistant");
                  var hourClientRight=document.createElement("p");
                  var textClientRight=document.createElement("p");

                  hourClientRight.setAttribute("class","hourClientRight");
                  hourClientRight.innerHTML=horaActual();
                  contAssistant.appendChild(hourClientRight);
                  textClientRight.setAttribute("class","textClientRight");
                  textClientRight.setAttribute("id","datosCliente");
                  textClientRight.innerHTML=""+inputWhatValue;
                  contAssistant.appendChild(textClientRight);
                  
                  $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

                  /*mensaje siete*/
                  setTimeout(function(){
                     asistenteEscribiendo();
                  },500);
                  
                  setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varVII");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

                        var inputName=document.getElementById('readText');
                        var btnReadText=document.getElementById('btnReadText');

                        inputName.removeAttribute("readonly");
                        btnReadText.setAttribute("onclick","rpstaDeInteres()");
                  },2500);
                  /*fin mensaje siete*/
                  
             }else{
                alert("Ingrese su número sin letras ni símbolos");
             }
}


function validarMail(data){
             var approvedParcialI=0;
             var approvedParcialII=0;
             var datoWrite=data;
             
             for(var i=0;i<datoWrite.length;i++){
                 
                    if(datoWrite.charCodeAt(i)==64){
                        approvedParcialI=1;
                    }

                    if(datoWrite.charCodeAt(i)==46){
                        approvedParcialII=1;
                    }
             }

             if(approvedParcialI==1 && approvedParcialII==1){
                //escribio lo que sige y desactivo el atributo onclick del booton
                var btnReadText=document.getElementById('btnReadText');
                var inputMail=document.getElementById('readText');
                var inputMailValue=inputMail.value;
             
                btnReadText.removeAttribute("onclick");
                inputMail.value="";
                inputMail.setAttribute("readonly","readonly");

                var contAssistant=document.getElementById("contAssistant");
                var hourClientRight=document.createElement("p");
                var textClientRight=document.createElement("p");

                hourClientRight.setAttribute("class","hourClientRight");
                hourClientRight.innerHTML=horaActual();
                contAssistant.appendChild(hourClientRight);
                textClientRight.setAttribute("class","textClientRight");
                textClientRight.setAttribute("id","datosCliente");
                textClientRight.innerHTML=""+inputMailValue;
                contAssistant.appendChild(textClientRight);
                
                $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

                /*mensaje siete*/
                setTimeout(function(){
                   asistenteEscribiendo();
                },500);
                
                setTimeout(function(){
                      $("#assisWrite").fadeOut(200);
                      msjAsistente("varVII");
                      $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        
                        var inputName=document.getElementById('readText');
                        var btnReadText=document.getElementById('btnReadText');

                        inputName.removeAttribute("readonly");
                        btnReadText.setAttribute("onclick","rpstaDeInteres()");
                },2500);
                /*fin mensaje siete*/
             }else{
                alert("Ingrese un E-mail válido");
             }
}

function rpstaDeInteres(){
         var btnReadText=document.getElementById('btnReadText');
         var inputRpsta=document.getElementById('readText');
         var inputRpstaValue=inputRpsta.value;

         btnReadText.removeAttribute("onclick");
         inputRpsta.value="";
         inputRpsta.setAttribute("readonly","readonly");

         var contAssistant=document.getElementById("contAssistant");
         var hourClientRight=document.createElement("p");
         var textClientRight=document.createElement("p");

         hourClientRight.setAttribute("class","hourClientRight");
         hourClientRight.innerHTML=horaActual();
         contAssistant.appendChild(hourClientRight);
         textClientRight.setAttribute("class","textClientRight");
         textClientRight.setAttribute("id","rsptDeCliente");
         textClientRight.innerHTML=""+inputRpstaValue;
         contAssistant.appendChild(textClientRight);
         
         $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

         /*mensaje ocho*/
         setTimeout(function(){
            asistenteEscribiendo();
         },500);
         
         setTimeout(function(){
               $("#assisWrite").fadeOut(200);
               msjAsistente("varVIII");
               $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
         },2500);

         setTimeout(function(){
            clienteTomaTresDecision();
         },3000);
         /*fin mensaje ocho*/
}

function replaceName(data){
         var contador=0;
         var texto=data;
         var name=document.getElementById("nombreCliente").innerHTML;
         
         var contWord= texto.split(" ");

         for(i=0;i<contWord.length;i++){
             texto=texto.replace("@name",name);
         }

         return texto;
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
            btnReadText.setAttribute("onclick","sendName()");
      }else{
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
                  optionI.setAttribute("onclick", "moreInfoYes()");
                  optionI.innerHTML="Sí";
                  decision.appendChild(optionI);
                  optionII.setAttribute("class", "option");
                  optionII.setAttribute("id", "optionII");
                  optionII.setAttribute("onclick", "moreInfoNo()");
                  optionII.innerHTML="No";
                  decision.appendChild(optionII);
                  $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

}

function clienteTomaTresDecision(){
      var varIX=document.getElementById("varIX").innerHTML;
      var varX=document.getElementById("varX").innerHTML;
      var varXI=document.getElementById("varXI").innerHTML;
      var hourClientRight=document.createElement('p');
      var decision=document.createElement('div');
      
      hourClientRight.setAttribute("class","hourClientRight");
      hourClientRight.innerHTML=horaActual();
      contAssistant.appendChild(hourClientRight);
      decision.setAttribute("class","decision");
      decision.setAttribute("id","decisionIII");
      contAssistant.appendChild(decision);

      var optionI=document.createElement("div");
      var optionII=document.createElement("div");
      var optionIII=document.createElement("div");

      optionI.setAttribute("class", "option");
      optionI.setAttribute("id", "optionIII-I");
      optionI.setAttribute("onclick", "selectOptI()");
      optionI.innerHTML=varIX;
      decision.appendChild(optionI);
      optionII.setAttribute("class", "option");
      optionII.setAttribute("id", "optionIII-II");
      optionII.setAttribute("onclick", "selectOptII()");
      optionII.innerHTML=varX;
      decision.appendChild(optionII);
      optionIII.setAttribute("class", "option");
      optionIII.setAttribute("id", "optionIII-III");
      optionIII.setAttribute("onclick", "selectOptIII()");
      optionIII.innerHTML=varXI;
      decision.appendChild(optionIII);
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

function optionWhatOrMail(){

      var contAssistant=document.getElementById("contAssistant");
      var decision=document.createElement('div');

      var hourClientRight=document.createElement('p');
      var decision=document.createElement('div');
      
      hourClientRight.setAttribute("class","hourClientRight");
      hourClientRight.innerHTML=horaActual();
      contAssistant.appendChild(hourClientRight);
      decision.setAttribute("class","decision");
      decision.setAttribute("id","decisionII");
      contAssistant.appendChild(decision);
      var optionI=document.createElement("div");
      var optionII=document.createElement("div");

      decision.setAttribute("class","decision");
      decision.setAttribute("id","decisionII");
      contAssistant.appendChild(decision);

      optionI.setAttribute("class", "option");
      optionI.setAttribute("id", "optionII-I");
      optionI.setAttribute("onclick", "whats()");
      optionI.innerHTML="WhatsApp";
      decision.appendChild(optionI);
      optionII.setAttribute("class", "option");
      optionII.setAttribute("id", "optionII-II");
      optionII.setAttribute("onclick", "mails()");
      optionII.innerHTML="E-mail";
      decision.appendChild(optionII);

      $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

}

function selectOptI(){
   optionSelect=1;
   setTimeout(function(){
      asistenteEscribiendo();
   },500);
   
   setTimeout(function(){
         $("#assisWrite").fadeOut(200);
         msjAsistente("varXII");
         $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

         var varV=document.getElementById("varV").innerHTML;
         if(varV=="0"){
            //muestro solo el msj VI
                     asistenteEscribiendo();
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varVI");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        envioDatos();
                     },2000)   
         }else{
            //muestro el msj 6 y luego el 7
                     asistenteEscribiendo();
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varV");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        asistenteEscribiendo();
                     },2000)
                     
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varVI");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        envioDatos();
                     },4000)
         }
   },2500);
    
}

function selectOptII(){
   optionSelect=2;
   setTimeout(function(){
      asistenteEscribiendo();
   },500);
   
   setTimeout(function(){
         $("#assisWrite").fadeOut(200);
         msjAsistente("varXIII");
         $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

         var varV=document.getElementById("varV").innerHTML;
         if(varV=="0"){
            //muestro solo el msj VI
                     asistenteEscribiendo();
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varVI");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        envioDatos();
                     },2000)   
         }else{
            //muestro el msj 6 y luego el 7
                     asistenteEscribiendo();
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varV");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        asistenteEscribiendo();
                     },2000)
                     
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varVI");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        envioDatos();
                     },4000)
         }
   },2500);
    
}

function selectOptIII(){
   optionSelect=3;
   setTimeout(function(){
      asistenteEscribiendo();
   },500);
   
   setTimeout(function(){
         $("#assisWrite").fadeOut(200);
         msjAsistente("varXIV");
         $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);

         var varV=document.getElementById("varV").innerHTML;
         if(varV=="0"){
            //muestro solo el msj VI
                     asistenteEscribiendo();
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varVI");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        asistenteDesconectado();
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        envioDatos();
                     },2000)   
         }else{
            //muestro el msj 6 y luego el 7
                     asistenteEscribiendo();
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varV");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        asistenteEscribiendo();
                     },2000)
                     
                     setTimeout(function(){
                        $("#assisWrite").fadeOut(200);
                        msjAsistente("varVI");
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        asistenteDesconectado();
                        $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight}, 1000);
                        envioDatos();
                     },4000)
         }
   },2500);
    
}

function envioDatos(){

   
   var destino=document.getElementById("varMail").innerHTML;
   var nombre=document.getElementById("nombreCliente").innerHTML;
   var datos=document.getElementById("datosCliente").innerHTML;
   var varPregunta=document.getElementById("varVII").innerHTML;
   var rsptDeCliente=document.getElementById("rsptDeCliente").innerHTML;
   var varPreguntaOpciones=document.getElementById("varVIII").innerHTML;
   var varOpcionI=document.getElementById("varIX").innerHTML;
   var varOpcionII=document.getElementById("varX").innerHTML;
   var varOpcionIII=document.getElementById("varXI").innerHTML;
   
   
   if(optionSelect==1){
     optionSelect=varOpcionI;
   }if(optionSelect==2){
     optionSelect=varOpcionII;
   }if(optionSelect==3){
     optionSelect=varOpcionIII;
   }

   var param = {
                   destino: destino,
                   nombre: nombre,
                   datos: datos,
                   preguntaInteres: varPregunta,
                   rsptaInteres: rsptDeCliente,
                   preguntaOpciones: varPreguntaOpciones,
                   opcionSelect: optionSelect
               }
                 
               $.ajax({
                   data: param,
                   url: "envioMail/contacto.php",
                   method: "post",
                   success: function(data) {
                   }
               })

               $.ajax({
                    url:"basicConfig.php",
                    success: function(data) {
                    }
                    
               })

               $.ajax({
                   data: param,
                   url: "envioMail/enviar.php",
                   method: "post",
                   success: function(data) {
                        
                   }
               })
   

}
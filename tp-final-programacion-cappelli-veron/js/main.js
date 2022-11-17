//mostrar la pantalla4
    function mostrarPantalla4(){
        document.querySelector("#pantalla1").style.display = "none";
        document.querySelector("#pantalla2").style.display = "none";
        document.querySelector("#pantalla3").style.display = "none";
        document.querySelector("#pantalla4").style.display = "block";

                                }

//mostrar la pantalla3
    function mostrarPantalla3(){

        document.querySelector("#pantalla1").style.display = "none";
        document.querySelector("#pantalla2").style.display = "none";
        document.querySelector("#pantalla3").style.display = "block";
        document.querySelector("#pantalla4").style.display = "none";

                                }
//mostrar pantalla2 con el nombre del jugador extraido de la pantalla1
    function mostrar_todo(){

//obtengo el nombre(valor) que ingresó el usuario
        var nombre = document.getElementById("nombre").value;

//llamo y plasmo ese nombre en el h4 con el Id "nombre_jugador"
            document.getElementById("nombre_jugador").innerHTML = "Player: "+ nombre;

            document.querySelector("#pantalla4").style.display = "none";
            document.querySelector("#pantalla3").style.display = "none";
            document.querySelector("#pantalla1").style.display = "none";
            document.querySelector("#pantalla2").style.display = "block";

                            }

//imagenes
    var emojis = ["oso.png","zorro.png","conejo.png"] ;

//inico de los puntos
    var puntos = 5;

//recargar página (reiniciar juego)
    function recargar () {

        window.location.href = window.location.href;

                        }

//hace que el boton lleve a cabo el juego
     document.getElementById("juego").onclick = function juego(){

//se genera un numero random para que busque en el array a que elemento pertenece 
    function generarNumero(){ 

        var numerorandom =  Math.floor(Math.random()*(2-0+1))+0;
                return (emojis[numerorandom]);

                            }

 //se crean variables para generar contenidos del array aleatorios en cada caso
    var parte1 = generarNumero();  
    var parte2 = generarNumero();
    var parte3 = generarNumero();

 //cambiamos el source de las imagenes para que cambien segun el numero aleatorio del array
        document.getElementById("img1").setAttribute("src","/imagenes/"+ parte1);

        document.getElementById("img2").setAttribute("src","/imagenes/"+ parte2);

        document.getElementById("img3").setAttribute("src","/imagenes/"+ parte3);

 //para sumar y restar puntos si lograste sumar o perder
    if(parte2 == parte1 && parte3 == parte1){

        puntos = puntos + 10;   

                }else{

                        puntos = puntos - 1 ;

                        }  

//para mostrar en pantalla el crédito del jugador
        document.getElementById("dinero").innerHTML="CREDITS: " + puntos;

//para terminar el juego si ganaste o perdiste (llegar a 100 o 0)
    if(puntos >= 100){

         mostrarPantalla3();

                }else{
                            if(puntos <= 0){

                                    mostrarPantalla4();

                                     }
                                }
                            }
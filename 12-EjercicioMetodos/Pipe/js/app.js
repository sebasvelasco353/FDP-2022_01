// Me quedó más facil la calculadora

let valores = document.getElementById("valor");

let botonesArray = Array.from(document.getElementsByClassName("boton"));

botonesArray.map( boton => {
    boton.addEventListener("click", (e) => {
       switch(e.target.innerText){
            case "C":
                valores.innerText = "";
                break;

            case "←":

                if(valores.innerText){
                    valores.innerText = valores.innerText.slice(0, -1);
                }
                break;
                case "=":
                    try{

                        valores.innerText = eval(valores.innerText);
                    } catch {
                        valores.innerText ="Syntax Error";
                    }
                        break;
           default:
               valores.innerText += e.target.innerText;
       }
    })
});
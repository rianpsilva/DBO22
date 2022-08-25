let formulario = document.querySelector(".formulario");
let erro = document.querySelector("#erro");
let aux = 0;
let nome = document.querySelector("#n");
let cpf = document.querySelector("#cpf");
let senha = document.querySelector("#s");
let senhaconfirmacao = document.querySelector("#sc");
//SEGUNDO FORM//
let formulario2=document.querySelector(".fase")
let trabalho=document.querySelector("#trabalho")
const radio=document.getElementsByName("est")
let anos=document.querySelector("#anos")
let dados=document.querySelector(".dados")
let nomer;
let cpfr;
let senhar;
let profissaor;
let anosr;
        //VERIFICAÇÃO FORM 1//

document.querySelector("#botao1").addEventListener("click", (e)=>{verificacao(e)});
function verificacao(e){
    
    if (document.querySelector("#erronome") !== null) {
        document.querySelector("#erronome").remove();
        nome.style.borderColor = "black";
        
    }
    if (document.querySelector("#errocpf") !== null) {
        document.querySelector("#errocpf").remove();
        cpf.style.borderColor = "black";
    }
    if (document.querySelector("#erros") !== null) {
        document.querySelector("#erros").remove();
        senha.style.borderColor = "black"; 
    }
    if (document.querySelector("#errosc") !== null) {
        document.querySelector("#errosc").remove();
        senhaconfirmacao.style.borderColor = "black"; 
    }
    aux=0;

    validarnome(e);
    validarcpf(e);
    validars(e);
    validarsc(e);
    if (aux===0){
        formulario.className = "formulario_ativo";
        formulario2.className= "fase_ativo";
        nomer=nome.value;
        cpfr=cpf.value;
        senhar=senha.value
    }

}

function validarnome(validnome) {
    
    if (nome.value === "") {
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erronome");
            let erroTexto = document.createTextNode("O campo nome é obrigatório");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            nome.style.borderColor = "red";
            nome.focus();
            aux ++;
    }
}
function validarcpf(validcpf) {
    
    if (cpf.value === "" || cpf.value.length != 11) {
        
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","errocpf");
            let erroTexto = document.createTextNode("O campo cpf deve conter 11 letras (não use pontos ou traçoos).");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            cpf.style.borderColor = "red";
            cpf.focus();
            aux ++;
        }
    }
function validars(validsenha) {
    
    if (senha.value === "" || senha.value.length > 8) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erros");
                let erroTexto = document.createTextNode("A senha deve ter 8 letras no máximo");
                erroDiv.appendChild(erroTexto);
                erro.appendChild(erroDiv);
                senha.style.borderColor = "red";
                senha.focus();
                aux ++;
        }  
    }


function validarsc(validconfirma) {
    
        if (senhaconfirmacao.value === "" || senhaconfirmacao.value != senha.value  ) {
            
                    let erroDiv = document.createElement("div");
                    erroDiv.setAttribute("id","errosc");
                    let erroTexto = document.createTextNode("A senha digitada não é igual");
                    erroDiv.appendChild(erroTexto);
                    erro.appendChild(erroDiv);
                    senhaconfirmacao.style.borderColor = "red";
                    senhaconfirmacao.focus();
                    aux ++;
            }  
        }
 //SEGUNDA VERIFICAÇÃO//

 document.querySelector("#botao2").addEventListener("click", (a)=>{verificacao2(a)});
 function verificacao2(a){
     
     if (document.querySelector("#erroTrabalho") !== null) {
         document.querySelector("#erroTrabalho").remove();
         trabalho.style.borderColor = "black";
         
     }
     if (document.querySelector("#erroEstado") !== null) {
         document.querySelector("#erroEstado").remove();
         estado.style.borderColor = "black";
     }
     if (document.querySelector("#erroAnos") !== null) {
         document.querySelector("#erroAnos").remove();
         anos.style.borderColor = "black"; 
     }
     aux=0;
 
     validarTrabalho(a);
     validarEstado(a);
     validarAnos(a);
     if (aux===0){
         formulario2.className= "fase";
         dados.className="dado_ativo";
         profissaor=trabalho.value;
         anosr=anos.value;
           //PASSANDO OS VALUE PARA AS VARIAVEIS//
    let estador;

    if(radio[0].checked===true && radio[1].checked===false && radio[2].checked===false){
        estador="RS"
    }
    if(radio[0].checked===false && radio[1].checked===true && radio[2].checked===false){
        estador="SC"
    }
    if(radio[0].checked===false && radio[1].checked===false && radio[2].checked===true){
        estador="RS"
    }
    dados.innerHTML="Seus dados:"+"<br>"+"Nome:"+nomer+"<br>"+"CPF:"+cpfr+"<br>"+"Senha:"+senhar+"<br>"+"Profissão:"+profissaor+"<br>"+"Estado:"+estador+"<br>"+"Anos de Experiência:"+anosr;
     }
 
 }

            //VERIFICAÇÃO TRABALHO//

 function validarTrabalho(validtrabalho) {
    
    if (trabalho.value === "") {
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroTrabalho");
            let erroTexto = document.createTextNode("O campo profissão é obrigatório");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            trabalho.style.borderColor = "red";
            trabalho.focus();
            aux ++;
    }
}
        //VERIFICAÇÃO ESTADO//

function validarEstado(validestado){
    
    if(radio[0].checked===false && radio[1].checked===false && radio[2].checked===false) {
        
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroEstado");
            let erroTexto = document.createTextNode("Por favor selecione um estado");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            estado.style.borderColor = "red";
            estado.focus();
            aux ++;
        }
    }
    
        //VERIFICAÇÃO ANOS//

function validarAnos(validanos) {
    
    if (anos.value  === "" || anos.value <0 || anos.value >50) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroAnos");
                let erroTexto = document.createTextNode("Por favor digite seus anos de experiência, 0-50");
                erroDiv.appendChild(erroTexto);
                erro.appendChild(erroDiv);
                anos.style.borderColor = "red";
                anos.focus();
                aux ++;
        }  
    }

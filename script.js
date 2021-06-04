


function verificar(){
    const data  = new Date()
    const ano = data.getFullYear()
    const txtano = document.getElementById("txtano")
    const result = document.getElementById("resultado")

     

    

    if(txtano.value <= 1900 || Number(txtano.value) >= ano){

    alert("[ERRO] Verifique os dados e tente novamente! ")
    }else{
        const sexo = document.getElementsByName("sexo")
        const idade = ano - Number(txtano.value)
        let genero = ""
        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(sexo[0].checked){
            genero = "Homem"
            result.innerHTML = `Detectamos um ${genero} e tem ${idade} anos.`
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute("src", "bebem.png")
                
            }else if (idade <= 30){
                //jovem
                img.setAttribute("src", "jovemm.png")

            }else if (idade < 50){
                //adulto
                img.setAttribute("src", "adultom.png")

            }else{
                //idoso
                img.setAttribute("src", "idosom.png")

            }


        }else if(sexo[1].checked){
            genero = "Mulher"
            result.innerHTML = `Detectamos uma ${genero} e tem ${idade} anos.`
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute("src", "bebef.png")
                
            }else if (idade <= 30){
                //jovem
                img.setAttribute("src", "jovemf.png")

            }else if (idade < 50){
                //adulto
                img.setAttribute("src", "adultof.png")

            }else{
                //idoso
                img.setAttribute("src", "idosof.png")

            }
        }
        
        result.style.textAlign = "center"       
        result.appendChild(img)
        
        
    }
  
}    

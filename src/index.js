document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let xp = document.getElementById("xp").value;
    let level = "";

    if(xp <= 1000){
        level = "FERRO";
    }else if(xp <= 2000){
        level = "BRONZE";
    }else if(xp <= 5000){
        level = "PRATA";
    }else if(xp <= 7000){
        level = "OURO";
    }else if(xp <= 8000){
        level = "PLATINA";
    }else if(xp <= 9000){
        level = "ASCENDENTE";
    }else if(xp <= 10000){
        level = "IMORTAL";
    }else{
        level = "RADIANTE";
    }

    let resposta = `O Herói de nome ${name} está no nível de ${level}`;
    document.getElementById("name").value = "";
    document.getElementById("xp").value = "";

    document.getElementById("resposta").innerHTML = resposta;

});


let nomePersonagem = "Mateus";
let exp = 1500;

switch (exp) {
    case (exp <= 1000):
        console.log("A patente de " + nomePersonagem + "é ferro");
        break;
    case (exp >= 1001 || exp <= 2000):
        console.log("A patente de " + nomePersonagem + "é bronze");
        break;
    case (exp >= 2001 || exp <= 5000):
        console.log("A patente de " + nomePersonagem + "é prata");
        break;
    case (exp >= 5001 || exp <= 7000):
        console.log("A patente de " + nomePersonagem + "é ouro");
        break;
    case (exp >= 7001 || exp <= 8000):
        console.log("A patente de " + nomePersonagem + "é platina");
        break;
    case (exp >= 8001 || exp <= 9000):
        console.log("A patente de " + nomePersonagem + "é ascendente");
        break;
    case (exp > 9001 || exp < 10000):
        console.log("A patente de " + nomePersonagem + "é imortal");
        break;
    case (exp >= 10001):
        console.log("A patente de " + nomePersonagem + "é radiante");
        break;
}


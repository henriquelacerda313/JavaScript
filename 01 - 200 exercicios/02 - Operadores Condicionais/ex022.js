/*
Exercício 22: Escreva um programa que determina o número de dias em um mês. 

Descrição:  Neste exercício, você criará uma função que recebe o número de um mês e imprime o número de dias desse mês.


*/
function mostrarDias(mes) {
    switch (mes) {
        case (2):
            console.log(`O mês ${mes} tem 28 ou 29 dias.`)
            break
        case (3):
        case (4):
        case (6):
        case (9):
        case (11):
            console.log(`O mês ${mes} tem 30 dias.`)
            break

        default: console.log(`O mês ${mes} tem 31 dias.`);
    }
}

mostrarDias(1);
mostrarDias(2);
mostrarDias(3);
mostrarDias(4);
mostrarDias(5);
mostrarDias(6);
mostrarDias(7);
mostrarDias(8);
mostrarDias(9);
mostrarDias(10);
mostrarDias(11);
mostrarDias(12);






/*   ---- minha tentativa

function digiteMes(janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro) {

    if(janeiro == 1) {
        console.log("O mês de Janeiro tem 31 dias ")
    } 
    else if(fevereiro == 2) {
        console.log("O mês de Fevereiro tem 31 dias ")
    }
    else if(marco == 3) {
        console.log("O mês de Março tem 31 dias ")
    }
    else if(abril == 4) {
        console.log("O mês de Abril tem 31 dias ")
    }
    else if(maio == 5) {
        console.log("O mês de Maio tem 31 dias ")
    }
    else if(junho == 6) {
        console.log("O mês de Junho tem 31 dias ")
    }
    else if(julho == 7) {
        console.log("O mês de Julho tem 31 dias ")
    }
    else if(agosto == 8) {
        console.log("O mês de Agosto tem 31 dias ")
    }
    else if(setembro == 9) {
        console.log("O mês de Setembro tem 31 dias ")
    }
    else if(outubro == 10) {
        console.log("O mês de Outubro tem 31 dias ")
    }
    else if(novembro == 11) {
        console.log("O mês de Novembro tem 31 dias ")
    }
    else {
        console.log("O mês de Dezembro tem 31 dias ")
    }

}


digiteMes(1);
digiteMes(2);
digiteMes(3);
digiteMes(4);
digiteMes(5);
digiteMes(6);
digiteMes(7);
digiteMes(8);
digiteMes(9);
digiteMes(10);
digiteMes(11);
digiteMes(12);

*/
alert("olá, bem vindo(a) a sua jornada pokémon!")

let p1=prompt("Digite seu nome de treinador");

let p2=prompt("Digite o nome do seu rival");

let p3=prompt("Digite o nome do seu pokémon Inicial entre (treecko, Torchic e Mudkip)");

let p4=prompt("Digite seu objetivo como treinador");

let msg= document.getElementById9('msg') 
msg.innerHTML='<p>Olá ${p1} o nome do seu rival e amigo de infância é ${p2} você escolheu como inicial o ${p3} e espero que consiga realizar seu objetivo como treinar que é ${p4}'
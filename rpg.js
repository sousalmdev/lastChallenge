class personagem {
     constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo= tipo

     }
};

let heroi1 = new personagem("Darius",39,"Guerreiro");
let heroi2= new personagem("Veigar",834,"Mago");
let heroi3 = new personagem("Lee Sin",47,"Monge");
let heroi4 = new personagem("Kennen",14,"Ninja");


function whenAtk(heroi){ 
    let atk;
    switch(heroi.tipo){ case "Guerreiro":
        atk = "Espada";
        break;
   case "Mago":
        atk = "Magia";
        break;
   case "Monge":
        atk = "Artes Marciais";
        break;
    case "Ninja":
        atk = "usou Shuriken"
    };
    return atk;
}
;

console.log(`O ${heroi1.tipo} atacou usando ${whenAtk(heroi1)}`);
console.log(`O ${heroi2.tipo} atacou usando ${whenAtk(heroi2)}`);
console.log(`O ${heroi3.tipo} atacou usando ${whenAtk(heroi3)}`);
console.log(`O ${heroi4.tipo} atacou usando ${whenAtk(heroi4)}`);
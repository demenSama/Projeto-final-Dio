let tiposDeClasses = ["Guerreiro","Mago","Monge","Ninja"]
var classe;
let dano = [15,16,17,18]



for(var repetidor=0;repetidor<4;repetidor++){
    
    
class ataquesPorClasse{
    constructor(ataqGuerreiro,ataqMago,ataqMonge,ataqNinja){
        this.ataqGuerreiro=ataqGuerreiro
        this.ataqMago=ataqMago
        this.ataqMonge=ataqMonge
        this.ataqNinja=ataqNinja
    }
        
    ataquesTotal(){
        switch(repetidor){
            case 0:
                classe = tiposDeClasses[0];
                console.log(`o ${classe} atacou e ${this.ataqGuerreiro} e causou ${dano[0]} de dano`);
            break;
            case 1:
                classe = tiposDeClasses[1];
                console.log(`o ${classe} atacou e ${this.ataqMago} e causou ${dano[1]} de dano`);
            break;
            case 2:          
                classe = tiposDeClasses[2];
                console.log(`o ${classe} atacou e ${this.ataqMonge} e causou ${dano[2]} de dano`);
            break;
            case 3:               
                classe = tiposDeClasses[3];
                console.log(`o ${classe} atacou e ${this.ataqNinja} e causou ${dano[3]} de dano`);
            break;
        }
    }
}

let tipoDeAtaque = new ataquesPorClasse("usou uma espada","usou mágia","usou artes maciais","usou shurikens");

tipoDeAtaque.ataquesTotal()

}




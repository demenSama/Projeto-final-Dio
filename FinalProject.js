let tiposDeClasses = ["Guerreiro","Mago","Monge","Ninja"]
var classe;



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
                console.log(`o ${classe} atacou e ${this.ataqGuerreiro}`);
            break;
            case 1:
                classe = tiposDeClasses[1];
                console.log(`o ${classe} atacou e ${this.ataqMago}`);
            break;
            case 2:
                classe = tiposDeClasses[2];
                console.log(`o ${classe} atacou e ${this.ataqMonge}`);
            break;
            case 3:
                classe = tiposDeClasses[3];
                console.log(`o ${classe} atacou e ${this.ataqNinja}`);
            break;
        }
    }
}

let tipoDeAtaque = new ataquesPorClasse("usou uma espada","usou mágia","usou artes maciais","usou shurikens");

tipoDeAtaque.ataquesTotal()

}




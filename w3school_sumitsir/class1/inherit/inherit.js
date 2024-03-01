class Car{
    constructor(Brand){
        this.name = Brand;
    }

    present(){
        return 'I have a ' + this.name;
    }
}


class Model extends Car{
    constructor(Brand, mod){
        super(Brand);
        this.model = mod;
    }

    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

let audi = new Model("Audi", 2000);

console.log(audi.show())
const object = {
    name:"audi",
    type: "car",
    call: function (){
        console.log("learn more and sarved");
        this.Response()
    },

    Response: function (){
        console.log("Feedbck from Response function");
    }

};

console.log(object.name)
console.log(object['type']);
object.call();

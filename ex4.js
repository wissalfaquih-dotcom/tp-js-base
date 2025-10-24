const person = {
    name: "Sara",
    
    sayHello: function() {
        console.log("Bonjour " + this.name);
    },
    
    sayHelloArrow: () => {
        console.log("Bonjour " + this.name);
    }
};

person.sayHello();      
person.sayHelloArrow(); 
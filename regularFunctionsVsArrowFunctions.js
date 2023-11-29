const azeem = {
    firstName: 'Abdul',
    year: 1991,
    calcAge : function(){
        console.log(this);
        console.log(2040-this.year);
        const self = this;
        const isMillenial = function(){
            console.log(self);
            console.log(this.year>=1981 && this.year<=1996);
        }
        isMillenial();
    },
    greet: ()=>{
        console.log(this)
        console.log(`Hey${this.firstName}`)
    }
};
azeem.greet();
azeem.calcAge();

// arguments keyword

const addExpr = function(a,b){
    console.log(arguments);
    return a + b;
};

addExpr(2,5);
addExpr(2,5,8,12);
var addArrow = (a,b)=> a + b;
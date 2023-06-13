class Total {
    constructor(param) {
        this.param = param
    }
    plus(...n){
        this.param = [this.param, ...n].reduce((sum, e) => sum + e)
        return this
    }
    minus(...n){
        let acc = [...n].reduce((acc, e) =>  acc + e)
        this.param = this.param - acc
        return this
    }
    get(){
        return this.param
    }
}

// new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
// plus(...str)             // takes infinite number of strings and concat with stored string;
//+minus(n)                 // cut last n chars from stored string;
//+multiply(int)            // repeat stored strings n times;
// divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
//+remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace();
//+sub(from, n)             // leaves substring starting from and with length n;
//+get()                    // returns stored value;


function StringBuilder(param){
    this.param = param
}

StringBuilder.prototype = Object.create(Total.prototype)

StringBuilder.prototype.minus = function(n){
    this.param = this.param.substr(0, this.param.length-n)
    return this
}
StringBuilder.prototype.multiply = function(n){
    this.param = new Array(n + 1).join(this.param)
    return this
}
StringBuilder.prototype.divide = function(n){
    let k = Math.floor(this.param.length / n)
    this.param = this.param.slice(0, k)
    return this
}
StringBuilder.prototype.remove = function(n){
    this.param = this.param.split(n).join('')
    return this
}
StringBuilder.prototype.sub = function(x,y){
    this.param = this.param.slice(x,y+1)
    return this
}


let strBuilder = new StringBuilder('Hello');
console.log(
    strBuilder
        .plus(' all', '!')
        .minus(4)
        .multiply(3)
        .divide(4)
        .remove('l')
        .sub(1,1)
        .get()
)

// new IntBuilder(int) // constructor takes starting integer, if not passed starts with 0;
//     .plus(...n)         // take infinite number of integers and sum all with stored value;
//     .minus(...n)        // take infinite number of integers and subtract from stored value;
//     .multiply(n)        // multiply param n on stored value;
//     .divide(n)          // leaves integer part of division stored value on n;
//     .mod(n)             // leaves remainder of the division stored value with on n;
//     .get()              // returns stored value;
//
// random(from, to)   // static method; from, to: integer; values limits the range of random values;

class IntBuilder extends Total{
    constructor(param) {
        super(param)
    }

    multiply(n){
        this.param = this.param * n
        return this
    }
    divide(n){
        this.param = this.param / n
        return this
    }
    mod(n){
        this.param = this.param % n
        return this
    }
    random(from, to){
        return Math.floor(Math.random() * (to - from) + from)
    }
}
const intbuilder = new IntBuilder(10)
console.log(
    intbuilder
        .plus(2, 3, 2)
        .minus(1, 2)
        .multiply(2)
        .divide(4)
        .mod(3)
        .get()
)

console.log(intbuilder.random(10,100))
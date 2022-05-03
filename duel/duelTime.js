class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost
    }
}



class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost, text, stat, mag)
        this.text = text;
        this.stat= stat;
        this.mag= mag;
    }
    
    play( target ) {
        if (target instanceof Unit) {
            target[this.stat] += this.mag;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
// play( target ) {
//     if (target instanceof Unit) {
//         if(this.stat == "resilience"){
//             target.res += this.mag
//         }
//         else if(this.stat == "power"){
//             target.power += 
//         }
//     } else {
//         throw new Error("Target must be a unit!");
//     }
// }



const RBN = new Unit("Red Belt Ninja", 3, 3, 4);
const BBN = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
const UPR = new Effect("Unhandled Promise Rejection", 1, "educe target's resilience by 2", "res", -2);
const PP = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

hardAlgo.play(RBN);
UPR.play(RBN);
PP.play(RBN);
RBN.attack(BBN);








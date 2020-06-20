class Human {
    constructor() {

    }
    getMarried(husband, wife) {
        return new Family(husband, wife)
    }
}

class Male extends Human {

}

class Female extends Human {
    
}

class Family {
    constructor(husband, wife) {
        this.husband = husband;
        this.wife = wife;
        this.budget = this.husband.money + this.wife.money
        this.husband.family = this
    }
}

class Child {

}

let oleg = new Male(...)
let olga = new Female(...)

let sasha = new Male(...)
let masha = new Female(...)

let family = Human.getMarried(oleg, olga)
let family2 = Human.getMarried(sasha, masha)

Object.assign

Array.forEach

let total = 50 //40 23
[2, 1, 0].map(el => total - el)


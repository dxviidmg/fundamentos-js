const l1 = 6;
const t1 = 9;

const l2 = 8;
const t2 = 4;

function choose_bone(l1, t1, l2, t2){
    h1 = l1 + t1
    h2 = l2 + t2
    
    if (h1==h2){
        return('Perro confundido')
    }
    else if (h1>h2){
        return('h1')
    }
    else {
        return('h2')
    }
}

console.log(choose_bone(6, 9, 8, 4))
console.log(choose_bone(3, 6, 7, 10))
console.log(choose_bone(8, 8, 7, 9))
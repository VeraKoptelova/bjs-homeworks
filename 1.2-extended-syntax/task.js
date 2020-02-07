function getResult(a,b,c){
    let x = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d === 0) {
        x.push((-b + Math.sqrt(d)) / 2 * a);
    } else if (d > 0) {
        x.push((-b + Math.sqrt(d)) / 2 * a);
        x.push((-b - Math.sqrt(d)) / 2 * a);
    }
    return x;
    }

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
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

function getAverageMark(marks) {
    if (marks.length > 5) {
        console.log("Оценок больше 5-ти");
        marks = marks.slice(0, 5);
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = marks[i] + sum;
    }
    return sum / marks.length;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
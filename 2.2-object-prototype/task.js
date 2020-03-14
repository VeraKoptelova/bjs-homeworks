function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal == undefined){
        return null
    } else {
        return sound
    } 
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        let parseMarks = parseInt(marks[i]);
        sum = sum + parseMarks;
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    
    return roundedAverage;
}

function checkBirthday(birthday) {
    let ago = new Date(birthday);
    let now = new Date();
    let needed = new Date(now.setFullYear(now.getFullYear() - 18));
    if (needed < ago) {
        return false;
    }
    return true;
}
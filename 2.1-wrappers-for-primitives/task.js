
function calculateTotalMortgage(percent, contribution, amount, date) {
  
    //задаем дату начала кредитования
    let now = new Date();
    //считаем количество месяцев
    let n = (date.getMonth() - now.getMonth()) + 12 * (date.getFullYear() - now.getFullYear());
    // считаем сумму, которую необходимо вернуть банку
    let S = parseInt(amount) - parseInt(contribution);
    // коэффициент для процентной ставки
    let P = parseInt(percent) / 100 / 12;
     //считаем ежемесячный платеж
     let monthPay = (S * (P + P / (((1 + P) ** n) - 1)));
    //считаем сумму по кредиту 
    let totalAmount = (monthPay * n);  
  
    return (+totalAmount.toFixed(2));
}
  
  // Задача №2
  
function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}
  
function getGreeting(name) {
    if (name == null || name == undefined || name == Number(name)) {
      name = 'Аноним';
      console.log(`Привет, мир! Меня зовут ${name}`);
      return `Привет, мир! Меня зовут ${name}`;
    } else { 
      console.log(`Привет, мир! Меня зовут ${name}`);
      return `Привет, мир! Меня зовут ${name}`;
    }
}      
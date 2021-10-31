let oper; // переменная, в которой хранится выбранное математическое действие

// функция расчёта
function func() {
    //переменая для результата
    let result;
    //вызываем первое и второе число
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    
// смотрим, что было в переменной с действием, и действуем исходя из этого

switch(oper){
    case'+':
    result = num1 + num2;
    break;
    case'-':
    result = num1 - num2;
    break;
    case '*':
    result = num1 * num2;
    break;
    case ":":
    result = num1 / num2;
    break;
    case '%':
    result = num1 % num2;
    break;
    case'**':
    result = num1 ** num2;
    break;
}
document.getElementById("result").innerHTML = result;
}
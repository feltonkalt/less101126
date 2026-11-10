const InputNumb = document.getElementById('InputNumb')
const ForCurrencySe = document.getElementById('ForCurrencySe')
const ToCurrencySe = document.getElementById('ToCurrencySe')
const resultBtn = document.getElementById('resultBtn')

const ErrorInput = document.getElementById('ErrorInput')
const result = document.querySelector('#result')

resultBtn.addEventListener('click', () => {
    const InputNumber = Number(InputNumb.value)
    let Count = InputNumber

    if (InputNumber == null || InputNumber < 0 || Number.isNaN(InputNumber)) {
        ErrorInput.innerHTML = "Введите сумму от 0"
        ErrorInput = null
        return
    }

    if (ToCurrencySe.value == "RUB") {

        result.innerHTML = Count
    }
    else if (ToCurrencySe.value == "USD") {
        Count = InputNumber / 90
        result.innerHTML = Count
    }
    else if (ToCurrencySe.value == "EUR") {
        Count = InputNumber / 100
        result.innerHTML = Count
    }
    else if (ToCurrencySe.value == "KZT") {
        Count = InputNumber / 0.2
        result.innerHTML = Count
    }


    if (ForCurrencySe.value == "USD") {
        Count = InputNumber * 90 / 100
        result.innerHTML = Count
    }
    else if (ForCurrencySe.value == "EUR") {
        Count = InputNumber * 100 / 100
        result.innerHTML = Count
    }
    else if (ForCurrencySe.value == "KZT") {
        Count = InputNumber * 0.2 
        result.innerHTML = Count
    }
    if (ForCurrencySe.value == "RUB") {
            Count = InputNumber
            result.innerHTML = Count
        }
    }


})
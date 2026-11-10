const InputNumb = document.getElementById('InputNumb')
const ForCurrencySe = document.getElementById('ForCurrencySe')
const ToCurrencySe = document.getElementById('ToCurrencySe')
const resultBtn = document.getElementById('resultBtn')

const ErrorInput = document.getElementById('ErrorInput')
const result = document.querySelector('#result')

resultBtn.addEventListener('click', () => {
    ErrorInput.innerHTML = ""


    const InputNumber = Number(InputNumb.value)
    let Count = InputNumber
    if (InputNumber == null || InputNumber < 0 || Number.isNaN(InputNumber)) {
        ErrorInput.innerHTML = "Введите сумму от 0"
        return
    }

    console.log(ToCurrencySe.value)

    if (ForCurrencySe.value == "USD") {
        Count = InputNumber * 90
    }
    else if (ForCurrencySe.value == "EUR") {
        Count = InputNumber * 100
    }
    else if (ForCurrencySe.value == "KZT") {
        Count = InputNumber * 0.2
    }

    if (ToCurrencySe.value == "USD") {
        Count = Count / 90
        result.innerHTML = Count
    }
    else if (ToCurrencySe.value == "EUR") {
        Count = Count / 100
        result.innerHTML = Count
    }
    else if (ToCurrencySe.value == "KZT") {
        Count = Count / 0.2
        result.innerHTML = Count
    } else {
        result.innerHTML = Count
    }

})
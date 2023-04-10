//================================= Задача 2 ====================================
// Задача 2.  Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 

class TMoney {
  #chahgeDollars = 0
  #accountMoney = 0
  constructor() {}

  get ChahgeDollars() {
    return `<p>${this.#chahgeDollars}</p>`
  }

  get AccountMoney() {
   return `<p>${this.#accountMoney}$</p>`
  }
  get NewExchangeRate_willIncreaseUAHBy100() {
      const val = 100
      let balanceInUAH = this.#accountMoney * this.#chahgeDollars        
    return `<p>Курс при якому сума у гривнях збільшиться на 100:  <span>${(
      (balanceInUAH + val) /
      this.#accountMoney
    ).toFixed(2)}</span></p> `
      
  }
  //метод додавання
  set AccountMoney(value) {
    if (value <= 0) throw new Error("It's not correct sum")
    this.#accountMoney = value / this.#chahgeDollars
  }

  set TakeAccountMoney(value) {
    if (this.#accountMoney * this.#chahgeDollars < value)
      throw new Error(" Not enongh money")
    this.#accountMoney -= value / this.#chahgeDollars
  }
  //=======
  set ChahgeDollars(value) {
    if (value <= 0) throw new Error("Exchange value not correct")
    this.#chahgeDollars = value
  }

  toString() {
    return `<p>Balance : <span>${this.#accountMoney.toFixed(
      2
    )} $</span></p> <p>Kurs : <span>${this.#chahgeDollars}</span></p>`
  }
}

let s = new TMoney()
s.ChahgeDollars = 40
s.AccountMoney = 1000
s.AccountMoney = 2000
s.AccountMoney = 4500
s.NewExchangeRate_willIncreaseUAHBy100
// s.TakeAccountMoney = 1000
document.write(s)
document.write(s.NewExchangeRate_willIncreaseUAHBy100)


//=================================================================================
 

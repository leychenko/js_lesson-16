//================================= Задача 4 ====================================
// Задача 4.Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

class TBankomat {
  constructor() {
    this.bills = {
      5: 10,
      10: 12,
      20: 5,
      50: 22,
      100: 9,
      200: 6,
    }
	 this.countMoney = this.getMaxSum()
  }
  getMaxSum() {
	let sum = 0
		for (const bill in this.bills) {
		sum += bill * this.bills[bill]
		}
		return sum
	}
	getMinSum(){
		let sum = 0
		for (const bill in this.bills) {
			if (this.bills[bill] > 0) 
			sum = bill
			break
    }
	 return sum
	}
	getSomeMoney (value){
		let result = this.countMoney
		let ostMoney = 0
		if (result > value && result > 0)
			ostMoney = result - value
		else console.log("Not ehough money")
		return this.countMoney = ostMoney
	}


  toString() {
	return `Максимальна сумма - ${this.getMaxSum()} грн. <br>Мінімальна сумма - ${this.getMinSum()} грн.`
  }
}

let bankomat = new TBankomat()
let giveSomeMoney = bankomat.getSomeMoney(700)
document.write(`<p>${bankomat}</p>`)

document.write(
  `<p>Залишок грошей в АТМ після зняття : ${bankomat.getSomeMoney(800)} грн.</p>`
)

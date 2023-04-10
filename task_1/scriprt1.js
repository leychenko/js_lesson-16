//================================= Задача 1 ====================================
// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

class TDate {
  constructor(initDay, initMonth, initYear) {
    this.day = initDay
    this.month = initMonth
    this.year = initYear
  }

  increaseDay(val) {
    const tmp = this.day
    this.day = ((this.day - 1 + val) % 30) + 1
    this.increaseMonth(Math.floor(tmp - 1 + val) / 30)
  }
  increaseMonth(val) {
    const tmp = this.month
    this.month = ((this.month - 1 + val) % 12) + 1
    this.increaseYear(Math.floor(tmp - 1 + val) / 12)
  }
  increaseYear(val) {
    this.year = this.year + val
  }
//   ========
  decreaseDays(value) {
    const totalDays =
      (this.year - 1) * 360 + (this.month - 1) * 30 + this.day - 1
    this.day = 1
    this.month = 1
    this.year = 1

    this.increaseDay(totalDays - value)
  }
  decreaseMonths(value) {
    const totalMonths = (this.year - 1) * 12 + this.month - 1
    this.month = 1
    this.year = 1

    this.increaseMonth(totalMonths - value)
  }
  decreaseYears(value) {
    this.year = this.year - value
  }

  toString() {
    return `День - ${Math.trunc(this.day)}<br> Місяць - ${Math.trunc(
      this.month
    )}<br> Рік - ${Math.trunc(this.year)}`
  }
}

let s = new TDate(22, 4, 2023)
s.decreaseMonths(29)
document.write(`<p>${s}</p>`)

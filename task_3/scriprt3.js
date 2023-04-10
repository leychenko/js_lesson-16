//================================= Задача 3 ====================================
// Задача 3.
// Об’єкт “Фірма” (використати члени-класи)

// поля

// назва фірми;
// дата заснування (рік, місяць);
// послуги (назва послуги, вартість, термін виконання);
// адреси філіалів (країна, місто, вулиця, номер будинку);

// методи

// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

class AdressBrunches {
  constructor( country, city, street, numberBrunches ) {
    this.country = country
    this.city = city
    this.street = street
    this.numberBrunches = numberBrunches
  }

  toString() {
    return `<p>Країна - ${this.country}</p>
	 <p>Вулиця - ${this.street}</p> 
	 <p>Кількість філіалів - ${this.numberBrunches}</p>`
  }
}
class Services {
  #price
  #dedline
  constructor(nameService, price, deadline) {
    this.nameService = nameService
    this.Price = price
    this.Deadline = deadline
  }
  get Price(){
	return this.#price 
  }
  get Dedline(){
	return this.#dedline
  }

  set Price(val){
	if(val <= 0) throw new Error("incorrect value")
	return (this.#price = val)
  }
  set Dedline(val){
	if(val <= 0) throw new Error("incorrect value")
	return (this.#dedline = val)
  }
  toString() {
    return `<p>Hазва послуги - <span>${this.nameService}</span></p><p>Bартість - <span>${this.Price} $</span></p><p>Tермін виконання - <span>${this.Deadline} днів</span></p>`
  }
}
class Firma {
  #title
  constructor(title, year, bornMonth, serviceList, addressBranches) {
    this.Title = title
    this.year = year
    this.month = bornMonth
    this.addressBrunches = addressBranches
    this.nameService = serviceList
  }
  get Title() {
    return this.#title
  }
  set Title(val) {
    if (val === 0) throw new Error("incorrect value")
    return (this.#title = val)
  }
  getdateBorn() {
    const date = new Date()
    return date.getFullYear() - this.year
  }
  getServices(price, deadline) {
    let result = []
    for (const service of this.nameService) {
      if (price >= service.Price && deadline >= service.Deadline)
        result.push(service)
    }
    return result.join(" ")
  }
  getBranches(userCity) {
    let brunchArr = []
    for (const brunch of this.addressBrunches) {
      if (brunch.city === userCity) brunchArr.push(brunch)
    }
    return brunchArr.join(" ")
  }
  toString() {
    return `<p>Назва компанії - <span>${
      this.Title
    }</span></p><p>Дата заснування :</p> рік - <span>${
      this.year
    }</span> місяць - <span>${this.month}</span>
	 <p>Скільки часу працює фірма : <span>${this.getdateBorn()} роки</span></p>
	 <p><span>Філіали :</span> ${this.getBranches(this.userCity)}</p>
	 `
  }
}



let addressBranches = [
  new AdressBrunches("USA", "New York", "SomeSteet", 6),
  new AdressBrunches("Scotland", "Edinburg", "YellowStreet", 2),
  new AdressBrunches("Scotland", "Edinburg", "DizShtrasse", 4),
]
let serviceList = [
  new Services("Послуга з малювання", 130, 4),
  new Services("Послуга з пошуку", 120, 1),
  new Services("Послуга з відповідей", 200, 2),
]


let firma = new Firma("Google", 2001, 7, serviceList, addressBranches)
document.write(firma)
document.write(`${firma.getBranches("Edinburg")}`)
document.write(`${firma.getServices(130,4)}`)


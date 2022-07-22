const menu = {
  _meal :"" ,
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck ==="string") {
      return menu._meal = mealToCheck 
    }

  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return menu._price = priceToCheck

    }

  },
  get todaysSpecial() {
    if ((typeof menu._meal ==="string") && (typeof menu._price === "number")) {
      return `Today's Special is ${menu._meal} for $${ menu._price}`
    }
    else {
      return 'Meal or price was not set correctly!'
    }

  }

};
menu._meal = "soup"
menu._price = 15
console.log(menu)
menu.price = 55
menu.meal = "chicken"
console.log(menu)

console.log(menu.todaysSpecial)

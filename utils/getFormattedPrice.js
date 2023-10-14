const formatter = new Intl.NumberFormat("ru-RU", {
  style: 'currency',
  currency: "RUB",
})

const getFormattedPrice = (price) => {
  return formatter.format(price);
}

export default getFormattedPrice;
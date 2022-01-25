import data from "../../core/mockData/mock";
import _ from "lodash";

function totalCart(cart) {
  const cartTotal = _.isEmpty(cart)
    ? 0
    : cart.length > 2
    ? cart.reduce(function (total, item) {
        return total + parseInt(item.total);
      }, 0)
    : cart.at(0).total;

  return cartTotal;
}

function filterByCate(id) {
  return data.data.category.find((idx) => idx.id === id);
}
function filterById(id) {
  return data.data.product.find((index) => index.id === id);
}

function filterAtoZ(arr) {
  console.log(arr);
  return arr.sort((a, b) => a.title.localeCompare(b.title));
}

function filterZtoA(arr) {
  return arr.sort((a, b) => b.title.localeCompare(a.title));
}

function filterMaxToMinPrice(arr) {
  return arr.sort(function (a, b) {
    return a.price - b.price;
  });
}

function filterMinToMaxPrice(arr) {
  return arr.sort(function (a, b) {
    return b.price - a.price;
  });
}

export {
  filterByCate,
  filterById,
  filterByRangePrice,
  filterAtoZ,
  filterZtoA,
  filterMaxToMinPrice,
  filterMinToMaxPrice,
  totalCart,
};

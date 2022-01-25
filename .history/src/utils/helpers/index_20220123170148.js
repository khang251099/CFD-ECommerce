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

function filterByRangePrice([startPrice, endPrice]) {
  return data.data.product.filter(
    (index) => index.price >= startPrice && index.price <= endPrice
  );
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

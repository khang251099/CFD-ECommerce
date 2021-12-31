import data from "../../core/mockData/mock";

function filterByCate(id: string) {
  return data.data.category.find((idx) => idx.id === id);
}
function filterById(id: string) {
  return data.data.product.find((index) => index.id === id);
}

export { filterByCate, filterById };

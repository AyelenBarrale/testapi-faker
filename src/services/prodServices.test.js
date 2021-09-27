import generateProducts from "../utils/products.utils.js";

let products = [];
let lastId = 0;

export async function createProductsTest(cant = 5) {
  let cantidad = cant;
  try {
    if (cant) cantidad = Number(cant);
    for (let i = 0; i < cantidad; i++) {
      let product = {
        id: i+1,
        ...generateProducts(),
      };
      products.push(product);
    }
    lastId = Number(cant);
    products = products;
    return products;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductsTest() {
  try {
    return { productos: products };
  } catch (error) {
    throw new Error(error);
  }
}

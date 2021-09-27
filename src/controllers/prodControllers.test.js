import * as prodServicesTest from "../services/prodServices.test.js";

export async function createProductsTest(req, res, next) {
    const { cant } = req.query
    try {
      await prodServicesTest.createProductsTest(cant);
      res.status(200).send("Productos creados");
    } catch (error) {
      next(error)
    }
  }
  
  export async function getProductsTest(req, res, next) {
    try {
      const productos = await prodServicesTest.getProductsTest();
      res.status(200).json({ productos });
    } catch (error) {
      next(error)
    }
  }
import express from "express";
import * as prodControllerTest from "../controllers/prodControllers.test.js";

export const routerProdTest = new express.Router();

routerProdTest.post("/productos-test", prodControllerTest.createProductsTest);
routerProdTest.get("/productos-test", prodControllerTest.getProductsTest);

export default routerProdTest;
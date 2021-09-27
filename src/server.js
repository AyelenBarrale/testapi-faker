import "./db.js";
import express from "express";
import cors from "cors";
import routerProd from "./routers/prodRouter.js";
import routerProdTest from "./routers/prodRouter.test.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/productos", routerProd);
app.use("/productos/api", routerProdTest);

app.listen(8080, () => console.log("Server on port 8080"));

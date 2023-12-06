"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const goods_1 = __importDefault(require("./routes/goods"));
const news_1 = __importDefault(require("./routes/news"));
const app = (0, express_1.default)();
const port = 3000;
app.use("/api", [goods_1.default, news_1.default]);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
});

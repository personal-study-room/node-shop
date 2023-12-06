"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 라우터 생성
const router = express_1.default.Router();
// /routes/goods.js
const goods = [
    {
        goodsId: 1,
        name: "상품 1",
        thumbnailUrl: "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
        category: "drink",
        price: 6.2,
    },
    {
        goodsId: 2,
        name: "상품 2",
        thumbnailUrl: "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
        category: "drink",
        price: 0.11,
    },
    {
        goodsId: 3,
        name: "상품 3",
        thumbnailUrl: "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
        category: "drink",
        price: 2.2,
    },
    {
        goodsId: 4,
        name: "상품 4",
        thumbnailUrl: "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
        category: "drink",
        price: 0.1,
    },
];
router.get("/goods", (req, res) => {
    res.json({ goods: goods });
});
router.get("/goods/:goodsId", (req, res) => {
    const { goodsId } = req.params;
    console.log(goodsId);
    const detail = goods.filter((oneGoods) => {
        oneGoods.goodsId === +goodsId;
    });
    console.log(detail);
    return res.status(200).json(detail);
});
exports.default = router;

import express from "express";
import mongoose from "mongoose";
import Goods from "../schemas/goods";

const router = express.Router();

router.post("/goods", async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId: goodsId }).exec();

  if (goods.length) {
    return res
      .status(400)
      .json({ errorMessage: "이미 존재하는 데이터입니다." });
  }

  const createdGoods = await Goods.create({
    goodsId,
    name,
    thumbnailUrl,
    category,
    price,
  });

  return res.status(201).json(createdGoods);
});

router.get("/goods", async(req, res) => {
  const goods_list = await Goods.find();
  return res.status(200).json(goods_list);

});

export default router;

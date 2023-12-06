import mongoose, { Document } from "mongoose";

interface IGoods extends Document{
  goodsId: number;
  name: string;
  thumbnailUrl?: string; 
  category?: string;     
  price?: number;        
}

const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnailUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model<IGoods>("Goods", goodsSchema);
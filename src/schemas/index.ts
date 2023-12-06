import mongoose from "mongoose";

const url: string = "mongodb://0.0.0.0:27017/";

const connect = () => mongoose
  .connect(url, { dbName: "shoppingmall" })
  .then(() => console.log("몽고디비 연결 성공"))
  .catch((error) => console.log(error));

mongoose.connection.on('error', (err)=>{
    console.error("몽고디비 연결 에러", err);
})

export default connect;
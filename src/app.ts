import express from "express";
import goodsRouter from "./routes/goods"
import newsRouter from "./routes/news";
import connect from "./schemas";

const app = express();
const port = 3000;

connect();

app.use(express.json());
// json 형태로 서버에 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.
app.use(express.urlencoded({extended: true}));  
// form content type에서 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.


// res.~~~ 하는 순간 이전의 Middleware를 다시 순회~!!!
app.use((req, res, next)=>{
  console.log("1");
  next();
  console.log("1-1");
})
app.use((req, res, next)=>{
  console.log("2");
  next();
  console.log("2-2");
})
app.use((req, res, next)=>{
  console.log("3");
  next();
  console.log("3-3");
})

app.use("/api", [goodsRouter, newsRouter]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

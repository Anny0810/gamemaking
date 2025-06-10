var express = require("express");
var server = express();
var bodyParser = require("body-parser");

server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const Datastore = require('nedb-promises');
let GameDB = Datastore.create(__dirname + '/game.db');



// ✅ 取得排行榜（回傳前 3 名，按 time 排，秒數越少排名越前面）
server.post("/rank", (req, res) => {
   GameDB.find({}, { _id: 0 }).sort({ "time": 1 }).limit(3).then((docs) => {
      res.send(docs || []);
   });
});

server.post("/postscore", (req, res) => {
   console.log(req.body);
   //save to db
   GameDB.insert(req.body).then(doc => {
      //find and sort and limit
      GameDB.find({}, { _id: 0 }).sort({ "time": 1 }).limit(3).then((docs) => {
         if (docs != null) {
            res.send(docs);
         }
      })
   });

   // res.send([{name:"MD", rank:1},{name:"Jhon",rank:2}]);
}); 


// ✅ 測試 GET API（非必要）
server.get("/score", function (req, res) { 
   console.log(req.query);
   res.send("req /md");
});

// ✅ 啟動伺服器
server.listen(80, () => {
   console.log("伺服器啟動：http://127.0.0.1/postscore");
});

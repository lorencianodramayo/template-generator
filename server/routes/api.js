const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {

});
// router.use(express.static("public", options))
// router.use(express.json());
// router.use(express.urlencoded({extended:true}));
router.get("/test",(req,res) => {
	//es.sendFile(__dirname + "/public/index.html");
	res.send({data:{obj:"hello world"}})
})


module.exports = router;

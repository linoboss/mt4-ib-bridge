var mongoose = require("mongoose");
var Operation = mongoose.model("Operation");

module.exports.addOperation = function(req, res){
    console.log(req.body)
    var operation = new Operation({
        "price": req.body.price,
        "date": req.body.date,
        "seen": false
    });
    operation.save(function(err, oper) {        
		if(err){
            console.log(err.message)
            return res.status(500).send(err.message);
        } 
        res.status(200).jsonp(oper);
    });
}

var mongoose = require("mongoose");
var Operation = mongoose.model("Operation");

module.exports.addOperation = function(req, res){
    var operation = new Operation({
        "symbol": req.body.symbol,
        "price": req.body.price,
        "date": Date.now(),
        "take_profit": req.body.take_profit,
        "stop_loss": req.body.stop_loss,
        "discarded": false
    });
    operation.save(function(err, oper) {        
		if(err){
            return res.status(500).send(err.message);
        } 
        res.status(200).jsonp(oper);
    });
};

module.exports.getUnseen = function(req, res){
    Operation.find({"discarded": false}, function(error, operations){
        if(error) throw error;
        res.send(operations)        
    })
};

module.exports.markAsSeen = function(req, res, next){
    ids = req.body.ids;
    for(id of ids){
        Operation.findById(id, function(error, operation){
            if(error) console.log(id, "no existe");
            operation.discarded = true;
            operation.save(function(error, updated_operation){                
                if(error) throw Error(error);
            }); 
        });
    }
    res.send("ok");
}

module.exports.getAll = function(req, res){
    Operation.find({}, function(error, operations){
        if(error) throw Error(error);
        res.send(operations)
    });
}
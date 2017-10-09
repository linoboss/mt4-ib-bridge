var mongoose = require("mongoose");
var Operation = mongoose.model("Operation");

module.exports.addOperation = function(req, res){
    var operation = new Operation({
        "price": req.body.price,
        "date": req.body.date,
        "seen": false
    });
    operation.save(function(err, oper) {        
		if(err){
            return res.status(500).send(err.message);
        } 
        res.status(200).jsonp(oper);
    });
};

module.exports.getUnseen = function(req, res){
    Operation.find({"seen": false}, function(error, operations){
        if(error) throw error;
        res.send(operations)        
    })
};

module.exports.markAsSeen = function(req, res){
    ids = JSON.parse(req.body.ids);
    for(id of ids){
        Operation.findById(id, function(error, operation){
            if(error) console.log(id, "no existe");
            if(!operation) res.status(300);
            operation.seen = true;
            operation.save(function(error, updated_operation){
                if(error) throw Error(error);
            }); 
        });
    }
    res.send("ok")
}

module.exports.getAll = function(req, res){
    Operation.find({}, function(error, operations){
        if(error) throw Error(error);
        res.send(operations)
    });
}
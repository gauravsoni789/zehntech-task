var database=require("../config/database");

module.exports.find=(where,cb)=>{
    database((err,con)=> {
        var db=con.db("zehntechtask");
        db.collection("product").find(where).toArray(cb);
    })
}

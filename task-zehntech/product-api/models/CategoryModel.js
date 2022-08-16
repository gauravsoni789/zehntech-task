var database=require("../config/database");

module.exports.find=(where,cb)=>{
    database((err,con)=> {
        var db=con.db("zehntechtask");
        db.collection("category").find(where).toArray(cb);
    })
}

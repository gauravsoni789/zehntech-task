var CategoryModel=require("../models/CategoryModel");

exports.getCategory=(req,res)=> {
    CategoryModel.find({},(err,result)=>{
        res.send(result);
    })
}

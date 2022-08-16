var ProductModel=require("../models/ProductModel");
var CategoryModel=require("../models/CategoryModel");

exports.getProducts=(req,res)=> {
    ProductModel.find({},(err,result)=> {
        res.send(result);
    })
}

exports.getProductDeatils=(req,res)=> {
    ProductModel.find({id: Number(req.params.id)},(err,productResult)=> {
        CategoryModel.find({}, (e, catetoriesResult) => {
            const product = productResult[0];
            product['categoryName'] = catetoriesResult[0].name
            res.send(product);
        })
    })
}

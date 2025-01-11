const {FeaturesListService,LegalDetailsService} = require("../services/FeaturesServices");

exports.FeaturesList=async(req,res)=>{
    let result=await FeaturesListService(req);
    return res.status(200).json(result)
}


exports.LegalDetails=async(req,res)=>{
    let result=await LegalDetailsService(req);
    return res.status(200).json(result)
}





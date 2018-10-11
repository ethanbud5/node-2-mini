module.exports ={
    getPlanes: (req,res) =>{
        let db = req.app.get("db");
        db.get_planes([25]).then(planes=>{
            return res.status(200).json(planes);
        }).catch(err=>console.log(err));
    }
}
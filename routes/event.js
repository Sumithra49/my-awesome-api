const express = require("express");
const eventRouter = express.Router();
const { Event } = require("../models/ Event");

eventRouter.get("/", async (req, res) => {
    const page=req.query.page || 1;
    const size=req.query.size || 3;
    const skip=(page-1)*size;
    try{
        const query={};
        if(req.query.userId){
            query.userId=req.query.userId;

        }
        if(req.query.eventId){
            query.eventId=req.query.eventId;
        }
        const total_booking=await bookModel.find(query);
        const books=await bookModel.find({}).skip(skip).limit(size);
        res.json({
            currentPage=page,
            totalBook=total_booking,
            pageSize=size,
            totalPage=Math.ceil(total_booking/size),
            data=books,
        })
    }catch(e) {
        res.status(500).json({message:e.message});
    }
    
})
module.exports =eventRouter;

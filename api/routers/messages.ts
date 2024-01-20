import express from 'express';
import { IMessage, MessageData } from '../types';

export const messagesRouter = express.Router();

messagesRouter.post('/',async (req,res,next)=>{
  try{

    const message:MessageData ={
      author: req.body.author,
      message: req.body.message,
    }

    if (!message.message || !message.author) {
      return res.status(422).send({error: 'Author or message must be present'})
    }

    return res.send('OK')
  }catch (e){
    next(e)
  }
})

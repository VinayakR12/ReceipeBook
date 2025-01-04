import express from 'express'
import { Router } from 'express'
import {getAll, getSearchItems,getSingleItem,addItem} from '../controller/itemController.js'

const router1=Router()
router1.get("/allItem",getAll)
router1.get("/items",getSearchItems) 
router1.get("/items/:id",getSingleItem)
router1.post("/add-item", addItem)


export default router1
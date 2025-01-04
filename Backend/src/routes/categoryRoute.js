import express from 'express'
import { Router } from 'express'
import getCategory from '../controller/categoryController.js';

const router=Router()
router.get("/categories/:category",getCategory);

export default router

import express from 'express'
import { Router } from 'express'
import {getAll, getSearchItems,getSingleItem,addItem} from '../controller/itemController.js'

const router1=Router()
router1.get("/allItem",getAll)
router1.get("/items",getSearchItems) 
router1.get("/items/:id",getSingleItem)
// router1.post("/Add",Add)
router1.post("/add-item", addItem)

// const router = express.Router();

// POST route to add a new item
// router1.post("/add-item", async (req, res) => {
//   try {
//     const { menuId, name, image, category, description, tags, ingredients, comments } = req.body;

//     // Debugging log for incoming data
//     console.log("Received Data:", req.body);

//     // Validate required fields
//     if (!menuId || !name || !image || !category || !description || !ingredients.length) {
//       return res.status(400).json({ message: "All required fields must be filled." });
//     }

//     // Create a new item
//     const newItem = new Item({
//       menuId,
//       name,
//       image,
//       category,
//       description,
//       tags: tags || [],
//       ingrediatents: ingredients,
//       comments: comments || [],
//     });

//     // Save the item to the database
//     await newItem.save();
//     res.status(201).json({ message: "Item added successfully!", item: newItem });
//   } catch (error) {
//     console.error("Error saving item:", error);
//     res.status(500).json({ message: "Failed to save item. Please try again.", error });
//   }
// });




// export default router1


// router1.post("/add-item", async (req, res) => {
//     try {
//       const { menuId, name, image, category, description, tags, ingredients, comments } = req.body;
  
//       // Debugging: Log the received data
//       console.log("Received Data:", req.body);
  
//       // Validate required fields
//       if (!menuId || !name || !image || !category || !description || !ingredients || ingredients.length === 0) {
//         console.log("Validation failed: Missing required fields.");
//         return res.status(400).json({ message: "All required fields must be filled." });
//       }
  
//       // Create a new item
//       const newItem = new Item({
//         menuId,
//         name,
//         image,
//         category,
//         description,
//         tags: tags || [],
//         ingredients,
//         comments: comments || [],
//       });
  
//       // Save the item to the database
//       const savedItem = await newItem.save();
//       res.status(201).json({ message: "Item added successfully!", item: savedItem });
//     } catch (error) {
//       console.error("Error saving item:", error);
//       res.status(500).json({ message: "Failed to save item. Please try again.", error: error.message });
//     }
//   });
  


export default router1
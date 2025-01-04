import Item from "../model/itemModel.js"

async function getAll(req,res){
const Result = await Item.find().sort({createAt:-1});
res.status(200).json(Result)
}

const getSearchItems = async (req, res) => {
    const { q } = req.query;
  
    try {
      let items;
      if (q) {
        items = await Item.find({ name: { $regex: q, $options: 'i' } });
      } 
  
      res.json(items);
    } catch (e) {
      console.error(e); // Log the error for debugging
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Add = async (req, res) => {
    try {
      const newItem = new Item(req.body);
      const validationErrors = newItem.validateSync(); // Perform validation (optional)
      if (validationErrors) {
        const errors = Object.values(validationErrors.errors).map(err => err.message);
        return res.status(400).json({ errors }); // Send validation errors
      }
      const savedItem = await newItem.save();
      res.status(201).json(savedItem); // Created successfully
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error'); // Handle other errors
    }
  };
  
const getSingleItem= async(req,res)=>{
  const {id}=req.params;
  try{
    const item = await Item.findById(id);
    res.json(item);
  }catch(e){
    res.status(500).json({message:'No Item found'});
  }
}


// import Item from "../models/itemModel.js";

 const addItem = async (req, res) => {
  try {
    const { menuId, name, thumbnail_image, category, instructions, tags, ingredients, comments } = req.body;

    // Validation: Check required fields
    if (!menuId || !name || !thumbnail_image || !category || !instructions || !ingredients || ingredients.length === 0) {
      return res.status(400).json({ message: "All required fields must be filled!" });
    }

    // Create a new item
    const newItem = new Item({
      menuId,
      name,
      thumbnail_image,
      category,
      instructions,
      tags: tags || [],
      ingredients,
      comments: comments || [],
    });

    // Save the item
    const savedItem = await newItem.save();
    res.status(201).json({ message: "Item added successfully!", item: savedItem });
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(500).json({ message: "Failed to save item. Please try again.", error: error.message });
  }
};


export { getAll,getSearchItems,getSingleItem,addItem }    
// import Category from "../model/categoryModel.js";
// import Item from "../model/itemModel.js";

// const getCategory = async (req,res)=>{
//     const {category}=req.params;
//     try{
//         const data = await Category.findOne({name: category});
//         if(!data){
//             return res.status(404).json({message:"Category Not Found"})
//         }
//         const items = await Item.find({menuId: data.menuId})
        
//         res.status(200).json(items)
//     }catch(e){
//         res.status(500).json({message:"No Category Specified"});
//     }
// }

// export default getCategory;


import Category from '../model/categoryModel.js';
import Item from '../model/itemModel.js';

const getCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await Category.findOne({ name: category });
    if (!data) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const items = await Item.find({ menuId: data.menuId });
    res.status(200).json(items);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Error fetching category' });
  }
};

export default getCategory;

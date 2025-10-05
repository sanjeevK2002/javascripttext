const productController = (req) => {
  try {
    const {  name, category, price, stock } = req.body;
   
    if (!name) {
      throw new Error("Product name is required");
    }
    if (!category) {
      throw new Error("List the product on to its category");
    }
    if (!price) {
      throw new Error("Mention the price of product");
    }
    if (!stock) {
      throw new Error("List the stock of products");
    }
  } catch (error) {
    throw error;
  }
};

export default productController;

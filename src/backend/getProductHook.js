// This function is the webhook's request handler.
exports = async function (payload, response) {
  const collection = context.services
    .get("mongodb-atlas")
    .db("OnlineShop")
    .collection("products");

  let query = {};
  if (payload.query.categoryId) {
    query = { categoryId: { $eq: parseInt(payload.query.categoryId) } };
  }

  let productList = await collection.find(query).toArray();

  productList.forEach((product) => {
    {
      product,
        (product._id = product._id.toString()),
        (product.id = product.id.toString()),
        (product.categoryId = product.categoryId.toString()),
        (product.unitPrice = product.unitPrice.toString()),
        (product.unitsInStock = product.unitsInStock.toString());
    }
  });

  return productList;
};

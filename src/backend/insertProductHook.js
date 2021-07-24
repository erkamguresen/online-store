// This function is the webhook's request handler.
exports = async function (payload, response) {
  if (payload.body) {
    const body = EJSON.parse(payload.body.text());
    const productsCollection = context.services
      .get("mongodb-atlas")
      .db("OnlineShop")
      .collection("products");

    const newProductDoc = {
      id: body.id,
      categoryId: body.categoryId,
      productName: body.productName,
      quantityPerUnit: body.quantityPerUnit,
      unitPrice: body.unitPrice,
      unitsInStock: body.unitsInStock,
    };

    return await productsCollection.insertOne(newProductDoc);
  }

  return {};
};

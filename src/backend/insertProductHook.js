// This function is the webhook's request handler.
exports = async function (payload, response) {
  const collection = context.services
    .get("mongodb-atlas")
    .db("OnlineShop")
    .collection("products");

  let productList = await collection.find().toArray();

  const newId =
    productList.reduce(
      (accumulator, currentValue) => Math.max(accumulator, currentValue.id),
      -1
    ) + 1;

  if (payload.body) {
    const body = EJSON.parse(payload.body.text());
    const productsCollection = context.services
      .get("mongodb-atlas")
      .db("OnlineShop")
      .collection("products");

    const newProductDoc = {
      id: newId,
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

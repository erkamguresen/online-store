// This function is the webhook's request handler.
exports = async function (payload, response) {
  const collection = context.services
    .get("mongodb-atlas")
    .db("OnlineShop")
    .collection("categories");

  let categoriesList = await collection.find().limit(20).toArray();

  categoriesList.forEach((category) => {
    {
      category,
        (category._id = category._id.toString()),
        (category.id = category.id.toString());
    }
  });

  return categoriesList;
};

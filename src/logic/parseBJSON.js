export default function parseBJSON(data) {
  const returnArray = [];

  for (let index = 0; index < data.length; index++) {
    const product = data[index];

    for (const [key, value] of Object.entries(product)) {
      if (typeof value === "object") {
        const innerKey = Object.keys(product[key])[0];

        product[key] = product[key][innerKey];
      }
    }

    returnArray.push(product);
  }

  return returnArray;
}

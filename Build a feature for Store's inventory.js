const items = {
    shirt: 20,
    pants: 30,
    shoes: 50,
  };
  
  const exchangeRate = 80;
  
  const convertedPrices = Object.entries(items).map(([itemName, price]) => {
    const convertedPrice = price * exchangeRate;
    return [itemName, convertedPrice];
  });
  
  const convertedItems = Object.fromEntries(convertedPrices);
  
  console.log(convertedItems);
  
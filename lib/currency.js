{ /* helper function for currency converter */}
export const usdToYen = (usd) => {
    const rate = 150;
    return `¥${(usd * rate).toFixed(0)}`;
  };  
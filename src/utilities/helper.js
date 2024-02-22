export function filterData(srchTxt, restaurant) {
    const filteredData = restaurant.filter((restaurants) =>
      restaurants?.info?.name.toLowerCase().includes(srchTxt.toLowerCase())
    );
    return filteredData;
  }
  
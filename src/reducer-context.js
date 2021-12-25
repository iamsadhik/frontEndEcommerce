import faker from "faker";
faker.seed(123);
export const products = [...Array(50)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));
export const Show_Out_Of_Stock = "Show_Out_Of_Stock";
export const Show_Fast_Delivery = "Show_Fast_Delivery";
export const sortBy = "sortBy";
console.log([sortBy]);
console.log(sortBy);

export const clearFilter = "clearFilter";
export const Show_Ratings = "Show_Ratings";

export const reducerFunc = (state, action) => {
  switch (action.type) {
    case Show_Out_Of_Stock:
      return { ...state, [Show_Out_Of_Stock]: !state[Show_Out_Of_Stock] };
    case Show_Fast_Delivery:
      return { ...state, Show_Fast_Delivery: !state[Show_Fast_Delivery] };
    case sortBy:
      return { ...state, [sortBy]: action.payload };
    case clearFilter:
      return {
        ...state,
        [Show_Fast_Delivery]: false,
        [Show_Out_Of_Stock]: false,
        sortBy: "",
        [Show_Ratings]: false
      };
    case Show_Ratings:
      return { ...state, [Show_Ratings]: !state[Show_Ratings] };
    default:
      return { state };
  }
};

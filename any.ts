// ANY
let fruitShop: any;
fruitShop.getFruit();

console.log(fruitShop.toUppercase());

const getGameStats = <T>(args: T): void => {};

getGameStats<number>(45);

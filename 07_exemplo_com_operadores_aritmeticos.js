let precoProduto1 = 37.50

console.log("Preço do produto 1  é", precoProduto1)

precoProduto1 = precoProduto1 + 1.0
console.log("Preço do produto 1  é", precoProduto1)

//precoProduto1 = precoProduto1 + 1.0
precoProduto1 += 1.0
console.log("Preço do produto 1  é", precoProduto1)

//precoProduto1 = precoProduto1 * 0.8
//precoProduto1 *= 0.8
const desconto = precoProduto1 * 0.2
precoProduto1 -= precoProduto1 * 0.2
console.log("Preço do produto 1  é", precoProduto1)

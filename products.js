const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

const sectionFrutas   = document.querySelector(".fruits")
const tagUlFuits      = document.createElement("ul")
const sectionBebidas  = document.querySelector(".drinks")
const tagUlDrinks     = document.createElement("ul")
const sectionHigiene  = document.querySelector(".hygiene")
const tagUlHigiene    = document.createElement("ul")

sectionFrutas.appendChild(tagUlFuits)
sectionBebidas.appendChild(tagUlDrinks)
sectionHigiene.appendChild(tagUlHigiene)


function criarProdutos(titulo, categoria, descricao, preco, imagem){


  const tagLi     = document.createElement("li")
  const tagImg    = document.createElement("img")
  const tagMain   = document.createElement("main")
  const tagH1     = document.createElement("h1")
  const tagH5     = document.createElement("h5")
  const tagStrong = document.createElement("strong")
  const tagUl     = document.createElement("ul")

  tagLi.classList.add("product")

    if(imagem == undefined){
      tagImg.src = "./img/products/no-img.svg"
              
    } else {
      tagImg.src = imagem
    }

  tagImg.alt =  descricao
  tagImg.title = titulo
  tagImg.classList.add("product-img")

  tagMain.classList.add("product-main")

  tagH1.classList.add("product-title")
  tagH5.classList.add("product-category")
  tagStrong.classList.add("product-price")

  tagH1.innerText = titulo 
  tagH5.innerText = categoria 
  tagStrong.innerText = `R$ ${preco}`


  tagLi.append(tagImg, tagMain)
  tagMain.append(tagH1, tagH5, tagStrong)

    if(categoria == "Bebidas"){
      tagUlDrinks.append(tagLi)
    } else if( categoria == "Frutas"){
      tagUlFuits.append(tagLi)
    } else {
      tagUlHigiene.append(tagLi)
    }
}

function renderizarProdutos(){
    products.forEach((item) => criarProdutos(item.title, item.category, item.imageDescription, item.price, item.image)) 

}
renderizarProdutos()
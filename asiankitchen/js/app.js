const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
let categories=menu.reduce(function(acc,obj){
  if(!acc.includes(obj.category)){acc.push(obj.category);}
  return acc;
},[]);
function buttonMaker(val)
{
  let parent=document.getElementsByClassName("btn-container");
  parent[0].innerHTML+=`<button class="btn-item mr-1 btn btn-outline-dark btn-sm" onclick="list_menu('${val}')">${val}</button>`;
}
buttonMaker("All");
for(let i=0;i<categories.length;i++)
{
  buttonMaker(categories[i]);
}
function menuMaker(array)
{
  let container=document.getElementsByClassName("section-center row")
  container[0].innerHTML="";
  for(let i=0;i<array.length;i++)
  {
    let col=document.createElement("div");
    col.classList.add("menu-items");
    col.classList.add("col-sm-12");
    col.classList.add("col-lg-6");
    col.classList.add("mb-4")
    let img=document.createElement("img");
    img.setAttribute("src",array[i].img);
    img.classList.add("photo");
    col.appendChild(img);
    let menuInfo=document.createElement("div");
    menuInfo.classList.add("menu-info");
    let menuTitle=document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.innerHTML=`<h5>${array[i].title}<h5 class="price">${array[i].price}</h5></h5>`;
    menuInfo.appendChild(menuTitle);
    let menuText=document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.innerHTML=`<small>${array[i].desc}</small>`;
    menuInfo.appendChild(menuText);
    col.appendChild(menuInfo);
    container[0].appendChild(col)
  }
}
function list_menu(str)
{
  if(str=="All"){menuMaker(menu);}
  else
  {
    let matchedMenu=menu.filter(function(obj){
      if(str==obj.category){
        return obj;
      }
    });
    menuMaker(matchedMenu);
  }
}
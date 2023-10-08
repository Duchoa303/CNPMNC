let search_products = document.getElementById('search_products');
let shop2 = document.getElementById('shop');
let getItemDetails = (details) => {
  let item = ItemsData[details];
  let { id, name, price, cate, discount, quantity, img } = item;
  let detail = `details.html?id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&cate=${encodeURIComponent(cate)}&quantity=${quantity}&price=${price}&discount=${discount}&img=${encodeURIComponent(img)}`;
  window.location.href = detail;
};
let ItemsData = [
  {
    id: "01",
    name: "Iphone 15 ProMax 256GB | Chính hãng VNA",
    price: 34.9,
    cate: "Iphone 15",
    quantity: 300,
    discount: 3,
    img: "assets/img/products/ip15prmxam.png",
  },
  {
    id: "02",
    name: "Iphone 14 128GB | Chính hãng VNA",
    price: 18.9,
    cate: "Iphone 14",
    quantity: 300,
    discount: 4,
    img: "assets/img/products/ip14tim.png",
  },
    {
      id: "03",
      name: "Iphone 13 256GB | Chính hãng VNA",
      price: 14.9,
      cate: "Iphone 13",
      quantity: 310,
      discount: 1,
      img: "assets/img/products/ip13hong.png",
    },
    {
      id: "03",
      name: "Iphone 13 ProMax 256GB | Chính hãng VNA",
      price: 24.9,
      cate: "Iphone 13",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ip13prmden.png",
    },
    {
      id: "03",
      name: "Iphone 13 ProMax 1TB | Chính hãng VNA",
      price: 34.9,
      cate: "Iphone 13",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ip13prmxanh.png",
    },
    {
      id: "03",
      name: "Iphone 12 256GB | Chính hãng VNA",
      price: 14.9,
      cate: "Iphone 12",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ip12den.png",
    },
    {
      id: "03",
      name: "Iphone 12 256GB | Chính hãng VNA",
      price: 14.9,
      cate: "Iphone 12",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ip12tim.png",
    },
    {
      id: "03",
      name: "Iphone 12 256GB | Chính hãng VNA",
      price: 14.9,
      cate: "Iphone 12",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ip12xanh.png",
    },
    {
      id: "03",
      name: "Iphone 11 256GB | Chính hãng VNA",
      price: 12.9,
      cate: "Iphone 11",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ip11do.png",
    },
    {
      id: "03",
      name: "Iphone X 128GB | Chính hãng VNA",
      price: 8.9,
      cate: "Iphone X",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ipxden.png",
    },
    {
      id: "03",
      name: "Iphone XS 64GB | Chính hãng VNA",
      price: 8.9,
      cate: "Iphone X",
      quantity: 310,
      discount: 3,
      img: "assets/img/products/ipxstrang.png",
    },
    {
      id: "01",
      name: "Iphone 15 ProMax 256GB | Chính hãng VNA",
      price: 34.9,
      cate: "Iphone 15",
      quantity: 300,
      discount: 3,
      img: "assets/img/products/ip15prmxam.png",
    },
    {
      id: "02",
      name: "Iphone 14 128GB | Chính hãng VNA",
      price: 18.9,
      cate: "Iphone 14",
      quantity: 300,
      discount: 4,
      img: "assets/img/products/ip14tim.png",
    },
      {
        id: "03",
        name: "Iphone 13 256GB | Chính hãng VNA",
        price: 14.9,
        cate: "Iphone 13",
        quantity: 310,
        discount: 1,
        img: "assets/img/products/ip13hong.png",
      },
      {
        id: "03",
        name: "Iphone 13 ProMax 256GB | Chính hãng VNA",
        price: 24.9,
        cate: "Iphone 13",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ip13prmden.png",
      },
      {
        id: "03",
        name: "Iphone 13 ProMax 1TB | Chính hãng VNA",
        price: 34.9,
        cate: "Iphone 13",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ip13prmxanh.png",
      },
      {
        id: "03",
        name: "Iphone 12 256GB | Chính hãng VNA",
        price: 14.9,
        cate: "Iphone 12",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ip12den.png",
      },
      {
        id: "03",
        name: "Iphone 12 256GB | Chính hãng VNA",
        price: 14.9,
        cate: "Iphone 12",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ip12tim.png",
      },
      {
        id: "03",
        name: "Iphone 12 256GB | Chính hãng VNA",
        price: 14.9,
        cate: "Iphone 12",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ip12xanh.png",
      },
      {
        id: "03",
        name: "Iphone 11 256GB | Chính hãng VNA",
        price: 12.9,
        cate: "Iphone 11",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ip11do.png",
      },
      {
        id: "03",
        name: "Iphone X 128GB | Chính hãng VNA",
        price: 8.9,
        cate: "Iphone X",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ipxden.png",
      },
      {
        id: "03",
        name: "Iphone XS 64GB | Chính hãng VNA",
        price: 8.9,
        cate: "Iphone X",
        quantity: 310,
        discount: 3,
        img: "assets/img/products/ipxstrang.png",
      },
      {
        id: "01",
        name: "Iphone 15 ProMax 256GB | Chính hãng VNA",
        price: 34.9,
        cate: "Iphone 15",
        quantity: 300,
        discount: 3,
        img: "assets/img/products/ip15prmxam.png",
      },
      {
        id: "02",
        name: "Iphone 14 128GB | Chính hãng VNA",
        price: 18.9,
        cate: "Iphone 14",
        quantity: 300,
        discount: 4,
        img: "assets/img/products/ip14tim.png",
      },
        {
          id: "03",
          name: "Iphone 13 256GB | Chính hãng VNA",
          price: 14.9,
          cate: "Iphone 13",
          quantity: 310,
          discount: 1,
          img: "assets/img/products/ip13hong.png",
        },
        {
          id: "03",
          name: "Iphone 13 ProMax 256GB | Chính hãng VNA",
          price: 24.9,
          cate: "Iphone 13",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ip13prmden.png",
        },
        {
          id: "03",
          name: "Iphone 13 ProMax 1TB | Chính hãng VNA",
          price: 34.9,
          cate: "Iphone 13",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ip13prmxanh.png",
        },
        {
          id: "03",
          name: "Iphone 12 256GB | Chính hãng VNA",
          price: 14.9,
          cate: "Iphone 12",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ip12den.png",
        },
        {
          id: "03",
          name: "Iphone 12 256GB | Chính hãng VNA",
          price: 14.9,
          cate: "Iphone 12",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ip12tim.png",
        },
        {
          id: "03",
          name: "Iphone 12 256GB | Chính hãng VNA",
          price: 14.9,
          cate: "Iphone 12",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ip12xanh.png",
        },
        {
          id: "03",
          name: "Iphone 11 256GB | Chính hãng VNA",
          price: 12.9,
          cate: "Iphone 11",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ip11do.png",
        },
        {
          id: "03",
          name: "Iphone X 128GB | Chính hãng VNA",
          price: 8.9,
          cate: "Iphone X",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ipxden.png",
        },
        {
          id: "03",
          name: "Iphone XS 64GB | Chính hãng VNA",
          price: 8.9,
          cate: "Iphone X",
          quantity: 310,
          discount: 3,
          img: "assets/img/products/ipxstrang.png",
        },
        {
          id: "01",
          name: "Iphone 15 ProMax 256GB | Chính hãng VNA",
          price: 34.9,
          cate: "Iphone 15",
          quantity: 300,
          discount: 3,
          img: "assets/img/products/ip15prmxam.png",
        },
        {
          id: "02",
          name: "Iphone 14 128GB | Chính hãng VNA",
          price: 18.9,
          cate: "Iphone 14",
          quantity: 300,
          discount: 4,
          img: "assets/img/products/ip14tim.png",
        },
          {
            id: "03",
            name: "Iphone 13 256GB | Chính hãng VNA",
            price: 14.9,
            cate: "Iphone 13",
            quantity: 310,
            discount: 1,
            img: "assets/img/products/ip13hong.png",
          },
          {
            id: "03",
            name: "Iphone 13 ProMax 256GB | Chính hãng VNA",
            price: 24.9,
            cate: "Iphone 13",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ip13prmden.png",
          },
          {
            id: "03",
            name: "Iphone 13 ProMax 1TB | Chính hãng VNA",
            price: 34.9,
            cate: "Iphone 13",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ip13prmxanh.png",
          },
          {
            id: "03",
            name: "Iphone 12 256GB | Chính hãng VNA",
            price: 14.9,
            cate: "Iphone 12",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ip12den.png",
          },
          {
            id: "03",
            name: "Iphone 12 256GB | Chính hãng VNA",
            price: 14.9,
            cate: "Iphone 12",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ip12tim.png",
          },
          {
            id: "03",
            name: "Iphone 12 256GB | Chính hãng VNA",
            price: 14.9,
            cate: "Iphone 12",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ip12xanh.png",
          },
          {
            id: "03",
            name: "Iphone 11 256GB | Chính hãng VNA",
            price: 12.9,
            cate: "Iphone 11",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ip11do.png",
          },
          {
            id: "03",
            name: "Iphone X 128GB | Chính hãng VNA",
            price: 8.9,
            cate: "Iphone X",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ipxden.png",
          },
          {
            id: "03",
            name: "Iphone XS 64GB | Chính hãng VNA",
            price: 8.9,
            cate: "Iphone X",
            quantity: 310,
            discount: 3,
            img: "assets/img/products/ipxstrang.png",
          },
          {
            id: "01",
            name: "Iphone 15 ProMax 256GB | Chính hãng VNA",
            price: 34.9,
            cate: "Iphone 15",
            quantity: 300,
            discount: 3,
            img: "assets/img/products/ip15prmxam.png",
          },
          {
            id: "02",
            name: "Iphone 14 128GB | Chính hãng VNA",
            price: 18.9,
            cate: "Iphone 14",
            quantity: 300,
            discount: 4,
            img: "assets/img/products/ip14tim.png",
          },
            {
              id: "03",
              name: "Iphone 13 256GB | Chính hãng VNA",
              price: 14.9,
              cate: "Iphone 13",
              quantity: 310,
              discount: 1,
              img: "assets/img/products/ip13hong.png",
            },
            {
              id: "03",
              name: "Iphone 13 ProMax 256GB | Chính hãng VNA",
              price: 24.9,
              cate: "Iphone 13",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ip13prmden.png",
            },
            {
              id: "03",
              name: "Iphone 13 ProMax 1TB | Chính hãng VNA",
              price: 34.9,
              cate: "Iphone 13",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ip13prmxanh.png",
            },
            {
              id: "03",
              name: "Iphone 12 256GB | Chính hãng VNA",
              price: 14.9,
              cate: "Iphone 12",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ip12den.png",
            },
            {
              id: "03",
              name: "Iphone 12 256GB | Chính hãng VNA",
              price: 14.9,
              cate: "Iphone 12",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ip12tim.png",
            },
            {
              id: "03",
              name: "Iphone 12 256GB | Chính hãng VNA",
              price: 14.9,
              cate: "Iphone 12",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ip12xanh.png",
            },
            {
              id: "03",
              name: "Iphone 11 256GB | Chính hãng VNA",
              price: 12.9,
              cate: "Iphone 11",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ip11do.png",
            },
            {
              id: "03",
              name: "Iphone X 128GB | Chính hãng VNA",
              price: 8.9,
              cate: "Iphone X",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ipxden.png",
            },
            {
              id: "03",
              name: "Iphone XS 64GB | Chính hãng VNA",
              price: 8.9,
              cate: "Iphone X",
              quantity: 310,
              discount: 3,
              img: "assets/img/products/ipxstrang.png",
            },
  ];

  let generateSearchProducts = () => {
    let searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    let filteredItems = ItemsData.filter(item =>
      item.name.toLowerCase().includes(searchInput) || item.cate.toLowerCase().includes(searchInput)
    );
  
    if (filteredItems.length === 0) {
      search_products.innerHTML = "<p>Không tìm thấy sản phẩm!</p>";
    } else {
      search_products.innerHTML = filteredItems
        .map((x, details) => {
        let {id, name, cate, img, price, quantity, discount} = x;   
        return `<div id=id-${id} class="item">
        <div class="discount"><p>-${discount}%</p></div>
        <img width="260px" height="270px" src=${img} alt="" onclick="getItemDetails(${details})">
        <div class="details">
          <h2>${name}</h2>
          <p>${cate}</p>
          <div class="price-quantity">
            <h3>${price}00.000Đ</h3>
            </div>
          </div>
        </div>
    </div>`
    }).join("");
  }
};
let searchItems = () => {
  generateSearchProducts();
};

let generateShop = () => {
  return (shop.innerHTML= ItemsData.map((y, details)=>{
      let {id, name, cate, img, price, quantity, discount} = y;   
      return `<div id=id-${id} class="item">
      <div class="discount"><p>-${discount}%</p></div>
      <img width="260px" height="270px" src=${img} alt="" onclick="getItemDetails(${details})">
      <div class="details">
        <h2>${name}</h2>
        <p>${cate}</p>
        <div class="price-quantity">
          <h3>${price}00.000Đ</h3>
          </div>
        </div>
      </div>
  </div>`
  }).join(""));
};
generateShop();
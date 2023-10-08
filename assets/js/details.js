let detail_form = document.getElementById('detail_form');
let des_form = document.getElementById('des_form');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const name = urlParams.get('name');
const cate = urlParams.get('cate');
const discount = urlParams.get('discount');
const quantity = parseInt(urlParams.get('quantity'));
const price = parseFloat(urlParams.get('price'));
const img = urlParams.get('img');

console.log("ID:", id);
console.log("Name:", name);
console.log("Quantity:", quantity);
console.log("Cate:", discount);
console.log("Discount:", cate);
console.log("Price:", price);
let generateDetails = () => {
    return (detail_form.innerHTML =`
    <div class="detail">
            <div class="detail_img">
                <img src=${img} alt="" >   
            </div>
            <div class="detail_content">
                <p class="name">${name}</p>
                <p style="color:rgb(87, 87, 87); margin-top: 10px; font-size: 12px; "><i style="color: #038388; font-size: 12px;" class="fa-solid fa-tag"></i> Mừng sinh nhật LionAccesories siêu sale!</p>
                <p class="price">195.000đ</p>
                <p class="price_old">299.000đ</p>
                <p class="slogan"><i style="color:rgb(240, 36, 0)" class="fa-solid fa-money-bill"></i> Giá tốt nhất so với các sản phẩm cùng loại trên LionAccesories</p>
                <p class="type_3">Mã giảm giá</p>
                <div class="item_discount">
                <img class="item" src="./assets/img/1.png">
                <img class="item" src="./assets/img/2.png">
                <img class="item" src="./assets/img/3.png">
                <img class="item" src="./assets/img/4.png">
                </div>
                <p class="type">Loại sản phẩm </p>
                <p class="type_1">${cate}</p>
                <p class="type_2">Số lượng</p>
                <div class="size_bt">
                    <button class="size_button">${quantity}</button>
          
                </div>
                <div class="buy_bt">
                    <button class="buy_button" style="width: 190px; height: 38px; margin: 20px 40px 0 90px; background-color: #daf5f6; border: 1px solid #ccc;border-radius: 4px;"><i style="color: #038388;" class="fa-sharp fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng</button>
                    <button class="buy_button" style="width: 190px; height: 38px; background-color: #03686b;color:#fff; border: 1px solid #ccc;border-radius: 4px;">Mua Ngay</button>
                </div>
            </div>
        </div>`);
};
generateDetails();

let generateForm = () => {
    return (des_form.innerHTML =`
    <div class="description">
            <div class="des_title">
                MÔ TẢ SẢN PHẨM
            </div>
            <p style="line-height: 1.8; margin-left: 52px; margin-top: 24px;">1. Thông tin sản phẩm: Ghi tên sản phẩm vào đây <br>
                <img src="${img}" alt="" width="800px" height="500px" style="margin-left: 190px; border-radius: 12px;"><br>
                Mô tả sản phẩm:<br>
                1. Thường thích hợp cho các bữa tiệc, văn phòng, đám cưới, khiêu vũ, lễ hội cuộc sống hàng ngày.<br>
                2. Sản phẩm này là mặt hàng được cá nhân hóa yêu thích của bạn.<br>
                3. Đây là một phong cách lãng mạn với một cái nhìn thanh lịch.<br><br>
                Chất liệu: Bạc<br>
                Màu sắc: Silver<br><br>
                Gói hàng bao gồm: 1 * Vòng đeo tay<br><br>
                Lưu ý khi bảo quản:<br>
                1. Cẩn thận để tránh mài mòn và đột ngột sốc.<br>
                2. Giữ khô ráo và tránh mặc khi tắm, bơi lội.<br>
                3. Bảo quản trong hộp hoặc vải mềm.<br><br>
                Lưu ý:<br>
                      1. Do ánh sáng và hình ảnh, màu sắc thực tế của mặt hàng có thể hơi khác so với hình ảnh, cảm ơn bạn đã thông cảm.<br>
                      2. Có thể có một sai số 1-3 cm trong phép đo thủ công.<br>
                      3. Bảo quản đồ trang sức ở nơi khô ráo, cố gắng không tiếp xúc với nước. Điều này sẽ giúp kéo dài tuổi thọ của trang sức.<br>
            </p>
        </div>`);
};
generateForm();
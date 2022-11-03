$(document).ready(function () {
  $('.event_slide').slick({
    dots: false,
    arrows: false,
    autoplay: true,
  });

  $('header .btn_menu').click(function (e) {
    e.preventDefault();
    $('.navi .navi_inner').css('right', '0');
    $('body').css('overflow', 'hidden');
  });

  $('.btn_close').click(function (e) {
    e.preventDefault();
    $('.navi .navi_inner').css('right', '-80%');
    $('body').css('overflow', 'scroll');
  });

  $('.business_btn').click(function () {
    if ($('.group_business').css('display') == 'none') {
      $('.group_business').show();
      $('.business_drop').attr('src', './assets/images/drop-up.png');
    } else {
      $('.group_business').hide();
      $('.business_drop').attr('src', './assets/images/drop-down.png');
    }
  });
});

//  
const categoryList = document.getElementById('categoryList');
const brandList = document.getElementById('brandList');
const PopularList = document.getElementById('PopularList')
const droppedList = document.getElementById('droppedList')
const styleList = document.getElementById('styleList')

fetch('https://qjatn1236.github.io/Kream/assets/data/data.json')
  .then((response) => response.json())
  .then((json) => {
    //
    const category = json.category;
    const brand = json.brand;
    const Popular = json.mostPopular;
    const dropped = json.dropped;
    const userstyle = json.userstyle;

    //
    let categoryHtml = '';
    let brandHtml = '';
    let PopularHtml = '';
    let droppedHtml = '';
    let userstyleHtml = '';


    category.forEach(item => {
      categoryHtml += 
      `<li class="link_item">
          <a href="${item.link}">
              <div class="img_box">
                  <img src="${item.imgSrc}" alt="${item.title}">
              </div>
              <p class="text">${item.title}</p>
          </a>
      </li>
      `;
    });

    brand.forEach(item => {
      brandHtml += 
      `<li class="link_item">
          <a href="${item.link}">
              <div class="img_box">
                  <img src="${item.imgSrc}" alt="${item.title}">
              </div>
              <p class="text">${item.title}</p>
          </a>
      </li>
      `;
    });

    Popular.forEach(item => {
      quickEl = `<span class="express_mark">빠른배송</span>`

      isQuick = item.quickDelivery ? quickEl : null
    
      PopularHtml += 
      `<li class="product_item">
        <a href="#" class="product">
            <div class="img_box">
                <img src="${item.imgSrc}" alt="${item.prdTitle}">
            </div>
        </a>
        <a href="#" class="btn_bookmark"><span class="blond">장바구니</span></a>
        <a href="#">
            <div class="info_box">
                <div class="brand">
                    <p class="brand_name">${item.brand}</p>
                </div>
                <p class="name">${item.prdTitle}</p>

                <div class="price">
                    <div class="amount">
                        <em class="num">${item.price}원</em>
                    </div>
                    <br>
                    ${isQuick}
                    <div class="desc">
                        <p>즉시구매가</p>
                    </div>
                </div>
            </div>
        </a>
      </li>
      `;
    });

    dropped.forEach(item => {
      quickEl = `<span class="express_mark">빠른배송</span>`

      isQuick = item.quickDelivery ? quickEl : null
    
      droppedHtml += 
      `<li class="product_item">
        <a href="#" class="product">
            <div class="img_box">
                <img src="${item.imgSrc}" alt="${item.prdTitle}">
            </div>
        </a>
        <a href="#" class="btn_bookmark"><span class="blond">장바구니</span></a>
        <a href="#">
            <div class="info_box">
                <div class="brand">
                    <p class="brand_name">${item.brand}</p>
                </div>
                <p class="name">${item.prdTitle}</p>
                
                <div class="price">
                    <div class="amount">
                        <em class="num">${item.price}원</em>
                    </div>
                    <br>
                    ${isQuick}
                    <div class="desc">
                        <p>즉시구매가</p>
                    </div>
                </div>
            </div>
        </a>
      </li>
      `;
    });

    userstyle.forEach(item => {
    
      userstyleHtml += 
      `<li class="style_item">
          <a href="#" class="link_item">
              <img src="${item.imgSrc}" alt="유저 스타일 이미지">
              <div class="profile_box">
                  <img src="${item.profileSrc}" alt="유저 프로필 이미지">
              </div>
              <p class="username">${item.name}</p>
          </a>
        </li>
      `;
    });

    categoryList.innerHTML = categoryHtml;
    brandList.innerHTML = brandHtml;
    PopularList.innerHTML = PopularHtml;
    droppedList.innerHTML = droppedHtml;
    styleList.innerHTML = userstyleHtml;  
  });

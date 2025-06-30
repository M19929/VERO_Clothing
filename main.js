
// بانر سلايدر بسيط
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}
setInterval(showNextSlide, 4000); // كل ٤ ثواني

// زر الرجوع للأعلى
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// إضافة منتج للسلة
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('✅ تم إضافة المنتج للسلة!');
}

// عرض المنتجات في سلة cart.html
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p>السلة فارغة</p>';
    cartTotal.innerText = '0';
    return;
  }

  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>السعر: ${item.price} جنيه</p>
      <p>الكمية: ${item.qty}</p>
      <button onclick="removeFromCart(${index})">❌ حذف</button>
      <hr>
    `;
    total += item.price * item.qty;
    cartItems.appendChild(itemDiv);
  });

  cartTotal.innerText = total;
}

// حذف منتج من السلة
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// متابعة الشراء
function checkout() {
  alert('✅ تم تنفيذ الطلب. شكرًا لتسوقك من Vero Clothing!');
  localStorage.removeItem('cart');
  window.location.replace('index.html');

}

// عند فتح صفحة cart.html اعرض السلة
if (window.location.pathname.includes('cart.html')) {
  window.onload = displayCart;
}
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html'; // تحويل تلقائي لصفحة السلة
}
if (window.location.pathname.includes('cart.html')) {
  window.onload = displayCart;
}

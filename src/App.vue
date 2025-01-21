<script setup>
import Navbar from "./components/from/nav.vue"; // Navbar là thành phần dùng chung
</script>

<template>
  <div class="main-container">
    <!-- Thanh điều hướng -->
    <Navbar />

    <!-- Banner hoặc tiêu đề chính -->
    <div class="banner text-center">
      <h1>Danh Sách Quán Ăn Ngon</h1>
      <p class="subtitle">
        Tìm kiếm và khám phá những quán ăn ngon nhất quanh bạn.
      </p>
    </div>

    <!-- Hiển thị nội dung động dựa trên route -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* Container chính */
.main-container {
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9; /* Nền tổng thể nhạt */
  color: #333; /* Màu chữ chính */
  min-height: 100vh; /* Đảm bảo bao phủ toàn màn hình */
}

/* Banner */
.banner {
  background: linear-gradient(135deg, #ff6f00, #ffcc80); /* Nền chuyển sắc ấm áp */
  padding: 50px 20px;
  color: #fff; /* Màu chữ trắng */
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Hiệu ứng đổ bóng nhẹ */
}
.banner h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.banner .subtitle {
  font-size: 1.2rem;
  font-weight: 300;
}

/* Nội dung */
.content {
  padding: 20px;
  background-color: #fff; /* Nền trắng cho nội dung */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Hiệu ứng đổ bóng nhẹ */
  margin: 20px auto;
  max-width: 90%;
}

/* Responsive */
@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }
  .banner .subtitle {
    font-size: 1rem;
  }
  .content {
    padding: 15px;
  }
}
</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand" @click.native="reloadPage">
        <img alt="Logo" :src="logoPath" />
      </router-link>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <!-- Quản Lí Users, Videos, Reports -->
          <li v-if="user?.isAdmin">
            <router-link to="/admin/users" class="nav-link">
              <i class="fas fa-edit me-2"></i>Quản Lí Users
            </router-link>
          </li>
          <li v-if="user?.isAdmin">
            <router-link to="/admin/videos" class="nav-link">
              <i class="fas fa-edit me-2"></i>Quản Lí Videos
            </router-link>
          </li>
          <li v-if="user?.isAdmin">
            <router-link to="/admin/reports" class="nav-link">
              <i class="fas fa-edit me-2"></i>Quản Lí Report
            </router-link>
          </li>

          <!-- Các mục khác -->
          <li class="nav-item">
            <router-link to="/favorites" class="nav-link">
              <i class="fas fa-heart me-2"></i>Yêu thích
            </router-link>
          </li>

          <!-- Dropdown Tài khoản -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user-circle me-2"></i>
              Chào, <b>{{ user?.fullname || "Tài khoản" }}</b>
              
              
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li v-if="!user">
                <router-link to="/login" class="dropdown-item">
                  <i class="fas fa-sign-in-alt me-2"></i>Đăng nhập
                </router-link>
              </li>
              <li v-if="!user">
                <router-link to="/sign_up" class="dropdown-item">
                  <i class="fas fa-user-plus me-2"></i>Đăng ký
                </router-link>
              </li>
              <li v-if="user">
                <router-link to="/edit-profile" class="dropdown-item">
                  <i class="fas fa-edit me-2"></i>Chỉnh sửa thông tin
                </router-link>
              </li>
              <li v-if="user">
                <router-link to="/change-password" class="dropdown-item">
                  <i class="fas fa-lock me-2"></i>Đổi mật khẩu
                </router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li v-if="user">
                <button class="dropdown-item" @click="logout">
                  <i class="fas fa-sign-out-alt me-2"></i>Đăng xuất
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import logoPath from "@/assets/img/logo2.png";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref(null); // Khởi tạo trạng thái người dùng

function logout() {
  // Xóa thông tin người dùng khỏi sessionStorage
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("isAuthenticated");

  // Chuyển hướng đến trang đăng nhập
  router.push("/login");
  reloadPage();
}

// Lấy thông tin người dùng từ sessionStorage khi component được mount
onMounted(() => {
  const storedUser = sessionStorage.getItem("user");
  if (storedUser) {
    user.value = JSON.parse(storedUser); // Gán dữ liệu người dùng
  } else {
    user.value = null; // Không có người dùng đăng nhập
  }
});

function reloadPage() {
  // Làm mới toàn bộ trang
  window.location.href = "/";
}

const getUserGreeting = () => {
  return user
    ? `Chào, <b>${user.fullname}</b>`
    : "Tài khoản";
};
</script>


<style scoped>
/* Toàn bộ navbar */
.navbar {
  background-color: #ff6f00; /* Màu nền cam */
  border-bottom: 2px solid #ffa000; /* Đường viền nhấn */
}
.navbar-brand img {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
}
.navbar-brand img:hover {
  transform: scale(1.1); /* Hiệu ứng phóng lớn logo khi hover */
}

/* Link trong navbar */
.navbar-nav .nav-link {
  color: #ffffff; /* Màu chữ trắng */
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease, transform 0.3s ease;
}
.navbar-nav .nav-link:hover {
  color: #ffe082; /* Màu vàng nhạt khi hover */
  transform: scale(1.05); /* Phóng to nhẹ khi hover */
}

/* Dropdown */
.dropdown-menu {
  background-color: #ff8f00; /* Màu nền dropdown */
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Hiệu ứng đổ bóng */
}
.dropdown-item {
  color: #ffffff; /* Màu chữ trong dropdown */
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.dropdown-item:hover {
  color: #fff;
  background-color: #ffb300; /* Màu cam nhạt khi hover */
}

/* Nút toggle */
.navbar-toggler {
  border: none;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.7)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5)); /* Hiệu ứng sáng */
}

/* Hiển thị tên người dùng */
.navbar-nav .nav-link.user {
  font-size: 1rem;
  font-weight: bold;
  color: #ffecb3; /* Màu vàng nhạt */
  display: flex;
  align-items: center;
}
.navbar-nav .nav-link.user i {
  margin-right: 8px;
}
.navbar-nav .nav-link.user:hover {
  color: #fff59d; /* Màu vàng sáng hơn khi hover */
}

/* Hiệu ứng responsive */
@media (max-width: 768px) {
  .navbar-brand img {
    height: 40px;
  }
  .navbar-nav .nav-link {
    font-size: 0.9rem;
  }
  .navbar-nav .nav-link.user {
    font-size: 0.95rem;
  }
}
</style>


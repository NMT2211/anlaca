<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-lg border-0" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng nhập</h3>

      <form @submit.prevent="login">
        <!-- Trường nhập ID hoặc Email -->
        <div class="form-floating mb-3">
          <input
            type="text"
            id="idoremail"
            v-model.trim="idoremail"
            class="form-control"
            placeholder="Nhập ID hoặc Email"
            required
          />
          <label for="idoremail">ID hoặc Email</label>
        </div>

        <!-- Trường nhập mật khẩu -->
        <div class="form-floating mb-3">
          <input
            type="password"
            id="password"
            v-model.trim="password"
            class="form-control"
            placeholder="Nhập mật khẩu"
            required
          />
          <label for="password">Mật khẩu</label>
        </div>

        <!-- Nút đăng nhập -->
        <div class="d-grid">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
            Đăng nhập
          </button>
        </div>
      </form>

      <!-- Hiển thị lỗi -->
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>

      <!-- Liên kết đến trang đăng ký -->
      <div class="text-center mt-3">
        <p class="text-muted">
          Bạn chưa có tài khoản? 
          <router-link to="/sign_up" class="text-primary text-decoration-none">
            Đăng ký ngay
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://localhost:8080/ASM_KiNangLamViec/users_api"; // Đường dẫn API backend

export default {
  data() {
    return {
      idoremail: "", // Lưu ID hoặc Email người dùng nhập
      password: "", // Lưu mật khẩu
      errorMessage: "", // Lưu thông báo lỗi
      isLoading: false, // Trạng thái đang xử lý
    };
  },
  methods: {
    async login() {
      this.errorMessage = ""; // Xóa thông báo lỗi trước đó
      if (!this.idoremail || !this.password) {
        this.errorMessage = "Vui lòng nhập đầy đủ thông tin!";
        return;
      }

      this.isLoading = true; // Bật trạng thái tải
      try {
        const response = await axios.put(API_URL, {
          email: this.idoremail,
          password: this.password,
        });

        // API trả về thông tin người dùng nếu đăng nhập thành công
        const { id, email, fullname, admin } = response.data;

        // Lưu thông tin cơ bản vào sessionStorage
        sessionStorage.setItem(
          "user",
          JSON.stringify({ id, email, fullname: fullname, isAdmin: admin })
        );
        sessionStorage.setItem("isAuthenticated", "true");

        // Chuyển hướng đến trang chính
        this.$router.push("/");

        // Làm mới toàn bộ trang
        window.location.href = "/";
      } catch (error) {
        this.errorMessage =
          error.response?.status === 401
            ? "Sai ID/Email hoặc mật khẩu."
            : error.response?.data?.message || "Không thể kết nối đến máy chủ.";
      } finally {
        this.isLoading = false; // Tắt trạng thái tải
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f8f9fa;
}

.card {
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.text-primary {
  font-weight: bold;
  transition: color 0.2s;
}

.text-primary:hover {
  color: #0056b3;
}

.form-floating label {
  transition: transform 0.2s, color 0.2s;
}

.form-control:focus ~ label {
  transform: scale(0.9) translateY(-1.5rem);
  color: #007bff;
}

.vh-100 {
  min-height: 100vh;
}
</style>

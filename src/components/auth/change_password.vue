<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow-lg border-0" style="width: 400px;">
        <h3 class="text-center mb-4">Đổi mật khẩu</h3>
  
        <form @submit.prevent="changePassword">
          <!-- Mật khẩu hiện tại -->
          <div class="form-floating mb-3">
            <input
              type="password"
              id="currentPassword"
              v-model.trim="currentPassword"
              class="form-control"
              placeholder="Nhập mật khẩu hiện tại"
              required
            />
            <label for="currentPassword">Mật khẩu hiện tại</label>
          </div>
  
          <!-- Mật khẩu mới -->
          <div class="form-floating mb-3">
            <input
              type="password"
              id="newPassword"
              v-model.trim="newPassword"
              class="form-control"
              placeholder="Nhập mật khẩu mới"
              required
            />
            <label for="newPassword">Mật khẩu mới</label>
          </div>
  
          <!-- Xác nhận mật khẩu mới -->
          <div class="form-floating mb-3">
            <input
              type="password"
              id="confirmPassword"
              v-model.trim="confirmPassword"
              class="form-control"
              placeholder="Xác nhận mật khẩu mới"
              required
            />
            <label for="confirmPassword">Xác nhận mật khẩu mới</label>
          </div>
  
          <!-- Nút đổi mật khẩu -->
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isLoading"
            >
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
              Đổi mật khẩu
            </button>
          </div>
        </form>
  
        <!-- Hiển thị lỗi -->
        <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
          {{ errorMessage }}
        </div>
  
        <!-- Hiển thị thành công -->
        <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  const API_URL = "http://localhost:8082/ASM_Java4/users_api"; // API backend
  
  export default {
    data() {
      return {
        currentPassword: "", // Mật khẩu hiện tại
        newPassword: "", // Mật khẩu mới
        confirmPassword: "", // Xác nhận mật khẩu mới
        errorMessage: "", // Thông báo lỗi
        successMessage: "", // Thông báo thành công
        isLoading: false, // Trạng thái đang xử lý
      };
    },
    methods: {
      async changePassword() {
        this.errorMessage = "";
        this.successMessage = "";
  
        // Kiểm tra hợp lệ
        if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
          this.errorMessage = "Vui lòng điền đầy đủ thông tin!";
          return;
        }
        if (this.newPassword !== this.confirmPassword) {
          this.errorMessage = "Mật khẩu mới và xác nhận mật khẩu không khớp!";
          return;
        }
        if (this.newPassword.length < 6) {
          this.errorMessage = "Mật khẩu mới phải có ít nhất 6 ký tự!";
          return;
        }
  
        this.isLoading = true;
        try {
          const user = JSON.parse(sessionStorage.getItem("user"));
          if (!user) {
            this.errorMessage = "Bạn cần đăng nhập để đổi mật khẩu!";
            this.$router.push("/login");
            return;
          }
  
          // Gửi yêu cầu đổi mật khẩu
          const response = await axios.put(`${API_URL}/${user.id}`, {
            id: user.id,
            password: this.newPassword,
            currentPassword: this.currentPassword,
          });
  
          if (response.status === 200) {
            this.successMessage = "Đổi mật khẩu thành công!";
            this.currentPassword = "";
            this.newPassword = "";
            this.confirmPassword = "";
          } else {
            this.errorMessage = response.data?.error || "Không thể đổi mật khẩu. Vui lòng thử lại.";
          }
        } catch (error) {
          this.errorMessage = error.response?.data?.error || "Không thể kết nối đến máy chủ.";
        } finally {
          this.isLoading = false;
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
  
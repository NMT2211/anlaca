<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow-lg border-0" style="width: 400px;">
        <h3 class="text-center mb-4">Đăng ký</h3>
  
        <form @submit.prevent="submitForm">
          <!-- Trường ID người dùng -->
          <div class="form-floating mb-3">
            <input
              type="text"
              id="id"
              v-model.trim="formData.id"
              class="form-control"
              placeholder="Nhập ID"
              required
            />
            <label for="id">ID</label>
          </div>
  
          <!-- Trường họ và tên -->
          <div class="form-floating mb-3">
            <input
              type="text"
              id="fullname"
              v-model.trim="formData.fullname"
              class="form-control"
              placeholder="Nhập họ và tên"
              required
            />
            <label for="fullname">Họ và tên</label>
          </div>
  
          <!-- Trường Email -->
          <div class="form-floating mb-3">
            <input
              type="email"
              id="email"
              v-model.trim="formData.email"
              class="form-control"
              placeholder="Nhập Email"
              required
            />
            <label for="email">Email</label>
          </div>
  
          <!-- Trường Mật khẩu -->
          <div class="form-floating mb-3">
            <input
              type="password"
              id="password"
              v-model.trim="formData.password"
              class="form-control"
              placeholder="Nhập mật khẩu"
              required
            />
            <label for="password">Mật khẩu</label>
          </div>
  
          <!-- Trường Xác nhận mật khẩu -->
          <div class="form-floating mb-3">
            <input
              type="password"
              id="confirmPassword"
              v-model.trim="formData.confirmPassword"
              class="form-control"
              placeholder="Xác nhận mật khẩu"
              required
            />
            <label for="confirmPassword">Xác nhận mật khẩu</label>
          </div>
  
          <!-- Nút đăng ký -->
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isLoading"
            >
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
              Đăng ký
            </button>
          </div>
        </form>
  
        <!-- Hiển thị lỗi -->
        <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
          {{ errorMessage }}
        </div>
  
        <!-- Liên kết đến trang đăng nhập -->
        <div class="text-center mt-3">
          <p class="text-muted">
            Bạn đã có tài khoản?
            <router-link to="/login" class="text-primary text-decoration-none">
              Đăng nhập ngay
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  const API_URL = "http://localhost:8082/ASM_Java4/users_api"; // Đường dẫn API backend
  
  export default {
    data() {
      return {
        formData: {
          id: "",
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        errorMessage: "",
        isLoading: false,
      };
    },
    methods: {
      async submitForm() {
        this.errorMessage = "";
  
        // Kiểm tra dữ liệu
        if (this.formData.password !== this.formData.confirmPassword) {
          this.errorMessage = "Mật khẩu và xác nhận mật khẩu không khớp.";
          return;
        }
  
        this.isLoading = true;
        try {
          const response = await axios.post(API_URL, this.formData);
  
          if (response.status === 201 || response.status === 200) {
            alert("Đăng ký thành công!");
            this.$router.push("/login");
          } else {
            this.errorMessage = "Đăng ký thất bại, vui lòng thử lại.";
          }
        } catch (error) {
          this.errorMessage =
            error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại.";
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
  
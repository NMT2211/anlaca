<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow-lg border-0" style="width: 400px;">
        <h3 class="text-center mb-4">Quên mật khẩu</h3>
  
        <!-- Form yêu cầu đặt lại mật khẩu -->
        <div v-if="!resetStep">
          <form @submit.prevent="requestReset">
            <div class="form-floating mb-3">
              <input
                type="email"
                id="email"
                v-model.trim="email"
                class="form-control"
                placeholder="Nhập email của bạn"
                required
              />
              <label for="email">Email</label>
            </div>
            <div class="d-grid">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                Gửi mã xác nhận
              </button>
            </div>
          </form>
          <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
            {{ errorMessage }}
          </div>
          <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
            {{ successMessage }}
          </div>
        </div>
  
        <!-- Form đặt lại mật khẩu -->
        <div v-else>
          <form @submit.prevent="resetPassword">
            <div class="form-floating mb-3">
              <input
                type="text"
                id="resetCode"
                v-model.trim="resetCode"
                class="form-control"
                placeholder="Nhập mã xác nhận"
                required
              />
              <label for="resetCode">Mã xác nhận</label>
            </div>
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
            <div class="d-grid">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                Đặt lại mật khẩu
              </button>
            </div>
          </form>
          <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
            {{ errorMessage }}
          </div>
          <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
            {{ successMessage }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  const API_URL = "http://localhost:8082/ASM_Java4/forgot_password_api";
  
  export default {
    data() {
      return {
        email: "",
        resetCode: "",
        newPassword: "",
        confirmPassword: "",
        resetStep: false, // true: đang ở bước đặt lại mật khẩu
        errorMessage: "",
        successMessage: "",
        isLoading: false,
      };
    },
    methods: {
      async requestReset() {
        this.errorMessage = "";
        this.successMessage = "";
  
        if (!this.email) {
          this.errorMessage = "Vui lòng nhập email.";
          return;
        }
  
        this.isLoading = true;
        try {
          const response = await axios.post(`http://localhost:8082/ASM_Java4/forgot_password_api/request`, { email: this.email });
          if (response.status === 200) {
            this.successMessage = "Mã xác nhận đã được gửi đến email của bạn.";
            this.resetStep = true;
          } else {
            this.errorMessage = response.data?.error || "Không thể gửi mã xác nhận.";
          }
        } catch (error) {
          this.errorMessage = error.response?.data?.error || "Không thể kết nối đến máy chủ.";
        } finally {
          this.isLoading = false;
        }
      },
      async resetPassword() {
        this.errorMessage = "";
        this.successMessage = "";
  
        if (!this.resetCode || !this.newPassword || !this.confirmPassword) {
          this.errorMessage = "Vui lòng điền đầy đủ thông tin.";
          return;
        }
        if (this.newPassword !== this.confirmPassword) {
          this.errorMessage = "Mật khẩu mới và xác nhận mật khẩu không khớp.";
          return;
        }
        if (this.newPassword.length < 6) {
          this.errorMessage = "Mật khẩu mới phải có ít nhất 6 ký tự.";
          return;
        }
  
        this.isLoading = true;
        try {
          const response = await axios.put(`${API_URL}/reset`, {
            resetCode: this.resetCode,
            newPassword: this.newPassword,
          });
          if (response.status === 200) {
            this.successMessage = "Đặt lại mật khẩu thành công!";
            this.resetStep = false;
            this.email = "";
          } else {
            this.errorMessage = response.data?.error || "Không thể đặt lại mật khẩu.";
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
  .vh-100 {
    min-height: 100vh;
  }
  </style>
  
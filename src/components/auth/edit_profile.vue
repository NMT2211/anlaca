<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow-lg border-0" style="width: 400px;">
        <h3 class="text-center mb-4">Chỉnh sửa thông tin</h3>
  
        <form @submit.prevent="submitForm">
          <!-- Trường ID -->
          <div class="form-floating mb-3">
            <input
              type="text"
              id="id"
              v-model.trim="formData.id"
              class="form-control"
              placeholder="Nhập ID"
              readonly
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

  
          <!-- Nút lưu thay đổi -->
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isLoading"
            >
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
              Lưu thay đổi
            </button>
          </div>
        </form>
  
        <!-- Hiển thị lỗi -->
        <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
          {{ errorMessage }}
        </div>
  
        <!-- Nút quay lại -->
        <div class="text-center mt-3">
          <button @click="goBack" class="btn btn-outline-secondary">
            Quay lại
          </button>
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
        },
        errorMessage: "",
        isLoading: false,
      };
    },
    methods: {
      async fetchUserData() {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (!user) {
          alert("Bạn cần đăng nhập để sử dụng chức năng này!");
          this.$router.push("/login");
          return;
        }
  
        this.formData = {
          id: user.id,
          fullname: user.fullname,
          email: user.email,
          password: "",
        };
      },
      async submitForm() {
        this.errorMessage = "";
  
        if (!this.formData.fullname || !this.formData.email) {
          this.errorMessage = "Họ và tên, Email không được để trống!";
          return;
        }
  
        this.isLoading = true;
        try {
          const response = await axios.put(`${API_URL}/${this.formData.id}`, this.formData);
  
          if (response.status === 200) {
            alert("Cập nhật thông tin thành công!");
            sessionStorage.setItem("user", JSON.stringify({
              id: this.formData.id,
              fullname: this.formData.fullname,
              email: this.formData.email,
            }));
            this.$router.push("/");
          } else {
            this.errorMessage = "Không thể cập nhật thông tin. Vui lòng thử lại.";
          }
        } catch (error) {
          this.errorMessage =
            error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại.";
        } finally {
          this.isLoading = false;
        }
      },
      goBack() {
        this.$router.push("/");
      },
    },
    mounted() {
      this.fetchUserData();
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
  
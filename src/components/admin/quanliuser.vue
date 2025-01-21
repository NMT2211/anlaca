<template>
    <div class="container mt-5">
      <!-- Tabs -->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="user-edition-tab"
            data-bs-toggle="tab"
            data-bs-target="#user-edition"
            type="button"
            role="tab"
            aria-controls="user-edition"
            aria-selected="true"
          >
            User Edition
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="user-list-tab"
            data-bs-toggle="tab"
            data-bs-target="#user-list"
            type="button"
            role="tab"
            aria-controls="user-list"
            aria-selected="false"
          >
            User List
          </button>
        </li>
      </ul>
  
      <div class="tab-content mt-3">
        <!-- User Edition Tab -->
        <div
          class="tab-pane fade show active"
          id="user-edition"
          role="tabpanel"
          aria-labelledby="user-edition-tab"
        >
          <div class="card">
            <div class="card-header">User Information</div>
            <div class="card-body">
              <form @submit.prevent="updateUser">
                <div class="mb-3">
                  <label for="id" class="form-label">Username:</label>
                  <input
                    type="text"
                    id="id"
                    v-model="userForm.id"
                    class="form-control"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="password" class="form-label">Password:</label>
                  <input
                    type="password"
                    id="password"
                    v-model="userForm.password"
                    class="form-control"
                  />
                </div>
  
                <div class="mb-3">
                  <label for="fullname" class="form-label">Fullname:</label>
                  <input
                    type="text"
                    id="fullname"
                    v-model="userForm.fullname"
                    class="form-control"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    v-model="userForm.email"
                    class="form-control"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="admin" class="form-label">Admin:</label>
                  <input
                    type="checkbox"
                    id="admin"
                    v-model="userForm.admin"
                    class="form-check-input"
                  />
                </div>
  
                <div class="text-center">
                  <button class="btn btn-primary me-2 btn-custom" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <!-- User List Tab -->
        <div
          class="tab-pane fade"
          id="user-list"
          role="tabpanel"
          aria-labelledby="user-list-tab"
        >
          <div class="card">
            <div class="card-header">User List</div>
            <div class="card-body">
              <table class="table table-bordered user-list">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Role</th>
                    
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in userList" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.password }}</td>
                    <td>{{ user.fullname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.admin ? 'Admin' : 'User' }}</td>
                    
                    <td>
                    <button class="btn btn-link text-primary" @click="editUser(user)">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-link text-danger" @click="deleteUser(user.id)">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    </td>

                  </tr>
                </tbody>
              </table>
              <div v-if="userList.length === 0" class="text-center mt-3">
                <p>Không có người dùng nào được tìm thấy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  const API_URL = "http://localhost:8082/ASM_Java4/quanliuser_api";
  
  export default {
    data() {
      return {
        userForm: {
          id: "",
          password: "",
          fullname: "",
          email: "",
          admin: false,
          active: true,
        },
        userList: [],
      };
    },
    methods: {
  async fetchUserList() {
    try {
      const response = await axios.get(API_URL);
      if (response.status === 200) {
        this.userList = response.data;
        console.log("Danh sách người dùng:", this.userList);
      }
    } catch (error) {
      console.error("Lỗi khi tải danh sách người dùng:", error);
      alert("Không thể tải danh sách người dùng. Vui lòng thử lại.");
    }
  },
  editUser(user) {
    // Đổ dữ liệu của người dùng vào form
    this.userForm = { ...user }; // Sao chép dữ liệu
    // Chuyển tab sang User Edition
    const editionTab = document.getElementById("user-edition-tab");
    if (editionTab) editionTab.click();
  },
  async updateUser() {
    try {
      const response = await axios.put(API_URL, this.userForm);
      alert(response.data.message || "Cập nhật thông tin thành công.");
      this.fetchUserList();
      this.resetForm();
    } catch (error) {
      console.error("Lỗi khi cập nhật người dùng:", error);
      alert(error.response?.data?.error || "Không thể cập nhật thông tin.");
    }
  },
  async deleteUser(id) {
    if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert("Xóa người dùng thành công.");
        this.fetchUserList();
      } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
        alert("Không thể xóa người dùng. Vui lòng thử lại.");
      }
    }
      },
      resetForm() {
        this.userForm = {
          id: "",
          password: "",
          fullname: "",
          email: "",
          admin: false,
          active: true,
        };
        this.posterFile = null;
      },
    },

    mounted() {
      this.fetchUserList();
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    margin-bottom: 30px;
  }
  .tab-content {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 15px;
  }
  .tab-pane {
    padding: 20px;
  }
  .form-label {
    font-weight: bold;
  }
  .btn-custom {
    width: 120px;
  }
  .card {
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  .card-header {
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #007bff;
    color: white;
    border-radius: 5px 5px 0 0;
  }
  </style>
  
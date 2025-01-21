<template>
    <div class="container ">
      <h1 class="text-center">Quản lý Người Dùng</h1>
      <hr />
  
      <!-- Form thao tác -->
      <form class="border p-4 bg-light" @submit.prevent="handleSubmit">
        <h2>Thông tin người dùng</h2>
        <div class="mb-3">
          <label for="user-id" class="form-label">ID:</label>
          <input type="text" id="user-id" class="form-control" v-model="form.id" />
        </div>
        <div class="mb-3">
          <label for="user-fullname" class="form-label">Họ tên:</label>
          <input type="text" id="user-fullname" class="form-control" v-model="form.fullname" />
        </div>
        <div class="mb-3">
          <label for="user-email" class="form-label">Email:</label>
          <input type="email" id="user-email" class="form-control" v-model="form.email" />
        </div>
        <div class="mb-3">
          <label for="user-password" class="form-label">Mật khẩu:</label>
          <input type="password" id="user-password" class="form-control" v-model="form.password" />
        </div>
        <div class="mb-3">
          <label for="user-admin" class="form-label">Quản trị viên:</label>
          <select id="user-admin" class="form-select" v-model="form.admin">
            <option :value="true">Có</option>
            <option :value="false">Không</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary m-2" @click="create">Create</button>
        <button type="button" class="btn btn-success m-2" @click="update">Update</button>
        <button type="button" class="btn btn-danger m-2" @click="deleteUser">Delete</button>
        <button type="button" class="btn btn-secondary m-2" @click="reset">Reset</button>
      </form>
  
      <!-- Bảng danh sách người dùng -->
      <table class="table table-hover mt-4">
        <thead class="table-light">
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Quản trị viên</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="users.length === 0">
            <td colspan="5" class="text-center">Không có dữ liệu</td>
          </tr>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.fullname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.admin ? 'Có' : 'Không' }}</td>
            <td>
              <button class="btn btn-primary" @click="fillForm(user)">Chọn</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    
    const API_URL = 'http://localhost:8080/java_4_lab/bai3_lab7';
    
    const users = ref([]);
    const form = ref({
        id: '',
        fullname: '',
        email: '',
        password: '',
        admin: false,
    });
    
    const fetchUsers = async () => {
        try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Lỗi: ${response.status}`);
        users.value = await response.json();
        } catch (error) {
        console.error('Lỗi khi lấy danh sách người dùng:', error);
        alert('Không thể tải danh sách người dùng!');
        }
    };
    
    const reset = () => {
        form.value = { id: '', fullname: '', email: '', password: '', admin: false };
    };
    
    const create = async () => {
        if (!form.value.id || !form.value.fullname || !form.value.email || !form.value.password) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
        }
    
        try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form.value),
        });
        if (!response.ok) throw new Error(`Lỗi: ${response.status}`);
        const result = await response.json();
        alert(result.message || 'Thêm người dùng thành công!');
        fetchUsers();
        reset();
        } catch (error) {
        console.error('Lỗi khi tạo người dùng:', error);
        alert('Thêm người dùng thất bại!');
        }
    };
    
    const update = async () => {
        if (!form.value.id) {
        alert('Vui lòng chọn người dùng để cập nhật!');
        return;
        }
    
        try {
        const response = await fetch(`${API_URL}/${form.value.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form.value),
        });
        if (!response.ok) throw new Error(`Lỗi: ${response.status}`);
        const result = await response.json();
        alert(result.message || 'Cập nhật thành công!');
        fetchUsers();
        reset();
        } catch (error) {
        console.error('Lỗi khi cập nhật người dùng:', error);
        alert('Cập nhật thất bại!');
        }
    };
    
    const deleteUser = async () => {
        if (!form.value.id) {
        alert('Vui lòng chọn người dùng để xóa!');
        return;
        }
    
        if (!confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
    
        try {
        const response = await fetch(`${API_URL}/${form.value.id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error(`Lỗi: ${response.status}`);
        const result = await response.json();
        alert(result.message || 'Xóa thành công!');
        fetchUsers();
        reset();
        } catch (error) {
        console.error('Lỗi khi xóa người dùng:', error);
        alert('Xóa thất bại!');
        }
    };
    
    const fillForm = (user) => {
        form.value = { ...user, password: '' };
    };
    
    // Khởi tạo danh sách người dùng
    fetchUsers();
  </script>
  
  <style>
  .container {
    max-width: 900px;
  }
  </style>
  
<template>
  <div>
    <h1 class="mb-4 mt-5">Danh Sách Quán Ăn</h1>

    <!-- Ô tìm kiếm -->
    <div class="mb-4">
      <label for="province">Chọn Tỉnh/Thành phố:</label>
      <select id="province" v-model="selectedProvince" class="form-select" @change="filterByProvince">
        <option value="">Tất cả</option>
        <option v-for="province in provinces" :key="province" :value="province">
          {{ province }}
        </option>
      </select>
    </div>

    <!-- Loader -->
    <div v-if="isLoading" id="loader" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Danh sách quán ăn -->
    <div class="row" v-else>
      <div v-if="paginatedItems.length === 0" class="text-center">
        <p class="text-muted">Không có dữ liệu</p>
      </div>
      <div class="col-md-4 mb-5" v-for="item in paginatedItems" :key="item.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text"><b>Địa chỉ:</b> {{ item.address }}</p>
            <p class="card-text"><b>Tỉnh/Thành phố:</b> {{ item.province }}</p>
            <p class="card-text"><b>Loại quán:</b> {{ item.type }}</p>
            
            <p class="card-text">
              <b>Giá trung bình:</b> {{ formatCurrency(item.averagePrice) }}
            </p>

            <p class="card-text"><b>Đánh giá:</b> {{ item.rating }} ⭐</p>
            <button class="btn btn-primary" @click="viewDetails(item.id)">Chi tiết</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Điều hướng -->
    <div class="pagination text-center mt-4 mb-4">
      <button class="btn btn-secondary" :disabled="currentPage === 1" @click="goToFirstPage">
        <i class="fa-solid fa-backward-step"></i>
      </button>
      <button class="btn btn-secondary mx-2" :disabled="currentPage === 1" @click="goToPreviousPage">
        <i class="fa-solid fa-backward"></i>
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="['btn', page === currentPage ? 'btn-primary' : 'btn-secondary']"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
      <button class="btn btn-secondary mx-2" :disabled="currentPage === totalPages" @click="goToNextPage">
        <i class="fa-solid fa-forward"></i>
      </button>
      <button class="btn btn-secondary" :disabled="currentPage === totalPages" @click="goToLastPage">
        <i class="fa-solid fa-forward-step"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [], // Danh sách quán ăn
      provinces: [], // Danh sách tỉnh/thành phố
      selectedProvince: "", // Tỉnh/Thành phố được chọn
      isLoading: false, // Trạng thái tải dữ liệu
      currentPage: 1, // Trang hiện tại
      itemsPerPage: 9, // Số lượng mục trên mỗi trang
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    },
    filteredItems() {
      if (!this.selectedProvince) {
        return this.items;
      }
      return this.items.filter((item) => item.province === this.selectedProvince);
    },
  },
  methods: {
    async fetchItems() {
      this.isLoading = true;
      try {
        const response = await axios.get("http://localhost:8080/ASM_KiNangLamViec/listQuanAn_api");
        if (response.status === 200) {
          this.items = response.data.map((item) => ({
            id: item.id,
            name: item.name,
            address: item.address,
            province: item.province,
            type: item.type,
            averagePrice: item.averagePrice,
            rating: item.rating,
          }));
          this.provinces = [...new Set(this.items.map((item) => item.province))];
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },
    filterByProvince() {
      this.currentPage = 1;
    },
    viewDetails(id) {
      this.$router.push({ name: "QuanAnDetails", params: { id } });
    },
    goToFirstPage() {
      this.currentPage = 1;
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    goToLastPage() {
      this.currentPage = this.totalPages;
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>

<style scoped>
/* Toàn bộ nền */
body {
  background-color: #fefefe;
  font-family: 'Poppins', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Tiêu đề */
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Card (Quán ăn) */
.card {
  border-radius: 15px;
  overflow: hidden;
  border: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
.card-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2980b9;
  margin-bottom: 10px;
}
.card-text {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 8px;
}
.card .btn-primary {
  background-color: #3498db;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.9rem;
  transition: background-color 0.3s, transform 0.2s;
}
.card .btn-primary:hover {
  background-color: #1d6fa5;
  transform: scale(1.05);
}

/* Ô tìm kiếm */
select.form-select {
  border-radius: 12px;
  padding: 12px;
  font-size: 1rem;
  background-color: #f4f6f8;
  border: 1px solid #ccc;
  color: #2c3e50;
  transition: border-color 0.3s, box-shadow 0.3s;
}
select.form-select:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 6px rgba(52, 152, 219, 0.4);
}

/* Loader */
#loader .spinner-border {
  width: 4rem;
  height: 4rem;
  border-width: 0.4rem;
  color: #3498db;
}
#loader {
  margin-top: 50px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.pagination .btn {
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  background-color: #f4f4f4;
  border: none;
  transition: background-color 0.3s, transform 0.2s;
}
.pagination .btn:hover {
  background-color: #3498db;
  color: white;
  transform: scale(1.1);
}
.pagination .btn-primary {
  background-color: #3498db;
  color: white;
}
.pagination .btn-primary:hover {
  background-color: #1d6fa5;
}

/* Hiệu ứng tiêu đề */
h1::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background-color: #3498db;
  margin: 8px auto;
  border-radius: 2px;
}

/* Hiệu ứng hover nút */
button:hover {
  cursor: pointer;
}

/* Khoảng cách giữa các card */
.card + .card {
  margin-top: 20px;
}

/* Căn chỉnh khoảng cách */
.mb-4 {
  margin-bottom: 2rem !important;
}
.mt-4 {
  margin-top: 2rem !important;
}
</style>

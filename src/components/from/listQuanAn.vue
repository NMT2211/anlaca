<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center text-primary">
      <i class="fas fa-utensils"></i> Danh Sách Quán Ăn
    </h1>

    <!-- Ô tìm kiếm -->
    <div class="row mb-4">
      <div class="col-md-6">
        <label for="province"><i class="fas fa-map-marker-alt"></i> Chọn Tỉnh/Thành phố:</label>
        <select id="province" v-model="selectedProvince" class="form-select" @change="filterItems">
          <option value="">Tất cả</option>
          <option v-for="province in provinces" :key="province" :value="province">
            {{ province }}
          </option>
        </select>
      </div>

      <div class="col-md-6">
        <label for="type"><i class="fas fa-utensils"></i> Chọn Loại Quán:</label>
        <select id="type" v-model="selectedType" class="form-select" @change="filterItems">
          <option value="">Tất cả</option>
          <option v-for="type in types" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>
    </div>

    <!-- Loader -->
    <div v-if="isLoading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Đang tải...</span>
      </div>
    </div>

    <!-- Danh sách quán ăn -->
    <div class="row" v-else>
      <div v-if="paginatedItems.length === 0" class="text-center">
        <p class="text-muted">Không có dữ liệu</p>
      </div>
      <div class="col-md-4 mb-4 d-flex align-items-stretch" v-for="item in paginatedItems" :key="item.id">
        <div class="card shadow-sm w-100">
          <img
            :src="getImageUrl(item.image)"
            class="card-img-top"
            :alt="item.name"
            loading="lazy"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-primary"><i class="fas fa-store"></i> {{ item.name }}</h5>
            <p class="card-text"><i class="fas fa-map-marker-alt"></i> {{ item.address }}</p>
            <p class="card-text"><i class="fas fa-city"></i> {{ item.province }}</p>
            <p class="card-text"><i class="fas fa-utensils"></i> {{ item.type }}</p>
            <p class="card-text text-success"><i class="fas fa-dollar-sign"></i> {{ formatCurrency(item.averagePrice) }}</p>
            <p class="card-text text-warning"><i class="fas fa-star"></i> {{ item.rating }} ⭐</p>
            <button class="btn btn-outline-primary mt-auto" @click="viewDetails(item.id)">
              <i class="fas fa-eye"></i> Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Phân trang -->
    <div class="pagination-container text-center mt-4 mb-4">
      <button class="btn btn-secondary" :disabled="currentPage === 1" @click="currentPage = 1">
        <i class="fa-solid fa-backward-step"></i>
      </button>
      <button class="btn btn-secondary mx-2" :disabled="currentPage === 1" @click="currentPage--">
        <i class="fa-solid fa-backward"></i>
      </button>

      <button
        v-for="page in visiblePages"
        :key="page"
        :class="['btn', page === currentPage ? 'btn-primary' : 'btn-secondary']"
        @click="currentPage = page"
      >
        {{ page }}
      </button>

      <button class="btn btn-secondary mx-2" :disabled="currentPage === totalPages" @click="currentPage++">
        <i class="fa-solid fa-forward"></i>
      </button>
      <button class="btn btn-secondary" :disabled="currentPage === totalPages" @click="currentPage = totalPages">
        <i class="fa-solid fa-forward-step"></i>
      </button>
    </div>
  </div>
</template>

<script>
import data from "@/data.js"; // Import dữ liệu từ data.js

export default {
  data() {
    return {
      items: [], // Danh sách quán ăn
      provinces: [], // Danh sách tỉnh/thành phố
      types: [], // Danh sách loại quán
      selectedProvince: "", // Tỉnh/Thành phố được chọn
      selectedType: "", // Loại quán được chọn
      isLoading: false, // Trạng thái tải dữ liệu
      currentPage: 1, // Trang hiện tại
      itemsPerPage: 9, // Số lượng mục trên mỗi trang
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    filteredItems() {
      return this.items.filter(item => {
        return (!this.selectedProvince || item.province === this.selectedProvince) &&
               (!this.selectedType || item.type === this.selectedType);
      });
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredItems.slice(start, start + this.itemsPerPage);
    },
    visiblePages() {
      let pages = [];
      let startPage = Math.max(1, this.currentPage - 1);
      let endPage = Math.min(this.totalPages, this.currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    fetchItems() {
      this.isLoading = true;
      try {
        // Lấy dữ liệu từ data.js
        this.items = data.danhSachQuanAn.map(item => ({
          id: item.id,
          name: item.name,
          address: item.address,
          province: item.province,
          type: item.type,
          averagePrice: item.averagePrice,
          rating: item.rating,
          image: item.images.length ? item.images[0] : 'https://via.placeholder.com/300',
        }));

        // Lọc danh sách tỉnh/thành phố và loại quán
        this.provinces = [...new Set(this.items.map(item => item.province))];
        this.types = [...new Set(this.items.map(item => item.type))];

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },
    filterItems() {
      this.currentPage = 1;
    },
    viewDetails(id) {
      this.$router.push({ name: "QuanAnDetails", params: { id } });
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
    getImageUrl(imageName) {
      return `/anlaca/img/${imageName}`; // Đường dẫn ảnh tĩnh
    }
  },
  mounted() {
    this.fetchItems(); // Gọi hàm lấy dữ liệu khi component được mounted
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
.card {
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.03);
}
.pagination-container {
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>

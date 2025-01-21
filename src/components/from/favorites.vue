<template>
    <div>
      <h1 class="mb-4 mt-5">Danh Sách Video</h1>
  
      <!-- Loader -->
      <div v-if="isLoading" id="loader" class="text-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
  
      <!-- Danh sách video -->
      <div class="row" v-else>
        <div v-if="paginatedItems.length === 0" class="text-center">
          <p class="text-muted">Không có dữ liệu</p>
        </div>
        <div class="col-md-4 mb-5" v-for="item in paginatedItems" :key="item.id">
          <div class="card">
            <img
              :src="item.poster ? getImagePath(item.poster) : ''"
              class="card-img-top mx-auto d-block m-3"
              :alt="item.title"
              loading="lazy"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">Lượt xem: <span class="luot-xem">{{ item.views }}</span></p>
              <button class="btn btn-primary" @click="viewDetails(item.id)">Chi tiết</button>
              <button
                class="btn m-2"
                :class="likedVideos.includes(item.id) ? 'btn-danger' : 'btn-outline-success'"
                @click="toggleLike(item.id)"
              >
                <i class="fas" :class="likedVideos.includes(item.id) ? 'fa-thumbs-down' : 'fa-thumbs-up'"></i>
                {{ likedVideos.includes(item.id) ? 'Bỏ thích' : 'Thích' }}
              </button>
              <button class="btn btn-outline-info">
                <i class="fas fa-share"></i> Chia sẻ
              </button>
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
        items: [], // Danh sách video
        likedVideos: [], // Danh sách video đã thích
        isLoading: false, // Trạng thái tải dữ liệu
        currentPage: 1, // Trang hiện tại
        itemsPerPage: 6, // Số lượng mục trên mỗi trang
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.items.length / this.itemsPerPage);
      },
      paginatedItems() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.items.slice(start, end);
      },
    },
    methods: {
      async fetchItems() {
            this.isLoading = true;
            const userId = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).id : null;
  
        try {
        const response = await axios.get(`http://localhost:8082/ASM_Java4/like_api?userId=${userId}`);
          if (response.status === 200) {
            this.items = response.data;
            await this.fetchLikedVideos();
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          this.isLoading = false;
        }
      },
  
      async fetchLikedVideos() {
        const userId = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).id : null;
  
        if (!userId) return;
  
        try {
          const response = await axios.get(`http://localhost:8082/ASM_Java4/like_api?userId=${userId}`);
          if (response.status === 200) {
            this.likedVideos = response.data.map((video) => video.videoId); // Lưu danh sách video đã thích
          }
        } catch (error) {
          console.error("Error fetching liked videos:", error);
        }
      },
  
      async toggleLike(videoId) {
    const userId = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).id : null;
  
    if (!userId) {
      alert("Bạn cần đăng nhập để sử dụng chức năng này!");
      this.$router.push("/login");
      return;
    }
  
    if (this.likedVideos.includes(videoId)) {
      // Xóa thích
      try {
        const response = await axios.delete(`http://localhost:8082/ASM_Java4/like_api/`, {
          data: { userId: userId, videoId: videoId },
        });
  
        if (response.status === 200) {
          
          this.likedVideos = this.likedVideos.filter((id) => id !== videoId);
          await this.fetchLikedVideos(); // Cập nhật lại danh sách
        } else {
          alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
        }
      } catch (error) {
        console.error("Lỗi khi xóa thích video:", error);
        alert("Không thể bỏ thích video. Vui lòng thử lại sau.");
      }
    } else {
      // Thêm thích
      try {
        const response = await axios.post(`http://localhost:8082/ASM_Java4/like_api/`, {
          userId: userId,
          videoId: videoId,
        });
  
        if (response.status === 201) {
          const likedVideo = response.data; // Giả sử API trả về dữ liệu video
          if (likedVideo) {
            this.likedVideos.push(likedVideo.videoId);
            
          }
          
          alert("Đã thích video thành công!");
          await this.fetchLikedVideos(); // Cập nhật lại danh sách
        } else {
          alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
        }
        
      } catch (error) {
        console.error("Lỗi khi thực hiện thích video:", error);
        alert("Không thể thích video. Vui lòng thử lại sau.");
      }
    }
  },
  
  
      viewDetails(id) {
        this.$router.push({ name: "VideoDetails", params: { id } });
      },
  
      getImagePath(filename) {
        if (!filename) {
          return "/img/default-poster.jpg";
        }
        return `/img/${filename}`;
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
    },
    mounted() {
      this.fetchItems();
    },
  };
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.2s;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card-img-top {
    width: 90%;
    height: 200px;
    object-fit: cover;
  }
  .like-button {
    transition: background-color 0.3s, color 0.3s;
  }
  .like-button:hover {
    background-color: #28a745;
    color: #fff;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  </style>  
  
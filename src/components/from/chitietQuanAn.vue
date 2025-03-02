<template>
  <div class="container mt-5">
    <!-- Loader -->
    <div v-if="isLoading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Đang tải...</span>
      </div>
    </div>

    <!-- Nội dung quán ăn -->
    <div v-else class="row">
      <!-- Ảnh quán ăn -->
      <div class="col-md-7 mb-6">
        <div id="carouselImages" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(image, index) in quanAn.images" :key="index" :class="['carousel-item', { active: index === 0 }]">
              <img :src="getImageUrl(image)" class="d-block w-100 rounded" alt="Ảnh quán ăn" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselImages" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselImages" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <!-- Thông tin quán ăn -->
      <div class="col-md-5 mb-5">
        <div class="card shadow-sm p-4">
          <h2 class="text-primary"><i class="fas fa-store"></i> {{ quanAn.name }}</h2>
          <p><i class="fas fa-map-marker-alt"></i> {{ quanAn.address }}</p>
          <p><i class="fas fa-city"></i> {{ quanAn.province }}</p>
          <p><i class="fas fa-utensils"></i> {{ quanAn.type }}</p>
          <p><i class="fas fa-phone"></i> {{ quanAn.phone }}</p>
          <p><i class="fas fa-clock"></i> {{ quanAn.openingHours }}</p>
          <p class="text-success fw-bold"><i class="fas fa-dollar-sign"></i> {{ formatCurrency(quanAn.averagePrice) }}</p>
          <p class="text-warning"><i class="fas fa-star"></i> {{ quanAn.rating }} ⭐</p>
          <p class="text-muted"><i class="fas fa-info-circle"></i> {{ quanAn.description }}</p>

          <div class="mt-3">
            <button @click="toggleLike" class="btn" :class="liked ? 'btn-success' : 'btn-outline-success'">
              <i class="fas fa-thumbs-up"></i> {{ liked ? 'Đã thích' : 'Thích' }}
            </button>
            <button @click="shareQuanAn" class="btn btn-outline-info">
              <i class="fas fa-share"></i> Chia sẻ
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bình luận -->
    <div class="mt-5">
      <h3 class="text-primary"><i class="fas fa-comments"></i> Bình luận</h3>

      <!-- Form bình luận -->
      <div v-if="user" class="mb-4">
        <textarea v-model="newComment" class="form-control" rows="3" placeholder="Nhập bình luận..."></textarea>
        <button @click="submitComment" class="btn btn-primary mt-2"><i class="fas fa-paper-plane"></i> Gửi</button>
      </div>
      <p v-else class="text-muted">Bạn cần <a href="#" @click="showLogin">đăng nhập</a> để bình luận.</p>

      <!-- Danh sách bình luận -->
      <div v-if="comments.length">
        <div v-for="comment in comments" :key="comment.id" class="card mb-2 p-3">
          <p><strong>{{ comment.user }}</strong> - {{ comment.date }}</p>
          <p>{{ comment.text }}</p>
        </div>
      </div>
      <p v-else class="text-muted">Chưa có bình luận nào.</p>
    </div>

    <!-- Đăng nhập / Đăng ký -->
    <div v-if="showLoginModal" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Đăng nhập</h5>
            <button type="button" class="btn-close" @click="closeLogin"></button>
          </div>
          <div class="modal-body">
            <input v-model="username" class="form-control mb-2" placeholder="Tên đăng nhập">
            <input v-model="password" type="password" class="form-control mb-2" placeholder="Mật khẩu">
            <button @click="login" class="btn btn-primary w-100">Đăng nhập</button>
            <p class="text-center mt-2">Chưa có tài khoản? <a href="#" @click="register">Đăng ký</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data.js"; // Import dữ liệu từ data.js

export default {
  data() {
    return {
      quanAn: {},
      comments: [],
      newComment: "",
      liked: false,
      isLoading: false,
      user: null,
      showLoginModal: false,
      username: "",
      password: ""
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `/anlaca/img/${imageName}`;
    },
    fetchQuanAn() {
      this.isLoading = true;
      const id = parseInt(this.$route.params.id);
      this.quanAn = data.danhSachQuanAn.find((item) => item.id === id) || {};
      this.comments = data.comments.filter(comment => comment.quanAnId === id);
      this.isLoading = false;
    },
    submitComment() {
      if (!this.newComment.trim()) return;
      const newCommentObj = {
        id: Date.now(),
        quanAnId: this.quanAn.id,
        user: this.user,
        text: this.newComment,
        date: new Date().toLocaleString()
      };
      this.comments.push(newCommentObj);
      data.comments.push(newCommentObj); // Save to data.js
      this.newComment = "";
    },
    toggleLike() {
      this.liked = !this.liked;
    },
    shareQuanAn() {
      navigator.clipboard.writeText(window.location.href);
      alert("Link đã được sao chép!");
    },
    showLogin() {
      this.showLoginModal = true;
    },
    closeLogin() {
      this.showLoginModal = false;
    },
    login() {
      if (this.username && this.password) {
        this.user = this.username;
        alert("Đăng nhập thành công!");
        this.closeLogin();
      } else {
        alert("Vui lòng nhập thông tin!");
      }
    },
    register() {
      alert("Chức năng đăng ký đang được phát triển!");
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
    }
  },
  mounted() {
    this.fetchQuanAn();
  }
};
</script>

<style scoped>
.carousel img {
  height: 400px;
  object-fit: cover;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
.modal {
  background: rgba(0, 0, 0, 0.5);
}
</style>

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
          <p>
            <a :href="quanAn.googleMapLink" target="_blank" class="btn btn-outline-success btn-sm">
              <i class="fas fa-map"></i> Xem trên Google Maps
            </a>
          </p>
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

    <div class="mt-5">
      <h3 class="text-primary"><i class="fas fa-comments"></i> Bình luận</h3>
      <div v-if="user" class="mb-4">
        <textarea v-model="newComment" class="form-control" rows="3" placeholder="Nhập bình luận..."></textarea>
        <button @click="submitComment" class="btn btn-primary mt-2"><i class="fas fa-paper-plane"></i> Gửi</button>
      </div>
      <p v-else class="text-muted">Bạn cần <a href="#" @click="showLogin">đăng nhập</a> để bình luận.</p>

      <div v-if="comments.length">
        <div v-for="comment in comments" :key="comment.id" class="card mb-2 p-3">
          <p><strong>{{ comment.user }}</strong> - <small class="text-muted">{{ comment.date }}</small></p>
          <p>{{ comment.text }}</p>
        </div>
      </div>
      <p v-else class="text-muted">Chưa có bình luận nào.</p>
    </div>

    <!-- Quán ăn liên quan -->
    <div v-if="relatedQuanAns.length" class="mt-5 mb-5">
      <h3 class="text-primary"><i class="fas fa-utensils"></i> Quán liên quan</h3>
      <div class="row">
        <transition-group name="fade" tag="div" class="row">
          <div v-for="item in relatedQuanAns" :key="item.id" class="col-md-4">
            <div class="card shadow-sm mt-5" @click="goToQuanAn(item.id)">
              <img :src="getImageUrl(item.images[0])" class="card-img-top" alt="Quán liên quan">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="text-muted">{{ item.address }}</p>
                <p class="text-warning"><i class="fas fa-star"></i> {{ item.rating }}</p>
                <button class="btn btn-outline-primary btn-sm">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data.js"; 

export default {
  data() {
    return {
      quanAn: {},
      comments: [],
      relatedQuanAns: [],
      newComment: "",
      liked: false,
      isLoading: false,
      user: null
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `/img/${imageName}`;
    },
    fetchQuanAn() {
      this.isLoading = true;
      const id = parseInt(this.$route.params.id);
      this.quanAn = data.danhSachQuanAn.find((item) => item.id === id) || {};

      // Xử lý quán ăn liên quan
      let related = [];

      if (this.quanAn.relatedRestaurants && this.quanAn.relatedRestaurants.length) {
        related = data.danhSachQuanAn.filter(item => this.quanAn.relatedRestaurants.includes(item.id));
      } else {
        related = data.danhSachQuanAn.filter(
          (item) => item.province === this.quanAn.province && item.id !== this.quanAn.id
        );

        if (related.length < 6) {
          let additional = data.danhSachQuanAn.filter(
            (item) => item.type === this.quanAn.type && item.province !== this.quanAn.province
          );
          related = [...related, ...additional];
        }
      }

      this.relatedQuanAns = related.slice(0, 6);
      this.comments = data.comments.filter(comment => comment.quanAnId === id);
      this.isLoading = false;
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
    },
    toggleLike() {
      this.liked = !this.liked;
    },
    shareQuanAn() {
      navigator.clipboard.writeText(window.location.href);
      alert("Link đã được sao chép!");
    },
    goToQuanAn(id) {
      this.$router.push({ name: "QuanAnDetails", params: { id } }).then(() => {
        this.fetchQuanAn();
      });
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
.card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

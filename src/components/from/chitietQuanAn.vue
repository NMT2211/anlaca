<template>
  <div>
    <!-- Loader -->
    <div v-if="isLoading" id="loader" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Đang tải...</span>
      </div>
    </div>

    <!-- Nội dung quán ăn -->
    <div v-else>
      <div class="row mt-5">
        <!-- Thông tin quán ăn -->
        <div class="col-md-9 mb-5">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ quanAn.name }}</h5>
              <p class="card-text">Địa chỉ: {{ quanAn.address }}</p>
              <p class="card-text">Google Map Link: 
                  <a 
                    :href="quanAn.googleMapLink" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-primary"
                  >
                    Xem trên Google Maps
                  </a>
                </p>

              <p class="card-text">Tỉnh/Thành phố: {{ quanAn.province }}</p>
              <p class="card-text">Loại quán: {{ quanAn.type }}</p>
              <p class="card-text">Giá trung bình: {{ quanAn.averagePrice }} VND</p>
              <p class="card-text">Đánh giá: {{ quanAn.rating }} ⭐</p>
              <p class="card-text">Mô tả: {{ quanAn.description }}</p>
              <button class="btn btn-outline-success me-2" @click="likeQuanAn">
                <i class="fas fa-thumbs-up"></i> Thích
              </button>
              <button class="btn btn-outline-info" @click="shareQuanAn">
                <i class="fas fa-share"></i> Chia sẻ
              </button>
            </div>
          </div>
        </div>

        <!-- Quán ăn liên quan -->
        <div class="col-md-3 mb-5">
          <h5 class="mb-3">Quán ăn liên quan</h5>
          <div
            v-for="relatedQuanAn in relatedQuanAns"
            :key="relatedQuanAn.id"
            class="card card1 shadow-sm mb-3"
          >
            <div class="card-body">
              <h6 class="card-title">{{ relatedQuanAn.name }}</h6>
              <p class="card-text">Địa chỉ: {{ relatedQuanAn.address }}</p>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="goToQuanAn(relatedQuanAn.id)"
              >
                Xem ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quanAn: {}, // Thông tin quán ăn hiện tại
      relatedQuanAns: [], // Danh sách quán ăn liên quan
      isLoading: false, // Trạng thái tải dữ liệu
    };
  },
  methods: {
    // Gọi API để lấy thông tin quán ăn hiện tại
    async fetchQuanAn() {
      this.isLoading = true;
      try {
        const id = this.$route.params.id;
        if (!id) {
          alert("Không tìm thấy quán ăn.");
          this.$router.push("/");
          return;
        }
        const response = await axios.get(
          `http://localhost:8080/ASM_KiNangLamViec/listQuanAn_api/${id}`
        );
        if (response.status === 200) {
          this.quanAn = response.data;
          this.fetchRelatedQuanAns(); // Lấy quán ăn liên quan sau khi tải xong quán ăn chính
        } else {
          alert("Không thể tải chi tiết quán ăn.");
          this.$router.push("/");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        alert("Không thể tải quán ăn. Vui lòng thử lại sau.");
        this.$router.push("/");
      } finally {
        this.isLoading = false;
      }
    },

    // Gọi API để lấy danh sách quán ăn liên quan
    async fetchRelatedQuanAns() {
      try {
        const response = await axios.get("http://localhost:8080/ASM_KiNangLamViec/listQuanAn_api");
        if (response.status === 200) {
          this.relatedQuanAns = response.data.filter(
            (item) => item.province === this.quanAn.province && item.id !== this.quanAn.id
          );
        } else {
          console.warn("Không thể tải danh sách quán ăn liên quan.");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API quán ăn liên quan:", error);
      }
    },

    // Chuyển đến quán ăn khác
    goToQuanAn(id) {
      this.$router.push({ name: "QuanAnDetails", params: { id } }).then(() => {
        window.location.reload(); // Tải lại trang sau khi điều hướng thành công
      });
    },

    // Like quán ăn
    likeQuanAn() {
      alert("Bạn đã thích quán ăn này!");
    },

    // Chia sẻ quán ăn
    shareQuanAn() {
      alert("Link chia sẻ quán ăn đã được sao chép!");
    },
  },
  mounted() {
    this.fetchQuanAn(); // Gọi API khi component được mount
  },
};
</script>

<style scoped>
.ratio {
  width: 100%;
  border-radius: 10px;
}
.card1 {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s;
}
.card1:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
</style>

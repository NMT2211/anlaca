<template>
    <div class="container mt-5">
      <!-- Tabs -->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="video-edit-tab"
            data-bs-toggle="tab"
            data-bs-target="#video-edit"
            type="button"
            role="tab"
            aria-controls="video-edit"
            aria-selected="true"
          >
            Thêm/Sửa Tiểu Phẩm
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="video-list-tab"
            data-bs-toggle="tab"
            data-bs-target="#video-list"
            type="button"
            role="tab"
            aria-controls="video-list"
            aria-selected="false"
          >
            Danh Sách Tiểu Phẩm
          </button>
        </li>
      </ul>
  
      <div class="tab-content mt-3">
        <!-- Video Edit Tab -->
        <div
          class="tab-pane fade show active"
          id="video-edit"
          role="tabpanel"
          aria-labelledby="video-edit-tab"
        >
          <div class="card">
            <div class="card-header">Thêm/Sửa Tiểu Phẩm</div>
            <div class="card-body">
              <form @submit.prevent="saveVideo">
                <div class="mb-3">
                  <label for="id" class="form-label">ID:</label>
                  <input
                    type="text"
                    id="id"
                    v-model="videoForm.id"
                    class="form-control"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="title" class="form-label">Tiêu Đề:</label>
                  <input
                    type="text"
                    id="title"
                    v-model="videoForm.title"
                    class="form-control"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="poster" class="form-label">Ảnh Bìa:</label>
                  <input
                    type="file"
                    id="poster"
                    @change="handleFileUpload"
                    class="form-control"
                  />
                  <div v-if="videoForm.poster" class="mt-2">
                    <small class="text-muted">File đã chọn: {{ videoForm.poster }}</small>
                  </div>
                </div>
  
                <div class="mb-3">
                  <label for="link" class="form-label">Link Video:</label>
                  <input
                    type="text"
                    id="link"
                    v-model="videoForm.link"
                    class="form-control"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="description" class="form-label">Mô Tả:</label>
                  <textarea
                    id="description"
                    v-model="videoForm.description"
                    class="form-control"
                    required
                  ></textarea>
                </div>
  
                <div class="mb-3">
                  <label for="views" class="form-label">Lượt Xem:</label>
                  <input
                    type="number"
                    id="views"
                    v-model="videoForm.views"
                    class="form-control"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="active" class="form-label">Kích Hoạt:</label>
                  <input
                    type="checkbox"
                    id="active"
                    v-model="videoForm.active"
                    class="form-check-input"
                  />
                </div>
  
                <div class="text-center">
                  <button
                    class="btn btn-success me-2"
                    type="button"
                    @click="createVideo"
                  >
                    Thêm
                  </button>
                  <button
                    class="btn btn-primary me-2"
                    type="button"
                    @click="updateVideo"
                  >
                    Cập Nhật
                  </button>
                  <button
                    class="btn btn-secondary"
                    type="button"
                    @click="resetForm"
                  >
                    Đặt Lại
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <!-- Video List Tab -->
        <div
          class="tab-pane fade"
          id="video-list"
          role="tabpanel"
          aria-labelledby="video-list-tab"
        >
          <div class="card">
            <div class="card-header">Danh Sách Tiểu Phẩm</div>
            <div class="card-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Poster</th>
                    <th>Tiêu Đề</th>
                    <th>Lượt Xem</th>
                    <th>Link</th>
                    <th>Active</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="video in videoList" :key="video.id">
                    <td>{{ video.id }}</td>
                    <td>
                      <img
                        :src="getImagePath(video.poster)"
                        class="card-img-top rounded"
                        :alt="video.title"
                      />
                    </td>
                    <td>{{ video.title }}</td>
                    <td>{{ video.views }}</td>
                    <td><a :href="video.link" target="_blank">Xem</a></td>
                    <td>{{ video.active ? "Đang Kích Hoạt" : "Chưa Kích Hoạt" }}</td>
                    <td>
                      <button
                        class="btn btn-link text-primary"
                        @click="editVideo(video)"
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button
                        class="btn btn-link text-danger"
                        @click="deleteVideo(video.id)"
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="videoList.length === 0" class="text-center mt-3">
                <p>Không có tiểu phẩm nào được tìm thấy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  const API_URL = "http://localhost:8082/ASM_Java4/quanlivideo_api";
  const UPLOAD_URL = "http://localhost:8082/ASM_Java4/upload_poster";
  
  export default {
    data() {
      return {
        videoList: [],
        videoForm: {
          id: "",
          title: "",
          poster: "",
          link: "",
          description: "",
          views: 0,
          active: true,
        },
        posterFile: null,
      };
    },
    methods: {
      async fetchVideos() {
        try {
          const response = await axios.get(API_URL);
          this.videoList = response.data;
        } catch (error) {
          alert("Lỗi khi tải danh sách video. Vui lòng thử lại.");
        }
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.posterFile = file; // Lưu file để upload
          this.videoForm.poster = file.name; // Lưu tên file vào videoForm.poster
        }
      },
      async createVideo() {
        try {
          if (this.posterFile) {
            const formData = new FormData();
            formData.append("file", this.posterFile);
  
            const uploadResponse = await axios.post(UPLOAD_URL, formData);
            this.videoForm.poster = uploadResponse.data.filePath;
          }
  
          await axios.post(API_URL, this.videoForm);
          alert("Thêm tiểu phẩm thành công!");
          this.fetchVideos();
          this.resetForm();
        } catch (error) {
          alert("Không thể thêm tiểu phẩm. Vui lòng thử lại.");
        }
      },
      async updateVideo() {
        try {
          if (this.posterFile) {
            const formData = new FormData();
            formData.append("file", this.posterFile);
  
            const uploadResponse = await axios.post(UPLOAD_URL, formData);
            this.videoForm.poster = uploadResponse.data.filePath;
          }
  
          await axios.put(`${API_URL}/${this.videoForm.id}`, this.videoForm);
          console.log(this.videoForm.id);  
          alert("Cập nhật tiểu phẩm thành công!");
          
          await this.fetchVideos();
          this.resetForm();
        } catch (error) {
          alert("Không thể cập nhật tiểu phẩm. Vui lòng thử lại.");
        }
      },
      async deleteVideo(id) {
        if (confirm("Bạn có chắc chắn muốn xóa tiểu phẩm này?")) {
          try {
            await axios.delete(`${API_URL}/${id}`);
            alert("Xóa tiểu phẩm thành công!");
            this.fetchVideos();
          } catch (error) {
            alert("Không thể xóa tiểu phẩm. Vui lòng thử lại.");
          }
        }
      },
      editVideo(video) {
        this.videoForm = { ...video };
        document.getElementById("video-edit-tab").click();
      },
      resetForm() {
        this.videoForm = {
          id: "",
          title: "",
          poster: "",
          link: "",
          description: "",
          views: 0,
          active: true,
        };
        this.posterFile = null;
      },
      getImagePath(filename) {
        return filename ? `/img/${filename}` : "/img/default-poster.jpg";
      },
    },
    mounted() {
      this.fetchVideos();
    },
  };
  </script>
  
  <style scoped>
  .nav-tabs .nav-link {
    cursor: pointer;
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
  .card-img-top {
    height: 50px;
    object-fit: cover;
  }
  </style>
  
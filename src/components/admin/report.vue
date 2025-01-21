<template>
    <div class="container mt-5">
      <!-- Tabs -->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="favorites-tab"
            data-bs-toggle="tab"
            data-bs-target="#favorites"
            type="button"
            role="tab"
            aria-controls="favorites"
            aria-selected="true"
          >
            FAVORITES
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="favorite-users-tab"
            data-bs-toggle="tab"
            data-bs-target="#favorite-users"
            type="button"
            role="tab"
            aria-controls="favorite-users"
            aria-selected="false"
          >
            FAVORITE USERS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="shared-friends-tab"
            data-bs-toggle="tab"
            data-bs-target="#shared-friends"
            type="button"
            role="tab"
            aria-controls="shared-friends"
            aria-selected="false"
          >
            SHARED FRIENDS
          </button>
        </li>
      </ul>
  
      <div class="tab-content mt-3" id="myTabContent">
        <!-- FAVORITES Tab -->
        <div
          class="tab-pane fade show active"
          id="favorites"
          role="tabpanel"
          aria-labelledby="favorites-tab"
        >
          <div class="card">
            <div class="card-header">FAVORITES</div>
            <div class="card-body">
              <table class="table table-bordered video-list">
                <thead>
                  <tr>
                    <th>VIDEO TITLE</th>
                    <th>FAVORITE COUNT</th>
                    <th>LATEST DATE</th>
                    <th>OLDEST DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(video, index) in listFavorite" :key="index">
                    <td>{{ video.videoTitle }}</td>
                    <td>{{ video.favoriteCount }}</td>
                    <td>{{ video.newestDate }}</td>
                    <td>{{ video.oldestDate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
        <!-- FAVORITE USERS Tab -->
        <div
          class="tab-pane fade"
          id="favorite-users"
          role="tabpanel"
          aria-labelledby="favorite-users-tab"
        >
          <div class="card">
            <div class="card-header">FAVORITE USERS</div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <label class="form-label">VIDEO TITLE:</label>
                <select class="form-select" v-model="selectedVideoFilter" @change="fetchFavoriteUsers">
                  <option value="">Select Filter</option>
                  <option
                    v-for="(option, index) in filterOptions"
                    :key="index"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <table class="table table-bordered video-list">
                <thead>
                  <tr>
                    <th>USERNAME</th>
                    <th>FULLNAME</th>
                    <th>EMAIL</th>
                    <th>FAVORITE DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in listFavoriteUser" :key="index">
                    <td>{{ user.username }}</td>
                    <td>{{ user.fullname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.favoriteDate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
        <!-- SHARED FRIENDS Tab -->
        <div
          class="tab-pane fade"
          id="shared-friends"
          role="tabpanel"
          aria-labelledby="shared-friends-tab"
        >
          <div class="card">
            <div class="card-header">SHARED FRIENDS</div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <label class="form-label">VIDEO TITLE:</label>
                <select class="form-select" v-model="selectedSharedFilter" @change="fetchSharedFriends">
                  <option value="">Select Filter</option>
                  <option
                    v-for="(option, index) in filterOptions"
                    :key="index"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <table class="table table-bordered video-list">
                <thead>
                  <tr>
                    <th>SENDER NAME</th>
                    <th>SENDER EMAIL</th>
                    <th>RECEIVER EMAIL</th>
                    <th>SENT DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(shared, index) in listShared" :key="index">
                    <td>{{ shared.senderName }}</td>
                    <td>{{ shared.senderEmail }}</td>
                    <td>{{ shared.receiverEmail }}</td>
                    <td>{{ shared.sharedDate }}</td>
                  </tr>
                </tbody>
              </table>
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
        listFavorite: [],
        listFavoriteUser: [],
        listShared: [],
        selectedVideoFilter: "",
        selectedSharedFilter: "",
        filterOptions: [],
      };
    },
    methods: {
      async fetchFavorites() {
        try {
          const response = await axios.get("http://localhost:8082/ASM_Java4/report_api");
          this.listFavorite = response.data.map((item) => ({
            videoTitle: item.videoTitle,
            favoriteCount: item.favoriteCount,
            newestDate: item.newestDate,
            oldestDate: item.oldestDate,
          }));
        } catch (error) {
          alert("Failed to fetch favorite stats.");
        }
      },
      async fetchFavoriteUsers() {
        try {
          const response = await axios.get(`http://localhost:8082/report_api?filter=likedUsers&videoId=${this.selectedVideoFilter}`);
          this.listFavoriteUser = response.data;
        } catch (error) {
          alert("Failed to fetch favorite users.");
        }
      },
      async fetchSharedFriends() {
        try {
          const response = await axios.get(`http://localhost:8082/report_api?filter=sharedUsers&videoId=${this.selectedSharedFilter}`);
          this.listShared = response.data;
        } catch (error) {
          alert("Failed to fetch shared friends.");
        }
      },
    },
    mounted() {
      this.fetchFavorites();
    },
  };
  </script>
  
  <style scoped>
  /* Styling giữ nguyên */
  </style>
  
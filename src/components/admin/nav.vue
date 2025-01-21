<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container-fluid">
        <!-- Logo -->
        <router-link to="/home" class="navbar-brand">
          <img alt="Logo" :src="`${basePath}/assets/img/logo2.png`" />
        </router-link>
        <!-- Toggle button for mobile view -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Navbar items -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Home -->
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/home">
                <i class="bi bi-house-door me-1"></i>Home
              </router-link>
            </li>
            <!-- Videos -->
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/video">
                <i class="bi bi-film me-1"></i>Videos
              </router-link>
            </li>
            <!-- Users -->
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/user">
                <i class="bi bi-person-fill me-1"></i>Users
              </router-link>
            </li>
            <!-- Reports -->
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/report">
                <i class="bi bi-bar-chart-line me-1"></i>Reports
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        basePath: process.env.VUE_APP_BASE_URL || "", // Thay đổi basePath phù hợp với cấu hình dự án của bạn
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar-brand img {
    height: 40px;
    width: auto;
  }
  
  .nav-item .nav-link {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .navbar-nav .nav-item {
    margin-left: 10px;
    margin-right: 10px;
  }
  
  /* Adjust navbar background color */
  .navbar-dark {
    background-color: #343a40;
  }
  
  /* Hover effect */
  .nav-link:hover {
    background-color: #495057;
    border-radius: 5px;
  }
  
  /* Customize the icon spacing */
  .nav-link i {
    font-size: 1.2rem;
    margin-right: 8px;
  }
  
  /* Navbar collapse for mobile */
  @media (max-width: 768px) {
    .navbar-nav {
      text-align: center;
    }
  }
  </style>
  
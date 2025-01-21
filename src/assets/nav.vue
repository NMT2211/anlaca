<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="home.jsp">
                <img class="" alt="Logo" :src="logoPath">
            </a>
            
            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- Navbar items -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <!-- My Favorites -->
                    <li class="nav-item">
                        <a class="nav-link" href="favorites.jsp">
                            <i class="fas fa-heart me-2"></i>My Favorites
                        </a>
                    </li>
                    
                    <!-- My Account with Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user-circle me-2"></i>My Account
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="login.jsp">
                                    <i class="fas fa-sign-in-alt me-2"></i>Login
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="forgotPassword.jsp">
                                    <i class="fas fa-key me-2"></i>Forgot Password
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="registration.jsp">
                                    <i class="fas fa-user-plus me-2"></i>Registration
                                </a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="logoff.jsp">
                                    <i class="fas fa-sign-out-alt me-2"></i>Logoff
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="changePassword.jsp">
                                    <i class="fas fa-lock me-2"></i>Change Password
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="editProfile.jsp">
                                    <i class="fas fa-edit me-2"></i>Edit Profile
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Trạng thái mở/tắt menu
  const isNavOpen = ref(false); // Mở hoặc đóng navbar trên màn hình nhỏ
  const isDropdownOpen = ref(false); // Mở hoặc đóng dropdown
  
  // Đường dẫn logo
  import logoPath from '@/assets/logo2.png';

  
  // Hàm xử lý mở/tắt navbar
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
  };
  
  // Hàm xử lý mở/tắt dropdown
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  </script>
  
  <style scoped>
    .navbar-brand img {
        height: 40px;
        width: auto;
    }
    .navbar-nav .nav-link:hover {
        color: #ff6600; /* Màu cam khi hover */
    }
    .navbar-nav .nav-link {
        color: #e3e3e3; /* Màu cam khi hover */
    }
    
    
    .dropdown-menu .dropdown-item:hover {
        color: #fff; /* Màu chữ khi hover */
        background-color: #ff6600; /* Màu nền cam khi hover */
    }
  </style>
  
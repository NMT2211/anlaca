import { createRouter, createWebHistory } from "vue-router";
import listQuanAn from "../components/from/listQuanAn.vue";
import chitietQuanAn from "../components/from/chitietQuanAn.vue";
import favorites from "../components/from/favorites.vue";
import Login from "../components/auth/login.vue";
import SignUp from "../components/auth/sign_up.vue";
import profile from "../components/auth/edit_profile.vue";
import changepassword from "../components/auth/change_password.vue";
import forgotpassword from "../components/auth/forgot_password.vue";

// Admin routes
import quanliuser from "../components/admin/quanliuser.vue";
import quanlivideo from "../components/admin/quanlivideo.vue";
import report from "../components/admin/report.vue";

const routes = [
  // Routes dành cho user
  {
    path: "/",
    name: "listQuanAn",
    component: listQuanAn,
     // Yêu cầu đăng nhập
  },
  {
    path: "/QuanAnDetails/:id",
    name: "QuanAnDetails",
    component: chitietQuanAn,
    
  },
  {
    path: "/favorites",
    name: "favorites",
    component: favorites,
    props: true,
    meta: { requiresAuth: true }, // Yêu cầu đăng nhập
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign_up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/edit-profile",
    name: "profile",
    component: profile,
    meta: { requiresAuth: true }, // Yêu cầu đăng nhập
  },
  {
    path: "/change-password",
    name: "changepassword",
    component: changepassword,
    meta: { requiresAuth: true }, // Yêu cầu đăng nhập
  },
  {
    path: "/forgot-password",
    name: "forgotpassword",
    component: forgotpassword,
  },
  // Routes dành cho admin
  {
    path: "/admin/users",
    name: "quanliuser",
    component: quanliuser,
    meta: { requiresAuth: true, isAdmin: true }, // Chỉ dành cho admin
  },
  {
    path: "/admin/videos",
    name: "quanlivideo",
    component: quanlivideo,
    meta: { requiresAuth: true, isAdmin: true }, // Chỉ dành cho admin
  },
  {
    path: "/admin/reports",
    name: "report",
    component: report,
    meta: { requiresAuth: true, isAdmin: true }, // Chỉ dành cho admin
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation Guard kiểm tra quyền truy cập
router.beforeEach((to, from, next) => {
  const user = JSON.parse(sessionStorage.getItem("user")); // Lấy thông tin người dùng từ localStorage
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true"; // Kiểm tra trạng thái đăng nhập
  const isAdmin = user?.isAdmin // Kiểm tra người dùng có phải admin
  console.log(isAdmin);


  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" }); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
  } else if (to.meta.isAdmin && !isAdmin) {
    alert("Bạn không có quyền truy cập vào trang này!");
    next(false); // Hủy điều hướng nếu không phải admin
  } else {
    next(); // Tiếp tục nếu quyền hợp lệ
  }
});

export default router;

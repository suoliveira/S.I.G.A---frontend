import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import DegpPage from "@/views/DegpPage.vue";
import DegpAddPage from "@/views/DegpAddPage.vue";
import ManagementPage from "@/views/ManagementPage.vue";
import RaciPage from "@/views/RaciPage.vue";
import RaciAddPage from "@/views/RaciAddPage.vue";
import SecurityPage from "@/views/SecurityPage.vue";
import SecurityAddPage from "@/views/DegpAddPage.vue";


const routes = [
  {
    name: 'loginScreen',
    path: '/',
    component: LoginPage,
  },
  {
    name: "DegpScreen",
    path: "/degp",
    component: DegpPage,
  },
  {
    name: "DegpAddScreen",
    path: "/degp-add",
    component: DegpAddPage,
  },
  {
    name: "ManagementScreen",
    path: "/gestão",
    component: ManagementPage,
  },
  {
    name: "RaciScreen",
    path: "/raci",
    component: RaciPage,
  },
  {
    name: "RaciAddScreen",
    path: "/raci-add",
    component: RaciAddPage,
  },
  {
    name: "SecurityScreen",
    path: "/guarita",
    component: SecurityPage,
  },
  {
    name: "SecurityAddScreen",
    path: "/guarita-add",
    component: SecurityAddPage,
  }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

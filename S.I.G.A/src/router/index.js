import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import DegpPage from '@/views/DegpPage.vue';
import DegpRegisterPage from '@/views/DegpRegisterPage.vue';
import ManagementPage from '@/views/ManagementPage.vue';
import RaciPage from '@/views/RaciPage.vue';
import RaciRegisterPage from '@/views/RaciRegisterPage.vue';
import SecurityPage from '@/views/SecurityPage.vue';
import SecurityRegisterPage from '@/views/SecurityRegisterPage.vue';
import AdmPage from '@/views/AdmPage.vue';
import AdmRegisterPage from '@/views/AdmRegisterPage.vue';
import QrCodePage from '@/views/QrCodePage.vue';


const routes = [
  {
    name: 'loginScreen',
    path: '/',
    component: LoginPage,
  },
  {
    name: 'degpScreen',
    path: '/degp',
    component: DegpPage,
  },
  {
    name: 'degpRegisterScreen',
    path: '/registrar-degp',
    component: DegpRegisterPage,
  },
  {
    name: 'managementScreen',
    path: '/gestao',
    component: ManagementPage,
  },
  {
    name: 'raciScreen',
    path: '/raci',
    component: RaciPage,
  },
  {
    name: 'raciRegisterScreen',
    path: '/registrar-raci',
    component: RaciRegisterPage,
  },
  {
    name: 'securityScreen',
    path: '/guarita',
    component: SecurityPage,
  },
  {
    name: 'securityRegisterScreen',
    path: '/registrar-visitante',
    component: SecurityRegisterPage,
  },
  {
    name: 'admScreen',
    path: '/administracao',
    component: AdmPage,
  },
  {
    name: "admRegisterScreen",
    path: "/registrar-administracao",
    component: AdmRegisterPage,
  }, 
  {
    name: 'qrCodeScreen',
    path: '/acesso',
    component: QrCodePage,
  }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

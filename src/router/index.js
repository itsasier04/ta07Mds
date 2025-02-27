import { createRouter, createWebHistory } from 'vue-router';
import CalculadoraAigua from '@/views/CalculadoraAiguaView.vue';
import CalculadoraConsumibles from '@/views/CalculadoraConsumiblesView.vue';
import CalculadoraElectricitat from '@/views/CalculadoraElectricitatView.vue';

const routes = [
  {
    path: '/aigua',
    name: 'Aigua',
    component: CalculadoraAigua
  },
  {
    path: '/consumibles',
    name: 'Consumibles',
    component: CalculadoraConsumibles
  },
  {
    path: '/electricitat',
    name: 'Electricitat',
    component: CalculadoraElectricitat
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
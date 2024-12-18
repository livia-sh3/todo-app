import { createWebHistory, createRouter } from 'vue-router'
import TodosView from "./views/TodosView.vue";
import CompletedView from "./views/CompletedView.vue";

// mapeando rotas para componentes, indicando qual view vai ser renderizada
const routes = [
    { path: '/todos', component: TodosView },
    { path: '/completed', component: CompletedView },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router
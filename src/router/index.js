import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Students',
    component: () => import('../views/student/Students.vue')
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('../views/student/Students.vue')
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: () => import('../views/teacher/Teachers.vue'),
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('../views/group/Groups.vue')
  },
  {
    path: '/tolov',
    name: 'Tolov',
    component: () => import('../views/tolov/Tolov.vue')
  },
  {
    path: '/students/student-edit',
    name: 'edit',
    component: () => import('../views/student/Modal.vue'), 
  },
  {
    path: '/students/new-student',
    name: 'edit',
    component: () => import('../views/student/Modal.vue'), 
  },
  {
    path: '/students/:id',
    name: 'ViewStudent',
    component: () => import('../views/student/ViewStudent.vue'), 
  },
  {
    path: '/teachers/teacher-edit',
    name: 'editTech',
    component: () => import('../views/teacher/Modal.vue'), 
  },
  {
    path: '/teachers/new-teacher',
    name: 'editTech',
    component: () => import('../views/teacher/Modal.vue'), 
  },
  {
    path: '/teachers/:id',
    name: 'ViewTeacher',
    component: () => import('../views/teacher/ViewTeacher.vue'), 
  },
  {
    path: '/groups/:id',
    name: 'ViewGroup',
    component: () => import('../views/group/ViewGroup.vue'), 
  },
  {
    path: '/groups/:id/:view',
    name: 'ViewStudentGroup',
    component: () => import('../views/group/ViewStudentGroup.vue'), 
  },
  {
    path: '/tolov/:id',
    name: 'TolovStudent',
    component: () => import('../views/tolov/TolovStudent.vue'), 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

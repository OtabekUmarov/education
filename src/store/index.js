import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [],
    teachers: [],
    groups:[],
    search: '',
    searchTech: '',
    studentId: '',
    teacherId: '',
    groupId: '',
    studentGroupId: ''
  },
  getters: {
    students(state){
      return state.students.filter(l => {
        return l.name.toLowerCase().indexOf(state.search.toLowerCase()) !== -1 || l.surname.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      })
      // return state.students
    },
    teachers(state){
      return state.teachers.filter(l => {
        return l.name.toLowerCase().indexOf(state.searchTech.toLowerCase()) !== -1 || l.surname.toLowerCase().indexOf(state.searchTech.toLowerCase()) !== -1
      })
      // return state.teachers
    },
    getSearch(state){
      return s => {
        state.search = s
      }
    },
    getSearchTech(state){
      return s => {
        state.searchTech = s
      }
    },
    showStudent(state){
      return s => {
        state.studentId = s
      }
    },
    showStudentGroup(state){
      return s => {
        state.studentGroupId = s
      }
    },
    showTeacher(state){
      return s => {
        state.teacherId = s
      }
    },
    showGroup(state){
      return s => {
        state.groupId = s
      }
    },
    viewStudent(state){
      return state.students.find(s => {
        if(s.id == state.studentId) return s
      })
    },
    viewTeacher(state){
      return state.teachers.find(s => {
        if(s.id == state.teacherId) return s
      })
    },
    viewGroup(state){
      return state.groups.find(s => {
        if(s.id == state.groupId) return s
      })
    },
    viewGroupStudent(state){
      return state.students.find(s => {
        if(s.id == state.studentGroupId) return s
      })
    },
    groups(state){
      return state.groups
    }
  },
  mutations: {
    students(state,payload){
      state.students = payload
    },
    teachers(state,payload){
      state.teachers = payload
    },
    student(state,payload){
      state.students.unshift(payload)
    },
    teacher(state,payload){
      state.teachers.unshift(payload)
    },
    group(state,payload){
      state.groups.unshift(payload)
    },
    groups(state,payload){
      state.groups = payload
    },
  },
  actions: {
    newStudents(context,newStudent){
      axios.post('http://localhost:3000/students', newStudent).then(response => {
        context.commit('student', response.data)
      })
    },
    newTeachers(context,newTeachers){
      axios.post('http://localhost:3000/teachers', newTeachers).then(response => {
        context.commit('teacher', response.data)
      })
    },
    newGroup(context,newGroup){
      axios.post('http://localhost:3000/groups', newGroup).then(response => {
        context.commit('group', response.data)
      })
    },
    students(context){
      axios.get('http://localhost:3000/students').then(response => {
        context.commit('students', response.data)
      })
    },
    teachers(context){
      axios.get('http://localhost:3000/teachers').then(response => {
        context.commit('teachers', response.data)
      })
    },
    groups(context){
      axios.get('http://localhost:3000/groups').then(response => {
        context.commit('groups', response.data)
      })
    },
  },
  modules: {
  }
})

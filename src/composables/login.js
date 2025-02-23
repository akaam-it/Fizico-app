import { reactive } from 'vue'

export const authState = reactive({
     isAuthenticated: false,
     login() {
          this.isAuthenticated = true
     },
     logout() {
          this.isAuthenticated = false
     }
})
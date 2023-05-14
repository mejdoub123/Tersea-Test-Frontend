import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useToast } from "vue-toast-notification";
const toast = useToast();
let config = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: {},
    token: "",
    logged: false,
  }),
  getters: {
    currentUser: (state) => state.user,
    currentToken: (state) => state.token,
    loginStatus: (state) => state.logged,
  },
  actions: {
    //--------------------Get Csrf Token----------------------
    async csrfToken() {
      try {
        await axios.get("sanctum/csrf-cookie", config);
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "top",
          type: "error",
        });
      }
    },
    //---------------------Login-------------------------------
    async login(user) {
      await this.csrfToken();
      try {
        const email = user.email;
        const password = user.password;

        const { data } = await axios.post(
          "api/login",
          { email, password },
          config
        );

        this.user = data.user;
        this.token = data.token;
        this.logged = true;
        toast.open({
          message: `Welcome ${data.user.name}`,
          position: "bottom-left",
          type: "success",
        });
        if (data.user.is_admin) {
          return router.push("/admin");
        }

        return router.push("/employee");
      } catch (err) {
        toast.open({
          message: "Email or Password are invalid !",
          position: "top",
          type: "warning",
        });
      }
    },
    //--------------------------register---------------------------
    async register(user) {
      await this.csrfToken();
      try {
        const {
          name,
          email,
          cin,
          phone,
          address,
          is_admin,
          company_id,
          date_of_birth,
          password,
          password_confirmation,
        } = user;
        const { data } = await axios.post(
          "api/register",
          {
            name,
            email,
            password,
            password_confirmation,
            cin,
            company_id,
            phone,
            is_admin,
            date_of_birth,
            address,
          },
          config
        );

        this.user = data.user;
        this.token = data.token;
        this.logged = true;
        console.log(data);
        if (data.user.is_admin) {
          return router.push("/admin");
        }

        return router.push("/employee");
      } catch (err) {
        toast.open({
          message: "Please enter a valid creds!",
          position: "top",
          type: "warning",
        });
      }
    },
    //-----------------------------logout-----------------------------------
    async logout() {
      try {
        config = {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${this.currentToken}`,
            Accept: "application/json",
          },
        };

        await axios.post("api/logout", null, config);
        toast.open({
          message: "Logout !",
          position: "top",
          type: "warning",
        });
        this.logged = false;
        this.token = "";
        return router.push("/signin");
      } catch (err) {
        console.log(err);
        toast.open({
          message: err.response.data.message,
          position: "top",
          type: "warning",
        });
      }
    },
  },
});

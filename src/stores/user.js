import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useToast } from "vue-toast-notification";
import { useAuthStore } from "./auth";
const toast = useToast();
let auth = useAuthStore();
const config = {
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${auth.currentToken}`,
    Accept: "application/json",
  },
};
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    companies: [],
    invitations: [],
    histories: [],
  }),
  getters: {
    allCompanies: (state) => state.companies,
    allInvitations: (state) => state.invitations,
    allHistories: (state) => state.histories,
  },
  actions: {
    async createCompany(company) {
      try {
        const { name, company_email, admin_id, phone, address } = company;

        const { data } = await axios.post(
          "api/companies",
          { name, company_email, admin_id, phone, address },
          config
        );
        this.companies.push(data);
        console.log(this.companies);
        toast.open({
          message: `Company ${name} created successfully !`,
          position: "bottom-left",
          type: "success",
        });
        return router.push({ name: "all-companies" });
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async getCompany(company_id) {
      let companyExist = {};
      this.companies.forEach((company) => {
        if (company.company.id === company_id) companyExist = company.company;
      });
      if (Object.keys(companyExist).length > 0) {
        return companyExist;
      }
    },
    async updateProfile(updatedProfile) {
      try {
        const { id, name, email, cin, phone, address } = updatedProfile;

        const { data } = await axios.put(
          `api/users/${id}`,
          { name, email, cin, phone, address },
          config
        );
        auth.user.name = data.user.name;
        auth.user.email = data.user.email;
        auth.user.cin = data.user.cin;
        auth.user.phone = data.user.phone;
        auth.user.address = data.user.address;
        toast.open({
          message: `Profile updated successfully !`,
          position: "bottom-left",
          type: "success",
        });
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async getCompanies() {
      try {
        const { data } = await axios.get("api/companies", config);
        this.companies = data.companies;
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async sendInvit(employee) {},
    async updateCompany(company) {},
    async search(searchedValue) {},
    async deleteCompany(company) {},
    async getInvitations() {},
    async getHistories() {},
  },
});

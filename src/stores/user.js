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
    searchResults: {},
  }),
  getters: {
    allCompanies: (state) => state.companies,
    allInvitations: (state) => state.invitations,
    allHistories: (state) => state.histories,
    allResults: (state) => state.searchResults,
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
    async sendInvit(employee) {
      try {
        const { name, email, company_id } = employee;
        const link =
          window.location.protocol +
          "//" +
          window.location.host +
          `/${company_id}`;

        const { data } = await axios.post(
          "api/invite",
          { name, email, company_id, link },
          config
        );
        this.invitations.push(data.invitation);
        this.histories.push(data.history);
        toast.open({
          message: `Invitation sended successfully !`,
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
    async updateCompany(company) {
      try {
        const { id, name, company_email, phone, address } = company;

        const { data } = await axios.put(
          `api/companies/${id}`,
          { name, company_email, phone, address },
          config
        );
        this.companies.map((company) => {
          if (company.id === data.company.id) company = data.company;
        });

        toast.open({
          message: `Company updated successfully !`,
          position: "bottom-left",
          type: "success",
        });
        return router.push("/admin/companies");
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async cancelInvit(invitId) {
      try {
        const { data } = await axios.delete(
          `api/invitations/${invitId}`,
          config
        );

        toast.open({
          message: `Invitation canceled successfully !`,
          position: "bottom-left",
          type: "success",
        });
        if (this.histories.length > 0) {
          this.histories.push(data.history);
        }

        this.invitations = this.invitations.filter((invitation) => {
          return invitation.id !== invitId;
        });
        return router.push("/admin/invitations");
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async search(searchedValue) {
      try {
        const { data } = await axios.post(
          "api/search",
          { searched_value: searchedValue },
          config
        );
        this.searchResults = data.results;
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async deleteCompany(companyId) {
      try {
        await axios.delete(`api/companies/${companyId}`, config);
        toast.open({
          message: `Company removed successfully !`,
          position: "bottom-left",
          type: "success",
        });
        this.companies = this.companies.filter((company) => {
          return company.company.id !== companyId;
        });
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async getInvitations() {
      try {
        const { data } = await axios.get("api/invitations", config);
        this.invitations = data.invitations;
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
    async getHistories() {
      try {
        const { data } = await axios.get("api/histories", config);
        this.histories = data.histories;
      } catch (err) {
        toast.open({
          message: err.response.data.message,
          position: "bottom-left",
          type: "warning",
        });
      }
    },
  },
});

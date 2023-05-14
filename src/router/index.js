import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      meta: { requiresAuth: true },
      component: () => import("../views/HomeView.vue"),
      children: [
        {
          path: "admin",
          redirect: { name: "all-companies" },
          name: "admin",
          component: () => import("../views/AdminView.vue"),
          children: [
            {
              path: "profile",
              name: "admin-profile",
              component: () => import("../components/Admins/AdminProfile.vue"),
            },
            {
              path: "companies",
              redirect: { name: "all-companies" },
              name: "admin-companies",
              component: () =>
                import("../components/Admins/AdminCompanies.vue"),
              children: [
                {
                  path: "",
                  name: "all-companies",
                  component: () =>
                    import("../components/Companies/CompanyPage.vue"),
                },
                {
                  path: "create",
                  name: "create-company",
                  component: () =>
                    import("../components/Companies/CreateCompany.vue"),
                },
                {
                  path: ":company_id",
                  name: "edit-company",
                  component: () =>
                    import("../components/Companies/EditCompany.vue"),
                },
              ],
            },
            {
              path: "employees",
              name: "admin-employees",
              component: () =>
                import("../components/Admins/AdminEmployees.vue"),
              children: [
                {
                  path: "invite",
                  name: "invite-employee",
                  component: () =>
                    import("../components/Employees/InvitEmployee.vue"),
                },
              ],
            },
            {
              path: "invitations",
              name: "admin-invitations",
              component: () =>
                import("../components/Admins/AdminInvitations.vue"),
            },
            {
              path: "histories",
              name: "admin-histories",
              component: () =>
                import("../components/Admins/AdminHistories.vue"),
            },
          ],
        },
        {
          path: "employee",
          name: "employee",
          redirect: { name: "employee-home" },
          component: () => import("../views/EmployeeView.vue"),
          children: [
            {
              path: "home",
              name: "employee-home",
              component: () =>
                import("../components/Employees/EmployeePage.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../layouts/auth/Login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../layouts/auth/Register.vue"),
    },
    {
      path: "/invite/:company_id",
      name: "validate-invitation",
      component: () => import("../layouts/auth/NewInvitation.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.token) return "/signin";
  if (auth.token && (to.name === "signin" || to.name === "signup"))
    return auth.user.is_admin ? "/admin" : "/employee";
});
export default router;

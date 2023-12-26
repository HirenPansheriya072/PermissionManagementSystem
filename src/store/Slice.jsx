import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { MODULES, PERMISSIONS } from "../assets/Global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getEmpData: builder.query({
      query: () => "employees",
      providesTags: ["Employee"],
    }),
    createEmployee: builder.mutation({
      query: (newPost) => ({
        url: "employees",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Employee"],
    }),
    updateEmployee: builder.mutation({
      query: ({ userId, ...fields }) => ({
        url: `employees/${userId}`,
        method: "PATCH",
        body: fields,
      }),
      invalidatesTags: ["Employee"],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),

    // Employee Permission
    // getEmpPermission: builder.query({
    //   query: (id) => `emp-permission/${id}`,
    //   providesTags: ['Permission'],
    // }),
    // createEmpPermission: builder.mutation({
    //   query: (newPermission) => ({
    //     url: "emp-permission",
    //     method: "POST",
    //     body: {
    //       ...newPermission,
    //       permission: Object.keys(MODULES).reduce((acc, module) => {
    //         acc[module] = [];
    //         return acc;
    //       }, {}),
    //     },
    //   }),
    //   invalidatesTags: ['Permission'],
    // }),
    // updateEmpPermission: builder.mutation({
    //   query: ({id, ...fields}) => ({
    //     url: `emp-permission/${id}`,
    //     method: "PUT",
    //     body: fields,
    //   }),
    //   invalidatesTags: ['Permission'],
    // }),
    // patchEmployee: builder.mutation({
    //   query: ({ id, ...fields }) => ({
    //     url: `employees/${id}`,
    //     method: "PATCH",
    //     body: fields,
    //   }),
    //   invalidatesTags: ["Employee"],
    // }),
  }),
});

export const {
  useGetEmpDataQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  useGetEmpPermissionQuery,
  useCreateEmpPermissionMutation,
  useUpdateEmpPermissionMutation,
  usePatchEmployeeMutation,
} = myApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { MODULES, PERMISSIONS } from "../assets/Global";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const myApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000/",
//   }),
//   endpoints: (builder) => ({
//     getEmpData: builder.query({
//       query: () => "employees",
//       providesTags: ["Employee"],
//     }),
//     createEmployee: builder.mutation({
//       query: (newPost) => ({
//         url: "employees",
//         method: "POST",
//         body: newPost,
//       }),
//       invalidatesTags: ["Employee"],
//     }),
//     updateEmployee: builder.mutation({
//       query: ({ id, ...fields }) => ({
//         url: `employees/${id}`,
//         method: "PUT",
//         body: fields,
//       }),
//       invalidatesTags: ["Employee"],
//     }),
//     deleteEmployee: builder.mutation({
//       query: (id) => ({
//         url: `employees/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Employee"],
//     }),

//     // Employee Permission
//     getEmpPermission: builder.query({
//       query: (id) => `emp-permission/${id}`,
//       providesTags: ['Permission'],
//     }),
//     createEmpPermission: builder.mutation({
//       query: (newPermission) => ({
//         url: "emp-permission",
//         method: "POST",
//         body: {
//           ...newPermission,
//           permission: Object.keys(MODULES).reduce((acc, module) => {
//             acc[module] = [];
//             return acc;
//           }, {}),
//         },
//       }),
//       invalidatesTags: ['Permission'],
//     }),
//     updateEmpPermission: builder.mutation({
//       query: ({id, ...fields}) => ({
//         url: `emp-permission/${id}`,
//         method: "PUT",
//         body: fields,
//       }),
//       invalidatesTags: ['Permission'],
//     }),
//     patchEmployee: builder.mutation({
//       query: ({ id, ...fields }) => ({
//         url: `employees/${id}`,
//         method: "PATCH",
//         body: fields,
//       }),
//       invalidatesTags: ["Employee"],
//     }),
//   }),
// });

// export const {
//   useGetEmpDataQuery,
//   useCreateEmployeeMutation,
//   useUpdateEmployeeMutation,
//   useDeleteEmployeeMutation,
//   useGetEmpPermissionQuery,
//   useCreateEmpPermissionMutation,
//   useUpdateEmpPermissionMutation,
//   usePatchEmployeeMutation
// } = myApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { MODULES, PERMISSIONS } from "../assets/Global";

// export const myApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000/",
//   }),
//   endpoints: (builder) => ({
//     getEmpData: builder.query({
//       query: () => "employees",
//       providesTags: ["Employee"],
//     }),
//     createEmployee: builder.mutation({
//       query: (newPost) => ({
//         url: "employees",
//         method: "POST",
//         body: {
//           ...newPost,
//           permission: Object.keys(MODULES).reduce((acc, module) => {
//             acc[module] = Object.values(PERMISSIONS);
//             return acc;
//           }, {}),
//         },
//       }),
//       invalidatesTags: ["Employee"],
//     }),
//     updateEmployee: builder.mutation({
//       query: ({ id, ...fields }) => ({
//         url: `employees/${id}`,
//         method: "PUT",
//         body: fields,
//       }),
//       invalidatesTags: ["Employee"],
//     }),
//     deleteEmployee: builder.mutation({
//       query: (id) => ({
//         url: `employees/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Employee"],
//     }),
//     getEmpPermission: builder.query({
//       query: () => "emp-permission",
//       providesTags: ['Permission'],
//     }),
//     updateEmpPermission: builder.mutation({
//       query: ({id, ...fields}) => ({
//         url: `emp-permission/${id}`,
//         method: "PUT",
//         body: fields,
//       }),
//       invalidatesTags: ['Permission'],
//     }),
//   }),
// });

// export const {
//   useGetEmpDataQuery,
//   useCreateEmployeeMutation,
//   useUpdateEmployeeMutation,
//   useDeleteEmployeeMutation,
//   useGetEmpPermissionQuery,
//   useUpdateEmpPermissionMutation
// } = myApi;

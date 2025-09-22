const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const FULL_API_URL = API_BASE_URL

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes } from './apiRoutes'

	export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: FULL_API_URL }),
	tagTypes:['Patients', 'Doctors', 'Appointments'],
	endpoints: (builder) => ({

		// -----Patients------
		getPatients: builder.query({
			query: () => apiRoutes.patients.getAll,
			providesTags:['Patients'],
		}),
		getPatientById: builder.query({
			query: (id) => apiRoutes.patients.getById(id),
			providesTags:(result, error, id) => [
			{type: 'Patients', id}
			],
		}),
		deletePatients: builder.mutation({
			query: (id) => ({
					url:apiRoutes.patients.delete(id),
					method: 'DELETE'
				}),
		invalidatesTags:(result, error, id) => [
			'Patients', 
			{type: 'Patients', id}
			],
		}),
		createPatients: builder.mutation({
			query: (data) => ({
					url:apiRoutes.patients.create,
					method: 'POST',
					body: data,
		}),
				invalidatesTags: ['Patients'],
		}),
		updatePatients: builder.mutation({
			query: ({id, ...data}) => ({
					url:apiRoutes.patients.update(id),
					method: 'PUT',
					body: data,
				}),
		invalidatesTags:(result, error, id) => [
			'Patients', 
			{type: 'Patients', id}],
		}),
		// -----Doctors------
		getDoctors: builder.query({
			query: () => apiRoutes.doctors.getAll,
			providesTags:['Doctors'],
		}),
		getDoctorById: builder.query({
			query: (id) => apiRoutes.doctors.getById(id),
			providesTags:(result, error, id) => [
			{type: 'Doctors', id}
			],
		}),
		deleteDoctors: builder.mutation({
			query: (id) => ({
					url:apiRoutes.doctors.delete(id),
					method: 'DELETE'
				}),
		invalidatesTags:(result, error, id) => [
			'Doctors', 
			{type: 'Doctors', id}
			],
		}),
		createDoctors: builder.mutation({
			query: (data) => ({
					url:apiRoutes.doctors.create,
					method: 'POST',
					body: data,
		}),
				invalidatesTags: ['Doctors'],
		}),
		updateDoctors: builder.mutation({
			query: ({id, ...data}) => ({
					url:apiRoutes.doctors.update(id),
					method: 'PUT',
					body: data,
				}),
		invalidatesTags:(result, error, id) => [
			'Doctors', 
			{type: 'Doctors', id}],
		}),

				// -----Appointments------
		getAppointments: builder.query({
			query: () => apiRoutes.appointments.getAll,
			providesTags:['Appointments'],
		}),
		// getAppointments: builder.query({
		// 	query: ({ patientName } = {}) => {
		// 		const params = new URLSearchParams()
		// 		if (patientName) params.append('patientName', patientName)
		// 		return `/appointments?${params.toString()}`
		// 	},
		// 	providesTags:['Appointments'],
		// }),
		getAppointmentById: builder.query({
			query: (id) => apiRoutes.appointments.getById(id),
			providesTags:(result, error, id) => [
			{type: 'Appointments', id}
			],
		}),
		deleteAppointments: builder.mutation({
			query: (id) => ({
					url:apiRoutes.appointments.delete(id),
					method: 'DELETE'
				}),
		invalidatesTags:(result, error, id) => [
			'Appointments', 
			{type: 'Appointments', id}
			],
		}),
		updateAppointments: builder.mutation({
			query: ({id, ...data}) => ({
					url:apiRoutes.appointments.update(id),
					method: 'PUT',
					body: data,
				}),
		invalidatesTags:(result, error, id) => [
			'Appointments', 
			{type: 'Appointments', id}],
		}),
		createAppointments: builder.mutation({
			query: (data) => ({
					url:apiRoutes.appointments.create,
					method: 'POST',
					body: data,
		}),
				invalidatesTags: ['Appointments'],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
	// Patients
	useGetPatientsQuery,
	useDeletePatientsMutation,
	useGetPatientByIdQuery,
	useUpdatePatientsMutation,
	useCreatePatientsMutation,
 	
	// Doctors
	useGetDoctorsQuery,
	useDeleteDoctorsMutation,
	useGetDoctorByIdQuery,
	useUpdateDoctorsMutation,
	useCreateDoctorsMutation,

	// Appointments
	useGetAppointmentsQuery,
	useGetAppointmentByIdQuery,
	useDeleteAppointmentsMutation,
	useUpdateAppointmentsMutation,
	useCreateAppointmentsMutation,
} = api

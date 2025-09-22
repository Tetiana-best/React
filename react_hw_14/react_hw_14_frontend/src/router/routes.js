import Layout from "@/components/Layout/Layout"
import AppointmentsForm from "@/pages/Appointments/AppointmentsForm"
import AppointmentsList from "@/pages/Appointments/AppointmentsList"
import DoctorsForm from "@/pages/Doctors/DoctorsForm"
import DoctorsList from "@/pages/Doctors/DoctorsList"
import Home from "@/pages/Home"
import Page404 from "@/pages/Page404"
import PatientDetails from "@/pages/Patients/PatientDetails"
import PatientsForm from "@/pages/Patients/PatientsForm"
import PatientsList from "@/pages/Patients/PatientsList"
import { frontRoutes } from "./frontRoutes"

export const routes=[
	{
		path:frontRoutes.pages.home,
		Component:Layout,
		children:[
			{
				index:true,
				Component:Home,
				meta: {
					labelForMainMenu: '🏠 Головна'
				}
			},
			// ---------Пацієнти
			{
				path:frontRoutes.pages.patients.base,
				children:[
					{
						index:true, 
						Component: PatientsList,
						meta: {
						labelForMainMenu: '👤 Пацієнти'
				}
					},
					{
						path:frontRoutes.pages.patients.edit, 
						Component: PatientsForm,
					},
					{
						path:frontRoutes.pages.patients.detail, 
						Component: PatientDetails,
					},
				]
			},
			// ---------Лікарі
			{
				path:frontRoutes.pages.doctors.base,
				children:[
					{
						index:true, 
						Component: DoctorsList,
						meta: {
						labelForMainMenu: '👨‍⚕️ Лікарі'
				}
					},
					{
						path:frontRoutes.pages.doctors.edit, 
						Component: DoctorsForm,
					},
				]
			},
			// ---------Зустрічі
			{
				path:frontRoutes.pages.appointments.base,
				children:[
					{
						index:true, 
						Component: AppointmentsList,
						meta: {
						labelForMainMenu: '📅 Призначені зустрічі'
				}
					},
					{
						path:frontRoutes.pages.appointments.edit, 
						Component: AppointmentsForm,
					},
				]
			}
		]
	}
	,
			{
				path:'*',
				Component:Page404,
			}
]
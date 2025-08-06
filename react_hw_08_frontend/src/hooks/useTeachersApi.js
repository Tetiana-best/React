import { useCallback, useState } from "react";
import apiRoutes from "../api/apiRoutes.js";
import axios from 'axios'

const useTeachersApi = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchTeachers = useCallback(async () => {
		setLoading(true)
		setError(null)
		try {
			const res = await axios.get(apiRoutes.getAllTeachers)
			setData(res.data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}, [])

		const deleteTeacher = useCallback(async (id) => {
		setLoading(true)
		setError(null)
		try {
			const res = await axios.delete(apiRoutes.deleteTeacher(id))
			setData(prev=> prev.filter(teacher=> teacher.id!==id))
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}, [])

		const addNewTeacher = useCallback(async (teacher) => {
		setLoading(true)
		setError(null)
		try {
			const res = await axios.post(apiRoutes.addTeacher, teacher)
			setData((prev)=>[...prev, res.data])
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}, [])

		const getTeacherDetail = useCallback(async (id) => {
		setLoading(true)
		setError(null)
		try {
			const res = await axios.get(apiRoutes.getTeacherById(id))
			return res.data
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}, [])

		const editTeacher = useCallback(async (id, updatedTeacher) => {
		setLoading(true)
		setError(null)
		try {
			const res = await axios.put(apiRoutes.updateTeacher(id), updatedTeacher)
			// setData(res.data)
			setData((prev) => prev.map(teacher=>teacher.id===id?res.data:teacher))
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}, [])


	return {data, loading, error, 
		fetchTeachers, deleteTeacher, addNewTeacher, getTeacherDetail, editTeacher}
}

export default useTeachersApi
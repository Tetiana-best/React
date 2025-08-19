// const API_BASE_URL = 'http://localhost:5000/api'
// const API_BASE_URL = import.meta.env.VITE_API_URL + '/api';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const FULL_API_URL = API_BASE_URL + '/api';


export default {
  // GET: Отримати всіх вчителів
  getAllTeachers: `${FULL_API_URL}/teachers`,

  // POST: Створити нового вчителя
  addTeacher: `${FULL_API_URL}/teachers`,

  // GET: Отримати вчителя за ID
  getTeacherById: (id) => `${FULL_API_URL}/teachers/${id}`,

  // PUT: Оновити вчителя за ID
  updateTeacher: (id) => `${FULL_API_URL}/teachers/${id}`,

  // DELETE: Видалити вчителя за ID
  deleteTeacher: (id) => `${FULL_API_URL}/teachers/${id}`,
}

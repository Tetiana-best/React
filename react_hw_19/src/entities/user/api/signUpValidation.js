import * as yup from 'yup'

// Допоміжні: мінімальний вік 16, приклад телефону та URL
// const MIN_AGE = 16
// const MIN_SALARY= 4700

// const languagesList = [
//   'uk',
//   'en',
//   'de',
//   'pl',
//   'fr',
//   'es',
//   'it',
//   'cz',
//   'sk',
//   'hu',
// ]

export const signUpSchema = yup.object().shape({

  displayName: yup
    .string()
    .trim()
    .min(2, 'validation.NAME_MIN')
    .max(30, 'validation.NAME_MAX')
    .required('validation.NAME_REQUIRED'),

  email: yup.
		string()
		.email('validation.EMAIL_INVALID')
		.required('validation.EMAIL_REQUIRED'),

//   age: yup
//     .number()
//     .typeError('Вік має бути числом')
//     .integer('Лише ціле число')
//     .min(MIN_AGE, `Мінімальний вік ${MIN_AGE}`)
//     .max(120, 'Занадто велике значення')
//     .required('Вкажіть вік'),

//   salary: yup
//     .number()
//     .typeError('ЗП має бути числом')
//     .min(4700, `Мінмальна зп ${MIN_SALARY}`)
//     .max(78145656, 'Занадто велика ЗП, ТИ НЕ ТРАМП')
//     .required('Вкажіть ЗП'),

//   education: yup
//     .string()
//     .oneOf(
//       ['school', 'college', 'bachelor', 'master', 'phd'],
//       'Оберіть варіант'
//     )
//     .required('Освіта обовʼязкова'),
	
//   experienceYears: yup
//     .number()
//     .typeError('Стаж у роках має бути числом')
//     .min(0, 'Не може бути відʼємним')
//     .max(60, 'Нереалістичний стаж'),
	 
//   languages: yup
//     .array()
//     .of(yup.string().oneOf(languagesList))
//     .min(1, 'Оберіть щонайменше одну мову')
//     .required('Оберіть мови'),

//   married: yup
//     .string()
//     .oneOf(['yes', 'no'], 'Оберіть так/ні')
//     .required('Вкажіть статус'),

//   hasCar: yup.boolean().default(false),

//   priorities: yup.string().trim().max(500, 'До 500 символів'),

//   birthDate: yup
//     .date()
//     .typeError('Некоректна дата')
//     .required('Вкажіть дату народження'),

//   studyPeriod: yup
//     .object({
//       start: yup
//         .date()
//         .required("Початкова дата обов'язкова")
//         .typeError('Некоректна дата'),
//       end: yup
//         .date()
//         .required("Кінцева дата обов'язкова")
//         .typeError('Некоректна дата'),
//     })
//     .test(
//       'valid-study-period',
//       null, // ми будемо генерувати власні повідомлення через createError
//       function (value) {
//         const { start, end } = value || {}
//         if (!start || !end) return true // якщо ще порожні — нехай required обробляє

//         // початкова дата >= кінцевої
//         if (new Date(start) >= new Date(end)) {
//           return this.createError({
//             path: 'studyPeriod.end', // зв’язуємо помилку з кінцевою датою
//             message: 'Початкова дата має бути раніше кінцевої',
//           })
//         }

//         // тривалість < 5 років
//         const diffYears =
//           (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24 * 365)
//         if (diffYears < 5) {
//           return this.createError({
//             path: 'studyPeriod.end',
//             message: 'Тривалість навчання мінімум 5 років',
//           })
//         }

//         return true
//       }
//     ),

  password: yup
    .string()
    .min(8, 'validation.PASSWORD_MIN')
    .matches(/[A-Z]/, 'validation.PASSWORD_UPPER')
    .matches(/[a-z]/, 'validation.PASSWORD_LOWER')
    .matches(/[0-9]/, 'validation.PASSWORD_DIGIT')
    .matches(/[^A-Za-z0-9]/, 'validation.PASSWORD_SPECIAL')
    .required('validation.PASSWORD_REQUIRED'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'validation.CONFIRM_PASSWORD_MATCH')
    .required('validation.CONFIRM_PASSWORD_REQUIRED'),

//   phone: yup
//     .string()
//     .nullable()
//     .notRequired()
//     .matches(/^(\+?\d{10,15})?$/, 'Некоректний телефон'),

//   website: yup.string().nullable().notRequired().url('Некоректне посилання'),

//   photo: yup
//     .string()
//     .required("Фото обов'язкове")
//     .test('fileType', 'Неприпустимий тип файлу', 
// 		(value) => {
//       // Перевірка mime-типу
//       return ( value.startsWith('data:image/jpeg;base64,') || value.startsWith('data:image/png;base64,'))
//     })
//     .test('fileSize', 'Розмір файлу не має перевищувати 1 МБ', 
// 		(value) => {
//       // Base64 рядок приблизно на 33% більший за розмір файлу.
//       // 1 МБ = 1048576 байт
//       const sizeInBytes =
//         (value.length * 3) / 4 - (value.endsWith('==') ? 2 : value.endsWith('=') ? 1 : 0)
//       return sizeInBytes <= 1048576
//     }),
})

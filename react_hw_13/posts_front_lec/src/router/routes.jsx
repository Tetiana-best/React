import MainLayout from '@/components/MainLayout/MainLayout'
import ContactsPage from '@/pages/ContactsPage'
import HomePage from '@/pages/HomePage'
import PostEditPage from '@/pages/PostEditPage'
import PostsInfinite from '@/pages/PostsInfinite'
import PostsPage from '@/pages/PostsPage'
import ErrorPage from '@/pages/PostsPage/ErrorPage'
import { Navigate } from 'react-router'

export const pagesRoutes = [
  {
    path: '/',
    element: <HomePage />,
    meta: { title: 'Головна', icon: '🏠' },
  },
  {
    path: '/posts',
    element: <PostsPage />,
    meta: { title: 'Пости', icon: '📝' },
  },
  {
    path: '/posts-infinite',
    element: <PostsInfinite />,
    meta: { title: 'Нескінченне завантаження', icon: '🔄' },
  },
  {
    path: '/posts/edit/:id?',
    element: <PostEditPage />,
    meta: { notInMenu: true },
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
    meta: { title: 'Контакти', icon: '📞' },
  },
]

const routes = [
  {
    element: <MainLayout />,
	errorElement: <ErrorPage />,
    children: pagesRoutes,
  },
  // Перенаправлення неіснуючих шляхів на головну
  { path: '*', element: <Navigate to="/" replace /> },
]

export default routes

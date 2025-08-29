import MainLayout from '@/layouts/MainLayout'
import ErrorPage from '@/pages/ErrorPage'
import Home from '@/pages/Home'
import Page404 from '@/pages/Page404'
import { PostsPage, PostsPageInfinity } from '@/pages/PostsPage'

import { createBrowserRouter } from 'react-router'

export const routes = [
  {
    path: '/',
    Component: MainLayout,
	 errorElement: ErrorPage,
    children: [
      {
        index: true,
        Component: Home,
        handler: {
          title: 'Home',
        },
      },
      {
        path: 'posts',
        Component: PostsPage,
        handler: {
          title: 'Posts',
        },
      },
		{
        path: 'infinityPosts',
        Component: PostsPageInfinity,
        handler: {
          title: 'PostsPageInfinity',
        },
      },
		{
			path: "*",
			Component: Page404
			},
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import { PostsPage, PostsPageInfinity } from '@/pages/PostsPage'

import { createBrowserRouter } from 'react-router'

export const routes = [
  {
    path: '/',
    Component: MainLayout,
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
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

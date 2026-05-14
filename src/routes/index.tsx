import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from '@/routes/layouts/Default'
// import Home from '@/routes/pages/Home'
// import About from '@/routes/pages/About'
// import SignIn from '@/routes/pages/SignIn'
// import Movies from '@/routes/pages/Movies'
// import MovieDetails from '@/routes/pages/MovieDetails'
// import NotFound from '@/routes/pages/NotFound'
// import { requiresAuth } from '@/routes/loaders/requiresAuth'
// import { guestOnly } from '@/routes/loaders/guestOnly'
import { guestOnly, requiresAuth } from '@/routes/loaders'
import Loader from '@/components/Loader'
import { dynamic } from '@/utils'
import type { DynamicOptions } from '@/utils'

const options: DynamicOptions = {
  // error: () => <div>나만의 에러 메시지</div>
  error: ({ error }) => {
    let message = ''
    if (error instanceof Error) message = error.message
    return <h1>에러가 발생했어유...😱 {message}</h1>
  },
  loading: <Loader />
}

const Home = dynamic(() => import('@/routes/pages/Home'), options)
const About = dynamic(() => import('@/routes/pages/About'), options)
const SignIn = dynamic(() => import('@/routes/pages/SignIn'), options)
const Movies = dynamic(() => import('@/routes/pages/Movies'), options)
const MovieDetails = dynamic(
  () => import('@/routes/pages/MovieDetails'),
  options
)
const NotFound = dynamic(() => import('@/routes/pages/NotFound'), options)
const Todos = dynamic(() => import('@/routes/pages/Todos'), options)

// http:://localhost:5173/ => /index.html
// http:://localhost:5173/about => /about/index.html => 리다이렉트 => /index.html
// http:://localhost:5173/signin => /signin/index.html => 리다이렉트 => /index.html

const router = createBrowserRouter([
  // 라우트 객체
  {
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/signin',
        element: <SignIn />,
        loader: guestOnly
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/todos',
        element: <Todos />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}

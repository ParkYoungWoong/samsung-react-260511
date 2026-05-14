import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from '@/routes/layouts/Default'
// import Home from '@/routes/pages/Home'
// import About from '@/routes/pages/About'
// import SignIn from '@/routes/pages/SignIn'
// import Movies from '@/routes/pages/Movies'
// import MovieDetails from '@/routes/pages/MovieDetails'
// import NotFound from '@/routes/pages/NotFound'
import { requiresAuth } from '@/routes/loaders/requiresAuth'
import { guestOnly } from '@/routes/loaders/guestOnly'
import Loader from '@/components/Loader'

const Home = lazy(() => import('@/routes/pages/Home'))
const About = lazy(() => import('@/routes/pages/About'))
const SignIn = lazy(() => import('@/routes/pages/SignIn'))
const Movies = lazy(() => import('@/routes/pages/Movies'))
const MovieDetails = lazy(() => import('@/routes/pages/MovieDetails'))
const NotFound = lazy(() => import('@/routes/pages/NotFound'))

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
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        )
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
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}

import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from '@/routes/layouts/Default'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import SignIn from '@/routes/pages/SignIn'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import NotFound from '@/routes/pages/NotFound'
import { requiresAuth } from '@/routes/loaders/requiresAuth'

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
        element: <SignIn />
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

import { createBrowserRouter, RouterProvider } from 'react-router'

// http:://localhost:5173/ => /index.html
// http:://localhost:5173/about => /about/index.html => 리다이렉트 => /index.html
// http:://localhost:5173/signin => /signin/index.html => 리다이렉트 => /index.html

const router = createBrowserRouter([
  // 라우트 객체
  {
    path: '/',
    element: <h1>Main Page!</h1>
  },
  {
    path: '/about',
    element: <h1>About Page!</h1>
  },
  {
    path: '/signin',
    element: <h1>Log In Page!</h1>
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}

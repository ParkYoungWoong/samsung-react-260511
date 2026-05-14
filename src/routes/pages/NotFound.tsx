import { Link } from 'react-router'

export default function NotFound() {
  return (
    <>
      <h1>404 페이지를 찾을 수 없어요~😘 잘못 들어오셨어요~👎</h1>
      <Link to="/">홈으로 이동!</Link>
    </>
  )
}

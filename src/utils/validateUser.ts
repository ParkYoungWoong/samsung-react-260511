export default function validateUser() {
  const accessToken = localStorage.getItem('samsung_token')
  // 토큰 분석...
  const isValid = !!accessToken // 인증 여부 확인
  return isValid
}

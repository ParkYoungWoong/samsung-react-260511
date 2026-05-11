// 원시형X, 참조형O => 타입 추론 X
const x: string[] = []

x[0] = '123'

// JS: const|let 변수이름 = 값
// TS: const|let 변수이름: 타입 = 값

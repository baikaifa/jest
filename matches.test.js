// test('测试007号技师的匹配', () => {
//   //===
//   const a={number:'007'}
//   expect(a).toBe({number:'007'})
// })

// test('测试007号技师的匹配', () => {
//   //===
//   const a = { number: '007' }
//   expect(a).toEqual({ number: '007' })//值相同
// })


// test('测试007号技师的匹配', () => {
//   //===
//   const a = null
//   expect(a).toBeNull()
// })

// test('toBeDefined', () => {
//   //===
//   const a = null
//   expect(a).toBeDefined()
// })

// test('toBeTruthy 测试', () => {
//   const a = 0
//   expect(a).toBeTruthy()
// }) 

test('toBeCloseTo匹配器', () => {
  const one = 0.1
  const two = 0.2
  expect(one + two).toBeCloseTo(0.3)
})
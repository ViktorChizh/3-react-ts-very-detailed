import {sum, mult, splitIntoWords} from './01'

// вынесли данные из тестов для совместного использования
// data
let a:number
let b:number
let c:number

// перед каждым тестом данные обновляются и теперь мы можем менять данные в любом тесте
beforeEach( () => {
    a = 1
    b = 2
    c = 3
} )


test('sum should be correct', () => {

    // action
    const result1 = sum(a,b)
    a = 100     // поменяли а
    const result2 = sum(a,b)

    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(102)
})

test('multiply should be correct', () => {

    // action
    const result1 = mult(a,b)
    const result2 = mult(b,c)

    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct', () => {
    // data
    const sen1 = "Hello my friend"
    const sen2 = "JS programming language the best"


    // action
    const result1 = splitIntoWords(sen1)
    const result2 = splitIntoWords(sen2)

    // expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('programming')
    expect(result2[2]).toBe('language')
    expect(result2[3]).toBe('the')
    expect(result2[4]).toBe('best')
})
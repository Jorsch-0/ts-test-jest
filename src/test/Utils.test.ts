import { StringUtils, getStringInfo, toUpperCase } from '../app/Utils'

describe('Utils test suit', () => {
  // test('should return uppercase of a valid string', () => {
  it('should return uppercase of a valid string', () => {
    // arrange:
    const sut = toUpperCase
    const expected = 'ABC'

    // act:
    const actual = sut('abc')

    // assert:
    expect(actual).toBe(expected)

    // const result = toUpperCase('abc')
    // expect(result).toBe('ABC')
  })

  it('should return info for a valid string', () => {
    const actual = getStringInfo('My-String')

    expect(actual.lowerCase).toBe('my-string')
    expect(actual.extraInfo).toEqual({})

    expect(actual.characters.length).toBe(9)
    expect(actual.characters).toHaveLength(9)

    expect(actual.characters).toEqual([
      'M',
      'y',
      '-',
      'S',
      't',
      'r',
      'i',
      'n',
      'g',
    ])
    expect(actual.characters).toContain('M')
    expect(actual.characters).toContain<string>('M')
    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
    )

    expect(actual.extraInfo).not.toBe(undefined)
    expect(actual.extraInfo).not.toBeUndefined()
    expect(actual.extraInfo).toBeDefined()
    expect(actual.extraInfo).toBeTruthy()
  })

  describe('getStringInfo for arg My-String should', () => {
    it('return a lower case string', () => {
      const actual = getStringInfo('My-String')
      expect(actual.lowerCase).toBe('my-string')
    })

    it('return a upper case string', () => {
      const actual = getStringInfo('My-String')
      expect(actual.upperCase).toBe('MY-STRING')
    })
  })

  describe('ToUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input)
      expect(actual).toBe(expected)
    })
  })

  describe('StringUtils tests', () => {
    let sut: StringUtils

    beforeEach(() => {
      sut = new StringUtils()
    })

    afterEach(() => {
      // clearing mocks
    })

    it('Should return correct upperCase', () => {
      const actual = sut.toUpperCase('abc')

      expect(actual).toBe('ABC')
    })

    it('Should throw error on invalid argument - function', () => {
      function expectError() {
        sut.toUpperCase('')
      }
      expect(expectError).toThrow()
      expect(expectError).toThrowError('Invalid argument')
    })

    it('Should throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUpperCase('')
      }).toThrow()
      expect(() => {
        sut.toUpperCase('')
      }).toThrowError('Invalid argument')
    })

    it('Should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('')
        done('Should throw error')
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty('message', 'Invalid argument')
        done()
      }
    })
  })
})

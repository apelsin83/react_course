import expect from 'expect'
import filter_func from '../components/filter_func'

describe('filter_func', () => {

  it('should return a Boolean', () => {
      const result = filter_func({first_name:"Paula"},'au')
      expect(result).toBeA('boolean')
  })

  it('should match string on first_name', () => {
      const actual = filter_func({first_name:"Paula"},'au')
      const expected = true
      expect(actual).toEqual(expected)
  })

  it('should be case insensitive', () => {
      const uppercase = filter_func({first_name:"Darwin"},'WI')
      const lowercase = filter_func({first_name:"Darwin"},'wi')
      expect(uppercase).toEqual(lowercase)
  })

})

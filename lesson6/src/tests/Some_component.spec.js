import React      from 'react'
import TestUtils  from 'react-addons-test-utils'
import expect     from 'expect'

// import expectJSX  from 'expect-jsx'
// expect.extend(expectJSX)

const Some_component = ( {message} ) => (
    <div className="main-box some-class">
        <h1>Some amazing Component</h1>
        <div>{message}</div>
    </div>
  )
// <div>{message}!</div>

describe('Some_component' ,() => {

  it('should render Some component' , () => {

    const renderer = TestUtils.createRenderer()
    renderer.render( <Some_component message="Keep Calm and Carry On"/> )
    const output = renderer.getRenderOutput()
    const expected = (
        <div className="main-box">
            <h1>Some amazing Component</h1>
            <div>Keep Calm and Carry On</div>
        </div>
      )
    expect(output).toEqual(expected)
    // const partial = <div>Keep Calm and Carry On</div>
    // expect(output).toIncludeJSX(partial)

    //console.log('output:',output)
    const has_class = output.props.className.includes('some-class')
  })

})

import React      from 'react'
import TestUtils  from 'react-addons-test-utils'
import expect     from 'expect'
import Thumb      from '../components/Thumb.js'

// import expectJSX  from 'expect-jsx'
// expect.extend(expectJSX)

/*
const Thumb = ( props ) => (
    <div className="thumb-box">
        <img className="thumb" src={props.image_url}
             onClick={::props.on_item_click}/>
    </div>
  )
*/

describe('Thumb' ,() => {

    it('should render a thumbnail ' , () => {
        const renderer = TestUtils.createRenderer()
        const url = "http://lorempixel.com/100/100/sports/"
        const click_handler = function(){
            console.log('click_handler was called')
        }
        renderer.render( <Thumb image_url={url}
                                on_item_click={click_handler}/> )
        const output = renderer.getRenderOutput()
        //console.log('output:',output)
    })

    // it('should include a `thumb-box` class ' , () => {
    //     const renderer = TestUtils.createRenderer()
    //     renderer.render( <Thumb on_item_click={()=> console.log('clicked') }/> )
    //     const has_class = renderer.getRenderOutput().props.className.includes('thumb-box')
    //     expect(has_class).toEqual(true)
    // })

})

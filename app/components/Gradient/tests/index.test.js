/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Gradient from '../'

describe('Gradient', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Gradient colors={['red', 'green']}>
        <React.Fragment />
      </Gradient>
    )

    expect(tree).toMatchSnapshot()
  })
})

/* eslint-env jest */

import styleNames from '../styleNames'

const style1 = {
  justifyContent: 'center',
  alignItems: 'center'
}
const style2 = {
  fontFamily: 'SourceCodePro',
  fontSize: 64
}
const style3 = {
  flex: 1,
  flexDirection: 'row'
}

describe('styleNames', () => {
  it('ifThen - only truthy args', () => {
    const expectedStyles = {
      ...style1,
      ...style2
    }

    const actualStyles =
      styleNames()
        .ifThen(true, style1)
        .ifThen(true, style2)
        .eval()

    expect(expectedStyles).toEqual(actualStyles)
  })

  it('ifThen - with falsy args', () => {
    const expectedStyles = {
      ...style1
    }

    const actualStyles =
      styleNames()
        .ifThen(true, style1)
        .ifThen(false, style2)
        .eval()

    expect(expectedStyles).toEqual(actualStyles)
  })

  it('ifThen - with undefined argThen', () => {
    const styles = () =>
      styleNames()
        .ifThen(true, undefined)
        .ifThen(false, style2)
        .eval()

    expect(styles).toThrow()
  })

  it('ifThenElse - falsy case', () => {
    const expectedStyles = {
      ...style1,
      ...style3
    }

    const actualStyles =
      styleNames()
        .ifThen(true, style1)
        .ifThenElse(false, style2, style3)
        .eval()

    expect(expectedStyles).toEqual(actualStyles)
  })

  it('ifThenElse - undefined argThen', () => {
    const styles = () =>
      styleNames()
        .ifThen(true, style1)
        .ifThenElse(false, undefined, style3)
        .eval()

    expect(styles).toThrow()
  })

  it('ifThenElse - undefined argElse', () => {
    const styles = () =>
      styleNames()
        .ifThen(true, style1)
        .ifThenElse(false, style2, undefined)
        .eval()

    expect(styles).toThrow()
  })

  it('ifThenElse - truthy case', () => {
    const expectedStyles = {
      ...style1,
      ...style2
    }

    const actualStyles =
      styleNames()
        .ifThen(true, style1)
        .ifThenElse(true, style2, style3)
        .eval()

    expect(expectedStyles).toEqual(actualStyles)
  })

  it('default argument is always present', () => {
    const expectedStyles = {
      ...style1,
      ...style2,
      ...style3
    }

    const actualStyles =
      styleNames(style3)
        .ifThen(true, style1)
        .ifThen(true, style2)
        .eval()

    expect(expectedStyles).toEqual(actualStyles)
  })
})

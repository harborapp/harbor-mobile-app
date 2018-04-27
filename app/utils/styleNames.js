/**
 * A simple utility to conditionally evaluate style properties
 * and merge them into a single one.
 *
 * @returns {Object}
 */
export default function styleNames (stylePredicatePairs) {
  let mergedStyles = { ...stylePredicatePairs }

  /**
   * Prototype method for an 'if-then' semantic.
   *
   * @returns {Object}
   */
  this.ifThen = (argIf, argThen) => {
    if (typeof argThen !== 'object') {
      throw new Error('Second argument to .ifThen() should be an object but recieved: ' + typeof argThen)
    }

    if (argIf) {
      mergedStyles = { ...mergedStyles, ...argThen }
    }

    return this
  }

  /**
   * Prototype method for an 'if-then-else' semantic.
   *
   * @returns {Object}
   */
  this.ifThenElse = (argIf, argThen, argElse) => {
    if (typeof argThen !== 'object') {
      throw new Error('Second argument to .ifThenElse() should be an object but recieved: ' + typeof argThen)
    }

    if (typeof argElse !== 'object') {
      throw new Error('Third argument to .ifThenElse() should be an object but recieved: ' + typeof argElse)
    }

    if (argIf) {
      mergedStyles = { ...mergedStyles, ...argThen }
    } else {
      mergedStyles = { ...mergedStyles, ...argElse }
    }

    return this
  }

  /**
   * Return the evaulated styles.
   *
   * @returns {Object}
   */
  this.eval = () => {
    return mergedStyles
  }

  return this
}

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
    if (argIf) {
      mergedStyles = { ...mergedStyles, ...argThen }
    } else {
      mergedStyles = { ...mergedStyles, ...argElse }
    }

    return this
  }

  /**
   * Evaluate styles.
   *
   * @returns {Object}
   */
  this.eval = () => {
    return mergedStyles
  }

  return this
}

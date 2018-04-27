import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

/**
 * The FormattedMessage component is equivalent to the
 * FormattedMessage component that react-intl
 * provides except that it works on
 * React Native without issue.
 *
 * @returns {jsx}
 */
const Message = ({
  intl,
  id,
  defaultMessage,
  values,
  ...props
}) => (
  <Text {...props}>{intl.formatMessage({id, defaultMessage}, values)}</Text>
)

Message.propTypes = {
  intl: intlShape.isRequired,
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  values: PropTypes.object
}

export default injectIntl(Message)

import { Text } from 'react-native'
import { injectIntl } from 'react-intl'

/**
 * The FormattedMessage component is equivalen't to the
 * FormattedMessage that react-intl provides except
 * that it works on React Native without issue.
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

export default injectIntl(Message)

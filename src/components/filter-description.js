import React from "react"
import PropTypes from "prop-types"
import { useIntl } from "gatsby-plugin-intl"

const FilterDescription = ({ filters, count }) => {
  const intl = useIntl()
  const filterText = Object.entries(filters)
    .map(([key, value]) => {
      if (key === `search`) {
        return `"${value}"`
      } else {
        return (Array.isArray(value) ? value : [value]).map(filter =>
          intl.formatMessage({ id: filter })
        )
      }
    })
    .reduce((acc, val) => acc.concat(val), [])
    .join(", ")

  const countLocale = intl.locale === `ur` ? `ar` : intl.locale
  const params = {
    filters: filterText,
    count: count.toLocaleString(countLocale),
  }

  let messageId = `filter-description-filters`
  if (filterText === ``) {
    messageId = `filter-description`
  } else if (count === 0) {
    messageId = `filter-description-no-results`
  } else if (count === 1) {
    messageId = `filter-description-one-result`
  }
  return (
    <div className="filter-description">
      <h2>{intl.formatMessage({ id: messageId }, params)}</h2>
    </div>
  )
}

FilterDescription.propTypes = {
  filters: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
}

export default FilterDescription

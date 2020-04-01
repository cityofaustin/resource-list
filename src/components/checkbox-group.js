import PropTypes from "prop-types"
import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

const setupOptions = options =>
  options.map(option =>
    typeof option === "string"
      ? { label: option, value: option }
      : { ...option }
  )

const CheckboxGroup = ({
  name,
  label,
  options,
  value,
  onChange,
  classNames,
}) => (
  <fieldset className={`checkbox-group ${classNames}`}>
    <legend className="label">{label}</legend>
    <div className="checkbox-group-values">
      {setupOptions(options).map(({ label: lbl, value: val }, idx) => (
        <label className="checkbox" key={val}>
          <input
            name={name}
            id={`${name}_${idx}`}
            type="checkbox"
            checked={value.includes(val)}
            onChange={() =>
              onChange(
                value.includes(val)
                  ? value.filter(v => v !== val)
                  : value.concat([val])
              )
            }
          />
          <span>
            <FormattedMessage id={lbl} />
          </span>
        </label>
      ))}
    </div>
  </fieldset>
)

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string,
}

CheckboxGroup.defaultProps = {
  value: [],
  classNames: ``,
}

export default CheckboxGroup

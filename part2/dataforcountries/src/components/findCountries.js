import React from 'react'

const FindCountries = (props) => (
    <div>
        find countries <input value={props.value} onChange={props.handleSearchCountryOnChange}/>
    </div>
)

export default FindCountries
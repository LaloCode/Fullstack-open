import React from 'react'

const ListCountry = ({country, setSearchCountry}) => {
    const handleShowButton = () => {
        setSearchCountry(country.name)
    }

    return <div>{country.name} <button onClick={handleShowButton}>show</button></div>
}

export default ListCountry
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FindCountries from './findCountries'

const App = () => {
    return (
        <div>
            <FindCountries />
        </div>
    )
}

export default App
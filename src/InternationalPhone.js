import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function InternationalPhone() {
    const [value, setValue] = useState();
    return (
        <PhoneInput
            international
            defaultCountry="RU"
            value={value}
            onChange={setValue}/>
    )
}

export default InternationalPhone;
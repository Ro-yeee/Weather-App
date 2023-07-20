import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function ToggleSwitch({toggleUnit}) {
  return (
    <div className='toggleSwitchBox'>
        <input onChange={toggleUnit} type="checkbox" className="checkbox" id="checkbox"></input>
        <label htmlFor="checkbox" className="checkbox-label">
            <span className="units">°F</span>
            <span className="units">°C</span>
            <FontAwesomeIcon icon={faCircle} className='ball' />
        </label>
    </div>
  )
}

export default ToggleSwitch

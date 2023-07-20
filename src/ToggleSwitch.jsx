import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function ToggleSwitch({toggleUnit}) {
  return (
    <div className='toggleSwitchBox'>
        <input type="checkbox" class="checkbox" id="checkbox"></input>
        <label for="checkbox" class="checkbox-label">
            <span class="units">°C</span>
            <span class="units">°F</span>
            <FontAwesomeIcon icon={faCircle} className='ball' />
        </label>
    </div>
  )
}

export default ToggleSwitch

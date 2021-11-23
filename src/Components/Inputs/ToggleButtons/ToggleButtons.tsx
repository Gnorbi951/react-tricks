import { useState } from "react";
import { ToggleButtonGroup, ToggleButton} from "@material-ui/lab";

import './ToggleButtons.css';

export interface ToggleButtonsProps {
  color: string;
}

function ToggleButtons(props: ToggleButtonsProps): JSX.Element {
  
  const [inclusion, setInclusion] = useState<string>("include");

  function handleToggleButtonGroup(buttonValue: string): void {
    // Clicking on current button returns null.
    if (buttonValue != null) setInclusion(buttonValue);
  }

  return (
    <div className='inclusion-toggle-buttons'>
      <ToggleButtonGroup
        orientation='horizontal'
        value={inclusion}
        exclusive
        style={{color: props.color}}
        onChange={(_, tab) => handleToggleButtonGroup(tab)}
      >
        <ToggleButton value='include' className='inclusion-toggle-button'>
          Include
        </ToggleButton>
        <ToggleButton value='exclude' className='inclusion-toggle-button'>
          Exclude
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleButtons;
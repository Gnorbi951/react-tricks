import { useState } from "react";
import { ToggleButtonGroup, ToggleButton} from "@material-ui/lab";

import './ToggleButtons.css';
import { styled } from "@material-ui/core";

interface ToggleButtonsProps {
  buttonColor: string;
  selectedColor: string;
  textColor: string;
}

function ToggleButtons(props: ToggleButtonsProps): JSX.Element {
  
  const [inclusion, setInclusion] = useState<string>("include");

  function handleToggleButtonGroup(buttonValue: string): void {
    // Clicking on current button returns null.
    if (buttonValue != null) setInclusion(buttonValue);
  }
  
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    border: '1px solid #21a5ef',
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      color: props.textColor,
      background: props.buttonColor,
      '&.Mui-selected': {
        background: props.selectedColor,
      },
      '&.MuiToggleButton-root': {
        margin: 0,
      }
    },
  }));

  return (
    <div
    >
      <StyledToggleButtonGroup
        orientation='horizontal'
        value={inclusion}
        exclusive
        onChange={(_, tab) => handleToggleButtonGroup(tab)}
      >
        <ToggleButton value='include'>
          Include
        </ToggleButton>
        <ToggleButton value='exclude'>
          Exclude
        </ToggleButton>
      </StyledToggleButtonGroup>
    </div>
  );
}


export default ToggleButtons;
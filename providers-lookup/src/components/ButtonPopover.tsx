import React, {useState} from 'react';
import { Popover } from '@mui/material';

// This is overkill for its current simplicity and limited implementation, but in a full application I'd want it!
export const ButtonPopover = (props: any) => {
  const [containerEl, setContainerEl] = useState<Element | null>(null);
  const open = Boolean(containerEl);
  const id = open ? "active-popover" : undefined;

  const buttonText = props.buttonText;
  const popoverContent = props.popoverContent;

  function handleOpen(event: any) {
    setContainerEl(event.currentTarget);
  }

  function handleClose() {
    setContainerEl(null);
  }

  return (
    <>
      <button
        id="specialtyButton"
        className="btn btn-link fw-bold ps-1"
        aria-describedby={id}
        onClick={(event) => handleOpen(event)}
      >{buttonText}
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={containerEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {popoverContent}
      </Popover>
    </>
  )
}

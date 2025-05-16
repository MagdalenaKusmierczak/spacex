import React from "react";

export interface ButtonsListProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  activeSection: string;
}

// The same here - keep component types within them. You can then import the types along importing the component

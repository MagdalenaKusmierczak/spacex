export default interface ButtonsListProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  activeSection: string;
}

// The same here - keep component types within them. You can then import them along importing the component

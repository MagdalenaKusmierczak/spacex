export default interface ButtonsListProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  activeSection: string;
}
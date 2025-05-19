import { SectionType } from "../RocketDetails/RocketDetails";
import {
  Button,
  Menu,
  SectionName,
  ButtonsWrapper,
  MenuWrapper,
} from "./SpecsNav.styled";

interface SpecsNavProps {
  handleClick: (section: SectionType) => void;
}

const returnName = (input: SectionType): string => {
  return input.replace(/-/g, " ");
};

export const SpecsNav: React.FC<SpecsNavProps> = ({ handleClick }) => {
  return (
    <MenuWrapper>
      <Menu>
        <ButtonsWrapper>
          {Object.values(SectionType).map((section) => (
            <Button
              key={section}
              onClick={() => {
                handleClick(section);
              }}
            >
              <SectionName>{returnName(section)}</SectionName>
            </Button>
          ))}
        </ButtonsWrapper>
      </Menu>
    </MenuWrapper>
  );
};

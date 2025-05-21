import { Paragraph } from "../Paragraph";
import { useRocketContext } from "../RocketProvider/RocketProvider";

import {
  OutsideList,
  SecondaryHeader,
  GridListPayload,
  SectionWrapper,
  InsideItem,
} from "./RocketSpecs.styled";

export const Payloads = () => {
  const { rocket } = useRocketContext();

  if (!rocket) return null;

  return (
    <SectionWrapper id="payloads-weights">
      <SecondaryHeader>Payloads</SecondaryHeader>
      <GridListPayload>
        {rocket.payload_weights.map((payload) => (
          <InsideItem key={payload.id}>
            <Paragraph name="Name" data={payload.name} />
            <Paragraph name="ID" data={payload.id} />
            <OutsideList>
              <li>
                <Paragraph name="Kilograms" data={payload.kg} units="kg" />
              </li>
              <li>
                <Paragraph name="Pounds" data={payload.lb} units="lb" />
              </li>
            </OutsideList>
          </InsideItem>
        ))}
      </GridListPayload>
    </SectionWrapper>
  );
};

import styled from "styled-components";
import spacer from "../mixins/spacer";

const Paragraph = styled.p`
  margin: 0 0 ${props => spacer(1, props.theme.breakpoint)};
`;
export default Paragraph;

import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1183px;
  height: auto;
  margin: 50px auto 0px;
  display: ${({ display }) => display || "block"};
  justify-content: space-between;
  align-items: center;
  @media (min-width: 552px) {
    margin: 100px auto;
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  position: ${({ position }) => position};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  height: ${({ height }) => height};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  width: ${({ width }) => width || "100%"};
  max-width: ${({ maxWidth }) => maxWidth};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems};
  border: ${({ border }) => border || "0px solid #fff"};
  margin: ${({ margin }) => margin || "0"};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding || "0"};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
export const Button = styled.button`
  width: ${({ width }) => width || "138px"};
  height: ${({ height }) => height || "44px"};
  background: #2b1f00;
  box-shadow: inset 0px 0px 0px 4px rgba(96, 80, 38, 0.55);
  border-radius: 8px;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #dfd19b;
  margin: 0px;
  cursor: pointer;
  border: 3px solid #dfd19b90;
`;
export const Text = styled.p`
  font-family: "Knights Quest";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: ${({ color }) => color || "#dfd19b"};
  max-width: 750px;
  width: 100%;
  margin: ${({ margin }) => margin || "5px auto"};
  text-align: ${({ textAlign }) => textAlign};
  @media (min-width: 852px) {
    font-size: 20px;
  }
`;
export const FadedText = styled.p`
  font-family: "Knights Quest";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize || "20"}px;
  line-height: 120%;
  text-align: center;
  color: #dfd19b;
  opacity: 0.5;
  text-transform: uppercase;
`;
export const StyledInput = styled.input`
  width: 100%;
  height: ${({ height }) => height || "50px"};
  background: #0c0e12;
  border-radius: 8px;
  color: #dfd19b;
  font-size: 20px;
  opacity: 0.5;
  margin-top: 10px;
  padding: 10px;
  border: 3px solid;
  &::placeholder {
    font-size: 18px;
    color: #dfd19b;
  }
`;

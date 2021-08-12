import styled from "styled-components";

export const ContactRow = styled.div`
  color: #fff;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 20px;
  /* justify-content: space-around; */
  margin: auto;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2' `};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin: auto;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin: auto;
`;

export const ContactImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 64px;
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
  text-transform: capitalize;
`;

export const Subtitle = styled.p`
  text-align: left;
  font-size: 32px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
  padding: 0 2px;
`;

export const FormRow = styled.div`
  display: grid;
  margin: auto;
  grid-template-areas: "input textarea";
  grid-gap: 20px;
  padding: 12px 2px;
  text-align: left;
  @media screen and (max-width: 768px) {
    grid-template-areas: "input input" "textarea textare";
  }
`;

export const FormCol1 = styled.div`
  grid-area: input;
`;

export const FormCol2 = styled.div`
  grid-area: textarea;
`;

export const Label = styled.label`
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 420px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: #334257;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 83%;
  background-color: #334257;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  resize: none;

  &:focus {
    transition: all 1s ease-in-out;
  }
`;

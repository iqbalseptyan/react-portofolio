import React from "react";
import { Container } from "../ContainerElements";
import { Column1, Column2 } from "../Contact/ContactElements";
import {
  ContactImg,
  ContactRow,
  FormCol1,
  FormCol2,
  FormRow,
  Input,
  Label,
  Subtitle,
  Textarea,
  Title,
} from "./ContactElements";
import mail from "../../images/mail.svg";
import { Button } from "../ButtonElements";
const Contact = () => {
  return (
    <Container id="contact">
      <ContactRow>
        <Column1>
          <Title>contact me</Title>
          <Subtitle>
            Please fill out the form and describe your project needs and i'll
            contact you as soon as possible
          </Subtitle>
          <FormRow>
            <FormCol1>
              <Label htmlFor="fname">
                Name*
                <Input placeholder="Name" type="text"></Input>
              </Label>
              <Label htmlFor="email">
                Email*
                <Input placeholder="Email" type="email"></Input>
              </Label>
              <Label htmlFor="subject">
                Subject*
                <Input placeholder="Subject" type="text"></Input>
              </Label>
            </FormCol1>
            <FormCol2>
              <Label htmlFor="subject">
                Description*
                <Textarea placeholder="Describe you project..."></Textarea>
              </Label>
            </FormCol2>
          </FormRow>
        </Column1>
        <Column2>
          <ContactImg src={mail} />
        </Column2>
        <Button to="/" darkbg="true" type="submit">
          Send
        </Button>
      </ContactRow>
    </Container>
  );
};

export default Contact;

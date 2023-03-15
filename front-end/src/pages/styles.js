import styled, { css } from "styled-components";
import InputField from '../components/input/index';

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 1px solid lightgrey;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  font-family: system-ui;
  font-size: 14px;
  line-height: 1.1rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const Input = styled(InputField)`
  background-color: white;
  border: none;
  border-bottom: 1px solid lightgrey;
  font-size: 16px;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem 0rem;

  &:focus,
  &:active {
    border: none;
    border-bottom: 1px solid blue;
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
        valid &&
        css`
      border: none;
      border-bottom: 1px solid red;


      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`;

export const StyledInlineErrorMessage = styled.div`
  color: rgb(120, 27, 0);
  display: block;
  margin-top: 0.5rem;
  white-space: pre-line;
`;
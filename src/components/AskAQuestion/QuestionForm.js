import React, { useState } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Segment, Message } from "semantic-ui-react";

import "./QuestionForm.css";
import { validateEmail, validatePassword } from "./Validation";

import { sendQuery } from "../../actions/askAQuestion";
import QuerySubmitted from "../../containers/QuerySubmitted";

function QuestionForm({parentRequestSent, parentRequestError, sendQueryData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");
  const [englishProficiency, setEnglishProficiency] = useState("");
  const [childsAge, setChildsAge] = useState("");
  const [subject, setSubject] = useState("");
  const [queryLanguage, setQueryLanguage] = useState("English");
  const [query, setQuery] = useState("");

  const textInput = (
    labelText,
    nameText,
    onValueChange,
    placeholderText = null
  ) => {
    return (
      <div class="field">
        <label>{labelText}</label>
        <input
          type="text"
          name={nameText}
          placeholder={placeholderText ? placeholderText : labelText}
          onChange={e => onValueChange(e.target.value)}
        />
      </div>
    );
  };

  const radialOption = optionName => {
    return (
      <>
        <label>
          <input
            name="skillLevel"
            type="radio"
            onChange={e => setEnglishProficiency(optionName)}
            required
          />
          {optionName}
        </label>
      </>
    );
  };

  const dropdownOption = optionName => {
    return <option value={optionName}>{optionName}</option>;
  };

  const errorMessage = message => {
    return <div class="error">{message}</div>;
  };

  const formatData = () => {
    return (
      {
        "parent": {
          "email": email,
          "first_name" : name,
          "password" : password,
          "preferred_language": language,
          "english_proficiency": englishProficiency,
        },
        "task": {
          "content": query,
          "skill": subject,
          "childs_age": childsAge
        }
      }
    )
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendQueryData(formatData());
  }

  let page = (
      <div class="question-form">
        <Segment raised>
          <h1>What do you need help with?</h1>
          <form 
            class="ui three wide form" 
            onSubmit={handleSubmit}>
            {textInput("First Name:", "first-name", setName)}
            {textInput("Email Address:", "email-address", setEmail)}
            {email.length > 1 &&
              !validateEmail(email) &&
              errorMessage("Please enter a valid email address")}
            {textInput("Password:", "password", setPassword)}
{/*             {password.length > 1 &&
              !validatePassword(password) &&
              errorMessage(
                "Please enter a valid password. \nWhich must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              )} */}
            {textInput(
              "Preferred Language (if not English):",
              "preferred-language",
              setLanguage,
              "Preferred Language"
            )}

            <form class="field">
              <label for="skillLevel">English proficiency:</label>
              <div class="inline fields">
                {radialOption("Beginner")}
                {radialOption("Conversational")}
                {radialOption("Proficient")}
                {radialOption("Fluent")}
                {radialOption("Native")}
              </div>
            </form>

            {textInput("Child's age*:", "childs-age", setChildsAge, "Eg. 10")}
            {textInput(
              "Subject needs help with*:",
              "subject",
              setSubject,
              "Eg. Mathemathics, English"
            )}

            <label for="query">Query*:</label>

            <div class="dropdown-menu">
              <select onChange={e => setQueryLanguage(e.target.value)}>
                {dropdownOption("English")}
                {dropdownOption("French")}
                {dropdownOption("German")}
              </select>
            </div>

            <div class="field">
              <textarea
                placeholder="How can we help you?"
                onChange={e => setQuery(e.target.value)}
              ></textarea>
            </div>
            <button class="ui button" type="submit">
              Submit
            </button>
          </form>
        </Segment>
      </div>
  )

  let requestErrorMessage = null;
  
  if (parentRequestError) {
    requestErrorMessage = (
      <div class="request-error">{parentRequestError}</div>
    )
  }

  return (
    <div class='question-form-container'>
      {parentRequestSent ? <Redirect to='/query-submitted'/> : null}
      {requestErrorMessage}
      {page}
    </div>
  );
}

const mapStateToProps = ( state ) => ({
  parentRequestSent: state.parentRequestSent,
  parentRequestError: state.parentRequestError
})

const mapDispatchToProps = ( dispatch ) => ({
	sendQueryData: ( formatData ) => {
		dispatch( sendQuery( formatData ) );
	},
});

export default connect( mapStateToProps, mapDispatchToProps )( QuestionForm );

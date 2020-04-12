import React, { useState } from "react";
import { Segment } from "semantic-ui-react";

import "./QuestionForm.css";

function QuestionForm() {
  // Declare a new state variable, which we'll call "count"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  const radialOption = (optionName) => {
    return (
      <>
        <label>
          <input name="skillLevel" type="radio" onChange={e => setEnglishProficiency(optionName)}/>
          {optionName}
        </label>
      </>
    );
  };

  const dropdownOption = optionName => {
    return <option value={optionName}>{optionName}</option>;
  };

  return (
    <>
      <div class="question-form">
        <Segment raised>
          <h1>What do you need help with?</h1>
          <form class="ui three wide form">
            {textInput("First Name:", "first-name", setName)}
            {textInput("Email Address:", "email-address", setEmail)}
            {textInput(
              "Preferred Language (if not English):",
              "preferred-language",
              setLanguage,
              "Preferred Language"
            )}

            <form class="field" >
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
    </>
  );
}

export default QuestionForm;

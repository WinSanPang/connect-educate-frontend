import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

import './QuestionForm.css';

function QuestionForm() {
    // Declare a new state variable, which we'll call "count"
    const [addQuestion, setAddQuestion] = useState(false);

    const textInput = (labelText, nameText, placeholderText=null) => {
        return(
            <div class="field">
                <label>{labelText}</label>
                <input type="text" name={nameText} placeholder={placeholderText ? placeholderText : labelText}/>
            </div>
        )
    }

    const radialOption = (optionName, title) => {
        return(<div class="field">
            <div class="ui radio checkbox">
                <label>{title}</label>
                <input type="radio" name={optionName} tabindex="0" class="hidden"/>
            </div>
        </div>)
    }

    const dropdownOption = (value, optionName) => {
        return(<option value="value">{optionName}</option>)
    }

    return (
        <>
        <div class="question-form">
        <Segment raised>
        <h1>What do you need help with?</h1>
        <form class="ui three wide form">
            {textInput("First Name:", "first-name")}
            {textInput("Email Address:", "email-address")}
            {textInput("Preferred Language (if not English):", "preferred-language", "Preferred Language")}

            <div class="field">
                <label for="skillLevel">English proficiency:</label>
                <div class="inline fields">
                    {radialOption("skillLevel", "Beginner")}
                    {radialOption("skillLevel", "conversational")}
                    {radialOption("skillLevel", "Proficient")}
                    {radialOption("skillLevel", "Fluent")}
                    {radialOption("skillLevel", "Native")}
                </div>
            </div>

            {textInput("Child's age*:", "childs-age", "Eg. 10")}
            {textInput("Subject needs help with*:", "subject", "Eg. Mathemathics, English")}

            <label for="query">Query*:</label>

            <div class="dropdown-menu">
                <select>
                    {dropdownOption('0', 'English')}
                    {dropdownOption('0', 'French')}
                    {dropdownOption('0', 'German')}
                </select>
            </div>

            <div class="field">
                <textarea placeholder="How can we help you?"></textarea>
            </div>
            
            <button class="ui button" type="submit">Submit</button>
        </form>
        </Segment>
        </div>
        </>
        );
}

export default QuestionForm

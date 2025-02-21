import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form ">
            
            <div className="form-field">
              <input required placeholder="Name" className="input-field" type="text" />
            </div>
            <div className="form-field">
              <input required placeholder="Email" className="input-field" type="email" />
            </div>
            <div className="form-field">
              <input required placeholder="Subject" className="input-field" type="text" />
            </div>
            <div className="form-field">
              <textarea required placeholder="Message" cols={30} rows={3} className="input-field" defaultValue={""} />
            </div>
            <button className="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    //background-color: #0a192f;
    border-radius: 20px;
  }


  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 1px 1px 1px #D4E157;
    margin-bottom: 12px;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding-inline: 1em;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #64ffda;
    font-weight: bold;
    outline: 1px solid #D4E157;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover {
    transition: all ease-in-out 0.3s;
    background-color: #D4E157;
    color: #000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px #D4E157;
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #D4E157 0%, #D4E157 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .form-card1:hover {
    box-shadow: 0px 0px 30px 1px #D4E157;
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }`;

export default Form;

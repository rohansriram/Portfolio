// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className='container'>
        <h1 style={{ marginBottom: "2%" }}>Contact Me</h1>
        <form className='container'
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mvovjdyr"
        method="POST"
      >
        <div class='form-group' className='container'>
        <label for='exampleFormControlInput1'>Email:</label>
        <input type="email" class='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com' name="email" />

        </div>
        {/* <!-- add your custom form HTML here --> */}
        <div
						class='form-group'
						className='container'
						style={{
							marginTop: "2%",
            }}
					>
              <label for='exampleFormControlTextarea1'>Message:</label>
              
              <textarea
							class='form-control'
							id='exampleFormControlTextarea1'
              rows='4'
              name="message"
							></textarea>

          </div>
        
        
        {status === "SUCCESS" ? <p>Thank you! Message has been succesfully sent!</p> : <div style={{ textAlign: "center", marginTop: "2%" }}>
        <button className='btn btn-dark btn-sm my-1'>Submit</button>
         </div>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>

      </div>
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
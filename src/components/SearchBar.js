import React from 'react'
//for input type we want to change it from an uncontrolled input to a controlled input. the idea behind this is that we are going to hook it up to the state of our SearchBar class. in practice we do this to make sure that we are storing our data for the search term inside of the component and not inside of the DOM. note below with state, I use the word "term" (short for search term), but this can be named anything. Then i tell the input that it gets its value from this.state.term. Or if I used the word "text," this.state.text. But just telling the input its value is not enough. It will need an eventChangeHandler to make that value changeable. For example, if we put text in the string after term:, we would not be able to make changes in the search bar. It would be useless. If you provide a "value" property to a form field without an "onChange" handler, what will be rendered is a read-only field. If the field should be mutable, then use defaultValue. Otherwise, set either "onChange" or "readOnly"
//important...the specific term onChange is very special. If we pass a callback handler to the onChange prop here, it will be called anytime that the input is changed. onChange is not a variable we can change. It has special functionality. Note below that the call back method of onInputChange could be named anything. onInputChange is a callback method that we are eventually going to create as a callback on the SearchBar class. Since it is an event callback we define it with an arrow function. onInputChange is the name we gave to our onChange handler. The callback method of onInputChange is going to be called with an event object. We want to take our value of the input out of that event object and assign it to our state property.

//the above is about the input. This is about the form element. We want to make sure we get a callback handler on our form as well, so that we can watch for anytime this form gets submitted. We will add a specially named property call onSubmit. Anytime a user submits the form, we will call a callback method of this.onFormSubmit. We will use the same syntax as we did for the onInputChange. Remember we are assigning this as an arrow function because this is a callback that we are going to pass to some child element. The arrow function syntax will prevent confusion that comes with "the value of 'this' inside a callback" refer to notes in the image search bar we created called "pics.""



export default class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input type="text" value={this.state.term} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}
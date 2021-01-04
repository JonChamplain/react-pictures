import React from "react";

class Searchbar extends React.Component {
  state = { term: "WHAT ARE YOU LOOKING FOR?????" };

  onInputClick(event) {
    console.log("Input clicked");
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
              onClick={this.onInputClick}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;

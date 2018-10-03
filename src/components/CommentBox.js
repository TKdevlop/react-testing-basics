import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
class CommentBox extends Component {
  state = {
    comment: ""
  };
  setComment = e => {
    this.setState({ comment: e.target.value });
  };
  addComment = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addComment}>
          <h4>Add comment</h4>
          <textarea onChange={this.setComment} value={this.state.comment} />
          <div>
            <button disabled={this.state.comment === "" ? true : false}>
              Submit comment
            </button>
          </div>
        </form>
        <button className="getComments" onClick={this.props.fetchComment}>
          FETCH COMMENTS
        </button>
      </div>
    );
  }
}
const mapActionToProps = {
  ...actions
};
export default connect(
  null,
  mapActionToProps
)(CommentBox);

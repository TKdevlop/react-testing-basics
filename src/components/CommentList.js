import React, { Component } from "react";
import { connect } from "react-redux";
class CommentList extends Component {
  render() {
    const comments = this.props.comments.map((comment, key) => (
      <li key={key}>{comment}</li>
    ));
    return <ul>{comments}</ul>;
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
export default connect(
  mapStateToProps,
  null
)(CommentList);

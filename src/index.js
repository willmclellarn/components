import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Will"
        timeAgo="Today at 4:45PM"
        commentText="I love it!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        commentText="Eh, it kinda stunk"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        commentText="My fav blog ever"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from 'react-photo-gallery';
import SelectedImage from "./s";
import { photos } from "./photos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BasicRows() {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  );

  return (
    <Router>
      <div>
        <p>
          <button onClick={toggleSelectAll}>toggle select all</button>
        </p>
        <Switch>
          <Route exact path="/">
            <Gallery photos={photos} renderImage={imageRenderer} getReque/>
          </Route>
          <Route path="/photo/:src">
            <h1>{window.location.pathname.slice(7)}</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// render(<App />, document.getElementById("app"));

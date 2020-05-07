import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';


// class App extends React.Component {

//   render() {
//     return <div>Hello</div>;
//   }
// };


const PageOne = () => {
  return (
    <div>
      <h2>Page One - Home page</h2>
      <Link to="/pagetwo"> Go to Page two</Link>

    </div>
  );
};

const PageTwo = () => {
  return <div>
    PageTwo - The second page
    <div>
      <button> click me</button>
    </div>
    <Link to="/"> Go to Page one </Link>>

  </div>;
};

const App = () => {
  //extractedPath.comtains(path) without exact keyword
  // when exact keyword is present => equal is used for comparison

  return (
    <div>
      <BrowserRouter>
        <div>
          {/* //extractedPath.comtains(path) */}
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
          <Route path="/p2" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
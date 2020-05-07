import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';


// class App extends React.Component {

//   render() {
//     return <div>Hello</div>;
//   }
// };

const App = () => {
  //extractedPath.comtains(path) without exact keyword
  // when exact keyword is present => equal is used for comparison

  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';
//
// import mirror, {render, Router, Route} from 'mirrorx';
// import App from './App'
//
// render(<App/>, document.getElementById('root'));


// import React from 'react'
// import mirror, {render, Router} from 'mirrorx'
// import App from './App1'
//
// mirror.defaults({
//     historyMode: 'browser'
// })
//
// render (
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

import React from 'react'
import {render} from 'mirrorx'

import App from './components/App'

render(<App/>, document.getElementById('root'))

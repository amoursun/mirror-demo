// import React from 'react'
// import mirror, {actions, connect} from 'mirrorx'
//
// import './App.css'
//
// mirror.model({
//     name: 'app',
//     initialState: 0,
//     reducers: {
//         increment(state) {
//             return state + 1
//         },
//         decrement(state) {
//             return state - 1
//         }
//     },
//     effects: {
//         async incrementAsync() {
//             await new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve()
//                 }, 1000)
//             })
//             actions.app.increment()
//         },
//         async decrementAsync() {
//             await new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve()
//                 }, 1000)
//             })
//             actions.app.decrement()
//         }
//     }
// })
//
// // const App = connect(state => {
// //     return {count: state.app}
// // })(props => (
// //         <div>
// //             <h1>{props.count}</h1>
// //             <button onClick={() => actions.app.decrementAsync()}>- Async</button>
// //             <button onClick={() => actions.app.decrement()}>-</button>
// //             <button onClick={() => actions.app.increment()}>+</button>
// //             <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
// //         </div>
// //     )
// // )
//
// // render(<App />, document.getElementById('root'));
//
// const App = props => {
//     return (
//         <div id="counter-app">
//             <h1>{props.count}</h1>
//             <div className="btn-wrap">
//                 <button style={{width: 100}} onClick={() => actions.app.decrementAsync()}>- Async</button>
//                 <button onClick={() => actions.app.decrement()}>-</button>
//                 <button onClick={() => actions.app.increment()}>+</button>
//                 <button style={{width: 100}} onClick={() => actions.app.incrementAsync()}>+ Async</button>
//             </div>
//         </div>
//     )
// }
//
// export default connect(state => {
//     return {count: state.app}
// })(App)



import React from 'react'
import  {Route} from 'mirrorx'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import Topics from './containers/Topics'


const App = () => (
    <div>
        <Header />
        <hr/>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </div>
)

export  default App












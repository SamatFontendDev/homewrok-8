// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react'
import Search from '../Search/Search'
import './AppRouter.css'
import ShowPage from '../ShowPage/ShowPage'

class AppRouter extends React.Component {
    render() {
        return(
            <div className="App">
                 <Switch>
                     <Route path="/" component={Search} exact />
                     <Route path='/show/:id' component={ShowPage}/>
                </Switch>
            </div>
        )
    }
}

export default AppRouter
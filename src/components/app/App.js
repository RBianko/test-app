import './App.css';
import {Route, Redirect} from "react-router-dom";
import Header from "../header/header";
import Main from "../main/main";
import Login from "../login/login";
import Profile from "../profile/profile";
import Info from "../info/info";
import Calendar from "../calendar/calendar";
import { useSelector } from "react-redux"
import { Provider } from 'react-redux';
import {store as calendarStore } from '../redux/store/calendarStore';

import { selectUser } from '../redux/reducers/userSlice';

function App() {
    const user = useSelector(selectUser);

    return (
        <div className="App-wrapper">
            <Header />
            <div className="wrapper">
                    <Route exact path="/" render={() => <Main />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/profile">
                        {user.isLoggedIn ? <Profile /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/info" render={() => <Info />} />
                <Provider store={calendarStore}>
                    <Route path="/calendar">
                        {user.isLoggedIn ? <Calendar /> : <Redirect to="/login" />}
                    </Route>
                </Provider>
                </div>
        </div>
    );
}

export default App;
// import moment from "moment";
// import { getUsers } from './common/userAPI';
import './style.css';
import "./style.scss";

console.log("Hello webpack!");

const fancyFunc = () => {
    return [1, 2];
};
  
const [a, b] = fancyFunc();

// getUsers().then(json => console.log(json));

//dynamic import
const getUserModule = ()=> import(/* webpackChunkName: "UsersAPI" */ './common/userAPI');

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log('start loading...')
    getUserModule().then(({ getUsers }) => {
        getUsers().then(json => console.log(json));
    });
});


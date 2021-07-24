import { isValidURL } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

/*remove once event handlers are in*/
// alert("I EXIST")
// console.log("CHANGE!!");
/*remove once event handlers are in*/

/*CSS*/
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

//need a event listener for submit calling handleSubmit
document.querySelector("form").addEventListener("submit", handleSubmit);

//do I need exports of the imports to keep passing them along?
export {handleSubmit, isValidURL
}

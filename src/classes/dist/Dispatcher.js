// Dispatcher Description:
//      The dispatcher function will take arguments an array of elements objects,
//      and each element has a name to call by it using getElementById method,
//      and each element has settings objects like event option, create new one option and others,
//      and after changing on each element properties based on the settings,
//      the dispatcher will return the elements list as an array object or the single object if one object was recieved 
// Params: in the dispatcher parameters interface above
// Return:
//      dom_elements: object[...DOMElements]
export default function domDispatcher(args) {
    // Initializing the list of html elements variable
    let dom_elements = [];
    // For each argument in the passed arguments ...
    args.forEach((argument) => {
        // Getting the html element by element name as id if that element exists, else it will be an empty object
        let dom_element = argument.settings && argument.settings.new ? {} : document.getElementById(argument.name);
        // If there is settings and there is a new option ...
        if (argument.settings && argument.settings.new) {
            // get the last father element of the target if there is a last father option
            let father_element = argument.settings.last_father
                ? document.getElementById(argument.settings.target).parentElement.lastChild
                : document.getElementById(argument.settings.target);
            // create the new element
            dom_element = document.createElement(argument.name);
            // set an id to the new element
            dom_element.id = argument.settings.id;
            // append the new element to the father element
            father_element.appendChild(dom_element);
            // if there is brothers option ...
            if (argument.settings.brothers) {
                // for each brother ...
                argument.settings.brothers.forEach((brother) => {
                    // it will be appended with the new element on the same father element
                    father_element.append(brother);
                });
            }
        }
        // If there is settings and there is a classList option ...
        if (argument.settings && argument.settings.classList) {
            // for each class on the class list ...
            argument.settings.classList.forEach((class_name) => {
                // add the class to the element
                dom_element.classList.add(class_name);
            });
        }
        // If there is settings and there is a inner text option ...
        if (argument.settings && argument.settings.innerText) {
            // add the inner text to the element
            dom_element.innerText = argument.settings.innerText;
        }
        // If there is settings and there is a set value option ...
        if (argument.settings && argument.settings.set_value) {
            // add the value to the element
            dom_element.value = argument.settings.set_value;
        }
        // If there is settings and there is an event option ...
        if (argument.settings && argument.settings.event) {
            // Add an event listener to the html element and pass to it the requested event type and the requested event callback
            dom_element.addEventListener(argument.settings.event.type, (event) => argument.settings.event.callback(event));
        }
        // Push the html element to the declared list
        dom_elements.push(dom_element);
    });
    // Return the list of html elements
    return dom_elements.length == 1 ? dom_elements[0] : dom_elements;
}

export const append = (parent, el) => {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
};

export const createNode = (element) => {
    return document.createElement(element); // Create the type of element you pass in the parameters
};
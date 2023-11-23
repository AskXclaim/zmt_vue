const nameOf = (obj, addText) => {
    if (obj && obj.name) {
        let name = obj.name.replace("Validator", "");
        name = name.replace("Length", "");

        if (addText) return `${addText}${name}`;
        else return `${name}`;
    }

    throw new Error("Method was unable to retrieve object name");
};
export default nameOf; 

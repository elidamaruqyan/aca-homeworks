const isRequired = (value) => {
    if (!value.trim()) {
        throw new Error("Value must have at least 1 character!");
    }
};

export {
    isRequired
}

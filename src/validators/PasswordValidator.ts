const Validator = (password:string) => {
    return ({
        message: "Has at least one lower-case letter",
        valid: /(?=.*[a-z])/.test(password)
    });
};

export default Validator;
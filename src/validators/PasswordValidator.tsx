const Validator = (password:string) => {
    return ({
        message: "Has at least one",
        valid: /(?=.*[a-z])/.test(password)
    });
};

export default Validator;
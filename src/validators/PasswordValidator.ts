const Validator = (password:string) => {
    return ({
        message: "Has at least one Lowercase Letter",
        valid: /(?=.*[a-z])/.test(password)
    });
};

export default Validator;
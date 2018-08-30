class Validator {
    static isDigiOnly(str) {
        return /^\d+$/.test(str)
    }
}

export default Validator
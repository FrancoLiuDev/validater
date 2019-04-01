class Validator {
  static isDigiOnly(str) {
    return /^\d+$/.test(str)
  }
  static isStringValidLenth(len) {
    return
  }
  static isValidEmail(str) {
    var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    if (str.search(emailRule) != -1) return true
    else return false
  }
  static equalLength(str, lenth) {
    return str.length - lenth
  }
  static equalLenRange(str, from, end) {
    if (str.length - from < 0) return str.length - from
    if (str.length - end > 0) return str.length - end
    return 0
  }
  static isValidChinese(str) {
    var emailRule = /[^\u4E00-\u9FA5]/g
    if (str.search(emailRule) != -1) return false
    else return true
  }
  static isTwMobileNumber(str) {
    var emailRule = /^09\d{2}-?\d{3}-?\d{3}$/
    if (str.search(emailRule) != -1) return true
    else return false
  }
}

export default Validator

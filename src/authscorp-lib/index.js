import Forms from './forms'

class AuthscorpOpenid {

    login(username, password) {
        console.log(username, password)
    }

    get two_factor() {
        return {
            validate(token, code) {
                console.log(token, code)
            }
        }
    }

    register(fields) {
        console.log(fields)
    }

    get password_lost() {
        return {
            request(fields) {
                console.log(fields)
            },
        }
    }

    init() {
        Forms.init(this)
    }

}

export default new AuthscorpOpenid()
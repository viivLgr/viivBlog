export class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if(this.state === 'show') {
            alert('已经显示了')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }
    hide() {
        if(this.state === 'hide') {
            alert('已经隐藏了')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }
}

LoginForm.getInstance = (() => {
    let instance
    return () => {
        if(!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()



// ---------测试-----------

// const login1 = LoginForm.getInstance()
// login1.show()

// const login2 = LoginForm.getInstance()
// login2.hide()
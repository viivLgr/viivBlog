// 接收者
class Receiver {
    exec(task = '') {
        console.log('执行任务' + task)
    }
}

// 命令者
class Command{
    constructor(receiver) {
        this.receiver = receiver
    }
    cmd(task = '') {
        this.receiver.exec(task)
    }
}

// 发布者
class Invoker {
    constructor(command, task) {
        this.command = command
        this.task = task || ''
    }
    invoke() {
        console.log('开始')
        this.command.cmd(this.task)
    }
}

// 测试
// 士兵
const soldier = new Receiver()
// 小号手
const trumpeter = new Command(soldier)
// 将军
const general = new Invoker(trumpeter, '前进~')
general.invoke()

1. truffle 相当于create-react-app 或者vue-cli
2. 一开始用没问题，但是想进阶，还需要自己配置一下

1. 使用js测试合约，测试驱动开发
2. 需要外部调用 声明函数类型为public
3. solc (sol compile) 编译.sol 文件，生成json(后面编译部署)
    1. bytecode 部署合约用的数据
    2. interface 接口声明

1. 每次compile清空文件 重新生成 rimraf
2. 报错信息打印
3. 最好能监听，自动compile  onchange

1. 课程列表
    1. 每一个课程是一个单独的合约
    2. 使用CourseList来控制课程的合约

2. 测试 使用mocha
    断言使用node自己的assert
    本地部署环境 ganache-cli 测试的时候开虚拟环境测试

3. 课程
    owner 课程创建者
    name 课程名
    content 课程简介
    target 课程目标是募资多少 wei ETH
    fundingPrice 众筹价格
    price 上线价格
    img 课程头图
    video 视频
    count 支持人数
    isOnline 是否上线


4. 众筹  payable 可付款的
    1. 如果收到的钱大于目标 上线
    2. 上线前的钱 CEO 不分
    3， 上线之后卖的钱，CEO分

    
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

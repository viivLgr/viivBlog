import React from "react";
import Web3 from "web3";
import TruffleContract from "truffle-contract";
import AdoptionJson from "./truffle/build/contracts/Adoption.json";
import { Layout, Button, Row, Col } from "antd";
import pets from "./truffle/src/pets.json";
import "./App.css";

// 1. 链接合约
// 2. 执行一下合约内部函数
// 3. 添加ant.design ui 库支持
// 4. 完成项目
class App extends React.Component {
  constructor(props) {
    super(props);
    this.web3 = null;
    this.Adoption = null;
    this.web3Provider = null;
    this.initAddress = "0x" + "0".repeat(40);
    // this.init();
    this.initWeb3();
    this.state = {
      adopters: []
    };
  }
  init() {
    if (typeof window.web3 !== "undefined") {
      this.web3Provider = window.web3.currentProvider;
      console.log("web3Provider", this.web3Provider);
    } else {
      alert("请安装metaMask");
      return;
    }
    // this.web3 = new Web3(this.web3Provider);
    this.web3 = new Web3.providers.HttpProvider("http://localhost:7545");
    console.log("web3", this.web3);
    // this.initAdoption();
  }
  async initWeb3() {
    if (window.ethereum) {
      this.web3Provider = window.ethereum;
      try {
        await window.ethereum.enable();
      } catch (error) {
        console.error("User denied account access");
      }
    } else if (window.web3) {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
    }
    // this.web3 = new Web3(this.web3Provider);
    this.initAdoption();
  }
  initAdoption() {
    this.Adoption = TruffleContract(AdoptionJson);
    this.Adoption.setProvider(this.web3Provider);
    return this.markAdopted();
  }
  async markAdopted() {
    // 部署链接一下 await
    const adoptionInstance = await this.Adoption.deployed();
    const adopters = await adoptionInstance.getAdopters.call();
    this.setState({ adopters }, () => {console.log('markAdopted', adopters)});
  }
  async adopt(petId) {
    const account = window.web3.eth.defaultAccount;
    const adoptionInstance = await this.Adoption.deployed();
    await adoptionInstance.adopt(petId, { from: account });
    this.markAdopted();
  }
  isActive(i) {
    return this.state.adopters[i] === this.initAddress;
  }
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <Layout className="layout">
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <div className="content" style={{backgroundColor: '#fff', padding: '40px'}}>
            <Row gutter={40}>
              {pets.map((v, i) => (
                <Col key={i} span={6}>
                  <img src={v.picture} alt={v.name} />
                  <div className="center">
                    <p className="name">{v.name}</p>
                    {this.isActive(i) ? (
                      <Button type="primary" onClick={() => this.adopt(i)}>
                        领养
                      </Button>
                    ) : (
                      <p>已被领养</p>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Created by Ant Viiv</Footer>
      </Layout>
    );
  }
}
export default App;

import React from "react";
import { PageHeader, Row, Col } from "antd";
import "antd/dist/antd.css"
import MemberList from "./components/MemberList"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
      <Row>
        <Col span={16} offset={4}>
          <PageHeader
            avatar={{ src: "https://cdn-pic.gcxstudio.cn/2021/07/05/5B8804572CA7725395EE48BEF3E1BD77.png" }}
            title="GBCLStudio 官网">
          </PageHeader>
          <h3>我们的成员</h3>
          <MemberList></MemberList>
          <Footer></Footer>
        </Col>
      </Row>
    </div >
  );
}

export default App;

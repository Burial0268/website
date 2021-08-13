import React from "react";
import { PageHeader, Row, Col } from "antd";
import "antd/dist/antd.css";
import Products from "./components/Products";
import MemberList from "./components/MemberList";;
import Footer from "./components/Footer";
import AffixTip from "./components/AffixTip";


function App() {

  return (
    <div>
      <Row>
        <Col span={16} offset={4}>
          <PageHeader
            avatar={{ src: "https://cdn-pic.gcxstudio.cn/2021/07/05/5B8804572CA7725395EE48BEF3E1BD77.png" }}
            title="GBCLStudio 官网">
          </PageHeader>
          <Products></Products>
          <MemberList></MemberList>
          <Footer></Footer>
        </Col>
      </Row>
      <AffixTip></AffixTip>
    </div >
  );
}

export default App;

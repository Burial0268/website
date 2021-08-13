import React from "react";
import { PageHeader, Row, Col, message, notification } from "antd";
import "antd/dist/antd.css";
import Products from "./components/Products";
import MemberList from "./components/MemberList";
import Footer from "./components/Footer";
import AffixTip from "./components/AffixTip";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //message.info("当前网站处于未完工状态，当前样式不代表最终品质");
    notification["info"]({
      message: "Tips",
      description:
        "我们欢迎您与我们交流，也希望你能加入我们，与我们一起携手共进！",
    });
  });
  return (
    <div>
      <Row>
        <Col span={16} offset={4}>
          <PageHeader
            avatar={{
              src: "https://cdn-pic.gcxstudio.cn/2021/07/05/5B8804572CA7725395EE48BEF3E1BD77.png",
            }}
            title="GBCLStudio 官网"
          ></PageHeader>
          <Products></Products>
          <MemberList></MemberList>
          <Footer></Footer>
        </Col>
      </Row>
    </div>
  );
}

export default App;

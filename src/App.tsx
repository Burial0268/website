import React, { Component } from "react";
import { PageHeader } from "antd";
import "antd/dist/antd.css"
import MemberList from "./components/MemberList"


function App() {

  return (
    <div>
      <PageHeader
        avatar={{ src: "https://cdn-pic.gcxstudio.cn/2021/07/05/5B8804572CA7725395EE48BEF3E1BD77.png" }}
        title="GBCLStudio 官网">
      </PageHeader>
      <MemberList></MemberList>
    </div >
  );
}

export default App;

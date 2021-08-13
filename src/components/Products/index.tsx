import React, { Component } from "react";
import { Carousel, Image } from "antd";

class Products extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <Image preview={false} src="https://gbclstudio.cn/p1.jpg"></Image>
          <Image preview={false} src="https://gbclstudio.cn/p2.jpg"></Image>
          <Image
            preview={false}
            onClick={() => {
              location.href = "https://www.gcxstudio.cn/";
            }}
            src="https://gbclstudio.cn/p3.png"
          ></Image>
        </Carousel>
      </div>
    );
  }
}

export default Products;

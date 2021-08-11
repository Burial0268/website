import React from "react";
import { Affix, Avatar } from "antd";

function AffixTip() {
    return (
        <Affix style={{ textAlign: "center" }} offsetBottom={10}>
            <Avatar src="https://cdn-pic.gcxstudio.cn/2021/07/05/5B8804572CA7725395EE48BEF3E1BD77.png"></Avatar>
            <span>我们欢迎您与我们交流，也希望你能加入我们，与我们一起携手共进！</span>
        </Affix>
    )
}

export default AffixTip;
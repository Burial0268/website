import React, { Component } from "react";
import { Avatar, List, Modal } from "antd";

class MemberList extends Component {
    state = { clickCount: 0, isEggVisible: false }

    memberList = [
        {
            name: 'Gong_cx',
            mail: "aries@gcxs.fun",
            avatar: "https://gbclstudio.cn/avatar1.jpg",
            description: "铁憨憨，网站运营"
        },
        {
            name: 'Burial0268',
            mail: "burial0268@gbclstudio.cn",
            avatar: "https://gbclstudio.cn/avatar2.jpg",
            description: "大聪明，软件运营"
        },
        {
            name: 'xxcxy',
            mail: "wojiushixxx@126.com",
            avatar: "https://gbclstudio.cn/avatar3.jpg",
            description: "摸鱼的，前端萌新"
        },
    ];

    handleColorEgg = () => {
        if (this.state.clickCount == 10) {
            this.setState({
                isEggVisible: true
            })
        }
        this.setState({
            clickCount: this.state.clickCount + 1
        })


    }

    handleEggOK = () => {
        this.setState({
            isEggVisible: false
        })
    }

    render() {
        return (
            <div>
                <h2 onClick={() => { return this.handleColorEgg() }}>我们的成员</h2>
                <List itemLayout="horizontal" dataSource={this.memberList} renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={"mailto:" + item.mail}>{item.name}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}></List>
                <Modal
                    title="你发现了彩蛋！"
                    visible={this.state.isEggVisible} onOk={() => { return this.handleEggOK() }}>
                    <p>你已经点击这个标题11.4514（四舍五入）次了，这么臭的次数还有必要点吗（恼</p>
                </Modal>
            </div >
        )
    }
}

export default MemberList;
import React, { Component } from "react";
import { Avatar, List } from "antd";

class MemberList extends Component {
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

    render() {
        return (
            <List itemLayout="horizontal" dataSource={this.memberList} renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={"mailto:" + item.mail}>{item.name}</a>}
                        description={item.description}
                    />
                </List.Item>
            )}></List>
        )
    }
}

export default MemberList;
import React, { Component } from "react";
import { Affix, Menu } from "antd";

class AffixMenu extends Component {
  render() {
    const { SubMenu } = Menu;
    return (
      <div>
        <Affix offsetTop={10}>
          <Menu style={{ width: 20 }} title="" mode="vertical">
            <SubMenu key="0">
              <Menu.Item key="00">a</Menu.Item>
            </SubMenu>
          </Menu>
        </Affix>
      </div>
    );
  }
}

export default AffixMenu;

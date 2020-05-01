import React, { Component } from "react";
import {
  Tabs,
  Row,
  Col,
  Card,
  Avatar,
  Select,
  InputNumber,
  Button
} from "antd";

import itemsData from "./ItemsList1.json";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

class ItemsList1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Option } = Select;
    const { TabPane } = Tabs;
    const { Meta } = Card;
    return (
      // <Row
      //   style={{
      //     width: window.innerWidth > 600 ? "calc(100% - 220px)" : "100vw",
      //     margin: "1%"
      //   }}
      // >
      //   <Tabs defaultActiveKey="1" tabPosition={"top"}>
      //     <TabPane tab="Daily Essentials" key="1">
      //       {itemsData.items.map(item => {
      //         return item.category == "dailyEssentials" ? (
      //           // <span>{item.description}</span>

      //           <Card
      //             style={{ margin: "3%" }}
      //             actions={[
      //               <Select
      //                 defaultValue="lucy"
      //                 style={{ width: 120 }}
      //                 //   onChange={handleChange}
      //               >
      //                 <Option value="jack">Jack</Option>
      //                 <Option value="lucy">Lucy</Option>

      //                 <Option value="Yiminghe">yiminghe</Option>
      //               </Select>,
      //               <InputNumber
      //                 min={1}
      //                 max={10}
      //                 defaultValue={3}
      //                 //   onChange={onChange}
      //               />,
      //               <Button type="primary">Primary</Button>
      //               // <SettingOutlined key="setting" />,
      //               // <EditOutlined key="edit" />,
      //               // <EllipsisOutlined key="ellipsis" />
      //             ]}
      //           >
      //             <Meta
      //               avatar={
      //                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      //               }
      //               title={item.description}
      //               description={
      //                 <React.Fragment>
      //                   <Select
      //                     defaultValue="lucy"
      //                     style={{ width: 120 }}
      //                     //   onChange={handleChange}
      //                   >
      //                     <Option value="jack">Jack</Option>
      //                     <Option value="lucy">Lucy</Option>

      //                     <Option value="Yiminghe">yiminghe</Option>
      //                   </Select>
      //                   <InputNumber
      //                     min={1}
      //                     max={10}
      //                     defaultValue={3}
      //                     //   onChange={onChange}
      //                   />
      //                 </React.Fragment>
      //               }
      //             />
      //           </Card>
      //         ) : (
      //           <span></span>
      //         );
      //       })}
      //     </TabPane>
      //     <TabPane tab="Food Essentials" key="2">
      //       Content of Tab Pane 2
      //     </TabPane>
      //     <TabPane tab="Baby Essentials" key="3">
      //       Content of Tab Pane 3
      //     </TabPane>
      //     <TabPane tab="Baby Essentials" key="4">
      //       Content of Tab Pane 3
      //     </TabPane>
      //   </Tabs>
      // </Row>

      <div>list1111111</div>
    );
  }
}

export default ItemsList;

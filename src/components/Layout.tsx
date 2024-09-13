import React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsPeopleFill } from "react-icons/bs";

const { Content, Sider } = AntdLayout;
interface MenuItemType {
  key: string;
  icon: React.ReactNode;
  path: string;
  label: string;
}
const items: MenuItemType[] = [
  {
    key: "page1",
    icon: <RxDashboard />,
    path: "/page1",
    label: "page1",
  },
  {
    key: "page2",
    icon: <BsPeopleFill />,
    path: "/page2",
    label: "page2",
  },
];
const Layout = () => {
  const location = useLocation();

  return (
    <AntdLayout>
      <Sider theme="light" collapsible={false} width={200}>
        <Menu
          className="mt-10"
          theme="light"
          selectedKeys={[location.pathname]}
          mode="inline"
        >
          {items.map((item) => (
            <Menu.Item
              key={item.path}
              icon={item.icon}
              style={{
                margin: 0,
                borderRadius: 0,
                width: "100%",
                borderLeft: location.pathname.includes(item.path)
                  ? "6px solid #5584CE"
                  : "6px solid transparent",
                backgroundColor: location.pathname.includes(item.path)
                  ? "#e6f4ff"
                  : "transparent",
                color: location.pathname.includes(item.path)
                  ? "#1677ff"
                  : "#000000",
              }}
            >
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <AntdLayout style={{ minHeight: "100vh" }}>
        <Content
          style={{
            backgroundColor: "#F8F1FD",
          }}
        >
          <Outlet></Outlet>
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;

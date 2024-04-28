import "./style.css";
import { Tabs } from "antd-mobile";
import { useTabs } from "./useTabs";
import HomeList from "@/pages/Home/HomeList/index";

const Home = () => {
  const { channels } = useTabs();
  return (
    <div>
      <div className="tabContainer">
        <Tabs defaultActiveKey={"0"}>
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* 这里可以放内容 */}
              <HomeList channelId={"" + item.id} />
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;

import { Spin } from "antd";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-opacity-15">
      <Spin />
    </div>
  );
}

export default Loading;

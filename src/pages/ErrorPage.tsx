import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <Typography.Title level={1} className="!text-8xl !m-0">
        404
      </Typography.Title>
      <Typography.Title level={3}>Page not found</Typography.Title>
      <Button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "black",
          borderColor: "black",
          color: "white",
        }}
        size="large"
        type="primary"
      >
        Back
      </Button>
    </div>
  );
}

export default ErrorPage;

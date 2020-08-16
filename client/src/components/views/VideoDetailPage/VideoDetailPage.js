import React, { useEffect, useState } from "react";
import { Row, Col, List, Avatar } from "antd";
import axios from "axios";
import SideVideo from "./Section/SideVideo";
import Subscribe from "./Section/Subscribe";
const VideoDetailPage = ({ match }) => {
  const { videoId } = match.params;
  const [videoDetail, setVideoDetail] = useState([]);
  useEffect(() => {
    let data = {
      videoId,
    };
    axios.post("/api/video/getVideoDetail", data).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        setVideoDetail(res.data.videoDetail);
      } else {
        alert("비디오 정보를 가져오지 못했습니다.");
      }
    });
  }, [videoId]);

  if (!videoDetail.writer) return <div>loding</div>;

  return (
    <Row gutter={[16, 16]}>
      <Col lg={18} xs={24}>
        <div style={{ width: "100%", padding: "3rem 4rem" }}>
          <video
            style={{ width: "100%" }}
            src={`http://localhost:5000/${videoDetail.filePath}`}
          />
          <List.Item
            actions={[
              <Subscribe
                userTo={videoDetail.writer._id}
                userFrom={localStorage.getItem("userId")}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={videoDetail.writer.image} />}
              title={videoDetail.writer.name}
              description={videoDetail.description}
            />
          </List.Item>
        </div>
      </Col>
      <Col lg={6} xs={24}>
        <SideVideo />
      </Col>
    </Row>
  );
};

export default VideoDetailPage;

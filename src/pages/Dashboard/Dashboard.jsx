import React from "react";
import "./Dashboard.scss";
import vector18 from "../../asset/dashboard/Vector18.svg";
import group1 from "../../asset/dashboard/group-31576.svg";
import group2 from "../../asset/dashboard/group-315761.svg";
import group3 from "../../asset/dashboard/group-315762.svg";
import group4 from "../../asset/dashboard/group-315763.svg";
import Rectangle62 from "../../asset/dashboard/Rectangle62.svg";
import JobInfo from "../../components/Dashboard/JobInfo/JobInfo";
import JobPost from "../../components/Dashboard/JobPost/JobPost";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const jobInfo = [
  {
    id: 1,
    total: 1234,
    icon: group1,
    title: "Jobs Posted",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 2,
    total: 1234,
    icon: group2,
    title: "Approved Jobs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 3,
    total: 1234,
    icon: group3,
    title: "Completed Jobs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 4,
    total: 1234,
    icon: group4,
    title: "Completed Jobs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
];
const jobPost = [
  {
    id: 1,
    date: "24th nov 2022",
    heading: "The Blog",
    title: "Author name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 2,
    date: "24th nov 2022",
    heading: "The Blog",
    title: "Author name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 3,
    date: "24th nov 2022",
    heading: "The Blog",
    title: "Author name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 4,
    date: "24th nov 2022",
    heading: "The Blog",
    title: "Author name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 5,
    date: "24th nov 2022",
    heading: "The Blog",
    title: "Author name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
  {
    id: 6,
    date: "24th nov 2022",
    heading: "The Blog",
    title: "Author name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,",
  },
];
function Dashboard(props) {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="one">
          <div className="user-intro">
            <div className="user-greeting">
              <h3 className="hello">Hello,</h3>
              <h3 className="user-name">Safari Sharma</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              autem veritatis magni voluptatem recusandae dolore reprehenderit
              commodi ducimus eveniet a, accusantium, vitae ipsum quae
              doloremque voluptates accusamus in qui perferendis!
            </p>
            <a>Read more...</a>
          </div>
          <div className="user-info-bg-img">
            <img src={vector18} />
          </div>
        </div>
        <div className="two">
          {jobInfo.map((data) => (
            <JobInfo key={data.id} data={data} />
          ))}
        </div>
        <div className="three">
          <div className="activity-analytics"></div>
          <div className="did-you-know">
            <div className="dyk-wrapper">
              <div className="dyk-top">
                <img src={Rectangle62} alt="" />
                <h3>Did you know?</h3>
              </div>
              <div className="dyk-bottom">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, tempore illum tempora adipisci dolorem impedit officia,
                  laboriosam ipsam sint obcaecati, dicta iste! Sed dolore
                  accusantium in itaque laborum quidem velit!
                </p>
                <a>View More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="five">
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={0}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper"
            >
              {jobPost.map((data) => (
                <SwiperSlide>
                  <JobPost key={data.id} data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
        <div className="six">
          <div className="upcoming-interviews">
            <div className="ui-wrapper">
              <h3>Upcoming Interviews</h3>
            </div>
          </div>
          <div className="recent-jobs">
            <div className="rj-wrapper">
              <h3>Recent Jobs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

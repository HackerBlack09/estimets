import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "./img/001_img_person_1.png";
import img2 from "./img/001_img_person_1 (1).png";

export function Rewers_page() {
  return (
    <>
    <div className="rewer_page_all">
      <div className="rewer_page">
        <div className="page_block_all">
          <div className="page_block_text">
            <p className="block_text_p">What our customers say</p>
          </div>
          <div className="page_block_icon">
            <button className="btn1">
              <AiOutlineArrowLeft />
            </button>
            <button className="btn1">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="rewer_page_card">
          <div className="page_card">
            <div className="page_card_text">
              <div className="page_card_img">
                <img src={img1} alt="" />
              </div>
              <div className="page_card_brain">
                <p className="card_brain_p">Alex Bern</p>
                <p className="card_brain_p1">CEO by PixelPerfect</p>
              </div>
            </div>
            <p className="card_brain_p2">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis utem vel eum iure reprehender qui in ea
              voluptate velit esse quam nihil molesti consequatur, vel illum.”
            </p>
          </div>
          <div className="page_card">
          <div className="page_card_text">
              <div className="page_card_img">
                <img src={img2} alt="" />
              </div>
              <div className="page_card_brain">
                <p className="card_brain_p">Ruben Chifundo</p>
                <p className="card_brain_p1">CEO by NOX</p>
              </div>
            </div>
            <p className="card_brain_p2">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis utem vel eum iure reprehender qui in ea
              voluptate velit esse quam nihil molesti consequatur, vel illum.”
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

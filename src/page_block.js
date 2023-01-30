import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import rasim1 from "./img/img_8.png";
import rasim2 from "./img/img_.png";
import rasim3 from "./img/img_ (1).png";

export function Page_block() {
  return (
    <>
      <div className="page_block">
        <div className="page_block_all">
          <div className="page_block_text">
            <p className="block_text_p">Our blog</p>
          </div>
          <div className="page_block_icon">
            <button>
              <AiOutlineArrowLeft />
            </button>
            <button>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="page_block_card">
          <div className="block_card">
            <img src={rasim1} alt="" />
            <p className="block_card_p">22 June 2022</p>
            <p className="block_card_p1">
              Как настроить виджет «Сметы с Estimates.guru» для интеграции с
              amoCRM?
            </p>
            <p className="block_card_p2">
              Интеграция с Estimates.guru позволяет создавать сметы прямо на
              странице сделки amoCRM...
            </p>
            <p className="block_card_p3">
            Read more
            </p>
          </div>
          <div className="block_card">
            <img src={rasim2} alt="" />
            <p className="block_card_p">22 June 2022</p>
            <p className="block_card_p1">
              Как настроить виджет «Сметы с Estimates.guru» для интеграции с
              amoCRM?
            </p>
            <p className="block_card_p2">
              Интеграция с Estimates.guru позволяет создавать сметы прямо на
              странице сделки amoCRM...
            </p>
            <p className="block_card_p3">
            Read more
            </p>
          </div>
          <div className="block_card">
            <img src={rasim3} alt="" />
            <p className="block_card_p">22 June 2022</p>
            <p className="block_card_p1">
              Как настроить виджет «Сметы с Estimates.guru» для интеграции с
              amoCRM?
            </p>
            <p className="block_card_p2">
              Интеграция с Estimates.guru позволяет создавать сметы прямо на
              странице сделки amoCRM...
            </p>
            <p className="block_card_p3">
            Read more
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

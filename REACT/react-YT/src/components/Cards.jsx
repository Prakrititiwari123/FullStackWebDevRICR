import React from "react";
import { Bookmark } from "lucide-react";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div>
          <div className="top">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <button>
              Save <Bookmark size={15} />
            </button>
          </div>

          <div className="center">
            <h3>
              Amazon <span> 5 days ago</span>
            </h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
              <h4>Part-Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Cards;

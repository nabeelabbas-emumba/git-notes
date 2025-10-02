import listViewIcon from "../../assets/list-view.svg";
import listViewSelectedIcon from "../../assets/list-view-selected.svg";
import cardViewIcon from "../../assets/card-view.svg";
import cardViewSelectedIcon from "../../assets/card-view-selected.svg";

import "./layoutModeSwitcher.scss";

export const LayoutModeSwitcher = () => {
  const isListView = true;

  return (
    <div className="icon-container">
      {isListView ? (
        <div>
          <img src={cardViewIcon}></img>
          <img src={listViewSelectedIcon}></img>
        </div>
      ) : (
        <div>
          <img src={cardViewSelectedIcon}></img>
          <img src={listViewIcon}></img>
        </div>
      )}
    </div>
  );
};

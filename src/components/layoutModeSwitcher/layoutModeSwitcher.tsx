import listViewIcon from "../../assets/list-view.svg";
import listViewSelectedIcon from "../../assets/list-view-selected.svg";
import cardViewIcon from "../../assets/card-view.svg";
import cardViewSelectedIcon from "../../assets/card-view-selected.svg";

import "./layoutModeSwitcher.scss";

export type LayoutModeType = "list" | "card";

interface LayoutModeSwitcherProps {
  mode: LayoutModeType;
  onToggle: (mode: LayoutModeType) => void;
}

export const LayoutModeSwitcher = ({
  mode,
  onToggle,
}: LayoutModeSwitcherProps) => {
  return (
    <div className="icon-container">
      {mode === "list" ? (
        <div>
          <img onClick={() => onToggle("card")} src={cardViewIcon}></img>
          <img src={listViewSelectedIcon}></img>
        </div>
      ) : (
        <div>
          <img src={cardViewSelectedIcon}></img>
          <img onClick={() => onToggle("list")} src={listViewIcon}></img>
        </div>
      )}
    </div>
  );
};

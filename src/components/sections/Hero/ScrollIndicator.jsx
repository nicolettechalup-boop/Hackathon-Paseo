import "./ScrollIndicator.css";
import { FaChevronDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <div className="scroll-indicator">

      <span>Scroll</span>

      <FaChevronDown className="scroll-indicator__icon" />

    </div>
  );
}

export default ScrollIndicator;
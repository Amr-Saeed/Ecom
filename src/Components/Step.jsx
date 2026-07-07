import CameraIcon from "../Icons/CameraIcon";
import PlanIcon from "../Icons/PlanIcon";
import SensorsIcon from "../Icons/SensorsIcon";
import ProtectionIcon from "../Icons/ProtectionIcon";

const Step = ({
  stepNumber,
  title,
  icon,
  selected,
  expanded,
  onToggle,
  highlighted,
  children,
}) => {
  const stepClass = `step ${expanded ? "step--expanded" : "step--collapsed"} ${
    highlighted ? "step--highlighted" : ""
  }`;

  return (
    <div className={stepClass}>
      <div className="step__header">
        <span className="step__number">Step {stepNumber} of 4</span>
      </div>
      <div className="step__content">
        <div
          className="step__title-row"
          onClick={onToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onToggle()}
        >
          <div className="step__title-group">
            {icon === "cameras" && (
              <div className="step__icon">
                <CameraIcon size={26} />
              </div>
            )}
            {icon === "plan" && (
              <div className="step__icon">
                <PlanIcon size={26} />
              </div>
            )}
            {icon === "sensors" && (
              <div className="step__icon">
                <SensorsIcon size={26} />
              </div>
            )}
            {icon === "protection" && (
              <div className="step__icon">
                <ProtectionIcon size={26} />
              </div>
            )}
            <span className="step__title">{title}</span>
          </div>

          <div className="step__arrow-wrapper">
            {expanded && selected && (
              <span className="step__selected-text">{selected}</span>
            )}
            <img
              src={expanded ? "/Polygon 1.png" : "/Polygon 2.png"}
              alt={expanded ? "collapse" : "expand"}
              className="step__arrow-icon"
            />
          </div>
        </div>
        {expanded && children}
      </div>
    </div>
  );
};

export default Step;

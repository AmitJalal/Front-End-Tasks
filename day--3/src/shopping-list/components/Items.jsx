import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Items = ({
  items,
  handleQuantityIncrease,
  handleQuantityDecrease,
  toggleComplete,
}) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <div className="item-container" key={index}>
          <div className="item-name" onClick={() => toggleComplete(index)}>
            {item.isSelected ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span className="completed">{item.itemName}</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{item.itemName}</span>
              </>
            )}
          </div>
          <div className="quantity">
            <button>
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => handleQuantityDecrease(index)}
              />
            </button>
            <span> {item.quantity} </span>
            <button>
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={() => handleQuantityIncrease(index)}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;

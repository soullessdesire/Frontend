import { useState, useRef, useEffect } from "react";
import "../form/Form.css";

const Select = () => {
  const [inputValue, setInputValue] = useState("");
  const [showList, setShowList] = useState(false);
  const inputRef = useRef();
  const listRef = useRef();

  const tribes = [
    "Kikuyu",
    "Luhya",
    "Luo",
    "Kalenjin",
    "Kamba",
    "Kisii",
    "Meru",
    "Mijikenda",
    "Maasai",
    "Turkana",
    "Somali",
    "Embu",
    "Taita",
    "Taveta",
    "Swahili",
    "Samburu",
    "Borana",
    "Rendille",
    "Gabbra",
    "Orma",
    "Sakuye",
    "Boni",
    "Burji",
    "Pokot",
    "Ilchamus",
    "Njemps",
    "Teso",
    "Basuba",
    "Kurya",
    "Suba",
    "Makonde",
    "Digo",
    "Giriama",
    "Duruma",
    "Rabai",
    "Chonyi",
    "Jibana",
    "Kauma",
    "Kambe",
    "Sanye",
    "Waata",
    "Wardei",
  ];
  const handleInputClick = () => {
    setShowList((prev) => !prev);
  };

  const handleItemClick = (e) => {
    setInputValue(e.target.textContent);
    const after = document.querySelector(".select .after").style;
    after.color = "var(--primary-color)";
    after.top = "30%";
    after.fontSize = "12px";
    after.transition = "all 3s ease-in-out 0";
    after.fontWeight = "400";
    setShowList(false);
  };
  const handleClickOutside = (event) => {
    if (
      listRef.current &&
      !listRef.current.contains(event.target) &&
      !inputRef.current.contains(event.target)
    ) {
      setShowList(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        type="text"
        className="focus"
        value={inputValue}
        onClick={handleInputClick}
        readOnly
        ref={inputRef}
        // style={{ cursor: "pointer" }}
      />
      {showList && (
        <div className="list" ref={listRef}>
          {tribes.map((el) => (
            <div
              key={el}
              style={{
                padding: ".5rem 1.5rem",
                borderBottom: "var(--meta-color) 1px solid",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleItemClick}
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

import React, { useEffect } from "react";
import "./FloatingButton.css";
import { Icon } from "@iconify/react";
const FloatingButton = () => {
  useEffect(() => {
    const menuToggle = document.querySelector(".menuToggle");

    if (menuToggle) {
      menuToggle.onclick = function () {
        menuToggle.classList.toggle("active");
      };
    }
  }, []);
  return (
    <div className="bg-slate-900 rounded-full">
      <div className="navigation">
        <div className="menuToggle">
          <Icon
            icon="mdi:sms"
            className="text-white text-xl  duration-300 animate-ping"
          />
        </div>
        <div className="menu">
          <ul>
            <li className="animate-fade-in ">
              <a
                href="https://wa.me/8801718893343"
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="logos:whatsapp-icon" className="-rotate-90 text" />
              </a>
            </li>
            <li className="animate-fade-in">
              <a
                href="https://wa.me/8801718893343"
                rel="noreferrer"
                target="_blank"
              >
                <Icon
                  icon="ion:logo-whatsapp"
                  className="-rotate-90 text-[#075e54]"
                />
              </a>
            </li>
            <li className="animate-fade-in">
              <a
                href="https://t.me/+8801718893343"
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="logos:telegram" className="-rotate-90" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;

import { createRoot } from "react-dom/client";
import Notifications from "./Notifications";

export const createErrorNotification = (error) => {
  const notificationsContainer = document.querySelector("#notifications");

  if (notificationsContainer) {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("not_content");

    notificationsContainer.appendChild(wrapperDiv);

    const root = createRoot(wrapperDiv);

    root.render(
      <Notifications
        notification={error}
        onClose={() => {
          if (notificationsContainer.contains(wrapperDiv)) {
            wrapperDiv.classList.add("slideRight");
            setTimeout(() => {
              root.unmount();
              notificationsContainer.removeChild(wrapperDiv);
            }, 1000);
          }
        }}
      />
    );

    setTimeout(() => {
      if (notificationsContainer.contains(wrapperDiv)) {
        wrapperDiv.classList.add("slideRight");
        setTimeout(() => {
          root.unmount();
          notificationsContainer.removeChild(wrapperDiv);
        }, 1000);
      }
    }, 3000);
  } else {
    console.error("Notifications container not found");
  }
};

import { RootState, NotificationState } from "app/reducers";

export const notificationSelector = () => ({
  notification
}: RootState): NotificationState => notification;

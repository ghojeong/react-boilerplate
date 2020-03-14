import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { resetNotificationAction } from "app/actions";
import { notificationSelector } from "app/selectors";

/**
 * NOTE: material-ui의 notistack 을 활용한 Notifier
 * enqueueSnackbarAction에 반응하여, 토스트를 띄워준다.
 * enqueueSnackbarAction는 컴포넌트와 에픽에서 발생한다.
 */

export const Notifier = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector(notificationSelector());
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (notification) {
      const { message, variant } = notification;
      enqueueSnackbar(message, { variant });
      dispatch(resetNotificationAction());
    }
  }, [dispatch, enqueueSnackbar, notification]);

  return null;
};

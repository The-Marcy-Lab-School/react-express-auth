import {
    fetchHandler,
    getPostOptions,
    getPatchOptions,
    deleteOptions,
  } from '../utils';
  
  const baseUrl = '/api/notifications';




export const createANotification = async ({
    event_id,
    recipient_id,
    attendee_id,
    text,

}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({
        event_id,
        recipient_id,
        attendee_id,
        text,
    })
  );

  export const fetchNotifications = async (userId) => {
    const [notications] = await fetchHandler(`${baseUrl}/${userId}`);
    console.log(notications)
    return notications || [];
  };

  export const deleteNotifications = async ({ userId }) => {
    fetchHandler(`${baseUrl}/${userId}`, deleteOptions({ userId }));
  };

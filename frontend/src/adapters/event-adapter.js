import {
  fetchHandler,
  getPostOptions,
  getPatchOptions,
  deleteOptions,
} from '../utils';

const baseUrl = '/api/events';

export const createEvent = async ({
  title,
  location,
  description,
  date,
  end_date,
  user_id,
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({
      title,
      location,
      description,
      date,
      end_date,
      user_id,
    })
  );

export const joinAnEvent = async ({ user_id, event_id }) => {
  console.log(user_id, event_id);
  fetchHandler(
    `${baseUrl}/relations/${event_id}`,
    getPostOptions({ user_id, event_id })
  );
};
export const leaveAnEvent = async ({ user_id, event_id }) => {
  console.log(user_id, event_id);
  fetchHandler(
    `${baseUrl}/relations/${event_id}`,
    deleteOptions({ user_id, event_id })
  );
  console.log(`leave attempt on event  ${event_id}`);
};

export const fetchRecentEvents = async () => {
  const [events] = await fetchHandler(baseUrl);
  return events || [];
};

export const fetchAttendeesAmount = async (eventId) => {
  console.log('fetching attendees amount');
  const amount = await fetchHandler(`${baseUrl}/relations/${eventId}`);
  console.log(`attendees :${amount}`);
  return amount || 0;
};

export const fetchCommentsOnEvent = async (eventId) => {
  const [comments] = await fetchHandler(`${baseUrl}/${eventId}/comments`);
  return comments || [];
};

export const addTags = async ({ event_id, event_tag_ids }) => {
  fetchHandler(
    `${baseUrl}/tags/${event_id}`,
    getPostOptions({ event_tag_ids })
  );
};

export const destroyEvent = async ({ event_id }) => {
  fetchHandler(`${baseUrl}/${event_id}`, deleteOptions({ event_id }));
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => {
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
};

export const postComment = async ({ user_id, event_id, text }) => {
  const endpoint = `${baseUrl}/${event_id}/comments`;
  try {
    const [newComment, error] = await fetchHandler(endpoint, getPostOptions({ user_id, event_id, text }));
    if (error) throw new Error('Failed to post comment');
    return newComment;
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
};

export const hideComment = async (commentId) => {
  return fetchHandler(`/api/comments/${commentId}/hide`, getPatchOptions({}));
};
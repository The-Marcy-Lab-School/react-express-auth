const basicFetchOptions = {
  method: 'GET',
  credentials: 'include',
};

export const deleteOptions = (body) => ({
  method: 'DELETE',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const getPostOptions = (body) => ({
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const getPatchOptions = (body) => ({
  method: 'PATCH',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const fetchHandler = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const { ok, status, headers } = response;
    if (!ok)
      throw new Error(`Fetch failed with status - ${status}`, {
        cause: status,
      });

    const isJson = (headers.get('content-type') || '').includes(
      'application/json'
    );
    const responseData = await (isJson ? response.json() : response.text());

    return [responseData, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};

export const timeObject = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

export const validateTime = (startTime, endTime) => {
  if (startTime > endTime) {
    return {
      color: 'red',
      timeText: 'Start time cannot be later than end time',
    };
  }
  if (startTime === endTime) {
    return {
      color: 'red',
      timeText: 'Start time cannot be the same as end time',
    };
  }
  return { color: null, timeText: null };
};

export const validateTags = (chosenTags) => {
  if (chosenTags.length === 0) {
    return {
      tagColor: 'red',
      tagText: 'You must select at least one tag for your event',
    };
  }
  return { tagColor: null, tagText: null };
};

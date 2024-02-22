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
    if (!ok) {
      throw new Error(`Fetch failed with status - ${status}`, {
        cause: status,
      });
    }

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

const pictures = {
  'Prospect Park, Brooklyn, NY':
    'https://thumbs.6sqft.com/wp-content/uploads/2017/06/19174904/prospectpark-e1497909025369.jpg',
  'Brooklyn Bridge Park, Brooklyn, NY':
    'https://media.timeout.com/images/105683556/image.jpg',
  'McCarren Park, Brooklyn, NY':
    'https://media.cntraveler.com/photos/5ff637cd1cae1c5896a5f6c3/16:9/w_2560,c_limit/2C7FAW9.jpg',
  'Fort Greene Park, Brookly, NY':
    'https://images.ctfassets.net/1aemqu6a6t65/2KQqJk6ZV3Lsld5H8awzVr/871369d06ea46798e42483e22a3c0216/ftgreene23f?w=1200&h=800&q=75',
  'Marine Park, Brookly, NY':
    'https://static.nycgovparks.org/images/photo_gallery/full_size/22933.jpg',
  'Sunset Park, Brookly, NY':
    'https://images.ctfassets.net/1aemqu6a6t65/3eUGLuY9k4IfQzy4Z6FcEJ/5157b4fb671eb9a46be0af9670df72f5/Sunset-Park-Brooklyn-NYC-Photo-Jordana-Berm__dez.jpg',
  'Domino Park, Brookly, NY':
    'https://cdn.vox-cdn.com/thumbor/Hu91h6N8isy3qREZOYHHwPTCspw=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/59971589/180524_11_38_47_5DSR5465.0.jpg',
  'Brooklyn Heights Promenade Park, Brooklny, NY':
    'https://www.tclf.org/sites/default/files/styles/crop_2000x700/public/thumbnails/image/NY_NYC_BrooklynHeightsPromenade_WikimediaCommons_2017_01_Hero.jpg?itok=0ESTJznT',
  'Manhattan Beach Park, Brookly, NY':
    'https://static.nycgovparks.org/images/photo_gallery/full_size/24748.jpg',
  'WNYC Transmitter Park, Brookly, NY':
    'https://transmitterpark.org/wp-content/uploads/2022/09/13-29-04A-1400-xxx_q85-orig.jpg',
  'Owls Head Park, Brookly, NY':
    'https://pbs.twimg.com/media/DbtxosvW4AAxuhV.jpg',
  'Bushwich Inlet Park, Brookly, NY':
    'https://static.nycgovparks.org/images/photo_gallery/full_size/24722.jpg',
  'Online Class':
    'https://www.billboard.com/wp-content/uploads/2024/01/online-fitness-class-2024-billboard-1548.jpg?w=942&h=623&crop=1',
};
export const eventPictures = (location) => pictures[location];

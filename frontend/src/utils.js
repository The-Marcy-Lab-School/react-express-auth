let fetchHeaders = new Headers();

fetchHeaders.append('Access-Control-Allow-Origin', 'http://localhost:5173');
fetchHeaders.append('Access-Control-Allow-Credentials', 'true');
console.log(fetchHeaders)

const apiFetchOptions = {
  method: 'GET',
  credentials: 'include',
  // mode: 'no-cores'
}

const basicFetchOptions = {
  method: 'GET',
  credentials: 'include',
  headers: fetchHeaders,
};

export const deleteOptions = {
  method: 'DELETE',
  credentials: 'include',
};

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

export const fetchHandler = async (url, options = basicFetchOptions) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return [null, { status: res.status, statusText: res.statusText }];
    if (res.status === 204) return [true, null];

    const data = await res.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

export const apiFetchHandler = async (url, options = apiFetchOptions) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return [null, { status: res.status, statusText: res.statusText }];
    if (res.status === 204) return [true, null];

    const data = await res.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

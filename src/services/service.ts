const fetchWrapper = {
  get,
  post,
  delete: _delete,
}

function get(url: string): Promise<Response> {
  const requestOptions = {
    method: 'GET',
  }
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    requestOptions,
  ).then(handleResponse)
}

function post(url: string, body: unknown): Promise<Response> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    requestOptions,
  ).then(handleResponse)
}

// Prefixed with underscored because delete is a reserved word in JavaScript
function _delete(url: string): Promise<Response> {
  const requestOptions = {
    method: 'DELETE',
  }
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    requestOptions,
  ).then(handleResponse)
}

// Helper functions

function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)

    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

export default fetchWrapper

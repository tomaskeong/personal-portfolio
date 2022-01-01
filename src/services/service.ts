const fetchWrapper = {
  get,
  post,
  delete: _delete,
}

function get(url: string): Promise<unknown> {
  const requestOptions = {
    method: 'GET',
  }
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    requestOptions,
  ).then(handleResponse)
}

function post(url: string, body: unknown): Promise<unknown> {
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
function _delete(url: string): Promise<unknown> {
  const requestOptions = {
    method: 'DELETE',
  }
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    requestOptions,
  ).then(handleResponse)
}

// Helper functions

export const handleResponse = async (response: Response): Promise<any> => {
  if (!response) return
  const data = await response.json()

  if (!response.ok) {
    return (data && data.message) || response.statusText
  }

  return data
}

export default fetchWrapper

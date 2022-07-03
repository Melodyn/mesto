export class ApiMesto {
  constructor(config) {
    const {
      apiMestoBaseURL,
      apiMestoCohort,
      apiMestoToken,
    } = config;
    const baseHeaders = {
      Authorization: apiMestoToken,
      'Content-Type': 'application/json; charset=utf-8',
    };
    this._httpClient = (page, method = 'GET') => fetch(`${apiMestoBaseURL}/${apiMestoCohort}/${page}`, {
      method,
      headers: baseHeaders,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res
          .json()
          .then(({ message }) => {
            res.message = message || `Ошибка ${res.status}`;
            return Promise.reject(res);
          });
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error(err);
        return Promise.reject(new Error(`ApiMesto Error: ${err.message}`));
      });
  }

  getProfile() {
    return this._httpClient('users/me');
  }

  getPlaces() {
    return this._httpClient('cards');
  }

  likeAdd({ cardId }) {
    return this._httpClient(`cards/like/${cardId}`, 'PUT');
    // return this._httpClient(`cards/${cardId}/likes`, 'PUT');
  }

  likeRemove({ cardId }) {
    return this._httpClient(`cards/like/${cardId}`, 'DELETE');
    // return this._httpClient(`cards/${cardId}/likes`, 'DELETE');
  }

  like({ cardId, liked }) {
    if (liked) {
      return this.likeRemove({ cardId });
    }
    return this.likeAdd({ cardId });
  }
}

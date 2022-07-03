const methodMap = {
  get: 'GET',
  put: 'PUT',
  post: 'POST',
  patch: 'PATCH',
  delete: 'DELETE',
};

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
    this._httpClient = (page, method = methodMap.get, body = undefined) => fetch(
      `${apiMestoBaseURL}/${apiMestoCohort}/${page}`,
      {
        method,
        headers: baseHeaders,
        body: (body && JSON.stringify(body)),
      },
    )
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

  /* profile */

  getProfile() {
    return this._httpClient('users/me');
  }

  getPlaces() {
    return this._httpClient('cards');
  }

  setAvatar({ avatar }) {
    return this._httpClient('users/me/avatar', methodMap.patch, { avatar });
  }

  setInfo({ name, about }) {
    return this._httpClient('users/me', methodMap.patch, { name, about });
  }

  /* place */

  placeCreate({ name, link }) {
    return this._httpClient('cards', methodMap.post, { name, link });
  }

  placeLike({ cardId, liked }) {
    if (liked) {
      return this.placeLikeRemove({ cardId });
    }
    return this.placeLikeAdd({ cardId });
  }

  placeRemove({ cardId }) {
    return this._httpClient(`cards/${cardId}`, methodMap.delete);
  }

  placeLikeAdd({ cardId }) {
    return this._httpClient(`cards/like/${cardId}`, methodMap.put);
    // return this._httpClient(`cards/${cardId}/likes`, 'PUT');
  }

  placeLikeRemove({ cardId }) {
    return this._httpClient(`cards/like/${cardId}`, methodMap.delete);
    // return this._httpClient(`cards/${cardId}/likes`, 'DELETE');
  }
}

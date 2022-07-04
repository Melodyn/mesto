import { httpMethod } from './constants.js';

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

    this._httpClient = (page, method = httpMethod.get, body = undefined) => fetch(
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
    return this._httpClient('users/me/avatar', httpMethod.patch, { avatar });
  }

  setInfo({ name, about }) {
    return this._httpClient('users/me', httpMethod.patch, { name, about });
  }

  /* place */
  placeCreate({ name, link }) {
    return this._httpClient('cards', httpMethod.post, { name, link });
  }

  placeLike({ cardId, liked }) {
    if (liked) {
      return this.placeLikeRemove({ cardId });
    }
    return this.placeLikeAdd({ cardId });
  }

  placeRemove({ cardId }) {
    return this._httpClient(`cards/${cardId}`, httpMethod.delete);
  }

  placeLikeAdd({ cardId }) {
    return this._httpClient(`cards/like/${cardId}`, httpMethod.put);
  }

  placeLikeRemove({ cardId }) {
    return this._httpClient(`cards/like/${cardId}`, httpMethod.delete);
  }
}

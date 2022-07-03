export const appConfig = {
  apiMestoBaseURL: 'https://nomoreparties.co',
  apiMestoCohort: 'cohort0',
  apiMestoToken: '80a75492-21c5-4330-a02f-308029e94b63',
  // apiMestoBaseURL: 'https://mesto.nomoreparties.co/v1',
  // apiMestoCohort: 'cohort-42',
  // apiMestoToken: '622cedbc-a041-41b2-ac81-42db94da4679',
};

export const commonFormConfig = {
  selectorField: '.form__item',
  selectorSubmit: '.form__submit',
  classNameFieldInvalid: 'form__item_invalid',
  getSelectorErrorTextContainer: (fieldName) => `.form__item-error_field_${fieldName}`,
};

export const commonPopupConfig = {
  selectorCloseButton: '.popup__close',
  classNamePopupOpened: 'popup_opened',
  classNameContainer: 'popup__container',
};

export const commonPlaceConfig = {
  selectorTemplate: '#place',
  selectorPlace: '.place',
  getSelectorImage() {
    return `${this.selectorPlace}__image`;
  },
  getSelectorLink() {
    return `${this.selectorPlace}__link`;
  },
  getSelectorLike() {
    return `${this.selectorPlace}__like`;
  },
  getClassNameLiked() {
    return `${this.selectorPlace.slice(1)}__like_liked`;
  },
  getSelectorLikeCount() {
    return `${this.selectorPlace}__like-count`;
  },
  getSelectorRemove() {
    return `${this.selectorPlace}__remove`;
  },
};

export const keyboardKeyNameMap = {
  escape: ['escape', 'esc'],
};

// Фикстура для локальной разработки
export const dataJSON = {
  profile: {
    name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
  },
  places: [{
    likes: [{
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    }, {
      name: 'Man', about: 'testovich', avatar: 'https://i.ytimg.com/vi/hhO7aw9JUlU/maxresdefault.jpg', _id: '8f1f4c5f62257224904b0b69', cohort: 'cohort-13',
    }, {
      name: 'Кирилл Корнеев', about: 'физик', avatar: 'https://i.imgur.com/vvBNLTg.jpg', _id: 'f6316c5f74330810ff7bc7cc', cohort: 'cohort-14',
    }, {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    }],
    _id: '5d208fb50fdbbf001ffdf72a',
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    owner: {
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    },
    createdAt: '2019-07-06T12:10:29.149Z',
  }, {
    likes: [{
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'Кирилл Корнеев', about: 'физик', avatar: 'https://i.imgur.com/vvBNLTg.jpg', _id: 'f6316c5f74330810ff7bc7cc', cohort: 'cohort-14',
    }],
    _id: '5d208fe20fdbbf001ffdf72b',
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    owner: {
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    },
    createdAt: '2019-07-06T12:11:14.149Z',
  }, {
    likes: [{
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'Кирилл Корнеев', about: 'физик', avatar: 'https://i.imgur.com/vvBNLTg.jpg', _id: 'f6316c5f74330810ff7bc7cc', cohort: 'cohort-14',
    }],
    _id: '5d208ff30fdbbf001ffdf72c',
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    owner: {
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    },
    createdAt: '2019-07-06T12:11:31.452Z',
  }, {
    likes: [{
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'Кирилл Корнеев', about: 'физик', avatar: 'https://i.imgur.com/vvBNLTg.jpg', _id: 'f6316c5f74330810ff7bc7cc', cohort: 'cohort-14',
    }],
    _id: '5d2090310fdbbf001ffdf72d',
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    owner: {
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    },
    createdAt: '2019-07-06T12:12:33.043Z',
  }, {
    likes: [{
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    }, {
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    }, {
      name: 'Кирилл Корнеев', about: 'физик', avatar: 'https://i.imgur.com/vvBNLTg.jpg', _id: 'f6316c5f74330810ff7bc7cc', cohort: 'cohort-14',
    }],
    _id: '5d2090470fdbbf001ffdf72e',
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg',
    owner: {
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    },
    createdAt: '2019-07-06T12:12:55.607Z',
  }, {
    likes: [{
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    }, {
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }, {
      name: 'Vasiliy', about: 'Pupkinist', avatar: 'https://pbs.twimg.com/media/Dv-oARoXcAIt0Zj.jpg:large', _id: 'ebd15912a7f0a70b936afaff', cohort: 'cohort-14',
    }, {
      name: 'Кирилл Корнеев', about: 'физик', avatar: 'https://i.imgur.com/vvBNLTg.jpg', _id: 'f6316c5f74330810ff7bc7cc', cohort: 'cohort-14',
    }],
    _id: '5d2090710fdbbf001ffdf72f',
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg',
    owner: {
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    },
    createdAt: '2019-07-06T12:13:37.170Z',
  }, {
    likes: [{
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }],
    _id: '5d28fd8f2eb23e001f5c356a',
    name: 'Пододеялово',
    link: 'http://dvinatoday.ru/upload/iblock/76a/2522230.jpg',
    owner: {
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    },
    createdAt: '2019-07-12T21:37:19.756Z',
  }, {
    likes: [{
      name: 'Яндекс.Практикум', about: 'Каждый может стать', avatar: 'https://imgame.kz/wp-content/uploads/2019/06/ui-5a67fe00328028.83198498.png', _id: '8340d0ec33270a25f2413b69', cohort: 'cohort0',
    }, {
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: "N'", about: 'ravrjjj', avatar: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', _id: '7d8c010a1c97ca2654997a95', cohort: 'cohort0',
    }, {
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    }],
    _id: '5d29bdef2eb23e001f5c35ae',
    name: 'Белк',
    link: 'https://pp.userapi.com/c836438/v836438840/a84d/RdnrmvEMipM.jpg',
    owner: {
      name: "N'", about: 'ravrjjj', avatar: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', _id: '7d8c010a1c97ca2654997a95', cohort: 'cohort0',
    },
    createdAt: '2019-07-13T11:18:07.156Z',
  }, {
    likes: [{
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }],
    _id: '5d42ec5529a31b001ff069d3',
    name: 'picture',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2019-08-01T13:42:45.716Z',
  }, {
    likes: [{
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }, {
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }],
    _id: '5d42f19f29a31b001ff069d4',
    name: 'picture',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2019-08-01T14:05:19.741Z',
  }, {
    likes: [],
    _id: '5d42f21f29a31b001ff069d5',
    name: 'Barcelona',
    link: 'https://unsplash.com/photos/s2q1_cxLHSE',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2019-08-01T14:07:27.392Z',
  }, {
    likes: [{
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    }, {
      name: 'Tanya2', about: 'uuiui', avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', _id: 'f20c9c560aa652a72cba323f', cohort: 'cohort0',
    }],
    _id: '5d42f30829a31b001ff069d6',
    name: 'Barcelona',
    link: 'https://images.unsplash.com/photo-1528744598421-b7b93e12df15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2019-08-01T14:11:20.153Z',
  }, {
    likes: [{
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }],
    _id: '5d43208d29a31b001ff069d7',
    name: 'Barcelona2',
    link: 'https://images.unsplash.com/photo-1456132311779-ca4ff6130510?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2019-08-01T17:25:33.612Z',
  }, {
    likes: [{
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }],
    _id: '5e215afb69fae7001f721767',
    name: 'picture1234',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2020-01-17T06:58:03.222Z',
  }, {
    likes: [{
      name: 'fff', about: 'fff', avatar: 'https://theins.ru/wp-content/uploads/2018/12/KMO_168671_00073_1.jpg', _id: 'd285e3dceed844f902650f40', cohort: 'cohort0',
    }],
    _id: '5e5ffac669fae7001f72a541',
    name: 'asd',
    link: 'http://risovach.ru/upload/2016/03/mem/stiv_108037879_orig_.jpg',
    owner: {
      name: "N'", about: 'ravrjjj', avatar: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', _id: '7d8c010a1c97ca2654997a95', cohort: 'cohort0',
    },
    createdAt: '2020-03-04T19:00:22.210Z',
  }, {
    likes: [],
    _id: '5e9766e069fae7001f72ade6',
    name: 'picture234',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2020-04-15T19:56:16.601Z',
  }, {
    likes: [],
    _id: '5e99fc4369fae7001f72d001',
    name: 'Barcelona',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2020-04-17T18:58:11.252Z',
  }, {
    likes: [],
    _id: '5ea09ef969fae7001f72d411',
    name: 'Barcelona',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    owner: {
      name: 'Jacques Cousteau', about: 'Sailor, researcher', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: '3c8c16ee9b1f89a2f8b5e4b2', cohort: 'cohort0',
    },
    createdAt: '2020-04-22T19:46:01.008Z',
  }, {
    likes: [],
    _id: '5ec1432a8143ec001f349434',
    name: 'Лисицк',
    link: 'https://i.pinimg.com/236x/1e/a0/cc/1ea0ccb111ef8e3ef7458169923b257d.jpg?blackMark',
    owner: {
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    },
    createdAt: '2020-05-17T13:59:06.575Z',
  }, {
    likes: [{
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    }],
    _id: '5ec143d18143ec001f349435',
    name: 'Лисицк',
    link: 'https://i.pinimg.com/236x/1e/a0/cc/1ea0ccb111ef8e3ef7458169923b257d.jpg?blackMark',
    owner: {
      name: 'ччч', about: 'ууу', avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg', _id: 'dbfe53c3c4d568240378b0c6', cohort: 'cohort0',
    },
    createdAt: '2020-05-17T14:01:53.278Z',
  }, {
    likes: [],
    _id: '622140b488af9101327362fa',
    name: 'Белый медведь',
    link: 'https://sun9-16.userapi.com/impg/bpSgHwkbIPzWxzwy-TvahT7XtdvHLgmeVYDLIQ/yVbtPBR9wVY.jpg?size=604x441&quality=96&sign=7a68a44f70b0c4b1b46c9c18f1dd3529&type=album',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-03-03T22:27:00.321Z',
  }, {
    likes: [{
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    }],
    _id: '62230e720ae07c013db71818',
    name: 'Stars',
    link: 'https://images.unsplash.com/photo-1646408271576-bf925295d130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-03-05T07:17:06.974Z',
  }, {
    likes: [],
    _id: '62231fab0ae07c013db74636',
    name: 'Masons',
    link: 'https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-03-05T08:30:35.274Z',
  }, {
    likes: [],
    _id: '622437a50ae07c013dc17604',
    name: 'qwe',
    link: 'https://sun9-16.userapi.com/impg/bpSgHwkbIPzWxzwy-TvahT7XtdvHLgmeVYDLIQ/yVbtPBR9wVY.jpg?size=604x441&quality=96&sign=7a68a44f70b0c4b1b46c9c18f1dd3529&type=album',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-03-06T04:25:09.816Z',
  }, {
    likes: [],
    _id: '62913c4be1f65b00121e0dd8',
    name: 'network',
    link: 'https://images.unsplash.com/photo-1622351707507-720185373b31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-05-27T21:02:03.486Z',
  }, {
    likes: [],
    _id: '6295d8d8f644530268459c91',
    name: 'network',
    link: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-05-31T08:59:04.204Z',
  }, {
    likes: [],
    _id: '62a890d159e69303773de7e8',
    name: 'Картинка',
    link: 'https://images.unsplash.com/photo-1655201820196-bded3e9bd271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-06-14T13:44:49.015Z',
  }, {
    likes: [],
    _id: '62a8fd334ac9560383790b05',
    name: 'test',
    link: 'https://skr.sh/i/140622/7qHYgCGe.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2015-06-2022%2000:19:58.jpg',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-06-14T21:27:15.270Z',
  }, {
    likes: [],
    _id: '62b9b1f2b585b1045ea9041b',
    name: 'candles',
    link: 'https://mobimg.b-cdn.net/v3/fetch/5a/5a5a8f24a96476801358bb7f70b677fd.jpeg?h=1200&r=0.5',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-06-27T13:34:42.920Z',
  }, {
    likes: [{
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    }],
    _id: '62b9ef36b585b1045ea96d76',
    name: 'Сингапур',
    link: 'https://horosho-tam.ru/pics/00/da/5aae306ffc897a4674cbda00.jpg',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-06-27T17:56:06.607Z',
  }, {
    likes: [],
    _id: '62c1dc045d4c8004ffe54291',
    name: 'Мурманск',
    link: 'https://melodyn.github.io/mesto/0a818caa34891b0cf663.jpg',
    owner: {
      name: 'Природа планеты', about: 'Берегите природу, мать вашу!', avatar: 'https://melodyn.github.io/mesto/b88f4a1617ddbb1ad29d.jpg', _id: 'dd8b6dea22fe4ea0ad5d46f4', cohort: 'cohort0',
    },
    createdAt: '2022-07-03T18:12:20.806Z',
  }],
};

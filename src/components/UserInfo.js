export class UserInfo {
  constructor(elementProfileTitle, elementProfileSubtitle, elementProfileAvatar) {
    this._elementProfileTitle = elementProfileTitle;
    this._elementProfileSubtitle = elementProfileSubtitle;
    this._elementProfileAvatar = elementProfileAvatar;
  }

  getUserInfo() {
    return {
      title: this._elementProfileTitle.textContent,
      subtitle: this._elementProfileSubtitle.textContent,
      avatar: this._elementProfileAvatar.src,
    };
  }

  setUserInfo({ title, subtitle }) {
    this._elementProfileTitle.textContent = title.trim();
    this._elementProfileSubtitle.textContent = subtitle.trim();
  }

  setUserAvatar({ link }) {
    this._elementProfileAvatar.src = link;
  }
}

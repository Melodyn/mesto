export class Profile {
  constructor(elementProfileTitle, elementProfileSubtitle, elementProfileAvatar) {
    this._elementProfileTitle = elementProfileTitle;
    this._elementProfileSubtitle = elementProfileSubtitle;
    this._elementProfileAvatar = elementProfileAvatar;
  }

  getFullInfo() {
    return {
      title: this._elementProfileTitle.textContent,
      subtitle: this._elementProfileSubtitle.textContent,
      avatar: this._elementProfileAvatar.src,
    };
  }

  setInfo({ title, subtitle }) {
    this._elementProfileTitle.textContent = title.trim();
    this._elementProfileSubtitle.textContent = subtitle.trim();
  }

  setAvatar({ avatar }) {
    this._elementProfileAvatar.src = avatar;
  }
}

export class PlaceInfo {
  constructor(elementProfileTitle, elementProfileSubtitle) {
    this._elementProfileTitle = elementProfileTitle;
    this._elementProfileSubtitle = elementProfileSubtitle;
  }

  getUserInfo() {
    return {
      title: this._elementProfileTitle.textContent,
      subtitle: this._elementProfileSubtitle.textContent,
    };
  }

  setUserInfo({ title, subtitle }) {
    this._elementProfileTitle.textContent = title.trim();
    this._elementProfileSubtitle.textContent = subtitle.trim();
  }
}

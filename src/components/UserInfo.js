class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector, userId }) {
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
        this._avatarSelector = avatarSelector;
        this._userId = userId;
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            about: this._jobSelector.textContent,
            avatar: this._avatarSelector.src,
            userId: this._userId
        }
    }

    setUserInfo({name, about, avatar, userId}) {
        this._nameSelector.textContent = name;
        this._jobSelector.textContent = about;
        this._avatarSelector.src = avatar;
        this._userId = userId;
    }
}

export default UserInfo;
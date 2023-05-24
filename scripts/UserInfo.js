class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
    }

    getUserInfo() {
        const userInputsData = {
            name: this._nameSelector.textContent,
            job: this._jobSelector.textContent,
        }
        return userInputsData;
    }

    setUserInfo(userInputsData) {
        this._nameSelector.textContent = userInputsData.name;
        this._jobSelector.textContent = userInputsData.job;
    }
}

export default UserInfo;
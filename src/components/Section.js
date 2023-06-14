class Section {
    constructor({renderer}, templateSelector){
        this._renderer = renderer;
        this._templateSelector = document.querySelector(templateSelector);
    }

    renderItems(items, userId) {
        items.forEach((item) => {
            this._renderer(item, userId);
        });
    }
    addItem(element) {
        this._templateSelector.prepend(element)
    }
}

export default Section;
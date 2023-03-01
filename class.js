class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Color3 {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
}

const Keyboard = {inputs: [], up: false, down: false, left: false, right: false};
const Camera = {position: new Vector2(0,0)};
const Objects = {data: []};

document.addEventListener('keydown', function(event) {
    if (!Keyboard.inputs.includes(event.key)){
        Keyboard.inputs.push(event.key);
    }

    if (Keyboard.inputs.includes('w') || Keyboard.inputs.includes('ArrowUp')){
        Keyboard.up = true;
    }
    if (Keyboard.inputs.includes('s') || Keyboard.inputs.includes('ArrowDown')){
        Keyboard.down = true;
    }
    if (Keyboard.inputs.includes('a') || Keyboard.inputs.includes('ArrowLeft')){
        Keyboard.left = true;
    }
    if (Keyboard.inputs.includes('d') || Keyboard.inputs.includes('ArrowRight')){
        Keyboard.right = true;
    }
});

document.addEventListener('keyup', function(event) {
    Keyboard.inputs.splice(Keyboard.inputs.findIndex((ind__) => ind__ == event.key), 1);

    if (!Keyboard.inputs.includes('w') && !Keyboard.inputs.includes('ArrowUp')){
        Keyboard.up = false;
    }
    if (!Keyboard.inputs.includes('s') && !Keyboard.inputs.includes('ArrowDown')){
        Keyboard.down = false;
    }
    if (!Keyboard.inputs.includes('a') && !Keyboard.inputs.includes('ArrowLeft')){
        Keyboard.left = false;
    }
    if (!Keyboard.inputs.includes('d') && !Keyboard.inputs.includes('ArrowRight')){
        Keyboard.right = false;
    }
});

class Rect {
    constructor(position, size, color, opacity, zIndex) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.opacity = opacity;
        this.zIndex = zIndex;
        Objects.data.push(this);
        return this;
    }
    remove() {
        Objects.data.splice(Objects.data.findIndex((ind__) => ind__ == this), 1);
    }
}
class Sprite {
    constructor(position, size, image, opacity, zIndex) {
        this.position = position;
        this.size = size;
        this.image = new Image(size.x,size.y);
        this.image.src = image;

        ctx_.drawImage(this.image, 0, 0); 
        let data_ = ctx_.getImageData(0, 0, this.image.width, this.image.height).data;
        this.image.data = data_;

        this.opacity = opacity;
        this.zIndex = zIndex;
        Objects.data.push(this);
        return this;
    }
}
class Text {
    constructor(position, color, size, text, opacity, zIndex) {
        this.position = position;
        this.color = color;
        this.size = size;
        this.text = text;
        this.opacity = opacity;
        this.zIndex = zIndex;
        Objects.data.push(this);
        return this;
    }
}

// Setup \\
const Canvas = document.createElement("canvas");
Canvas.width = 840;//1680
Canvas.height = 470;//940
Canvas.style = "position: fixed; left: -0px; top: -0px; image-rendering: pixelated; width: 1680px; height: 940px";

// Image Buffer \\
let canvas_ = document.createElement('canvas'); 
let ctx_ = canvas_.getContext('2d'); 
canvas_.width = 840; 
canvas_.height = 470;
document.head.appendChild(canvas_);

document.body.appendChild(Canvas);

const Draw = Canvas.getContext("2d", {willReadFrequently: true, alpha: false});
const Number_Index = [32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,49,50,51,52,53,54,55,56,57,48,46,44,91,93,123,125,40,41,33,42,45,43,61,95];


const Text_Index = [

    [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],

    [[0,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[0,1,1,0,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[1,0,0,1,0,0,0,0],[1,0,0,1,0,0,0,0],[1,0,0,1,0,0,0,0],[1,0,0,1,0,0,0,0],[1,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,1,0,0,0,1],[0,1,0,1,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,1,0,1,0,0,0],[1,1,0,0,0,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,1],[1,0,0,0,0,0,1,0],[0,1,1,1,1,1,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[1,0,0,0,1,1,0,0],[1,0,0,0,1,0,1,0],[0,1,1,1,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,0,0,0,1,0],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[0,1,0,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,1,1,0],[1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],
    [[1,1,0,0,0,0,1,1],[0,0,1,0,1,1,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,1,0,1,1,0,0],[1,1,0,0,0,0,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,0,0,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,1,1,1,1],[0,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0],[1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,0,0,0,0,0,1,1],[1,0,0,0,0,1,0,1],[1,0,0,0,1,0,0,1],[1,0,0,1,0,0,0,1],[1,0,1,0,0,0,0,1],[1,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],

    [[0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,0,0,0,0,1,1],[1,0,0,0,0,1,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,1,0,0,0,1],[0,1,1,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,0,0,0,0,1,0],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[0,1,1,1,0,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,0,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,0,0,1,0],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,1,0,0,0,1],[1,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,0],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[0,1,0,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,1],[1,0,0,0,1,1,0,0],[1,0,1,1,0,0,0,0],[1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,0,1,1,0],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[0,1,1,1,0,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,0,0,1,0],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,1],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],

    [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,1,1,0,0,0],[1,1,1,0,0,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[0,0,1,0,1,0,0,0],[0,0,0,1,0,0,0,0],[0,0,1,0,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,1,1,1,1,1,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[0,0,1,0,1,0,0,0],[0,0,1,0,1,0,0,0],[0,0,1,0,1,0,0,0],[0,0,1,0,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1]]

];

function Apply(obj){
    for (x=Math.floor(obj.position.x);x<Math.min(Math.floor(obj.position.x+obj.size.x));x++){
        for (y=Math.floor(obj.position.y);y<Math.min(Math.floor(obj.position.y+obj.size.y));y++){
           if (Screen_Data[x][y][1] == null){
            Screen_Data[x][y] = [obj.color,obj];
           }
        }
    }
}

function Clear(obj){
    for (x=Math.floor(obj.position.x);x<Math.min(Math.floor(obj.position.x+obj.size.x));x++){
        for (y=Math.floor(obj.position.y);y<Math.min(Math.floor(obj.position.y+obj.size.y));y++){
           if (Screen_Data[x][y][1] != null){
            Screen_Data[x][y] = [new Color3(0,0,255),null];
           }
        }
    }
}

let delta = 1;

// Render \\
let oldframe_ = 0;
function Render(frame_){

    //Render
    Tick();
    let buffer_ = Draw.getImageData(0,0,840,470);
    Objects.data.sort(function(a,b){if(a.zIndex>b.zIndex){return 1} return -1})

    for (x=0;x<840;x++){
        for (y=0;y<470;y++){
            let index_ = (y*840+x)*4;
            buffer_.data[index_+0] = 0;
            buffer_.data[index_+1] = 0;
            buffer_.data[index_+2] = 255;
            buffer_.data[index_+3] = 255;
        }
    }

    Objects.data.forEach(function(object){
        if (object instanceof Rect){
            if (object.opacity > 0){
                let color_ = object.color;
                for (x=Math.max(Math.floor(object.position.x+Camera.position.x),0);x<Math.min(Math.floor(object.position.x+object.size.x+Camera.position.x),840);x++){
                    for(y=Math.max(Math.floor(object.position.y+Camera.position.y),0);y<Math.min(Math.floor(object.position.y+object.size.y+Camera.position.y),470);y++){
                        let index_ = (y*840+x)*4;
                        buffer_.data[index_+0] = (color_.r*object.opacity)+(buffer_.data[index_+0]*(1-object.opacity));
                        buffer_.data[index_+1] = (color_.g*object.opacity)+(buffer_.data[index_+1]*(1-object.opacity));
                        buffer_.data[index_+2] = (color_.b*object.opacity)+(buffer_.data[index_+2]*(1-object.opacity));
                        buffer_.data[index_+3] = 255;
                    }
                }
            }
        }
        if (object instanceof Sprite){
            let x__=0;
            let y__=0;
            if (object.opacity > 0){
                for (x=Math.max(Math.floor(object.position.x+Camera.position.x),0);x<Math.min(Math.floor(object.position.x+object.size.x+Camera.position.x),840);x++){
                    for(y=Math.max(Math.floor(object.position.y+Camera.position.y),0);y<Math.min(Math.floor(object.position.y+object.size.y+Camera.position.y),470);y++){
                        let index_ = (y*840+x)*4;
                        let index__ = (x__*object.size.y+y__)*4;
                        let color_ = new Color3(object.image.data[index__],object.image.data[index__+1],object.image.data[index__+2]);
                        buffer_.data[index_+0] = (color_.r*object.opacity)+(buffer_.data[index_+0]*(1-object.opacity));
                        buffer_.data[index_+1] = (color_.g*object.opacity)+(buffer_.data[index_+1]*(1-object.opacity));
                        buffer_.data[index_+2] = (color_.b*object.opacity)+(buffer_.data[index_+2]*(1-object.opacity));
                        buffer_.data[index_+3] = 255;
                        y__++;
                    }
                    x__++;
                }
            }
        }
        if (object instanceof Text){
            if (object.opacity > 0){
                let text = object.text.toLowerCase().split("");
                let text_buffer = [];
                text.forEach(function(index_) {
                    text_buffer.push(Text_Index[Number_Index.indexOf(index_.charCodeAt(0))]);
                });
    
                let n_ = 0;
                text_buffer.forEach(function(char) {
                    let size = Math.floor(object.size*32)/32;
                    for (x=0;x<8*size;x++){
                        for(y=0;y<8*size;y++){
                            let X = Math.floor(x/size);
                            let Y = Math.floor(y/size);
                            let ind = char[X][Y];
                            if (ind == 1){
                                let color_ = object.color;
                                let Y = y+object.position.y;
                                let X = x+(n_*size)+object.position.x;
                                let index_ = (Y*840+X)*4;
                                buffer_.data[index_+0] = (color_.r*object.opacity)+(buffer_.data[index_+0]*(1-object.opacity));
                                buffer_.data[index_+1] = (color_.g*object.opacity)+(buffer_.data[index_+1]*(1-object.opacity));
                                buffer_.data[index_+2] = (color_.b*object.opacity)+(buffer_.data[index_+2]*(1-object.opacity));
                                buffer_.data[index_+3] = 255;
                            }
                        }
                    }
                    n_ += 8;
                });
            }
        }
    })

    Draw.putImageData(buffer_,0,0);
    window.requestAnimationFrame(Render);
    delta = (frame_-oldframe_)/16.666;
    oldframe_ = frame_;
}
window.setTimeout(function(){window.requestAnimationFrame(Render);},10);
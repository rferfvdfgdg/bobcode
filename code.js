let fps = new Text(new Vector2(10,10), new Color3(0,0,0), 2, "0", 1, 2);
let bob = new Rect(new Vector2(10,10), new Vector2(100,100), new Color3(100,100,100), 1, 1);
let speed = 4;
let size_ = 25;
let size__ = new Vector2(200,100);
let buffer = [];
for (x=0;x<size__.x*size_;x+=size_){
    for(y=0;y<size__.y*size_;y+=size_){
        let boinge = new Rect(new Vector2(x,y), new Vector2(size_,size_), new Color3(Math.random()*255,Math.random()*255,Math.random()*255), 1, 0);
        buffer.push(boinge);
    }
}

let boinge = new Sprite(new Vector2(1,1), new Vector2(8,8), 'Images/bob.png', 1, 3);
console.log(boinge.image.data);

let fps_buffer = [60,60,60,60];

function Tick(){

    // Fps \\
    fps.text = String(Math.ceil((fps_buffer[3]+fps_buffer[2]+fps_buffer[1]+fps_buffer[0])/4));
    fps_buffer[3] = fps_buffer[2];
    fps_buffer[2] = fps_buffer[1];
    fps_buffer[1] = fps_buffer[0];
    fps_buffer[0] = Math.floor(60/delta);

    // Movement \\
    if (Keyboard.up){
        Camera.position.y+=speed;
    }
    if (Keyboard.down){
        Camera.position.y-=speed;
    }
    if (Keyboard.left){
        Camera.position.x+=speed;
    }
    if (Keyboard.right){
        Camera.position.x-=speed;
    }
}
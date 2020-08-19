//RANDOM BALLs
function createMultipleBalls(config){
    config.color = config.color ? config.color :  100000 + Math.floor(Math.random() * 999999)
    for (let index = 0; index < config.balls_count; index++) {
        let color = config.randomColor ? 100000 + Math.floor(Math.random() * 999999) : config.color
        let ball = document.createElement('span');
        document.querySelector(config.parent).appendChild(ball);
        new Ball({
            element: ball,
            backgroundColor: `#${color}`,
            size: config.size || 10 + Math.random() * 100,
            speed: 500 + Math.random() * 1000,
            x: 1 + Math.random() * 100,
            y: 1 + Math.random() * 100,
            borderRadius: `${config.borderRadius}%` || '0%',
            opacity: config.opacity || 1,
            zIndex: 0,
        })
    }
}


function Ball( config ) {
    this.speed = config.speed || 1000;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.xSteps = config.xSteps | 10;
    this.ySteps = config.ySteps || 10;
    this.el = config.element
    this.size = config.size
    this.onClickSpeed = config.onClickSpeed || 100
    this.shouldMoveForward = true;
    this.shouldMoveUpward = true
    this.width = config.boxWidth || false
    this.height = config.boxHeight || false
    this.el.style.backgroundColor = config.backgroundColor || "#000069",
        this.el.style.borderRadius = config.borderRadius || '50%',
        this.el.style.position = config.position || 'absolute'
    this.el.style.opacity = config.opacity || 1
    this.el.style.zIndex = config.zIndex || 0

    let self = this


    self.el.addEventListener("click",function () {
        self.shrink()
        let initial_speed = self.speed
        self.speed = self.onClickSpeed
        self.init()
        setTimeout(function () {
            self.speed = initial_speed
            clearInterval(self.interval)
            self.init()
        },5000);
    })

    this.setBoxSize = function(){
        if (self.height && self.width) {
            this.el.style.width = `${this.width}px`
            this.el.style.height = `${this.height}px`
            return;
        }

        return this.el.style.width = this.el.style.height =  `${this.size}px`
    }

    this.shrink = function(share = 2){
        if (self.height && self.width) {
            self.height = Math.ceil(self.height / share)
            self.width = Math.ceil(self.width / share)
            return
        }
        self.size = Math.floor(self.size / share)
        self.speed = Math.floor(self.speed / 2)

    }

    this.init = function () {
        console.log('Creating box')
        self.setBoxSize()
        self.el.style.transitionDuration = `${self.speed}ms`
        self.el.style.transitionProperty = `all`
        self.el.style.transitionTimingFunction = `linear`
        self.interval = setInterval(function () {
            self.el.transform = "rotateY(50deg)"
            self.shouldMoveForward ? self.x = (self.x + self.xSteps + Math.random(0,50))  : self.x -= self.xSteps + Math.random(0,50);
            self.shouldMoveUpward ? self.y += self.ySteps + Math.random(0,50) : self.y -= self.ySteps  + Math.random(0,50);
            self.el.style.left = `${self.x}%`
            self.el.style.top = `${self.y}%`

            self.x < 1 || self.x > 99 ? self.shouldMoveForward = !self.shouldMoveForward : null;
            self.y < 1 || self.y > 99 ? self.shouldMoveUpward = !self.shouldMoveUpward : null;

        },self.speed)
    }

    // Call the movement methods
    this.init()
}


createMultipleBalls({
    parent: 'ul',
    balls_count: 20,
    borderRadius: 50,
    randomColor: true,
    // opacity: .4,
    size: 50
})


//END RANDOM BALLS
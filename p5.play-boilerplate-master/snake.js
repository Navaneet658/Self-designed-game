class Snake
{
    constructor() {
        this.x = 500;
		this.y=200;
        this.spt=createSprite(this.x, this.y, 20,20);
        this.spt.shapeColor="black"
    
    }
    moveLeft()
	{ 
		this.spt.x=this.spt.x-12;
	}

	moveRight()
	{ 
		this.spt.x=this.spt.x+12;
	}
	moveUp()
	{ 
		this.spt.y=this.spt.y-12
    }
    moveDown()
	{ 
		this.spt.y=this.spt.y+12
    }
}

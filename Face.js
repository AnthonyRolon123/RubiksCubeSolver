class Face {
    topLeftCorner;
    topRightCorner;
    bottomLeftCorner;
    bottomRightCorner;
    topEdge;
    leftEdge;
    rightEdge;
    bottomEdge;
    center;

    constructor(topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner, topEdge, leftEdge, rightEdge, bottomEdge, center){
        this.topLeftCorner = topLeftCorner;
        this.topRightCorner = topRightCorner;
        this.bottomLeftCorner = bottomLeftCorner;
        this.bottomRightCorner = bottomRightCorner;
        this.topEdge = topEdge;
        this.leftEdge = leftEdge;
        this.rightEdge = rightEdge;
        this.bottomEdge = bottomEdge;
        this.center = center;
    }
}
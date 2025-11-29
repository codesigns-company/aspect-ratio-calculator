class RatioCalculator {
    constructor(ratioW, ratioH) {
        this.ratio = ratioH / ratioW;
        this.pixelW = document.getElementById('pixel_w');
        this.pixelH = document.getElementById('pixel_h');
        this.init();
    }
    
    init() {
        this.pixelW.addEventListener('input', () => this.calculateHeight());
        this.calculateHeight(); // Initial calculation
    }
    
    calculateHeight() {
        const pixelW = parseFloat(this.pixelW.value) || 0;
        const calcH = pixelW * this.ratio;
        this.pixelH.value = Math.ceil(calcH);
    }
}
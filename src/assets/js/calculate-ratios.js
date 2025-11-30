class AspectRatioCalculator {
    constructor() {
        this.ratios = {
            "16:9": [16, 9],
            "4:3": [4, 3],
            "3:2": [3, 2],
            "21:9": [21, 9],
            "9:16": [9, 16],
            custom: [null, null],
        };

        // Cache DOM elements
        this.elements = {
            ratio: document.getElementById("ratio"),
            ratioW: document.getElementById("ratio_w"),
            ratioH: document.getElementById("ratio_h"),
            pixelW: document.getElementById("pixel_w"),
            pixelH: document.getElementById("pixel_h"),
        };

        this.init();
    }

    init() {
        // Bind events
        this.elements.ratio.addEventListener("change", () =>
            this.updateRatio()
        );
        this.elements.ratioW.addEventListener("input", (e) =>
            this.updatePixels(e)
        );
        this.elements.ratioH.addEventListener("input", (e) =>
            this.updatePixels(e)
        );
        this.elements.pixelW.addEventListener("input", (e) =>
            this.updatePixels(e)
        );
        this.elements.pixelH.addEventListener("input", (e) =>
            this.updatePixels(e)
        );

        // Initial setup
        this.updateRatio();
    }

    updateRatio() {
        const val = this.elements.ratio.value;
        const { ratioW, ratioH, pixelW, pixelH } = this.elements;

        if (val === "custom") {
            ratioW.disabled = false;
            ratioH.disabled = false;
        } else {
            ratioW.disabled = true;
            ratioH.disabled = true;
            [ratioW.value, ratioH.value] = this.ratios[val];

            // Set default width based on ratio
            pixelW.value = val === "9:16" ? 1080 : 1280;
        }

        this.calculateHeight();
    }

    updatePixels(event) {
        const target = event.target;
        const { ratioW, ratioH, pixelW, pixelH } = this.elements;

        if (target === pixelH) {
            this.calculateWidth();
        } else {
            this.calculateHeight();
        }
    }

    calculateHeight() {
        const rw = parseInt(this.elements.ratioW.value) || 1;
        const rh = parseInt(this.elements.ratioH.value) || 1;
        const calcH = this.elements.pixelW.value * (rh / rw);
        this.elements.pixelH.value = Math.round(calcH);
    }

    calculateWidth() {
        const rw = parseInt(this.elements.ratioW.value) || 1;
        const rh = parseInt(this.elements.ratioH.value) || 1;
        const calcW = this.elements.pixelH.value * (rw / rh);
        this.elements.pixelW.value = Math.round(calcW);
    }
}

// Initialize calculator
new AspectRatioCalculator();

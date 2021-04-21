const app = new Vue({
    el: "#app",
    data: {
        photos: [
            "./img/mccartney.jpg",
            "./img/lennon.jpg",
            "./img/starr.jpg",
            "./img/harrison.jpg",
        ],
        indexPhoto: 0,
        intervalID: 0,
    },
    methods: {
        prevPhoto() {
            this.indexPhoto--;

            if (this.indexPhoto < 0) {
                this.indexPhoto = (this.photos.length - 1);
            }
        },
        nextPhoto() {
            this.indexPhoto++;

            if (this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        setPhoto(index) {
            this.indexPhoto = index;
        },
        startLoop() {
            this.intervalID = setInterval(() => {
                this.nextPhoto();
            }, 2000);
        },
        stopLoop() {
            clearInterval(this.intervalID);
        }
    }
});
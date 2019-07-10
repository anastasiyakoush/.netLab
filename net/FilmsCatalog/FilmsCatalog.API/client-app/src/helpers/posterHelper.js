export const posterHelper = {
    isPoster: url => url.includes("p.jpg"),
    getPoster: images => images.filter(x => this.isPoster(x))[0]
}
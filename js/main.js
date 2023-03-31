class LinkForPopup {
    link;
    constructor(link) {
        this.link = link;
        console.log();
        link.addEventListener("click", (e) => {
            this.prevent(e);
            this.showPopup();
        });
    }
    showPopup() {
        const attrs = this.getMatchData();
        const popup = document.createElement('my-popup', { is: 'my-popup', });
        for (let key in attrs) {
            popup.setAttribute(String(key), String(attrs[key]));
        }
        document.body.appendChild(popup);
        document.body.classList.add('locked');
    }
    getMatchData() {
        const images = this.link.querySelectorAll("img");
        const teams = this.link.querySelectorAll("span.title_-RJf2");
        const scores = this.link.querySelectorAll(".cellScore_6KKfu");
        const date = this.link.parentElement.querySelector('.cellDate_5Shiq').innerHTML;
        return {
            src1: images[0].getAttribute("src"),
            src2: images[1].getAttribute("src"),
            team1: teams[0].innerHTML,
            team2: teams[1].innerHTML,
            score: `${scores[0].innerHTML} : ${scores[1].innerHTML}`,
            date
        };
    }
    prevent(e) {
        e.preventDefault();
        e.stopPropagation();
    }
}
class PopupActivator {
    constructor(arr) {
        arr.forEach((el) => {
            new LinkForPopup(el);
        });
    }
}
const onMounted = () => {
    const cellsLinks = document.querySelectorAll("a.match_q0y07");
    const arrOfCellsLinks = Array.from(cellsLinks);
    new PopupActivator(arrOfCellsLinks);
};
window.addEventListener("DOMContentLoaded", onMounted);

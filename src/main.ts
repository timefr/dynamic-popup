type Attributes = {
  team1?:string;
  team2?:string;
  src1?:string;
  src2?:string;
  score?:string;
  date?:string;
};

class LinkForPopup {
  constructor(private link: Element) {
    console.log();
    
    link.addEventListener("click", (e: Event) => {
      this.prevent(e);
      this.showPopup();
    });
  }

  private showPopup() {
    const attrs = this.getMatchData();
    const popup = document.createElement('my-popup', {is: 'my-popup', })
    
    for (let key in attrs) {
      popup.setAttribute(String(key),String(attrs[key]))
    }
    
    document.body.appendChild(popup)
    document.body.classList.add('locked')
  }

  private getMatchData(): Attributes {
    const images = this.link.querySelectorAll("img");
    const teams = this.link.querySelectorAll("span.title_-RJf2");
    const scores = this.link.querySelectorAll(".cellScore_6KKfu")
    const date = this.link.parentElement.querySelector('.cellDate_5Shiq').innerHTML
    return {
      src1: images[0].getAttribute("src"),
      src2: images[1].getAttribute("src"),
      team1: teams[0].innerHTML,
      team2: teams[1].innerHTML,
      score: `${scores[0].innerHTML} : ${scores[1].innerHTML}`,
      date
    };
  }

  private prevent(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }
}

class PopupActivator {
  constructor(arr: Array<Element>) {
    arr.forEach((el) => {
      new LinkForPopup(el);
    });
  }
}

const onMounted = () => {
  const cellsLinks = document.querySelectorAll("a.match_q0y07");
  const arrOfCellsLinks: Array<Element> = Array.from(cellsLinks);

  new PopupActivator(arrOfCellsLinks);
};

window.addEventListener("DOMContentLoaded", onMounted);

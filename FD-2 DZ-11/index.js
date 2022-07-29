const form = document.getElementById('form')
const button = document.getElementById('submit');
const sortA_Z = document.getElementById('sortA_Z');
const sortZ_A = document.getElementById('sortZ_A');
const avgFill = document.querySelector('.average');


class Review {
    constructor() {
        this.reviewList = [];
    }

    static validateReview(data) {
        return (data.from && data.text && data.review !== "" && data.review >= 1 && data.review <= 5 ? true : false)
    }

    addTolist(data) {
        this.reviewList.push(data);
        this.render();
    }

    render(data) {
        const list = document.getElementById('list');
        list.innerHTML = '';

        this.reviewList.forEach((item) => {
            const textP = document.createElement('p');
            const fromP = document.createElement('p')
            const reviewP = document.createElement('p')
            let listItem = document.createElement('li');

            textP.innerText = item.from;
            fromP.innerText = item.text;
            reviewP.innerText = item.review;

            listItem.appendChild(fromP);
            listItem.appendChild(textP);
            listItem.appendChild(reviewP);
            list.appendChild(listItem);
        })
    }

    getDate() {
        const date = document.getElementById('date');
        let dateNew = new Date().toLocaleDateString();
        date.innerText = `${dateNew}`;
        const myTime = setInterval(newTime, 1000);

        function newTime() {
            document.getElementById("time").innerText = (new Date()).toLocaleTimeString();
        }
    }

    getYear() {
        const year = document.getElementById('year');
        let yearNew = new Date().getFullYear();
        year.innerText = `${yearNew}`;
    }

    averageRating(data) {
        let sum = this.reviewList.reduce((acc, item) => {
            return acc + (+item.review)
        }, 0);
        let avg = (sum / this.reviewList.length);
        avgFill.innerText = `Average = ${avg}`;
    }

    sortA_Z(data) {
        this.reviewList.sort((a, b) => {
            return a.review - b.review;
        })
        this.render()
    }

    sortZ_A(data) {
        this.reviewList.sort((a, b) => {
            return b.review - a.review;
        })
        this.render();
    }
}

const review = new Review();

review.getDate();
review.getYear();


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataEntries = formData.entries();

    const data = Object.fromEntries(formDataEntries);

    const validate = Review.validateReview(data);

    if (validate) {
        review.addTolist(data);
        form.reset();
        review.averageRating(data);

        sortA_Z.addEventListener('click', (event) => {
            review.sortA_Z(data);
        });

        sortZ_A.addEventListener('click', (event) => {
            review.sortZ_A(data);
        });
    } else (
        alert('Fill in the form fields!')
    );
})







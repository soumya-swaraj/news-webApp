//a76081f34210407e8fa494d87e6acf51
//visit this site to get a api key -> https://newsapi.org/
let newsAccordion = document.getElementById("newsAccordion");

let xhr = new XMLHttpRequest();

xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=in&apiKey=55cca21c5b9846fc9f644d3afdb82215`, true);

xhr.onload = function () {
    if (this.status == 200) {
        let jsonData = JSON.parse(this.responseText);
        let articles = jsonData.articles;
        console.log(articles);
        let inner_html = "";
        articles.forEach(function (element, index) {
            let temp_html = `<div class="accordion-item">
                                <h2 class="accordion-header" id="newsHeading${index}">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#newsBody${index}" aria-expanded="false"
                                        aria-controls="newsBody${index}">
                                        <h6>${element.title}</h6>
                                    </button>
                                </h2>
                                <div id="newsBody${index}" class="accordion-collapse collapse"
                                    aria-labelledby="newsHeading${index}" data-bs-parent="#newsAccordion">
                                    <div class="accordion-body">
                                        <img class="newsimg" src="${element.urlToImage}" alt="image"><br>
                                        ${element.description}
                                        <hr class="newsaccodianhr">
                                        ${element.content}<a href="${element.url}" target="_blank">more...</a>
                                    </div>
                                </div>
                            </div>`;
            inner_html += temp_html;
        });

        newsAccordion.innerHTML = inner_html;
    } else {
        console.log("Some error occure");
    }
}

xhr.send();
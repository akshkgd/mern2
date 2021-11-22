fetchQuote = () =>{
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(data[22].text);
      let number = Math.floor(Math.random() * data.length);
      document.getElementById("quotes").innerHTML = data[number].text;
      document.getElementById("author").innerHTML = data[number].author;
    });
  }
fetchQuote()


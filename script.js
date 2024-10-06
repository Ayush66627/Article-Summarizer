
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': ''
	}
};

  const btn = document.querySelector('.btn')
  const para = document.querySelector('.summary')

  btn.addEventListener('click', () => {
    const input = document.querySelector('.inputbox').value
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

    para.innerText = "Please wait Article is summarizing..."

    if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)){
         
        para.innerText = 'Invalid URL'
    }
    else{
        fetch(url, options)
        .then(data => data.json())
        .then(data => {
            para.innerText = data?.summary
            
        })
        .catch(error => {
            console.log(error);
            
        })
    }

    
})
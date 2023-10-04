function GetId() {
    return Liferay.Util.fetch(
        "http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings/",
        {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('test@liferay.com:learn'),
            },
            body: JSON.stringify()

        }
    )
    .then(response =>(response.json()))
    .then(data => console.log(data))
}

function PostId() {
    return Liferay.Util.fetch(
        "http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('test@liferay.com:learn'),

            },
            body: JSON.stringify({
                "headline": "Test Blog Entry from REST Services",
                "articleBody": "This article was psoted via REST services prvided by Liferay DXP."
            }),
        }
    )
}

function DeleteId() {
    
}
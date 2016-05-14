var ajaxRequest = new XMLHttpRequest(); 

//I want to request the file 'data.txt', but don't send the request yet.
ajaxRequest.open('GET', 'data.txt', true);

//declare a function
var handleResponse=function()
{
    //did we find the requested resource?
    if(ajaxRequest.status===200)
    {
        //has all the data loaded?
        if(ajaxRequest.readyState===4)
        {
            console.log("Got a response");
        }
    }

}

//when the server responds call the function handleResponse() 
ajaxRequest.onreadystatechange=handleResponse; 

//Everything is set up, now send off the request to the server
ajaxRequest.send(null);

/*
https://api.walmartlabs.com/v1/trends?apiKey=a8fjdbzpz5teu8hahzta2dsp&format=json
 
 */
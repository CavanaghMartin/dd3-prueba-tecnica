const server = require('express').Router();
const axios = require('axios');

//get http://localhost:3001/Property 71
server.get('/name/:name', (req, res) => {
    const {name}=req.params
    axios.get('https://api.mocklets.com/p68140/properties')
        .then(function (response) {

            const props=response.data.filter(function(prop) {
                return prop.name===name
            });

            res.json(props)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});


// post http://localhost:3001/type
//  Content-Type: application/json

//  {
//      "type":["House","Apartment"]
//  }
server.post('/type', (req, res) => {
    const {type}=req.body
    axios.get('https://api.mocklets.com/p68140/properties')
        .then(function (response) {

            const props=response.data.filter(function(prop) {
                return type.includes(prop.type)
            });

            res.json(props)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

// post http://localhost:3001/facilites
// Content-Type: application/json

// {
//     "facilites":["Pool","Hot tub"]
// }
server.post('/facilites', (req, res) => {
    const {facilites}=req.body
    axios.get('https://api.mocklets.com/p68140/properties')
        .then(function (response) {

            const props=response.data.filter(function(prop) {

                return prop.facilites.some((item)=>{
                    return facilites.includes(item)
                })
            });
            console.log(props)
            res.json(props)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

module.exports = server;
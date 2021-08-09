const server = require('express').Router();
const axios = require('axios');

//http://localhost:3001/Property 71
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

server.post('/type', (req, res) => {
    const {type}=req.body
    console.log(type)
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
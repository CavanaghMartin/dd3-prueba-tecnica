const server = require('express').Router();
const axios = require('axios');

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
            const even = (element) => element.includes(prop.facilites);

            const props=response.data.filter(function(prop) {
                let array=[]

                return prop.facilites.includes(facilites)
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
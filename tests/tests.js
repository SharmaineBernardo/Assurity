const axios = require("axios");
const expect = require("chai").expect;


const baseUrl = "https://api.tmsandbox.co.nz/v1";

// Test the API endpoint for retrieving details of a specific category with CategoryId = 6329
describe("GET /Categories/6329/Details.json", async function(){
    const path = "/Categories/6329/Details.json?catalogue=false";
    let response;
   
    //Before hook that sends GET request and store the response
    before(async function(){
        try{
            response = await axios.get(baseUrl+path);
        }catch(e){
            throw new Error(e);
        }
    });
});

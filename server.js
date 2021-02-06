const express = require("express");
const app = express();
const faker = require("faker");

const server = app.listen(8000, () =>
    console.log(`Server is totally ready on port ${server.address().port}!`)
);

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/users/new", (req, res) => {
    res.send( users );
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/companies/new", (req, res) => {
    res.send( companies );
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/user/company", (req, res) => {
    const data = {users, companies}
    res.send( data )
});

class User{
    constructor(){
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const users = [(new User())];

class Company{
    constructor(){
        this._id =faker.random.number();
        this.company_name = faker.company.companyName();
        this.address_city = faker.address.city();
        // this.address_street = faker.address.streetName();
        this.address_state = faker.address.state();
        this.address_zipCode = faker.address.zipCode();
        this.address_country = faker.address.country();
    }
}
const companies = [(new Company())];

app.post("/api/users/new", (req, res) => {
    console.log(req.body);
    users.push(req.body)
    res.json({ status: 'ok' });
});

app.post("/api/companies/new", (req, res) => {
    console.log(req.body);
    companies.push(req.body)
    res.json({ status: 'ok' });
});

app.post("/api/user/company", (req, res) => {
    console.log(req.body);
    companies.push(req.body)
    users.push(req.body)
    res.json({ status: 'ok' });
});
const express = require('express');
const Joi = require('joi');
const app = require();//creating the express app
app.Use(express.json());
//Give data to the server
const customers = [
    {title:'George', id: 1},
    {title:'josh', id: 2},
    {title:'Tyler', id: 3},
    {title:'Alice', id: 4},
    {title:'xssRat', id: 5}
]
    //Read Request Handles
    //Display the message when the url consist of '/'
    app.get('/' , (req,res) => {
        res.send('welcome to XssRat RestAPI');
    });
    //Display the list of customer when URL consist of api customer
    app.get('/api/customers',(req,res) =>
    {
        res.send(customers);
    });
    //Display the information of specific customer when you mention the id
    app.get('/api/customers/:id',(req,res) =>
    {
        const customer= customers.find( C=> C.id===parseInt(req.params.id));
    });
    //if there is no valid customer ID,then Display an error with the following
    if (!customer) res.status(404).send('<h2 style="fontfamily')
    res.send(customer);
    //Create Request Handler
    //Create New Customer information
    app.post('/api/customers',(req,res)=>{
        const{
            error} = validateCustomer(req.body);
            if(error){
                res.status(400).send(error.detail[0].message)
                return;
            }
    })
    //increment the customerId
    const customer = {
        id:customer.length +1,
        title:req.body.title};
        customer.push(customer);
        res.send(customer)
        //Update Request Handler
        //update Existing Customer information
        app.put('/api/customer/:id',(req,res) =>
        {
            const customer = customer.find( C=> C.id ===parseInt(req.params.id));
            if( !customer) res.status(404).send('<h2 style="font-family:sherif"')
            const{error} = validateCustomer(req.body);
            if(error){
                res.status(400).send(error.detail[0].message);
                return;
            }
            customer.title = req.body.title;
                res.send(customer);
            });
        //Delete Customer Detail
        app.delete('api/customer/:id', (req,res)=> {
               const customer = customer.find(C=> C.Id ===ParseInt (req.params.Id));
                if(!customer) res.status(404).send('<h2 style="font-family:sherif"')
                const index =customers.indexOf(Customer);
           Customers.Splice(index,1);
          res.send(customer)
        });
        //Validate information
        function validateCustomer(customer){
            const schema = {
                title:Joi.string().min(3).required()};
        }
        //PORT ENV VAR
        const port = 8080;
        app.listen(port,()=>console.log('listening on port $ port{port}..'));
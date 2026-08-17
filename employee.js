const express = require("express")
const app = express()

app.use(express.json())
let emps = [
    {id:1, name:'siddarth', dept:"SE"},
    {id:2, name:'Aditya', dept:"SOC"},
    {id:3, name:'karan', dept:"DA"}
]

app.get("/emps", (req, resp) => {
    resp.json(emps)
})

app.get("/emps/:id", (req, resp) => {
    let eid = req.params.id
    const e = emps.find((e) => { return e.id == eid })
    if (e) {
        resp.json(e)
    } else {
        resp.status(404).json({"message": "employee record is not found"})
    }
})

app.post("/emps", (req, resp) => {
    let eid = req.body.id
    let name = req.body.name
    let dept = req.body.dept
    let e = {id: eid, name: name, dept: dept}
    emps.push(e)
    resp.status(201).json({"message": "New employee creaated"})
})

app.put("/emps/:id", (req, resp) => {
    let eid = req.params.id
    let index = emps.findIndex((e) => e.id == eid)
    if (index !== -1) {
        let name = req.body.name
        let dept = req.body.dept
        let e = {id: eid, name: name, dept: dept}
        emps[index] = e
        resp.status(201).json({"message": "employee record is updated"})
    } else {
        resp.status(404).json({"message": "employee record is not found"})
    }
})

app.delete("/emps/:id", (req, resp) => {
    let eid = req.params.id
    let e = emps.find((e) => { return e.id == eid })
    if (e) {
        emps = emps.filter((e) => { return e.id != eid })
        resp.status(202).json({"message": "employee record is deleted"})
    } else {
        resp.status(404).json({"message": "employee record is not found"})
    }
})

app.listen(3000, () => { console.log("server started") })
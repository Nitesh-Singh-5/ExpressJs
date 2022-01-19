const allStudent = (req, res) => {
    res.send("All Student");
}

const deleteStudent = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);
    if (id == 10) {
        res.send("When id is 10");
    } else {
        res.send(`Student ID other than 10`);
    }
}

export { allStudent, deleteStudent }
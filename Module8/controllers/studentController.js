import { join } from 'path';

const allStudent = (req, res) => {
    // res.sendFile('c:\\expressjs\\Module7\\views\\index.html');
    // res.sendFile(join(process.cwd(), 'views', 'student.html'));
    res.render('student');
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
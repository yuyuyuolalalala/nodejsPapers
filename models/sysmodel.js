const db = require('../db');


const Sysmodel = db.bookshelf.Model.extend({
    tableName: 'teacher',
    project:function () {
        return this.hasMany(Project)
    }
});

const Project = db.bookshelf.Model.extend({
    tableName: 'project',
    teacher: function() {
        return this.belongsTo(Sysmodel)
    },
    plast: function() {
        return this.hasMany(Plast);
    },
    pchoose: function() {
        return this.hasMany(Pchoose);
    }
});

const Student = db.bookshelf.Model.extend({
    tableName: 'student',
    plast: function() {
        return this.hasOne(Plast);
    },
    pchoose:function () {
        return this.hasOne(Pchoose);
    }
});
const Pchoose = db.bookshelf.Model.extend({
    tableName: 'pchoose',
    project: function() {
        return this.belongsTo(Project);
    },
    student:function () {
        return this.belongsTo(Student);
    },
    task:function () {
        return this.hasMany(Task)  ;
    }
});

const Plast = db.bookshelf.Model.extend({
    tableName: 'plast',
    project: function() {
        return this.belongsTo(Project);
    },
    student:function () {
        return this.belongsTo(Student)
    }
});

const Task = db.bookshelf.Model.extend({
    tableName: 'task',
    pchoose:function () {
        return this.belongsTo(Pchoose);
    }
});

module.exports = {
    Teacher: Sysmodel,
    Student: Student,
    Project: Project,
    Pchoose: Pchoose,
    Plast: Plast,
    Task: Task
}
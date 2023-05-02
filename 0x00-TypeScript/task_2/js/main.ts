interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome() {
        return `Working from home`
    }
    getCoffeeBreak() {
        return `Getting a coffee break`
    }
    workDirectorTasks() {
        return `Getting to director tasks`
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return `Cannot work from home`
    }
    getCoffeeBreak() {
        return `Cannot have a break`
    }
    workTeacherTasks() {
        return `Getting to work`
    }
}

const createEmployee = function (salary: number | string): TeacherInterface | DirectorInterface {
if (typeof salary === "number" && salary < 500) {
    return new Teacher()
}
else {
    return new Director()
}
}

const isDirector = function (employee: DirectorInterface| TeacherInterface): boolean {
    const isdirec = employee instanceof Director
    return isdirec
}

const executeWork = function (employee: DirectorInterface| TeacherInterface): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks()
    }
    else if (employee instanceof Teacher) {
        return employee.workTeacherTasks()
    }
}

type Subjects = "Math" | "History";

const teachClass = function (todayClass: Subjects):string {
    if (todayClass === "Math"){
        return `Teaching Math`
    }
    else {
        return `Teaching History`
    }
}


function User(name, age)
{
    this.name = name;
    this.age = age;
    this.displayInfo = function()
    {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
User.prototype.sayHi = function()
{
    console.log(`Hail Wotan! My name is ${this.name}`);
};
module.exports = User;
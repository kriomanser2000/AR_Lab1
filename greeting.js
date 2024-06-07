let currentDate = new Date();
module.exports.date = currentDate;
module.exports.getMessage = function(name)
{
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Good Evening, " + name;
    else if(hour > 10)
        return "Good Afternoon, " + name;
    else
    return "Good Morning, " + name;
}
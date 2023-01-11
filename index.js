/*a script that books an appointment
for auth university gym */

const {Builder, By, Key, until} = require("selenium-webdriver")

//using chrome browser
let driver = new Builder().forBrowser("chrome").build()

driver.get("https://gym.auth.gr/reservations/")


//set a timer doing every task synchonized
const timer = 5000

setTimeout(selectGym,timer)

//selecting activity
function selectGym(){
    driver.findElement(By.xpath("(//*[contains(@class, 'sln-btn sln-btn--icon sln-btn--fullwidth')])[2]")).click()
    setTimeout(firstTask,timer)
}

//selecting gym room
function firstTask(){
    driver.findElement(By.className("row sln-service sln-service--11192")).click()
    setTimeout(secondTask,timer)
}

function secondTask(){
    driver.findElement(By.name("submit_services")).click();
    setTimeout(thirdTask,timer)
}
//selecting first date available
function thirdTask(){
    driver.findElement(By.name("submit_date")).click();
    setTimeout(fourthTask,timer)
}
//rendering data in form
function fourthTask(){
    driver.findElement(By.id("sln_firstname")).sendKeys("Χρηστος")
    driver.findElement(By.id("sln_lastname")).sendKeys("Παπαδοπουλος")
    driver.findElement(By.id("sln_email")).sendKeys("pierisip@csd.auth.gr")
    driver.findElement(By.id("sln_phone")).sendKeys("")
    setTimeout(fifthTask,timer)
}

function fifthTask(){
    driver.findElement(By.name('submit_details')).click()
    setTimeout(sixthTask,timer)
}
//final submission
function sixthTask(){
    driver.findElement(By.name('submit_summary')).click()
    setTimeout(closeRequest,timer)
}

function closeRequest(){
    console.log("Appointment successful")
    driver.quit()
}




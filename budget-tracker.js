const prompt = require('prompt-sync')()
let expenses = []
let budget
function menu(){
    let choice = prompt("[1: New Expense] [2: Total Expenses] [3: Compare Expenses to Budget] [4: Remove an Expense] [5: Exit]")
    if(choice==1){
        newExpense()
    }
    else if(choice==2){
        totalExpenses()
    }
    else if(choice==3){
        compareBudget()
    }
    else if(choice==4){
        let goobie = prompt("Remove the first item of what category of expense?")
        remover(goobie)
    }
    else if(choice==5){
        exit()
    }
    else{
        console.log("That was not an option.")
        menu()
    }
}

function getBudget(){
budget = prompt("What is your budget?")
if(isNaN(budget)==true){
    console.log("Not a number. Please try again.")
    getBudget()
    }
    else if(isNaN(budget)==false){
   console.log("Budget set to: " + budget)
   menu()
    }
}

function newExpense(){
    let amt = Number(prompt("Enter cost"))
    if(isNaN(amt)==true){
    console.log("Not a number. Please try again.")
    newExpense()
    }
    else{
    let placeholder = prompt("Enter category")
    let cat = placeholder.toLowerCase()
    addExpense(amt,cat)
    }
}
function addExpense(amount, category){
    let expense = [amount, category]
    expenses.push(expense)
    console.log(expenses)
    menu()
}

function totalExpenses(){
    let sum = 0
    for (let index = 0; index < expenses.length; index++){
        sum += expenses[index][0]
    }
    console.log(sum)
    menu()
}
function totalExpensesCompare(){
    let sum = 0
    for (let index = 0; index < expenses.length; index++){
        sum += expenses[index][0]
    }
    return sum
}

function compareBudget(){
    let spent = totalExpensesCompare()
    console.log("Total spent: " + spent)
    console.log("Budget: " + budget)
    let remainder = budget-spent
    let overdraft = spent-budget
    if(spent>budget){
        console.log("You are cooked. You have overspent by " + overdraft + " dollars.")
        menu()
    }
    else{
        console.log("You are chillin fr. You have " + remainder + " left to spend.")
        menu()
    }
}

function remover(phrase){
    for (let index = 0; index < expenses.length; index++){
        if(expenses[0][index] == phrase){
            expenses.splice(index, 1)
            console.log("Expense removed.")
            menu()
        }
        else if(expenses[0][expenses.length] != phrase){
            console.log("No instances of this phrase were found.")
            menu()
        }
    }
}
function exit(){
    console.log("Goodbye.")
}

getBudget()
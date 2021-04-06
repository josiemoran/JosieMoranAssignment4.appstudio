let req = ""
let query = ""
let results = []
let pw = "@August30"
let userName = 'mjm46639'

drpStates.onclick = function(s) {
    if (typeof(s) == "object")
        return
    else {
        drpStates.value = s
    query = `SELECT name from customer WHERE state = '${s}'`
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mjm46639&pass=" + pw + "&database=mjm46639&query=" + query)
    if (req.status == 200) {  
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtaEmployee.value = "There are no clients from this state."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
              // message = message + results[i][1] + "\n"
               // txtaEmployee.value = results[i] + "\n"
               lgCustomer.addItem(results[i])
       }} } // end else
} 
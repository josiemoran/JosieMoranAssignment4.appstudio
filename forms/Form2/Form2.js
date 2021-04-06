let allCustomer=[]
SecondProgram.onshow=function(){
     // get all the pet data from the database when program loads
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mjm46639&pass=" + pw + "&database=mjm46639&query=" + query)

    if (req.status == 200) { //transit worked.
        allCustomer = JSON.parse(req.responseText)  // parse data in an array
        console.log(allCustomer)
        for (i = 0; i < allCustomer.length; i++) 
        drpCustomer.addItem(allCustomer[i])
        
    } else {
        // transit error
        lblMessages5 = `Error: ${req.status}`
    }  
}

btnRefresh.onclick=function(){
    drpCustomer.value = "Customers"
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mjm46639&pass=" + pw + "&database=mjm46639&query=" + query)

    if (req.status == 200) { //transit worked.
        allCustomer = JSON.parse(req.responseText)  // parse data in an array
        console.log(allCustomer)
        for (i = 0; i < allCustomer.length; i++) 
        drpCustomer.addItem(allCustomer[i])
        }
}
drpCustomer.onclick=function(s){
// see what user clicked on in the drpBestMajor dropdown
// Notice I added 's' parameter to the function because the
// event returns the text of the chosen item. 

// this control loaded at design time

  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    drpCustomer.value = s     // make dropdown show choice the user made
  }
}

btnDelete.onclick=function(){
    let cusNameDel = drpCustomer.value
    let found = false
    console.log('In the button delete event allCustomers')
    console.log( cusNameDel) 
    console.log(allCustomer)
    
    for (i = 0; i < allCustomer.length; i++) {
        if (cusNameDel == allCustomer[i][0]){
            found = true
            break 
        }
    }
    if (found == false) 
       console.log("That  name is not in the database.")
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + cusNameDel + "'"      
      alert(query)
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mjm46639&pass=" + pw + "&database=mjm46639&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblAlert.value = `You have successfully deleted the customer named ${cusNameDel}`
            else
                lblAlert.value = `There was a problem deleting ${cusNameDel} from the database.`
      else
        lblAlert.value = `Error: ${req.status}`
    } 
}
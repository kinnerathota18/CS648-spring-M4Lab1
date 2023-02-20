// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
form=window.document.getElementById("addForm");
table=window.document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count=0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
        
    var id=window.document.getElementById("id").value;
    var name=window.document.getElementById("name").value;
    var ext=window.document.getElementById("extension").value;
    var email=window.document.getElementById("email").value;
    var dept=window.document.getElementById("department").value;

    


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idc=row.insertCell(0);
    let namec=row.insertCell(1);
    let extc=row.insertCell(2);
    let emailc=row.insertCell(3);
    let deptc=row.insertCell(4);
    let deletec=row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId = document.createTextNode(id);
    idc.appendChild(textId);

    let textName = document.createTextNode(name);
    namec.appendChild(textName);
 
    let textExt = document.createTextNode(ext);
    extc.appendChild(textExt);

    let textEmail = document.createTextNode(email);
    emailc.appendChild(textEmail);

    let textDept = document.createTextNode(dept);
    deptc.appendChild(textDept);

    // CREATE THE DELETE BUTTON
    let delBut = document.createElement("button");
    delBut.className = "btn btn-danger btn-sm del";
    let textDel = document.createTextNode("X");
    delBut.appendChild(textDel);
    deletec.appendChild(delBut);

    // RESET THE FORM

    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    window.document.getElementById("id").focus();

    count=count+1;
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    window.document.getElementById("empCount").innerText="("+count+")";

});

// DELETE EMPLOYEE
table.addEventListener("click",(event)=>{
    
        if(confirm("Do you really want to delete this row?")) {
            table.deleteRow(event.target.parentNode.parentNode.rowIndex);
            count=count-1;
            window.document.getElementById("empCount").innerText = "(" + count + ")";
            window.document.getElementById('id').focus();
        };
    

});
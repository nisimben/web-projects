document.onreadystatechange = function (ev) {
    if (document.readyState == "complete") {
        console.log('i am ready - ready state');
        bankStart();
    }
}
function bankStart() {
    console.log('bankStart');
    //document.querySelector('.accounts-list').innerHTML = shukiRender(templates.account, BankDb.Accounts)
    let accountsCustomArray = []
    BankDb.Accounts.forEach(acc => {
        let myClient = BankDb.API.getCliendById(acc.ClientId)
        let o = {
            ID: acc.ID,
            Balance: acc.Balance,
            ClientId: acc.ClientId,
            ClientFullName: myClient.lastName + ' ' + myClient.firstName
        }
        accountsCustomArray.push(o)
    });
    document.querySelector('.accounts-list').innerHTML = render(templates.account, accountsCustomArray)
    initEvents();
    
}
let templates = {
    account: `<div class="account" flex-col tabIndex =1">
        <div> <label>ID: </label> <span>[ID]</span> </div>
        <div> <label>ClientFullName: </label> <span>[ClientFullName]</span> </div>
        <div> <label>ClientId: </label> <span>[ClientId]</span> </div>
        <div> <label>Balance: </label> <span>[Balance]</span> </div>
    </div>`,
    transaction: `<div class="transaction" flex-col tabIndex ="1">
        <div> <label>ID: </label> <span>[ID]</span> </div>
        <div> <label>Type : </label> <span>[Type]</span> </div>
        <div> <label>Amount : </label> <span>[Amount]</span> </div> 
    </div>`
}

//events
function initEvents() {
    let allAccountsDiv = document.querySelectorAll('.account')
    console.log(allAccountsDiv)

    // set css
    allAccountsDiv.forEach(accDiv =>{
        accDiv.onclick = (ev)=>{
            console.log(accDiv)
            let myAccDiv = ev.target.closest('.account')
            console.log(myAccDiv);
            
            // document.querySelectorAll('.account.active').forEach(activeDiv => 
            //     activeDiv.className = activeDiv.className.replace(' active',''))
            // myAccDiv.className += " active"
   //set  transactions
            let accountID =accDiv.querySelector('span').textContent
            let accTrans = BankDb.API.getTransactionsByAccountId(accountID)

            let detailsSection =document.querySelector('.details-panel')

            let h =document.getElementById('trazTitle')
            h.innerHTML = `detail for account ${accountID}`
            detailsSection.innerHTML = render(templates.transaction,accTrans)
            
        }
    })

}
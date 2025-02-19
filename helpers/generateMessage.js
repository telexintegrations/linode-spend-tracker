const generateMessage = (accountObject) => {
    const balance = accountObject.balance;  // get the balance
    const balance_uninvoiced = accountObject.balance_uninvoiced;    // get the uninvoiced balance
    const active_promotions = accountObject.active_promotions;  // get the list of active promotions

    let activePromotionsMessage;    // this section will create a message about the active promotions
    if(active_promotions.length === 0){
        activePromotionsMessage = "You currently have no active Promotions.\n";
    }
    else{
        active_promotions.forEach(element => {
            const promotionMessage = `Your account currently has a remaining credit balance of ${element.credit_remaining} units, with ${element.this_month_credit_remaining} units remaining for use this month.`
            activePromotionsMessage += promotionMessage + "\n"
        });
        
    }

    // section will create the message about about the regular balance of the user
    let balanceMessage = `Your current account balance is ${balance}, with an uninvoiced amount of ${balance_uninvoiced}.`;
    if(balance_uninvoiced !== 0) {
        balanceMessage += `Once the invoice is processed, your adjusted balance will be ${balance - balance_uninvoiced}.`;
    }
     
    // messages are joined here
    const message = activePromotionsMessage + balanceMessage;
    return message;
}

module.exports = generateMessage;

def check_transaction_limit(transaction_amount):
    with open("limit.txt", "r") as file:
        limit = int(file.read())
        balance=1000
        if balance-transaction_amount >= limit :
            balance-=transaction_amount
            print(balance)
        elif balance< transaction_amount:
            print("Insufficient Balance")
        else:
            print("Transaction Limit Reached")
            


transaction_amount =300
check_transaction_limit(transaction_amount)

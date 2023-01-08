def transaction_limit(l):
    try:
        
        with open("limit.txt","w") as f:
            f.write(str(l))
            f.close()

    except ValueError:
        print("Please enter a valid integer value for the transaction limit.")
# Open a file in write mode
l= int(input("Enter the transaction limit: "))

m=transaction_limit(l)
print(m)

##	What is Distributed Transaction?
##	In simple words, a distributed transaction refers to a situation where a single transaction (a series of related actions or operations) needs to be performed across multiple separate computer systems or databases. Each of these systems may be located in different physical locations, and they need to work together to ensure that the entire transaction is successful.

Imagine you have an online shopping application where users can place orders. When a user places an order, multiple things need to happen simultaneously, such as deducting the amount from the user's account, updating the inventory to reflect the sold items, and recording the order details in the database. These actions involve different systems or databases.

In a distributed transaction, all these steps are grouped together as one unit of work. If any part of the transaction fails (e.g., the inventory update fails), the whole transaction should be rolled back, ensuring that the data stays consistent across all systems. ##


# PS: Still updating...

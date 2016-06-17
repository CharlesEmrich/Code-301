#2 points each, except where noted:
#JOIN (any different from INNER JOIN?)
SELECT * FROM [Products]
JOIN Categories //appears to yield a mutiplicative product of both matrices

SELECT * FROM [Products]
JOIN Categories
    ON Products.CategoryID = Categories.CategoryID

SELECT ProductName, CategoryName FROM [Products]
JOIN Categories
    ON Products.CategoryID = Categories.CategoryID //Lists products' names and their Categories

#[3 points] JOIN data using three or more tables

SELECT ProductName, CategoryName FROM [Products]
JOIN Categories, Suppliers
    ON Products.CategoryID = Categories.CategoryID //Strange output.

SELECT ProductName, CategoryName FROM [Products]
JOIN Categories, Suppliers
    ON Products.CategoryID = Categories.CategoryID
    ON Products.SupplierID = Suppliers.SupplierID //Error

SELECT ProductName, CategoryName FROM [Products]
JOIN Categories
    ON Products.CategoryID = Categories.CategoryID
JOIN Suppliers
    ON Products.SupplierID = Suppliers.SupplierID //Works, but should probably include an actual column from Suppliers table...

SELECT ProductName, CategoryName, SupplierName, ContactName FROM [Products]
JOIN Categories
    ON Products.CategoryID = Categories.CategoryID
JOIN Suppliers
    ON Products.SupplierID = Suppliers.SupplierID //A list of products, with their business category, Supplier, and contact for that supplier listed.
#LEFT JOIN (any different from LEFT OUTER JOIN?) NOT THAT I KNOW. Tables appear identical.

//This would probably be more obvious in tables with more nulls.

SELECT OrderID, LastName, FirstName
FROM Orders o
LEFT JOIN Employees e
ON e.EmployeeID = o.EmployeeID; //Last name and first name of each employee who made an order. Notably, we omit EmployeeID as a column because that data isn't actually visually interesting but merely useful as a correlation between the joined tables.

#RIGHT JOIN (any different from RIGHT OUTER JOIN?) <-- Not supported by w3schools' site. Please see below.

// For this section I used nearly the same query as above, with slight massaging. Again, I think the differences in these might be revealed better in a dataset with more gaps, nulls, or similar things that ensure some non-correlation between IDs.

#FULL JOIN (any different from FULL OUTER JOIN?) <-- Not supported by w3schools' site. Please see below.

SELECT OrderDate,ShipperID FROM Orders o
    LEFT JOIN Employees e
    ON e.EmployeeID = o.EmployeeID
  UNION
SELECT OrderDate,ShipperID FROM Orders o
    RIGHT JOIN Employees e
   ON e.EmployeeID = o.EmployeeID //Doesn't run because RIGHT JOIN unsupported.

SELECT OrderDate,ShipperID FROM Orders o
   LEFT JOIN Employees e
   ON e.EmployeeID = o.EmployeeID
 UNION
SELECT OrderDate,ShipperID FROM Employees e
   LEFT JOIN Orders o
  ON e.EmployeeID = o.EmployeeID //Runs. Is actually different from either half of the union. So that's nice. Downside, definitely starts with a row of "null, null" that I don't know how to account for

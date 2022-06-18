# The first submission => 309ms, 0mb
# Write your MySQL query statement below
SELECT
    Person.firstName,
    Person.lastName,
    Address.city,
    Address.state
FROM Person
LEFT JOIN Address
ON Person.personId = Address.personId
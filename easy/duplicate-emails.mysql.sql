# The first submission -> 298ms, 0mb
# Write your MySQL query statement below
SELECT
    email AS Email
FROM (
    SELECT
        sum(1) AS count,
        email
    FROM Person
    GROUP BY email
) AS PersonEmail
WHERE
    PersonEmail.count > 1
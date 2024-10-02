""" 
Solution 1
limit = 1000
sum = int(0)

for x in range (1, limit):
    if (x % 3 == 0 or x % 5 == 0):
        sum += x
    
print(sum)
print(type(sum))
"""

limit = 1000

result = sum(filter(lambda x: x % 3 == 0 or x % 5 == 0, range(1, limit)))

print(result)
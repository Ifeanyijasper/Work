import random
joe = random.Random()
numbers = []
for _ in range(101):
    num = joe.randrange(1000)
    numbers.append(num)

tot = sum(numbers)
print(tot)

tot = 0
for _ in range(101):
    num = joe.randrange(1000)
    tot += num
print(tot)
